
const I18N={
  zh:{
    home:"首页",orders:"购物",packages:"包裹",pickup:"待取",settings:"我的",
    dashboard:"购物与物流",needsAction:"待我处理",inTransit:"运输中",ordered:"已下单",recurring:"自动订购",
    byStatus:"按状态查看",newPurchase:"新增购物",item:"商品名称",seller:"卖家",price:"价格",currency:"币种",
    purchaseType:"购买方式",deliveryMode:"配送方式",finalDelivery:"最终交付",status:"当前状态",
    groupBuy:"团购 / 私域",online:"普通网购",autoOrder:"自动订购",other:"其他",
    homeDelivery:"送货上门",pickupPoint:"到取货点自取",forwarding:"集运",noShipping:"无物流 / 直接领取",
    pickupFinal:"取货点",homeFinal:"送货上门",batch:"集运批次",pickupAddress:"取货地址",
    useDefault:"留空则使用卖家默认取货地址",temporaryAddress:"本次临时地址",notes:"备注",save:"保存",cancel:"取消",
    sellers:"卖家管理",addSeller:"添加卖家",sellerName:"卖家名称",defaultPickup:"默认取货地址",
    language:"语言",appearance:"外观",palette:"配色",followSystem:"跟随系统",light:"浅色",dark:"深色",
    cream:"奶油",dopamine:"多巴胺",macaron:"马卡龙",mono:"极简黑白",zh:"简体中文",en:"English",
    backup:"备份与恢复",exportBackup:"导出备份",importBackup:"导入备份",
    backupHint:"导出完整购物、卖家、自动订购和设置数据；导入会覆盖当前数据。",
    confirmImport:"导入备份会覆盖当前 App 数据，是否继续？",importSuccess:"备份导入成功",invalidBackup:"备份文件无效",
    noOrders:"还没有购物记录",noSeller:"尚未添加卖家",sellerHint:"卖家由你自己添加，App 不预置任何名称。",
    editDetails:"编辑详情",delete:"删除",timeline:"物流时间线",current:"当前",quickSwitch:"点击时间线中的状态可快速切换。",statusOrder:"状态顺序",forwardOrder:"正序",reverseOrder:"倒序",autoCalcNext:"根据上次下单日期和频率自动计算",manualOverride:"手动修改下次日期",nextDateHint:"填写上次下单日期和频率后，会自动计算下次下单日期。",createLastOrderRecord:"保存时同步生成上次下单的购物记录",lastOrderRecordHint:"例如上次下单为 8 月 17 日，保存后会在购物记录中生成一笔 8 月 17 日的实际订单；下一次仍按频率等待到期。",
    recurringOrders:"自动订购计划",addRecurring:"添加自动订购",frequency:"频率",nextOrder:"下次下单",
    everyWeeks:"每几周",active:"启用",inactive:"停用",deliveryToHome:"默认送货上门",
    packageFilter:"包裹类型",all:"全部",normalParcel:"普通快递",forwardingParcel:"集运",
    pickupReady:"待取货",deliveryIssue:"配送异常",awaitingPayment:"待付款",
    pendingPayment:"待付款",orderPlaced:"已下单",paid:"已付款",awaitingShip:"待发货",
    shipped:"已发货",inTransitStatus:"运输中",outForDelivery:"派送中",delivered:"已送达",
    notWarehoused:"未入库",warehoused:"已入库",awaitingPack:"待打包",awaitingSail:"待开船",
    sailed:"已开船",atSea:"海运中",arrivedPort:"到港",customs:"清关中",train:"火车运输中",
    localWarehouse:"到达本地仓",awaitingLocalDelivery:"待送取货点",awaitingPickup:"已到取货点 / 待取",
    pickedUp:"已取",waitingPickup:"待领取",collected:"已领取",deliveryFailed:"配送失败",
    refunded:"已退款",cancelled:"已取消",shippingMode:"运输方式",orderStatus:"订单状态",
    logisticsStatus:"物流状态",recurringHint:"到期后会在你打开或刷新 App 时自动生成一笔实际购物记录，并自动推进到下一次下单日期。由于这是本地 PWA，App 完全关闭时不会在后台自行运行。",
    tempDoesNotChange:"临时地址只影响这笔购物，不修改卖家默认地址。",editSeller:"修改卖家",scheduleType:"订购频率",everyDays:"每 X 天",everyMonths:"每 X 个月",intervalValue:"间隔",nextAutoOrder:"下次自动下单日期",lastOrder:"上次下单日期",autoCreate:"到期时自动生成购物记录",recurringNotes:"订购备注"
  },
  en:{
    home:"Home",orders:"Orders",packages:"Packages",pickup:"Pickup",settings:"Me",
    dashboard:"Shopping & Logistics",needsAction:"Needs action",inTransit:"In transit",ordered:"Ordered",recurring:"Recurring",
    byStatus:"By status",newPurchase:"New purchase",item:"Item",seller:"Seller",price:"Price",currency:"Currency",
    purchaseType:"Purchase type",deliveryMode:"Delivery method",finalDelivery:"Final delivery",status:"Current status",
    groupBuy:"Group buy / private seller",online:"Online order",autoOrder:"Recurring order",other:"Other",
    homeDelivery:"Home delivery",pickupPoint:"Pickup point",forwarding:"Forwarding",noShipping:"No shipping / direct pickup",
    pickupFinal:"Pickup point",homeFinal:"Home delivery",batch:"Forwarding batch",pickupAddress:"Pickup address",
    useDefault:"Leave blank to use seller default",temporaryAddress:"Temporary address",notes:"Notes",save:"Save",cancel:"Cancel",
    sellers:"Sellers",addSeller:"Add seller",sellerName:"Seller name",defaultPickup:"Default pickup address",
    language:"Language",appearance:"Appearance",palette:"Color theme",followSystem:"Follow system",light:"Light",dark:"Dark",
    cream:"Cream",dopamine:"Dopamine",macaron:"Macaron",mono:"Minimal",zh:"简体中文",en:"English",
    backup:"Backup & Restore",exportBackup:"Export backup",importBackup:"Import backup",
    backupHint:"Export purchases, sellers, recurring plans and settings. Importing replaces current data.",
    confirmImport:"Importing a backup will replace current app data. Continue?",importSuccess:"Backup imported",invalidBackup:"Invalid backup file",
    noOrders:"No purchases yet",noSeller:"No sellers yet",sellerHint:"You add your own sellers. The app does not prefill any names.",
    editDetails:"Edit details",delete:"Delete",timeline:"Shipping timeline",current:"Current",quickSwitch:"Tap a timeline status to switch quickly.",statusOrder:"Status order",forwardOrder:"Forward",reverseOrder:"Reverse",autoCalcNext:"Auto-calculate from last order + frequency",manualOverride:"Manually override next date",nextDateHint:"Enter the last order date and frequency to calculate the next order date automatically.",createLastOrderRecord:"Create a purchase record for the last order date",lastOrderRecordHint:"For example, if the last order was Aug 17, saving creates that actual Aug 17 purchase record. The next order still waits until its due date.",
    recurringOrders:"Recurring orders",addRecurring:"Add recurring",frequency:"Frequency",nextOrder:"Next order",
    everyWeeks:"Every X weeks",active:"Active",inactive:"Inactive",deliveryToHome:"Default home delivery",
    packageFilter:"Package type",all:"All",normalParcel:"Normal parcel",forwardingParcel:"Forwarding",
    pickupReady:"Ready for pickup",deliveryIssue:"Delivery issue",awaitingPayment:"Awaiting payment",
    pendingPayment:"Awaiting payment",orderPlaced:"Ordered",paid:"Paid",awaitingShip:"Waiting to ship",
    shipped:"Shipped",inTransitStatus:"In transit",outForDelivery:"Out for delivery",delivered:"Delivered",
    notWarehoused:"Not in warehouse",warehoused:"In warehouse",awaitingPack:"Waiting to pack",awaitingSail:"Waiting to sail",
    sailed:"Sailed",atSea:"At sea",arrivedPort:"Arrived at port",customs:"Customs",train:"On train",
    localWarehouse:"Local warehouse",awaitingLocalDelivery:"Waiting for pickup-point delivery",awaitingPickup:"Ready for pickup",
    pickedUp:"Picked up",waitingPickup:"Waiting to collect",collected:"Collected",deliveryFailed:"Delivery failed",
    refunded:"Refunded",cancelled:"Cancelled",shippingMode:"Shipping method",orderStatus:"Order status",
    logisticsStatus:"Logistics status",recurringHint:"When due, a purchase is generated automatically the next time you open or refresh the app, then the next order date advances. This local PWA does not run while fully closed.",
    tempDoesNotChange:"A temporary address only applies to this purchase.",editSeller:"Edit seller",scheduleType:"Order frequency",everyDays:"Every X days",everyMonths:"Every X months",intervalValue:"Interval",nextAutoOrder:"Next automatic order date",lastOrder:"Last order date",autoCreate:"Automatically create a purchase when due",recurringNotes:"Recurring notes"
  }
};

