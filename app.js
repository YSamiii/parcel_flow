
const I18N={
  zh:{
    home:"首页",orders:"购物",shipping:"集运",pickup:"待取",settings:"我的",
    inTransit:"运输中",toPickup:"待取货",ordered:"已下单",addOrder:"新增购物",
    seller:"卖家",product:"商品名称",price:"价格",currency:"币种",status:"当前状态",
    pickupLocation:"取货地址",useDefault:"使用卖家默认地址",customAddress:"本次临时地址",
    save:"保存",cancel:"取消",sellers:"卖家管理",addSeller:"添加卖家",sellerName:"卖家名称",
    defaultPickup:"默认取货地址",appearance:"外观",language:"语言",palette:"配色",
    followSystem:"跟随系统",light:"浅色",dark:"深色",zh:"简体中文",en:"English",
    cream:"奶油",dopamine:"多巴胺",macaron:"马卡龙",mono:"极简黑白",
    noSeller:"尚未添加卖家",notes:"备注",shippingBatch:"集运批次",shippingMode:"运输方式",
    direct:"普通/团购取货",forwarding:"集运",allOrders:"全部购物",add:"添加",delete:"删除",
    dashboard:"在途包裹",readyPickup:"待取",groupByStatus:"按状态查看",
    awaitingPickup:"待取货",awaitingLocalDelivery:"待送取货点",train:"火车",
    sailed:"已开船 / 已发货",awaitingShip:"待开船",awaitingPack:"待打包",
    warehoused:"已入库",notWarehoused:"未入库",orderPlaced:"已下单",pickedUp:"已取",
    arrivedPort:"到港",customStatus:"自定义",timeline:"物流时间线",
    noOrders:"还没有购物记录",sellerHint:"卖家由你自己添加，App 不预置任何名称。",
    tempDoesNotChange:"临时地址只影响这笔购物，不修改卖家默认地址。",backup:"备份与恢复",exportBackup:"导出备份",importBackup:"导入备份",backupHint:"导出完整购物、卖家和设置数据；导入会覆盖当前数据。",importSuccess:"备份导入成功",invalidBackup:"备份文件无效",confirmImport:"导入备份会覆盖当前 App 数据，是否继续？"
  },
  en:{
    home:"Home",orders:"Orders",shipping:"Shipping",pickup:"Pickup",settings:"Me",
    inTransit:"In transit",toPickup:"Ready",ordered:"Ordered",addOrder:"New Purchase",
    seller:"Seller",product:"Item",price:"Price",currency:"Currency",status:"Status",
    pickupLocation:"Pickup address",useDefault:"Use seller default",customAddress:"Temporary address",
    save:"Save",cancel:"Cancel",sellers:"Sellers",addSeller:"Add seller",sellerName:"Seller name",
    defaultPickup:"Default pickup address",appearance:"Appearance",language:"Language",palette:"Color theme",
    followSystem:"Follow system",light:"Light",dark:"Dark",zh:"简体中文",en:"English",
    cream:"Cream",dopamine:"Dopamine",macaron:"Macaron",mono:"Minimal",
    noSeller:"No sellers yet",notes:"Notes",shippingBatch:"Forwarding batch",shippingMode:"Shipping mode",
    direct:"Direct / group pickup",forwarding:"Forwarding",allOrders:"All purchases",add:"Add",delete:"Delete",
    dashboard:"Parcels in progress",readyPickup:"Ready for pickup",groupByStatus:"By status",
    awaitingPickup:"Ready for pickup",awaitingLocalDelivery:"Waiting for pickup-point delivery",train:"On train",
    sailed:"Sailed / Shipped",awaitingShip:"Waiting to sail",awaitingPack:"Waiting to pack",
    warehoused:"In warehouse",notWarehoused:"Not in warehouse",orderPlaced:"Ordered",pickedUp:"Picked up",
    arrivedPort:"Arrived at port",customStatus:"Custom",timeline:"Shipping timeline",
    noOrders:"No purchases yet",sellerHint:"You add your own sellers. The app does not prefill any names.",
    tempDoesNotChange:"A temporary address only applies to this purchase.",backup:"Backup & Restore",exportBackup:"Export backup",importBackup:"Import backup",backupHint:"Export all purchases, sellers and settings. Importing replaces current app data.",importSuccess:"Backup imported successfully",invalidBackup:"Invalid backup file",confirmImport:"Importing a backup will replace current app data. Continue?"
  }
};
const STATUS=["awaitingPickup","awaitingLocalDelivery","train","sailed","arrivedPort","awaitingShip","awaitingPack","warehoused","notWarehoused","orderPlaced","pickedUp"];

