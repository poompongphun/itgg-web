(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(t,e,r){"use strict";var n=r(1),o=r(159),j=o.b.reactiveProp;n.a.component("doughnut-chart",{extends:o.a,mixins:[j],props:["options","height"],mounted:function(){this.renderChart(this.chartData,this.options,this.height)}})},206:function(t,e,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("7388ab72",content,!0,{sourceMap:!1})},368:function(t,e,r){"use strict";var n={data:function(){return{isTop:!0}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isTop=!(window.scrollY>0)}}},o=r(79),j=r(100),l=r.n(j),c=r(482),f=r(484),h=r(476),d=r(485),m=r(369),v=r(483),k=r(364),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{fixed:"",color:"rgba(255, 255, 255, "+(t.isTop?"0":"0.8")+")","shrink-on-scroll":"",height:"80","elevate-on-scroll":"",dark:t.$vuetify.theme.dark}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("v-btn",{staticClass:"text-capitalize px-2",attrs:{text:"",rounded:"",large:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-img",{attrs:{src:r(378),width:"40"}}),t._v(" "),n("v-toolbar-title",{staticClass:"font-weight-bold ml-1",class:{"white--text":t.isTop},staticStyle:{"font-size":"1.3rem"}},[t._v("\n          ITGG2021\n        ")])],1),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:c.a,VAppBar:f.a,VBtn:h.a,VContainer:d.a,VImg:m.a,VSpacer:v.a,VToolbarTitle:k.a})},378:function(t,e,r){t.exports=r.p+"img/logo.ceea860.png"},382:function(t,e,r){r(383),t.exports=r(384)},411:function(t,e,r){"use strict";r(206)},412:function(t,e,r){var n=r(31)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},417:function(t,e,r){var content=r(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("6b710792",content,!0,{sourceMap:!1})},418:function(t,e,r){var n=r(31)(!1);n.push([t.i,'::-webkit-scrollbar{height:5px;width:5px}::-webkit-scrollbar-thumb{background-color:#868686;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#797979}.v-application{font-family:"Itim",sans-serif!important}@-webkit-keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes halfRotate{0%{transform:rotate(0deg)}50%{transform:rotate(10deg)}to{transform:rotate(0deg)}}@keyframes halfRotate{0%{transform:rotate(0deg)}50%{transform:rotate(10deg)}to{transform:rotate(0deg)}}.sun{-webkit-animation:rotating 50s linear infinite;animation:rotating 50s linear infinite}.saturn{-webkit-animation:halfRotate 5s linear infinite;animation:halfRotate 5s linear infinite}',""]),t.exports=n},473:function(t,e,r){var map={"./af":225,"./af.js":225,"./ar":226,"./ar-dz":227,"./ar-dz.js":227,"./ar-kw":228,"./ar-kw.js":228,"./ar-ly":229,"./ar-ly.js":229,"./ar-ma":230,"./ar-ma.js":230,"./ar-sa":231,"./ar-sa.js":231,"./ar-tn":232,"./ar-tn.js":232,"./ar.js":226,"./az":233,"./az.js":233,"./be":234,"./be.js":234,"./bg":235,"./bg.js":235,"./bm":236,"./bm.js":236,"./bn":237,"./bn-bd":238,"./bn-bd.js":238,"./bn.js":237,"./bo":239,"./bo.js":239,"./br":240,"./br.js":240,"./bs":241,"./bs.js":241,"./ca":242,"./ca.js":242,"./cs":243,"./cs.js":243,"./cv":244,"./cv.js":244,"./cy":245,"./cy.js":245,"./da":246,"./da.js":246,"./de":247,"./de-at":248,"./de-at.js":248,"./de-ch":249,"./de-ch.js":249,"./de.js":247,"./dv":250,"./dv.js":250,"./el":251,"./el.js":251,"./en-au":252,"./en-au.js":252,"./en-ca":253,"./en-ca.js":253,"./en-gb":254,"./en-gb.js":254,"./en-ie":255,"./en-ie.js":255,"./en-il":256,"./en-il.js":256,"./en-in":257,"./en-in.js":257,"./en-nz":258,"./en-nz.js":258,"./en-sg":259,"./en-sg.js":259,"./eo":260,"./eo.js":260,"./es":261,"./es-do":262,"./es-do.js":262,"./es-mx":263,"./es-mx.js":263,"./es-us":264,"./es-us.js":264,"./es.js":261,"./et":265,"./et.js":265,"./eu":266,"./eu.js":266,"./fa":267,"./fa.js":267,"./fi":268,"./fi.js":268,"./fil":269,"./fil.js":269,"./fo":270,"./fo.js":270,"./fr":271,"./fr-ca":272,"./fr-ca.js":272,"./fr-ch":273,"./fr-ch.js":273,"./fr.js":271,"./fy":274,"./fy.js":274,"./ga":275,"./ga.js":275,"./gd":276,"./gd.js":276,"./gl":277,"./gl.js":277,"./gom-deva":278,"./gom-deva.js":278,"./gom-latn":279,"./gom-latn.js":279,"./gu":280,"./gu.js":280,"./he":281,"./he.js":281,"./hi":282,"./hi.js":282,"./hr":283,"./hr.js":283,"./hu":284,"./hu.js":284,"./hy-am":285,"./hy-am.js":285,"./id":286,"./id.js":286,"./is":287,"./is.js":287,"./it":288,"./it-ch":289,"./it-ch.js":289,"./it.js":288,"./ja":290,"./ja.js":290,"./jv":291,"./jv.js":291,"./ka":292,"./ka.js":292,"./kk":293,"./kk.js":293,"./km":294,"./km.js":294,"./kn":295,"./kn.js":295,"./ko":296,"./ko.js":296,"./ku":297,"./ku.js":297,"./ky":298,"./ky.js":298,"./lb":299,"./lb.js":299,"./lo":300,"./lo.js":300,"./lt":301,"./lt.js":301,"./lv":302,"./lv.js":302,"./me":303,"./me.js":303,"./mi":304,"./mi.js":304,"./mk":305,"./mk.js":305,"./ml":306,"./ml.js":306,"./mn":307,"./mn.js":307,"./mr":308,"./mr.js":308,"./ms":309,"./ms-my":310,"./ms-my.js":310,"./ms.js":309,"./mt":311,"./mt.js":311,"./my":312,"./my.js":312,"./nb":313,"./nb.js":313,"./ne":314,"./ne.js":314,"./nl":315,"./nl-be":316,"./nl-be.js":316,"./nl.js":315,"./nn":317,"./nn.js":317,"./oc-lnc":318,"./oc-lnc.js":318,"./pa-in":319,"./pa-in.js":319,"./pl":320,"./pl.js":320,"./pt":321,"./pt-br":322,"./pt-br.js":322,"./pt.js":321,"./ro":323,"./ro.js":323,"./ru":324,"./ru.js":324,"./sd":325,"./sd.js":325,"./se":326,"./se.js":326,"./si":327,"./si.js":327,"./sk":328,"./sk.js":328,"./sl":329,"./sl.js":329,"./sq":330,"./sq.js":330,"./sr":331,"./sr-cyrl":332,"./sr-cyrl.js":332,"./sr.js":331,"./ss":333,"./ss.js":333,"./sv":334,"./sv.js":334,"./sw":335,"./sw.js":335,"./ta":336,"./ta.js":336,"./te":337,"./te.js":337,"./tet":338,"./tet.js":338,"./tg":339,"./tg.js":339,"./th":340,"./th.js":340,"./tk":341,"./tk.js":341,"./tl-ph":342,"./tl-ph.js":342,"./tlh":343,"./tlh.js":343,"./tr":344,"./tr.js":344,"./tzl":345,"./tzl.js":345,"./tzm":346,"./tzm-latn":347,"./tzm-latn.js":347,"./tzm.js":346,"./ug-cn":348,"./ug-cn.js":348,"./uk":349,"./uk.js":349,"./ur":350,"./ur.js":350,"./uz":351,"./uz-latn":352,"./uz-latn.js":352,"./uz.js":351,"./vi":353,"./vi.js":353,"./x-pseudo":354,"./x-pseudo.js":354,"./yo":355,"./yo.js":355,"./zh-cn":356,"./zh-cn.js":356,"./zh-hk":357,"./zh-hk.js":357,"./zh-mo":358,"./zh-mo.js":358,"./zh-tw":359,"./zh-tw.js":359};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=473},68:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(411),r(79)),j=r(100),l=r.n(j),c=r(482),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:c.a})}},[[382,10,5,11]]]);