const FLOW={
  homeDelivery:["orderPlaced","awaitingShip","shipped","inTransitStatus","outForDelivery","delivered"],
  pickupPoint:["orderPlaced","awaitingShip","shipped","awaitingLocalDelivery","awaitingPickup","pickedUp"],
  forwardingPickup:["orderPlaced","notWarehoused","warehoused","awaitingPack","awaitingSail","sailed","atSea","arrivedPort","customs","train","localWarehouse","awaitingLocalDelivery","awaitingPickup","pickedUp"],
  forwardingHome:["orderPlaced","notWarehoused","warehoused","awaitingPack","awaitingSail","sailed","atSea","arrivedPort","customs","train","localWarehouse","outForDelivery","delivered"],
  noShipping:["orderPlaced","waitingPickup","collected"]
};

const seed={
  settings:{language:"system",appearance:"system",palette:"cream",statusOrder:"forward"},
  sellers:[],
  recurring:[],
  orders:[
    {id:crypto.randomUUID(),product:"Mideer 拼图玩具",sellerId:null,price:"168",currency:"CNY",purchaseType:"online",deliveryMode:"forwarding",finalDelivery:"pickup",status:"train",batch:"SEA-0826-03",address:"",notes:"示例记录，可删除"},
    {id:crypto.randomUUID(),product:"秋季外套",sellerId:null,price:"42.53",currency:"CAD",purchaseType:"groupBuy",deliveryMode:"pickupPoint",finalDelivery:"pickup",status:"orderPlaced",batch:"",address:"",notes:"示例记录，可删除"},
    {id:crypto.randomUUID(),product:"洗面奶",sellerId:null,price:"28.99",currency:"CAD",purchaseType:"online",deliveryMode:"homeDelivery",finalDelivery:"home",status:"outForDelivery",batch:"",address:"",notes:"示例：网购送货上门"}
  ]
};