const seed={
  settings:{language:"system",appearance:"system",palette:"cream"},
  sellers:[],
  orders:[
    {id:crypto.randomUUID(),product:"Mideer 拼图",sellerId:null,price:"168",currency:"CNY",status:"train",mode:"forwarding",address:"",batch:"SEA-0826-03",notes:"示例记录，可删除"},
    {id:crypto.randomUUID(),product:"秋季外套",sellerId:null,price:"42.53",currency:"CAD",status:"orderPlaced",mode:"direct",address:"",batch:"",notes:"示例记录，可删除"}
  ]
};

let db=JSON.parse(localStorage.getItem("parcelflow-db")||"null")||seed;
let tab="home";
let modal=null;

const save=()=>localStorage.setItem("parcelflow-db",JSON.stringify(db));
const lang=()=>{
  if(db.settings.language==="zh"||db.settings.language==="en") return db.settings.language;
  return navigator.language.toLowerCase().startsWith("zh")?"zh":"en";
}
const t=k=>I18N[lang()][k]||k;

function applyTheme(){
  let mode=db.settings.appearance;
  if(mode==="system") mode=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  document.documentElement.dataset.theme=mode;
  document.documentElement.dataset.palette=db.settings.palette;
  document.documentElement.lang=lang()==="zh"?"zh-CN":"en";
}
applyTheme();
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>{if(db.settings.appearance==="system"){applyTheme();render()}});

