(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6,7],{474:function(t,e,n){"use strict";var o=n(476);e.a=o.a},489:function(t,e,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("5b63cb04",content,!0,{sourceMap:!1})},490:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("45955222",content,!0,{sourceMap:!1})},508:function(t,e,n){"use strict";n(489)},509:function(t,e,n){var o=n(31)(!1);o.push([t.i,".chart-img{position:absolute;pointer-events:none;width:100%;height:100%;padding:0 31%;z-index:1}.chart-img .crop{max-width:85%;height:100%;margin:0 auto;display:flex;align-items:center}.chart-img .img{background:hsla(0,0%,100%,.5);border-radius:100%}",""]),t.exports=o},510:function(t,e,n){"use strict";n(490)},511:function(t,e,n){var o=n(31)(!1);o.push([t.i,".my-token{padding:40px 0;margin:10px 0 30px;background:hsla(0,0%,83.1%,.3)}",""]),t.exports=o},521:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("1080103f",content,!0,{sourceMap:!1})},523:function(t,e,n){"use strict";n.r(e);var o=n(22),r=(n(15),n(27),n(81),n(524)),c=n(525),l={components:{Chart:r.default,PlayerDialog:c.default},props:{items:{type:Array,require:!1,default:null},images:{type:String,require:!1,default:""}},data:function(){return{players:[],tab:0,collection:null}},mounted:function(){this.getCollection(this.items)},methods:{showGate:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.players=[],e.tab=1,n.next=4,e.$axios.$get("https://itgg.herokuapp.com/players?gate=".concat(t,"&limit=1000"),{progress:!1});case 4:o=n.sent,e.players=o;case 6:case"end":return n.stop()}}),n)})))()},getImages:function(t){return n(0===t?572:1===t?573:574)},getColor:function(t,code){return"and"===t?code?"rgba(50, 115, 219, 1)":"blue":"or"===t?code?"rgba(139, 195, 74, 1)":"green":"nor"===t?code?"rgba(219, 46, 28, 1)":"red":"not"===t?code?"rgba(92, 45, 122, 1)":"purple":void 0},getCollection:function(t){var e=this,n=[],o=[],r=[];t.forEach((function(data){n.push(data.name),o.push(data.coin),r.push(e.getColor(data.name,!0))})),this.collection={labels:n,datasets:[{label:"Token of Gate",data:o,backgroundColor:r,borderColor:["rgba(255, 255, 255)"],borderWidth:1}]}},showPlayer:function(t){this.$refs.playerDialog.openDialog(t)}}},d=(n(575),n(79)),v=n(100),h=n.n(v),f=n(476),w=n(584),m=n(517),x=n(369),_=n(519),y=n(514),C=n(520),O=n(527),I=n(486),j=n(153),k=n(586),T=n(512),V=n(171),P=n(2);function D(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,r=t.touchendY;t.offsetX=n-e,t.offsetY=r-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&r<o-16&&t.up(t),t.down&&r>o+16&&t.down(t))}(e)}function S(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return D(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var $={inserted:function(t,e,n){var o=e.value,r=o.parent?t.parentElement:t,c=o.options||{passive:!0};if(r){var l=S(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=l,Object(P.q)(l).forEach((function(t){r.addEventListener(t,l[t],c)}))}},unbind:function(t,e,n){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var r=o._touchHandlers[n.context._uid];Object(P.q)(r).forEach((function(t){o.removeEventListener(t,r[t])})),delete o._touchHandlers[n.context._uid]}}},B=n(34),E=Object(B.a)(T.a,Object(V.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:$},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(P.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(P.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),L=E.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=E.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),X=(n(14),n(11),n(16),n(23),n(24),n(3)),A=(n(25),n(160),n(513),n(577),n(474)),Y=n(488),G=n(515);function H(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?H(Object(source),!0).forEach((function(e){Object(X.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):H(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R=G.a.extend({name:"v-window",directives:{Touch:$},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return M(M({},G.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var o,r,c,l=this,d={click:function(t){t.stopPropagation(),l.changedByDelimiters=!0,n()}},v={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},h=null!=(o=null==(r=(c=this.$scopedSlots)[t])?void 0:r.call(c,{on:d,attrs:v}))?o:[this.$createElement(A.a,{props:{icon:!0},attrs:v,on:d},[this.$createElement(Y.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},h)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var o=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&o&&"string"==typeof o){var r=this.genIcon("next",o,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,o=n-1;return n<=2?t<e:t===o&&0===e||(0!==t||e!==o)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}});function z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?z(Object(source),!0).forEach((function(e){Object(X.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):z(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var W=R.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return N(N({},R.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,i){return t.id||G.a.options.methods.getValue.call(this,t,i)}}}),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"board"},[o("div",{staticClass:"gate-chart"},[o("div",{staticClass:"chart"},[o("Chart",{attrs:{height:250,datacollection:t.collection,images:n(378)}})],1)]),t._v(" "),o("v-card",{staticClass:"leader-board mx-auto rounded-xl elevation-5",staticStyle:{"backdrop-filter":"blur(5px)"},attrs:{color:"rgba(255, 255, 255, 0.8)"}},[o("v-row",{staticClass:"pt-2 px-2",attrs:{justify:"space-between","no-gutters":""}},[o("v-btn",{attrs:{color:"purple",icon:"",disabled:0==t.tab},on:{click:function(e){t.tab=0}}},[o("v-icon",[t._v("mdi-arrow-left-bold")])],1),t._v(" "),o("v-btn",{attrs:{color:"purple",icon:"",disabled:1==t.tab||0==t.players.length},on:{click:function(e){t.tab=1}}},[o("v-icon",[t._v("mdi-arrow-right-bold")])],1)],1),t._v(" "),o("v-tabs-items",{staticStyle:{background:"none"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("v-tab-item",[o("v-list",{staticStyle:{background:"none"}},[t._l(t.items,(function(e,i){return[o("v-list-item",{key:e.name,staticClass:"mx-2 my-1 rounded-lg",staticStyle:{background:"none"},on:{click:function(n){return t.showGate(e.name)}}},[o("v-list-item-avatar",[i<3?o("v-img",{attrs:{src:t.getImages(i)}}):o("span",{staticClass:"other-num"},[t._v(t._s(i+1))])],1),t._v(" "),o("v-list-item-content",[o("h3",{class:t.getColor(e.name,!1)+"--text"},[t._v("\n                  "+t._s(e.name.toUpperCase())+"\n                ")]),t._v(" "),o("v-list-item-subtitle",[t._v("\n                  "+t._s(e.coin)+" Tokens\n                ")])],1),t._v(" "),o("v-list-item-action",[o("v-icon",[t._v("mdi-chevron-right")])],1)],1)]}))],2)],1),t._v(" "),o("v-tab-item",[0==t.players.length?o("div",{staticClass:"loading"},[o("v-progress-circular",{attrs:{indeterminate:"",color:"purple"}})],1):o("v-list",{attrs:{color:"rgba(255, 255, 255, 0.0)"}},[t._l(t.players,(function(e,i){return[o("v-list-item",{key:e.std_id,staticClass:"mx-2 my-1 rounded-lg",staticStyle:{"background-color":"rgba(255, 255, 255, 0)"},on:{click:function(n){return t.showPlayer(e)}}},[o("v-list-item-avatar",{attrs:{tile:""}},[i<3?o("v-img",{attrs:{src:t.getImages(i)}}):o("span",{staticClass:"other-num"},[t._v(t._s(i+1))])],1),t._v(" "),o("v-list-item-content",[o("h3",[t._v(t._s(e.name))]),t._v(" "),o("v-list-item-subtitle",[t._v("\n                  "+t._s(e.coin)+" Tokens\n                ")])],1)],1)]}))],2)],1)],1),t._v(" "),o("PlayerDialog",{ref:"playerDialog"})],1)],1)}),[],!1,null,"4b47e1e8",null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:w.a,VIcon:m.a,VImg:x.a,VList:_.a,VListItem:y.a,VListItemAction:C.a,VListItemAvatar:O.a,VListItemContent:I.a,VListItemSubtitle:I.b,VProgressCircular:j.a,VRow:k.a,VTabItem:L,VTabsItems:W})},524:function(t,e,n){"use strict";n.r(e);n(45);var o={props:{height:{type:Number,require:!1,default:null},datacollection:{type:Object,require:!0,default:null},options:{type:Object,require:!1,default:function(){return{title:{display:!1},legend:{display:!1},events:["mousemove","mouseout","click","touchstart","touchmove"],animation:{animateScale:!1},onClick:function(t,e){}}}},images:{type:String,require:!1,default:""}},data:function(){return{collection:{labels:["One","Two","Three","Four"],datasets:[{label:"# of Votes",data:[1,1,1,1],backgroundColor:["rgba(255, 99, 132)","rgba(54, 162, 235)","rgba(255, 206, 86)","rgba(75, 192, 192)"],borderColor:["rgba(255, 255, 255)","rgba(255, 255, 255)","rgba(255, 255, 255)","rgba(255, 255, 255)"],borderWidth:1}]}}},watch:{datacollection:function(t){this.collection=t}}},r=(n(508),n(79)),c=n(100),l=n.n(c),d=n(369),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""!==t.images?n("div",{staticClass:"chart-img"},[n("v-img",{staticClass:"mt-2",attrs:{src:t.images,height:"100%",contain:""}})],1):t._e(),t._v(" "),n("client-only",[n("doughnut-chart",{attrs:{"chart-data":t.collection,options:t.options,height:t.height}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:d.a})},525:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{dialog:!1,tab:0,playerData:null,showLog:!1}},methods:{openDialog:function(t){this.dialog=!0,this.playerData=t},getColor:function(t,code){return"and"===t?code?"rgba(50, 115, 219, 0.1)":"blue":"or"===t?code?"rgba(139, 195, 74, 1)":"green":"nor"===t?code?"rgba(219, 46, 28, 1)":"red":"not"===t?code?"rgba(92, 45, 122, 1)":"purple":void 0}}},r=(n(510),n(79)),c=n(100),l=n.n(c),d=n(476),v=n(584),h=n(588),f=n(491),w=n(517),m=n(519),x=n(514),_=n(520),y=n(486),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"",transition:"dialog-transition",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[null!=t.playerData?n("v-card",{staticClass:"pa-4",attrs:{rounded:"xl"}},[n("v-btn",{staticStyle:{"z-index":"1"},attrs:{icon:"",absolute:"",right:"","aria-label":"close"},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("div",{staticClass:"text-center"},[n("h2",{staticClass:"py-4"},[t._v(t._s(t.playerData.name))]),t._v(" "),n("h1",{class:"my-token rounded-xl "+t.getColor(t.playerData.house,!1)+"--text"},[t._v("\n        "+t._s(t.playerData.coin)+" Tokens\n      ")])]),t._v(" "),n("v-card",{staticClass:"rounded-xl"},[n("div",{staticClass:"pa-1"},[n("v-btn",{attrs:{color:"grey",block:"",text:"",rounded:""},on:{click:function(e){t.showLog=!t.showLog}}},[t._v("\n          Show Coins Log\n          "),t.showLog?n("v-icon",[t._v("mdi-chevron-up")]):n("v-icon",[t._v("mdi-chevron-down")])],1)],1),t._v(" "),n("v-expand-transition",[n("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showLog,expression:"showLog"}],staticClass:"overflow-auto",attrs:{"max-height":"300"}},[t._l(t.playerData.coinlog,(function(e,i){return[n("v-list-item",{key:i},[n("v-list-item-content",[n("h3",[t._v(t._s(e.event))]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                  "+t._s(e.giver)+"\n                ")])],1),t._v(" "),n("v-list-item-action",[n("span",{class:(e.coin>=0?"green":"red")+"--text"},[t._v("\n                  "+t._s((e.coin>=0?"+":"-")+e.coin)+" Tokens\n                ")])])],1)]})),t._v(" "),0===t.playerData.coinlog.length?n("h4",{staticClass:"text-center grey--text lighten-1 py-5"},[t._v("\n            No Data.\n          ")]):t._e()],2)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VDialog:h.a,VExpandTransition:f.a,VIcon:w.a,VList:m.a,VListItem:x.a,VListItemAction:_.a,VListItemContent:y.a,VListItemSubtitle:y.b})},572:function(t,e,n){t.exports=n.p+"img/medal-gold.3955d47.png"},573:function(t,e,n){t.exports=n.p+"img/medal-silver.9053554.png"},574:function(t,e,n){t.exports=n.p+"img/medal-bronze.a611871.png"},575:function(t,e,n){"use strict";n(521)},576:function(t,e,n){var o=n(31)(!1);o.push([t.i,".board[data-v-4b47e1e8]{position:relative;bottom:0;width:100%;padding:10vh 5px 0}.board .gate-chart[data-v-4b47e1e8]{position:relative;height:40vh;margin:0 auto;max-width:500px;z-index:1;pointer-events:none}.board .gate-chart .chart[data-v-4b47e1e8]{position:absolute;bottom:-35px;width:100%}.board .leader-board[data-v-4b47e1e8]{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;max-width:500px;min-height:50vh}.board .loading[data-v-4b47e1e8]{display:flex;justify-content:center;align-items:center;height:40vh}.board .other-num[data-v-4b47e1e8]{width:30px;background:#fff;border:3px solid rgba(70,70,70,.8);height:30px;border-radius:12px;color:#464646;font-size:1.2rem;font-weight:700}",""]),t.exports=o},577:function(t,e,n){var content=n(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("0d135400",content,!0,{sourceMap:!1})},578:function(t,e,n){var o=n(31)(!1);o.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=o}}]);