let db=JSON.parse(localStorage.getItem("parcelflow-db")||"null")||seed;
db.settings ||= seed.settings;
db.settings.statusOrder ||= "forward";
db.sellers ||= [];
db.orders ||= [];
db.recurring ||= [];
db.recurring.forEach(r=>{
  r.scheduleType ||= "weeks";
  r.intervalValue ||= r.everyWeeks || "1";
  if(r.manualNext===undefined) r.manualNext=false;
  if(r.createLastRecord===undefined) r.createLastRecord=true;
});
let tab="home";
let modal=null;
let packageFilter="all";

const save=()=>localStorage.setItem("parcelflow-db",JSON.stringify(db));
const lang=()=>{
  if(db.settings.language==="zh"||db.settings.language==="en") return db.settings.language;
  return navigator.language.toLowerCase().startsWith("zh")?"zh":"en";
};
const t=k=>I18N[lang()][k]||k;
const esc=(v="")=>String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const sellerName=id=>db.sellers.find(s=>s.id===id)?.name||"";

function applyTheme(){
  let mode=db.settings.appearance;
  if(mode==="system") mode=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  document.documentElement.dataset.theme=mode;
  document.documentElement.dataset.palette=db.settings.palette;
  document.documentElement.lang=lang()==="zh"?"zh-CN":"en";
}
applyTheme();
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>{if(db.settings.appearance==="system"){applyTheme();render()}});