function sellerName(id){return db.sellers.find(s=>s.id===id)?.name||""}
function statusLabel(s){return t(s)}
function header(title,sub=""){
  return `<div class="topbar"><div class="brand"><img src="icon-192.png"/><div>${title}<div class="sub">${sub}</div></div></div></div>`;
}
function nav(){
  const items=[["home","⌂"],["orders","▤"],["shipping","⇄"],["pickup","✓"],["settings","⚙"]];
  return `<div class="nav">${items.map(([k,i])=>`<button data-tab="${k}" class="${tab===k?"active":""}"><i>${i}</i>${t(k)}</button>`).join("")}</div>`;
}
function orderHtml(o){
  const sn=sellerName(o.sellerId);
  return `<div class="order" data-order="${o.id}">
    <div><div class="order-title">${o.product}</div>
    <div class="meta">${sn?sn+" · ":""}${statusLabel(o.status)}${o.batch?" · "+o.batch:""}<br>${o.notes||""}</div></div>
    <div class="price">${o.price?`${o.currency} ${o.price}`:""}</div>
  </div>`;
}
function home(){
  const active=db.orders.filter(o=>o.status!=="pickedUp");
  const ready=db.orders.filter(o=>o.status==="awaitingPickup").length;
  const transit=db.orders.filter(o=>["train","sailed","arrivedPort","awaitingShip","awaitingPack","warehoused","notWarehoused","awaitingLocalDelivery"].includes(o.status)).length;
  const ordered=db.orders.filter(o=>o.status==="orderPlaced").length;
  return header("ParcelFlow",t("dashboard"))+`<div class="content">
    <div class="summary">
      <div class="stat"><b>${ready}</b><span>${t("toPickup")}</span></div>
      <div class="stat"><b>${transit}</b><span>${t("inTransit")}</span></div>
      <div class="stat"><b>${ordered}</b><span>${t("ordered")}</span></div>
    </div>
    <div class="section-title">${t("groupByStatus")}</div>
    ${STATUS.filter(s=>s!=="pickedUp").map(s=>{
      const arr=active.filter(o=>o.status===s); if(!arr.length)return "";
      return `<div class="group"><div class="group-head"><span>${statusLabel(s)}</span><span class="badge">${arr.length}</span></div>${arr.map(orderHtml).join("")}</div>`
    }).join("")}
    ${!active.length?`<div class="empty">${t("noOrders")}</div>`:""}
  </div><button class="fab" data-action="new-order">+</button>`;
}
function orders(){
  return header(t("allOrders"))+`<div class="content">${db.orders.map(orderHtml).join("")||`<div class="empty">${t("noOrders")}</div>`}</div><button class="fab" data-action="new-order">+</button>`;
}
function shipping(){
  const arr=db.orders.filter(o=>o.mode==="forwarding"&&o.status!=="pickedUp");
  const batches=[...new Set(arr.map(o=>o.batch||"—"))];
  return header(t("shipping"),t("shippingBatch"))+`<div class="content">${batches.map(b=>{
    const items=arr.filter(o=>(o.batch||"—")===b);
    return `<div class="group"><div class="group-head"><span>${b}</span><span class="badge">${items.length}</span></div>${items.map(orderHtml).join("")}</div>`
  }).join("")||`<div class="empty">${t("noOrders")}</div>`}</div>`;
}
function pickup(){
  const arr=db.orders.filter(o=>o.status==="awaitingPickup");
  const groups={};
  arr.forEach(o=>{const a=o.address||db.sellers.find(s=>s.id===o.sellerId)?.defaultPickup||"—";(groups[a]??=[]).push(o)});
  return header(t("pickup"),t("readyPickup"))+`<div class="content">${Object.entries(groups).map(([a,items])=>`
    <div class="group"><div class="group-head"><span>${a}</span><span class="badge">${items.length}</span></div>${items.map(orderHtml).join("")}</div>`).join("")||`<div class="empty">${t("noOrders")}</div>`}</div>`;
}
function settings(){
  return header(t("settings"))+`<div class="content">
    <div class="card">
      <div class="list-row"><div><b>${t("sellers")}</b><div class="small">${t("sellerHint")}</div></div><button class="secondary" data-action="sellers">${t("add")}</button></div>
      <div class="list-row"><div><b>${t("language")}</b></div>
        <select id="language" style="max-width:170px"><option value="system">${t("followSystem")}</option><option value="zh">${t("zh")}</option><option value="en">${t("en")}</option></select></div>
      <div class="list-row"><div><b>${t("appearance")}</b></div>
        <select id="appearance" style="max-width:170px"><option value="system">${t("followSystem")}</option><option value="light">${t("light")}</option><option value="dark">${t("dark")}</option></select></div>
      <div class="list-row"><div><b>${t("palette")}</b></div>
        <select id="palette" style="max-width:170px"><option value="cream">${t("cream")}</option><option value="dopamine">${t("dopamine")}</option><option value="macaron">${t("macaron")}</option><option value="mono">${t("mono")}</option></select></div>
    </div>
    <div class="card"><div class="section-title" style="margin-top:0">${t("sellers")}</div>
      ${db.sellers.map(s=>`<div class="list-row"><div><b>${s.name}</b><div class="small">${s.defaultPickup||"—"}</div></div><button class="danger" data-delete-seller="${s.id}">${t("delete")}</button></div>`).join("")||`<div class="small">${t("noSeller")}</div>`}
    </div>

    <div class="card">
      <div class="section-title" style="margin-top:0">${t("backup")}</div>
      <div class="small" style="margin-bottom:12px">${t("backupHint")}</div>
      <div class="row">
        <button class="secondary" data-action="export-backup">${t("exportBackup")}</button>
        <button class="primary" data-action="import-backup">${t("importBackup")}</button>
      </div>
      <input id="backup-file" type="file" accept=".json,application/json" class="hidden">
    </div>
  </div>`;
}
function orderModal(editId=null){
  const o=editId?db.orders.find(x=>x.id===editId):{product:"",sellerId:"",price:"",currency:"CAD",status:"orderPlaced",mode:"direct",address:"",batch:"",notes:""};
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${t("addOrder")}</h2>
    <label>${t("product")}</label><input id="o-product" value="${esc(o.product)}">
    <label>${t("seller")}</label><select id="o-seller"><option value="">—</option>${db.sellers.map(s=>`<option value="${s.id}" ${o.sellerId===s.id?"selected":""}>${esc(s.name)}</option>`).join("")}</select>
    <div class="row"><div><label>${t("price")}</label><input id="o-price" inputmode="decimal" value="${esc(o.price)}"></div><div><label>${t("currency")}</label><select id="o-currency">${["CAD","CNY","USD"].map(c=>`<option ${o.currency===c?"selected":""}>${c}</option>`).join("")}</select></div></div>
    <label>${t("shippingMode")}</label><select id="o-mode"><option value="direct" ${o.mode==="direct"?"selected":""}>${t("direct")}</option><option value="forwarding" ${o.mode==="forwarding"?"selected":""}>${t("forwarding")}</option></select>
    <label>${t("status")}</label><select id="o-status">${STATUS.map(s=>`<option value="${s}" ${o.status===s?"selected":""}>${statusLabel(s)}</option>`).join("")}</select>
    <label>${t("shippingBatch")}</label><input id="o-batch" value="${esc(o.batch)}" placeholder="SEA-0826-03">
    <label>${t("pickupLocation")}</label><input id="o-address" value="${esc(o.address)}" placeholder="${t("useDefault")}">
    <div class="small" style="margin-top:5px">${t("tempDoesNotChange")}</div>
    <label>${t("notes")}</label><textarea id="o-notes">${esc(o.notes)}</textarea>
    <div class="row" style="margin-top:14px"><button class="secondary" data-action="close">${t("cancel")}</button><button class="primary" data-save-order="${editId||""}">${t("save")}</button></div>
  </div></div>`;
}
function sellerModal(){
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${t("addSeller")}</h2>
    <label>${t("sellerName")}</label><input id="s-name">
    <label>${t("defaultPickup")}</label><input id="s-address">
    <div class="row" style="margin-top:14px"><button class="secondary" data-action="close">${t("cancel")}</button><button class="primary" data-save-seller>${t("save")}</button></div>
  </div></div>`;
}
function detailModal(id){
  const o=db.orders.find(x=>x.id===id), sn=sellerName(o.sellerId);
  const idx=STATUS.indexOf(o.status);
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${esc(o.product)}</h2>
    <div class="card">
      <b>${sn||"—"}</b>
      <div class="small">${o.currency} ${o.price||"—"}${o.batch?" · "+o.batch:""}</div>
      <div class="small">${o.address||db.sellers.find(s=>s.id===o.sellerId)?.defaultPickup||""}</div>
    </div>

    <label>${t("status")}</label>
    <div class="row">
      <select id="detail-status">
        ${STATUS.map(s=>`<option value="${s}" ${o.status===s?"selected":""}>${statusLabel(s)}</option>`).join("")}
      </select>
      <button class="primary" data-update-status="${o.id}">${t("save")}</button>
    </div>

    <div class="section-title">${t("timeline")}</div>
    <div class="timeline">
      ${STATUS.slice(0,STATUS.indexOf("pickedUp")+1)
        .filter(s=>["orderPlaced","notWarehoused","warehoused","awaitingPack","awaitingShip","sailed","arrivedPort","train","awaitingLocalDelivery","awaitingPickup","pickedUp"].includes(s))
        .map(s=>`<div class="step ${STATUS.indexOf(s)<=idx?"done":""}" data-quick-status="${s}" data-order-id="${o.id}">
          <b>${statusLabel(s)}</b>
          ${o.status===s?`<span class="badge" style="margin-left:6px">${lang()==="zh"?"当前":"Current"}</span>`:""}
        </div>`).join("")}
    </div>
    <div class="small" style="margin:-4px 0 14px">
      ${lang()==="zh"?"可直接点时间线中的状态快速切换。":"Tap a timeline status to switch quickly."}
    </div>

    <div class="row">
      <button class="secondary" data-edit-order="${o.id}">${lang()==="zh"?"编辑详情":"Edit details"}</button>
      <button class="danger" data-delete-order="${o.id}">${t("delete")}</button>
    </div>
  </div></div>`;
}
function esc(v=""){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}

function exportBackup(){
  const payload={
    app:"ParcelFlow",
    version:3,
    exportedAt:new Date().toISOString(),
    data:db
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  const d=new Date();
  const pad=n=>String(n).padStart(2,"0");
  a.href=url;
  a.download=`ParcelFlow-backup-${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function isValidBackup(obj){
  const data=obj?.data||obj;
  return data &&
    typeof data==="object" &&
    data.settings && typeof data.settings==="object" &&
    Array.isArray(data.sellers) &&
    Array.isArray(data.orders);
}

function importBackupFile(file){
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const parsed=JSON.parse(reader.result);
      if(!isValidBackup(parsed)) throw new Error("invalid");
      if(!confirm(t("confirmImport"))) return;
      db=parsed.data||parsed;
      save();
      modal=null;
      render();
      setTimeout(()=>alert(t("importSuccess")),50);
    }catch(err){
      alert(t("invalidBackup"));
    }
  };
  reader.readAsText(file);
}

