(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{522:function(t,e,r){var content=r(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("21b5bf69",content,!0,{sourceMap:!1})},535:function(t,e,r){"use strict";r(11),r(16),r(23),r(24);var n=r(3),o=(r(45),r(14),r(33),r(54),r(494),r(12),r(35),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(506),r(507),r(39),r(70),r(15),r(56),r(373),r(1)),c=r(101),l=r(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=m.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),y=m.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(y)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),o)}})},553:function(t,e,r){t.exports=r.p+"img/BG2.bf6ce8d.jpg"},554:function(t,e,r){t.exports=r.p+"img/Sun.9435cd4.png"},555:function(t,e,r){t.exports=r.p+"img/Saturn.4a778d9.png"},579:function(t,e,r){"use strict";r(522)},580:function(t,e,r){var n=r(31)(!1);n.push([t.i,'.background[data-v-41c2ea96]{background-size:cover;background-repeat:no-repeat;background-position:50%;position:absolute;height:80vh;width:100%}.background[data-v-41c2ea96]:before{content:"";bottom:0;background:linear-gradient(180deg,rgba(87,0,131,.8) 0,hsla(0,0%,100%,0) 15%,hsla(0,0%,100%,0) 85%,#1699ac);z-index:0}.background2[data-v-41c2ea96],.background[data-v-41c2ea96]:before{position:absolute;width:100%;height:100%}.background2[data-v-41c2ea96]{background:linear-gradient(180deg,#1699ac 80%,rgba(22,152,172,.6))}',""]),t.exports=n},589:function(t,e,r){"use strict";r.r(e);var n=r(22),o=(r(81),r(379),r(523)),c=window.location.href+"background.jpg",l={components:{Board:o.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.req,e.next=3,r.$get("https://itgg.herokuapp.com/");case 3:return(n=e.sent).sort((function(a,b){return b.coin-a.coin})),e.abrupt("return",{items:n});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{gateImg:""}},head:function(){return{meta:[{hid:"og:image",property:"og:image",content:c},{hid:"og:image:secure_url",property:"og:image:secure_url",content:c},{hid:"og:image:alt",property:"og:image:alt",content:"ITGG2021"}]}},mounted:function(){this.gateImg=this.gateImages("not")},methods:{gateImages:function(t){return"and"===t?"/gate/and.png":"or"===t?"/gate/or.png":"nor"===t?"/gate/nor.png":"not"===t?"/gate/not.png":void 0}}},d=(r(579),r(79)),f=r(100),m=r.n(f),v=r(535),h=r(369),y=r(586),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"background2"}),t._v(" "),n("div",{staticClass:"background",style:"background-image: url("+r(553)+");"},[t.$vuetify.breakpoint.mdAndUp?n("v-row",{staticStyle:{height:"70vh"},attrs:{justify:"center",align:"center"}},[n("v-img",{staticClass:"sun mr-15 ml-n15",attrs:{src:r(554),height:"250",width:"250",contain:""}}),t._v(" "),n("v-img",{staticClass:"saturn ml-15 mr-n15",attrs:{src:r(555),height:"250",width:"250",contain:""}})],1):t._e()],1),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{staticClass:"fill-height"},[n("Board",{attrs:{items:t.items,images:t.gateImg}})],1)],1)],1)}),[],!1,null,"41c2ea96",null);e.default=component.exports;m()(component,{Board:r(523).default}),m()(component,{VCol:v.a,VImg:h.a,VRow:y.a})}}]);