function flowFor(o){
  if(o.deliveryMode==="forwarding") return o.finalDelivery==="home"?FLOW.forwardingHome:FLOW.forwardingPickup;
  return FLOW[o.deliveryMode]||FLOW.pickupPoint;
}
function completed(o){return ["delivered","pickedUp","collected","cancelled","refunded"].includes(o.status)}
function transit(o){return ["shipped","inTransitStatus","outForDelivery","notWarehoused","warehoused","awaitingPack","awaitingSail","sailed","atSea","arrivedPort","customs","train","localWarehouse","awaitingLocalDelivery","awaitingPickup"].includes(o.status)}
function header(title,sub=""){return `<div class="topbar"><div class="brand"><img src="icon-192.png"/><div>${title}<div class="sub">${sub}</div></div></div></div>`}
function nav(){
  const items=[["home","⌂"],["orders","▤"],["packages","⇄"],["pickup","✓"],["settings","⚙"]];
  return `<div class="nav">${items.map(([k,i])=>`<button data-tab="${k}" class="${tab===k?"active":""}"><i>${i}</i>${t(k)}</button>`).join("")}</div>`;
}
function orderHtml(o){
  const sn=sellerName(o.sellerId);
  const secondary=o.deliveryMode==="homeDelivery"?t("homeDelivery"):o.deliveryMode==="pickupPoint"?t("pickupPoint"):o.deliveryMode==="forwarding"?t("forwarding"):t("noShipping");
  return `<div class="order" data-order="${o.id}">
    <div><div class="order-title">${esc(o.product)}</div>
    <div class="meta">${sn?esc(sn)+" · ":""}${t(o.status)} · ${secondary}${o.batch?" · "+esc(o.batch):""}<br>${esc(o.notes||"")}</div></div>
    <div class="price">${o.price?`${o.currency} ${esc(o.price)}`:""}</div>
  </div>`;
}
function groupedStatus(orders){
  // Logical forward order: from early purchase/fulfillment stages to completion.
  // Reverse simply flips this sequence.
  const forwardStatusOrder=[
    "pendingPayment","orderPlaced","paid","awaitingShip","shipped","inTransitStatus",
    "notWarehoused","warehoused","awaitingPack","awaitingSail","sailed","atSea",
    "arrivedPort","customs","train","localWarehouse","awaitingLocalDelivery",
    "outForDelivery","awaitingPickup","waitingPickup","deliveryFailed",
    "delivered","pickedUp","collected","refunded","cancelled"
  ];
  const present=[...new Set(orders.map(o=>o.status).filter(Boolean))];
  let known=forwardStatusOrder.filter(s=>present.includes(s));
  if(db.settings.statusOrder==="reverse") known=[...known].reverse();

  // Unknown/custom statuses stay visible at the end so records never disappear.
  const unknown=present.filter(s=>!forwardStatusOrder.includes(s));
  const allStatuses=[...known,...unknown];

  return allStatuses.map(s=>{
    const arr=orders.filter(o=>o.status===s);
    if(!arr.length)return "";
    return `<div class="group"><div class="group-head"><span>${t(s)}</span><span class="badge">${arr.length}</span></div>${arr.map(orderHtml).join("")}</div>`;
  }).join("");
}
function home(){
  const active=db.orders.filter(o=>!completed(o));
  const needs=db.orders.filter(o=>["awaitingPickup","deliveryFailed","pendingPayment"].includes(o.status)).length;
  const trans=db.orders.filter(o=>transit(o)).length;
  const ordered=db.orders.filter(o=>["orderPlaced","awaitingShip"].includes(o.status)).length;
  const recurring=db.recurring.filter(r=>r.active!==false).length;
  return header("ParcelFlow",t("dashboard"))+`<div class="content">
    <div class="summary" style="grid-template-columns:repeat(2,1fr)">
      <div class="stat"><b>${needs}</b><span>${t("needsAction")}</span></div>
      <div class="stat"><b>${trans}</b><span>${t("inTransit")}</span></div>
      <div class="stat"><b>${ordered}</b><span>${t("ordered")}</span></div>
      <div class="stat"><b>${recurring}</b><span>${t("recurring")}</span></div>
    </div>
    <div class="section-title">${t("byStatus")}</div>
    <div class="segment" style="margin-bottom:12px">
      <button class="${db.settings.statusOrder==="forward"?"on":""}" data-status-order="forward">${t("forwardOrder")}</button>
      <button class="${db.settings.statusOrder==="reverse"?"on":""}" data-status-order="reverse">${t("reverseOrder")}</button>
    </div>
    ${groupedStatus(active)||`<div class="empty">${t("noOrders")}</div>`}
  </div><button class="fab" data-action="new-order">+</button>`;
}
function orders(){
  return header(t("orders"))+`<div class="content">
    ${db.orders.map(orderHtml).join("")||`<div class="empty">${t("noOrders")}</div>`}
    <div class="section-title">${t("recurringOrders")}</div>
    <div class="card">
      <div class="small" style="margin-bottom:10px">${t("recurringHint")}</div>
      ${db.recurring.map(r=>{const st=r.scheduleType||"weeks",iv=r.intervalValue||r.everyWeeks||"?";const unit=st==="days"?(lang()==="zh"?"天":"days"):st==="months"?(lang()==="zh"?"个月":"months"):(lang()==="zh"?"周":"weeks");return `<div class="list-row" data-recurring="${r.id}"><div><b>${esc(r.product)}</b><div class="small">${sellerName(r.sellerId)||"—"} · ${lang()==="zh"?"每":"Every "}${iv} ${unit} · ${t("nextOrder")}: ${r.nextOrder||"—"}</div></div><span class="badge">${r.active===false?t("inactive"):t("active")}</span></div>`;}).join("")||`<div class="small">—</div>`}
      <button class="secondary" style="margin-top:12px;width:100%" data-action="new-recurring">${t("addRecurring")}</button>
    </div>
  </div><button class="fab" data-action="new-order">+</button>`;
}
function packages(){
  let arr=db.orders.filter(o=>!completed(o) && o.deliveryMode!=="noShipping");
  if(packageFilter==="normal") arr=arr.filter(o=>o.deliveryMode!=="forwarding");
  if(packageFilter==="forwarding") arr=arr.filter(o=>o.deliveryMode==="forwarding");
  return header(t("packages"),t("inTransit"))+`<div class="content">
    <div class="segment">
      <button class="${packageFilter==="all"?"on":""}" data-package-filter="all">${t("all")}</button>
      <button class="${packageFilter==="normal"?"on":""}" data-package-filter="normal">${t("normalParcel")}</button>
      <button class="${packageFilter==="forwarding"?"on":""}" data-package-filter="forwarding">${t("forwardingParcel")}</button>
    </div>
    <div class="segment" style="margin-top:10px">
      <button class="${db.settings.statusOrder==="forward"?"on":""}" data-status-order="forward">${t("forwardOrder")}</button>
      <button class="${db.settings.statusOrder==="reverse"?"on":""}" data-status-order="reverse">${t("reverseOrder")}</button>
    </div>
    ${groupedStatus(arr)||`<div class="empty">${t("noOrders")}</div>`}
  </div>`;
}
function pickup(){
  const arr=db.orders.filter(o=>["awaitingPickup","waitingPickup"].includes(o.status));
  const groups={};
  arr.forEach(o=>{
    const a=o.address||db.sellers.find(s=>s.id===o.sellerId)?.defaultPickup||"—";
    (groups[a]??=[]).push(o);
  });
  return header(t("pickup"),t("pickupReady"))+`<div class="content">
    ${Object.entries(groups).map(([a,items])=>`<div class="group"><div class="group-head"><span>${esc(a)}</span><span class="badge">${items.length}</span></div>${items.map(orderHtml).join("")}</div>`).join("")||`<div class="empty">${t("noOrders")}</div>`}
  </div>`;
}
function settings(){
  return header(t("settings"))+`<div class="content">
    <div class="card">
      <div class="list-row"><div><b>${t("sellers")}</b><div class="small">${t("sellerHint")}</div></div><button class="secondary" data-action="sellers">${t("addSeller")}</button></div>
      <div class="list-row"><b>${t("language")}</b><select id="language" style="max-width:170px"><option value="system">${t("followSystem")}</option><option value="zh">${t("zh")}</option><option value="en">${t("en")}</option></select></div>
      <div class="list-row"><b>${t("appearance")}</b><select id="appearance" style="max-width:170px"><option value="system">${t("followSystem")}</option><option value="light">${t("light")}</option><option value="dark">${t("dark")}</option></select></div>
      <div class="list-row"><b>${t("palette")}</b><select id="palette" style="max-width:170px"><option value="cream">${t("cream")}</option><option value="dopamine">${t("dopamine")}</option><option value="macaron">${t("macaron")}</option><option value="mono">${t("mono")}</option></select></div>
    </div>

    <div class="card"><div class="section-title" style="margin-top:0">${t("sellers")}</div>
      ${db.sellers.map(s=>`<div class="seller-edit-card" data-edit-seller="${s.id}">
        <div class="seller-main">
          <div class="seller-name">${esc(s.name)}</div>
          <div class="small">${esc(s.defaultPickup||"—")}</div>
        </div>
        <button class="seller-edit-btn" data-edit-seller="${s.id}" aria-label="${t("editSeller")}">✎ ${t("editSeller")}</button>
        <button class="seller-delete-btn" data-delete-seller="${s.id}" aria-label="${t("delete")}">🗑</button>
      </div>`).join("")||`<div class="small">${t("noSeller")}</div>`}
    </div>

    <div class="card">
      <div class="section-title" style="margin-top:0">${t("backup")}</div>
      <div class="small" style="margin-bottom:12px">${t("backupHint")}</div>
      <div class="row"><button class="secondary" data-action="export-backup">${t("exportBackup")}</button><button class="primary" data-action="import-backup">${t("importBackup")}</button></div>
      <input id="backup-file" type="file" accept=".json,application/json" class="hidden">
    </div>
  </div>`;
}
function purchaseTypeOptions(selected){
  return [["groupBuy","groupBuy"],["online","online"],["autoOrder","autoOrder"],["other","other"]].map(([v,k])=>`<option value="${v}" ${selected===v?"selected":""}>${t(k)}</option>`).join("");
}
function deliveryOptions(selected){
  return [["homeDelivery","homeDelivery"],["pickupPoint","pickupPoint"],["forwarding","forwarding"],["noShipping","noShipping"]].map(([v,k])=>`<option value="${v}" ${selected===v?"selected":""}>${t(k)}</option>`).join("");
}
function statusOptions(o){
  return flowFor(o).map(s=>`<option value="${s}" ${o.status===s?"selected":""}>${t(s)}</option>`).join("");
}
function orderModal(editId=null){
  const o=editId?db.orders.find(x=>x.id===editId):{product:"",sellerId:"",price:"",currency:"CAD",purchaseType:"online",deliveryMode:"homeDelivery",finalDelivery:"home",status:"orderPlaced",batch:"",address:"",notes:""};
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${t("newPurchase")}</h2>
    <label>${t("item")}</label><input id="o-product" value="${esc(o.product)}">
    <label>${t("seller")}</label><select id="o-seller"><option value="">—</option>${db.sellers.map(s=>`<option value="${s.id}" ${o.sellerId===s.id?"selected":""}>${esc(s.name)}</option>`).join("")}</select>
    <div class="row"><div><label>${t("price")}</label><input id="o-price" inputmode="decimal" value="${esc(o.price)}"></div><div><label>${t("currency")}</label><select id="o-currency">${["CAD","CNY","USD"].map(c=>`<option ${o.currency===c?"selected":""}>${c}</option>`).join("")}</select></div></div>
    <label>${t("purchaseType")}</label><select id="o-purchase-type">${purchaseTypeOptions(o.purchaseType)}</select>
    <label>${t("deliveryMode")}</label><select id="o-delivery">${deliveryOptions(o.deliveryMode)}</select>
    <div id="forwarding-fields" class="${o.deliveryMode==="forwarding"?"":"hidden"}">
      <label>${t("finalDelivery")}</label><select id="o-final"><option value="pickup" ${o.finalDelivery!=="home"?"selected":""}>${t("pickupFinal")}</option><option value="home" ${o.finalDelivery==="home"?"selected":""}>${t("homeFinal")}</option></select>
      <label>${t("batch")}</label><input id="o-batch" value="${esc(o.batch)}" placeholder="SEA-0826-03">
    </div>
    <label>${t("status")}</label><select id="o-status">${statusOptions(o)}</select>
    <label>${t("pickupAddress")}</label><input id="o-address" value="${esc(o.address)}" placeholder="${t("useDefault")}">
    <div class="small" style="margin-top:5px">${t("tempDoesNotChange")}</div>
    <label>${t("notes")}</label><textarea id="o-notes">${esc(o.notes)}</textarea>
    <div class="row" style="margin-top:14px"><button class="secondary" data-action="close">${t("cancel")}</button><button class="primary" data-save-order="${editId||""}">${t("save")}</button></div>
  </div></div>`;
}
function sellerModal(editId=null){
  const s=editId?db.sellers.find(x=>x.id===editId):{name:"",defaultPickup:""};
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${editId?t("editSeller"):t("addSeller")}</h2>
    <label>${t("sellerName")}</label><input id="s-name" value="${esc(s.name)}">
    <label>${t("defaultPickup")}</label><input id="s-address" value="${esc(s.defaultPickup||"")}">
    <div class="row" style="margin-top:14px"><button class="secondary" data-action="close">${t("cancel")}</button><button class="primary" data-save-seller="${editId||""}">${t("save")}</button></div>
  </div></div>`;
}
function recurringModal(editId=null){
  const r=editId?db.recurring.find(x=>x.id===editId):{
    product:"",sellerId:"",price:"",currency:"CAD",
    scheduleType:"weeks",intervalValue:"4",
    nextOrder:"",lastOrder:"",active:true,autoCreate:true,notes:"",manualNext:false
  };
  const scheduleType=r.scheduleType||"weeks";
  const intervalValue=r.intervalValue||r.everyWeeks||"4";
  const computedNext=(!r.manualNext && r.lastOrder)
    ? addIntervalToDate(r.lastOrder,scheduleType,intervalValue)
    : (r.nextOrder||"");
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${t("addRecurring")}</h2>
    <label>${t("item")}</label><input id="r-product" value="${esc(r.product)}">
    <label>${t("seller")}</label><select id="r-seller"><option value="">—</option>${db.sellers.map(s=>`<option value="${s.id}" ${r.sellerId===s.id?"selected":""}>${esc(s.name)}</option>`).join("")}</select>
    <div class="row">
      <div><label>${t("price")}</label><input id="r-price" value="${esc(r.price)}"></div>
      <div><label>${t("currency")}</label><select id="r-currency">${["CAD","CNY","USD"].map(c=>`<option ${r.currency===c?"selected":""}>${c}</option>`).join("")}</select></div>
    </div>

    <label>${t("scheduleType")}</label>
    <select id="r-schedule-type">
      <option value="days" ${scheduleType==="days"?"selected":""}>${t("everyDays")}</option>
      <option value="weeks" ${scheduleType==="weeks"?"selected":""}>${t("everyWeeks")}</option>
      <option value="months" ${scheduleType==="months"?"selected":""}>${t("everyMonths")}</option>
    </select>

    <label>${t("intervalValue")}</label>
    <input id="r-interval" inputmode="numeric" min="1" value="${esc(intervalValue)}">

    <label>${t("lastOrder")}</label>
    <input id="r-last" type="date" value="${esc(r.lastOrder||"")}">

    <label>${t("nextAutoOrder")}</label>
    <input id="r-next" type="date" value="${esc(computedNext)}" ${r.manualNext?"":"readonly"}>
    <div class="small" style="margin-top:5px">${t("nextDateHint")}</div>

    <label style="margin-top:10px">
      <input id="r-manual-next" type="checkbox" style="width:auto;margin-right:8px" ${r.manualNext?"checked":""}>
      ${t("manualOverride")}
    </label>

    <label>
      <input id="r-create-last-record" type="checkbox" style="width:auto;margin-right:8px" ${r.createLastRecord!==false?"checked":""}>
      ${t("createLastOrderRecord")}
    </label>
    <div class="small" style="margin-top:-6px;margin-bottom:8px">${t("lastOrderRecordHint")}</div>
    <label><input id="r-active" type="checkbox" style="width:auto;margin-right:8px" ${r.active!==false?"checked":""}>${t("active")}</label>
    <label><input id="r-auto-create" type="checkbox" style="width:auto;margin-right:8px" ${r.autoCreate!==false?"checked":""}>${t("autoCreate")}</label>

    <label>${t("recurringNotes")}</label>
    <textarea id="r-notes">${esc(r.notes||"")}</textarea>

    <div class="row" style="margin-top:14px"><button class="secondary" data-action="close">${t("cancel")}</button><button class="primary" data-save-recurring="${editId||""}">${t("save")}</button></div>
  </div></div>`;
}
function detailModal(id){
  const o=db.orders.find(x=>x.id===id), flow=flowFor(o), idx=flow.indexOf(o.status), sn=sellerName(o.sellerId);
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${esc(o.product)}</h2>
    <div class="card"><b>${sn||"—"}</b><div class="small">${o.currency} ${o.price||"—"} · ${t(o.purchaseType)} · ${t(o.deliveryMode)}</div>${o.address||db.sellers.find(s=>s.id===o.sellerId)?.defaultPickup?`<div class="small">${esc(o.address||db.sellers.find(s=>s.id===o.sellerId)?.defaultPickup)}</div>`:""}</div>
    <label>${t("status")}</label><div class="row"><select id="detail-status">${flow.map(s=>`<option value="${s}" ${o.status===s?"selected":""}>${t(s)}</option>`).join("")}</select><button class="primary" data-update-status="${o.id}">${t("save")}</button></div>
    <div class="section-title">${t("timeline")}</div>
    <div class="timeline">${flow.map((s,i)=>`<div class="step ${i<=idx?"done":""}" data-quick-status="${s}" data-order-id="${o.id}"><b>${t(s)}</b>${o.status===s?`<span class="badge" style="margin-left:6px">${t("current")}</span>`:""}</div>`).join("")}</div>
    <div class="small" style="margin:-4px 0 14px">${t("quickSwitch")}</div>
    <div class="row"><button class="secondary" data-edit-order="${o.id}">${t("editDetails")}</button><button class="danger" data-delete-order="${o.id}">${t("delete")}</button></div>
  </div></div>`;
}
function recurringDetailModal(id){
  const r=db.recurring.find(x=>x.id===id);
  const st=r.scheduleType||"weeks",iv=r.intervalValue||r.everyWeeks||"?";
  const unit=st==="days"?(lang()==="zh"?"天":"days"):st==="months"?(lang()==="zh"?"个月":"months"):(lang()==="zh"?"周":"weeks");
  return `<div class="modal"><div class="sheet"><button class="close" data-action="close">×</button><h2>${esc(r.product)}</h2>
    <div class="card"><b>${sellerName(r.sellerId)||"—"}</b><div class="small">${r.currency} ${r.price||"—"} · ${lang()==="zh"?"每":"Every "}${iv} ${unit}</div><div class="small">${t("lastOrder")}: ${r.lastOrder||"—"}</div><div class="small">${t("nextAutoOrder")}: ${r.nextOrder||"—"}</div><div class="small">${t("autoCreate")}: ${r.autoCreate===false?(lang()==="zh"?"否":"No"):(lang()==="zh"?"是":"Yes")}</div>${r.notes?`<div class="small" style="margin-top:6px">${esc(r.notes)}</div>`:""}</div>
    <div class="row"><button class="secondary" data-edit-recurring="${r.id}">${t("editDetails")}</button><button class="danger" data-delete-recurring="${r.id}">${t("delete")}</button></div>
  </div></div>`;
}
function exportBackup(){
  const payload={app:"ParcelFlow",version:5,exportedAt:new Date().toISOString(),data:db};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a"),d=new Date(),pad=n=>String(n).padStart(2,"0");
  a.href=url;a.download=`ParcelFlow-backup-${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}.json`;
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function isValidBackup(obj){const data=obj?.data||obj;return data&&typeof data==="object"&&data.settings&&Array.isArray(data.sellers)&&Array.isArray(data.orders)}
function importBackupFile(file){
  if(!file)return;const reader=new FileReader();
  reader.onload=()=>{try{const parsed=JSON.parse(reader.result);if(!isValidBackup(parsed))throw new Error("invalid");if(!confirm(t("confirmImport")))return;db=parsed.data||parsed;db.recurring ||= [];save();modal=null;render();setTimeout(()=>alert(t("importSuccess")),50)}catch(e){alert(t("invalidBackup"))}};
  reader.readAsText(file);
}

function addIntervalToDate(dateStr, scheduleType, intervalValue){
  if(!dateStr)return "";
  const d=new Date(dateStr+"T12:00:00");
  const n=Math.max(1,parseInt(intervalValue||"1",10)||1);
  if(scheduleType==="days") d.setDate(d.getDate()+n);
  else if(scheduleType==="months") d.setMonth(d.getMonth()+n);
  else d.setDate(d.getDate()+n*7);
  const pad=x=>String(x).padStart(2,"0");
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function processDueRecurringOrders(){
  const today=new Date();
  const pad=x=>String(x).padStart(2,"0");
  const todayStr=`${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;
  let changed=false;
  db.recurring.forEach(r=>{
    if(r.active===false || r.autoCreate===false || !r.nextOrder) return;
    let guard=0;
    while(r.nextOrder && r.nextOrder<=todayStr && guard<24){
      const occurrenceDate=r.nextOrder;
      const duplicate=db.orders.some(o=>o.recurringId===r.id && o.recurringOccurrence===occurrenceDate);
      if(!duplicate){
        db.orders.unshift({
          id:crypto.randomUUID(), recurringId:r.id, recurringOccurrence:occurrenceDate,
          product:r.product, sellerId:r.sellerId||null, price:r.price||"", currency:r.currency||"CAD",
          purchaseType:"autoOrder", deliveryMode:"homeDelivery", finalDelivery:"home", status:"orderPlaced",
          batch:"", address:"", notes:r.notes||""
        });
        changed=true;
      }
      r.lastOrder=occurrenceDate;
      r.nextOrder=addIntervalToDate(occurrenceDate,r.scheduleType||"weeks",r.intervalValue||r.everyWeeks||"1");
      changed=true; guard++;
    }
  });
  if(changed) save();
}

function render(){
  processDueRecurringOrders();
  applyTheme();
  let body=tab==="home"?home():tab==="orders"?orders():tab==="packages"?packages():tab==="pickup"?pickup():settings();
  document.getElementById("app").innerHTML=body+nav()+(modal||"");
  if(tab==="settings"){language.value=db.settings.language;appearance.value=db.settings.appearance;palette.value=db.settings.palette}
}
document.addEventListener("click",e=>{
  const tb=e.target.closest("[data-tab]");if(tb){tab=tb.dataset.tab;modal=null;render();return}
  const pf=e.target.closest("[data-package-filter]");if(pf){packageFilter=pf.dataset.packageFilter;render();return}
  const soBtn=e.target.closest("[data-status-order]");if(soBtn){db.settings.statusOrder=soBtn.dataset.statusOrder;save();render();return}
  const a=e.target.closest("[data-action]")?.dataset.action;
  if(a==="new-order"){modal=orderModal();render();return}
  if(a==="new-recurring"){modal=recurringModal();render();return}
  if(a==="sellers"){modal=sellerModal();render();return}
  const dsBtn=e.target.closest("[data-delete-seller]");
  if(dsBtn){db.sellers=db.sellers.filter(s=>s.id!==dsBtn.dataset.deleteSeller);save();render();return}
  const es=e.target.closest("[data-edit-seller]");if(es){modal=sellerModal(es.dataset.editSeller);render();return}
  if(a==="export-backup"){exportBackup();return}
  if(a==="import-backup"){document.getElementById("backup-file")?.click();return}
  if(a==="close"){modal=null;render();return}
  const ord=e.target.closest("[data-order]");if(ord){modal=detailModal(ord.dataset.order);render();return}
  const rr=e.target.closest("[data-recurring]");if(rr){modal=recurringDetailModal(rr.dataset.recurring);render();return}
  const edit=e.target.closest("[data-edit-order]");if(edit){modal=orderModal(edit.dataset.editOrder);render();return}
  const er=e.target.closest("[data-edit-recurring]");if(er){modal=recurringModal(er.dataset.editRecurring);render();return}
  const us=e.target.closest("[data-update-status]");if(us){const o=db.orders.find(x=>x.id===us.dataset.updateStatus);if(o){o.status=document.getElementById("detail-status").value;save();modal=detailModal(o.id);render()}return}
  const qs=e.target.closest("[data-quick-status]");if(qs){const o=db.orders.find(x=>x.id===qs.dataset.orderId);if(o){o.status=qs.dataset.quickStatus;save();modal=detailModal(o.id);render()}return}
  const del=e.target.closest("[data-delete-order]");if(del){db.orders=db.orders.filter(o=>o.id!==del.dataset.deleteOrder);save();modal=null;render();return}
  const dr=e.target.closest("[data-delete-recurring]");if(dr){db.recurring=db.recurring.filter(r=>r.id!==dr.dataset.deleteRecurring);save();modal=null;render();return}
  const ss=e.target.closest("[data-save-seller]");if(ss){
    const name=document.getElementById("s-name").value.trim();if(!name)return;
    const data={name,defaultPickup:document.getElementById("s-address").value.trim()};
    const id=ss.dataset.saveSeller;
    if(id){Object.assign(db.sellers.find(s=>s.id===id),data)}else{db.sellers.push({id:crypto.randomUUID(),...data})}
    save();modal=null;render();return
  }
  const so=e.target.closest("[data-save-order]");if(so){
    const id=so.dataset.saveOrder;
    const deliveryMode=document.getElementById("o-delivery").value;
    const finalDelivery=deliveryMode==="forwarding"?document.getElementById("o-final").value:(deliveryMode==="homeDelivery"?"home":"pickup");
    const data={
      product:document.getElementById("o-product").value.trim(),sellerId:document.getElementById("o-seller").value||null,
      price:document.getElementById("o-price").value.trim(),currency:document.getElementById("o-currency").value,
      purchaseType:document.getElementById("o-purchase-type").value,deliveryMode,finalDelivery,
      status:document.getElementById("o-status").value,batch:document.getElementById("o-batch")?.value.trim()||"",
      address:document.getElementById("o-address").value.trim(),notes:document.getElementById("o-notes").value.trim()
    };
    if(!data.product)return;
    if(id)Object.assign(db.orders.find(o=>o.id===id),data);else db.orders.unshift({id:crypto.randomUUID(),...data});
    save();modal=null;render();return
  }
  const sr=e.target.closest("[data-save-recurring]");if(sr){
    const id=sr.dataset.saveRecurring;
    const scheduleType=document.getElementById("r-schedule-type").value;
    const intervalValue=document.getElementById("r-interval").value.trim()||"1";
    const lastOrder=document.getElementById("r-last").value;
    const manualNext=document.getElementById("r-manual-next").checked;
    const nextOrder=manualNext
      ? document.getElementById("r-next").value
      : addIntervalToDate(lastOrder,scheduleType,intervalValue);

    const data={
      product:document.getElementById("r-product").value.trim(),
      sellerId:document.getElementById("r-seller").value||null,
      price:document.getElementById("r-price").value.trim(),
      currency:document.getElementById("r-currency").value,
      scheduleType,intervalValue,lastOrder,nextOrder,manualNext,
      createLastRecord:document.getElementById("r-create-last-record").checked,
      active:document.getElementById("r-active").checked,
      autoCreate:document.getElementById("r-auto-create").checked,
      notes:document.getElementById("r-notes").value.trim()
    };
    if(!data.product)return;
    let recurringRecord;
    if(id){
      recurringRecord=db.recurring.find(r=>r.id===id);
      Object.assign(recurringRecord,data);
    }else{
      recurringRecord={id:crypto.randomUUID(),...data};
      db.recurring.unshift(recurringRecord);
    }
    if(data.createLastRecord && data.lastOrder){
      ensureRecurringOccurrenceOrder(recurringRecord,data.lastOrder);
    }
    save();modal=null;render();return
  }
});
document.addEventListener("change",e=>{
  if(e.target.id==="backup-file"){importBackupFile(e.target.files?.[0]);e.target.value="";return}
  if(["r-last","r-schedule-type","r-interval"].includes(e.target.id)){
    const manual=document.getElementById("r-manual-next")?.checked;
    if(!manual){
      const last=document.getElementById("r-last")?.value||"";
      const st=document.getElementById("r-schedule-type")?.value||"weeks";
      const iv=document.getElementById("r-interval")?.value||"1";
      const next=document.getElementById("r-next");
      if(next) next.value=addIntervalToDate(last,st,iv);
    }
    return;
  }
  if(e.target.id==="r-manual-next"){
    const next=document.getElementById("r-next");
    if(next){
      next.readOnly=!e.target.checked;
      if(!e.target.checked){
        const last=document.getElementById("r-last")?.value||"";
        const st=document.getElementById("r-schedule-type")?.value||"weeks";
        const iv=document.getElementById("r-interval")?.value||"1";
        next.value=addIntervalToDate(last,st,iv);
      }
    }
    return;
  }
  if(e.target.id==="o-delivery"){
    const oldStatus=document.getElementById("o-status")?.value;
    const temp={deliveryMode:e.target.value,finalDelivery:document.getElementById("o-final")?.value||"pickup"};
    const ff=document.getElementById("forwarding-fields");if(ff)ff.classList.toggle("hidden",e.target.value!=="forwarding");
    const sel=document.getElementById("o-status");if(sel){sel.innerHTML=flowFor(temp).map(s=>`<option value="${s}">${t(s)}</option>`).join("");if(flowFor(temp).includes(oldStatus))sel.value=oldStatus}
    return
  }
  if(e.target.id==="o-final"){
    const sel=document.getElementById("o-status"),old=sel.value,temp={deliveryMode:"forwarding",finalDelivery:e.target.value};
    sel.innerHTML=flowFor(temp).map(s=>`<option value="${s}">${t(s)}</option>`).join("");if(flowFor(temp).includes(old))sel.value=old;return
  }
  if(!["language","appearance","palette"].includes(e.target.id))return;
  db.settings[e.target.id]=e.target.value;save();render()
});
render();