function render(){
  applyTheme();
  let body=tab==="home"?home():tab==="orders"?orders():tab==="shipping"?shipping():tab==="pickup"?pickup():settings();
  document.getElementById("app").innerHTML=body+nav()+(modal||"");
  if(tab==="settings"){
    language.value=db.settings.language; appearance.value=db.settings.appearance; palette.value=db.settings.palette;
  }
}
document.addEventListener("click",e=>{
  const tabBtn=e.target.closest("[data-tab]"); if(tabBtn){tab=tabBtn.dataset.tab;modal=null;render();return}
  const a=e.target.closest("[data-action]")?.dataset.action;
  if(a==="new-order"){modal=orderModal();render();return}
  if(a==="sellers"){modal=sellerModal();render();return}
  if(a==="export-backup"){exportBackup();return}
  if(a==="import-backup"){document.getElementById("backup-file")?.click();return}
  if(a==="close"){modal=null;render();return}
  const ord=e.target.closest("[data-order]"); if(ord){modal=detailModal(ord.dataset.order);render();return}
  const edit=e.target.closest("[data-edit-order]"); if(edit){modal=orderModal(edit.dataset.editOrder);render();return}
  const us=e.target.closest("[data-update-status]"); if(us){
    const o=db.orders.find(x=>x.id===us.dataset.updateStatus);
    if(o){
      o.status=document.getElementById("detail-status").value;
      save();
      modal=detailModal(o.id);
      render();
    }
    return;
  }
  const qs=e.target.closest("[data-quick-status]"); if(qs){
    const o=db.orders.find(x=>x.id===qs.dataset.orderId);
    if(o){
      o.status=qs.dataset.quickStatus;
      save();
      modal=detailModal(o.id);
      render();
    }
    return;
  }
  const del=e.target.closest("[data-delete-order]"); if(del){db.orders=db.orders.filter(o=>o.id!==del.dataset.deleteOrder);save();modal=null;render();return}
  const ds=e.target.closest("[data-delete-seller]"); if(ds){db.sellers=db.sellers.filter(s=>s.id!==ds.dataset.deleteSeller);save();render();return}
  const saveSeller=e.target.closest("[data-save-seller]"); if(saveSeller){
    const name=document.getElementById("s-name").value.trim(); if(!name)return;
    db.sellers.push({id:crypto.randomUUID(),name,defaultPickup:document.getElementById("s-address").value.trim()});
    save();modal=null;render();return;
  }
  const so=e.target.closest("[data-save-order]"); if(so){
    const id=so.dataset.saveOrder;
    const data={
      product:document.getElementById("o-product").value.trim(),
      sellerId:document.getElementById("o-seller").value||null,
      price:document.getElementById("o-price").value.trim(),
      currency:document.getElementById("o-currency").value,
      mode:document.getElementById("o-mode").value,
      status:document.getElementById("o-status").value,
      batch:document.getElementById("o-batch").value.trim(),
      address:document.getElementById("o-address").value.trim(),
      notes:document.getElementById("o-notes").value.trim()
    };
    if(!data.product)return;
    if(id){Object.assign(db.orders.find(o=>o.id===id),data)} else db.orders.unshift({id:crypto.randomUUID(),...data});
    save();modal=null;render();return;
  }
});
document.addEventListener("change",e=>{
  if(e.target.id==="backup-file"){
    importBackupFile(e.target.files?.[0]);
    e.target.value="";
    return;
  }
  if(!["language","appearance","palette"].includes(e.target.id))return;
  db.settings[e.target.id]=e.target.value;save();render();
});
render();
