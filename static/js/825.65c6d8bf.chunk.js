"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[825],{825:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,i,c,s,o=t(439),a=t(392),u=t(791),l=t(87),d=t(168),f=t(686),p=f.Z.li(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 30vh;\n  padding-bottom: 30vh;\n  text-align: center;\n\n  img {\n    max-height: 400px;\n  }\n\n  a {\n    color: #333;\n    text-decoration: none;\n    cursor: pointer;\n    transition: color 0.2s ease-in-out;\n\n    &:hover {\n      color: #ff4500;\n    }\n  }\n\n  h2 {\n    font-size: 24px;\n    margin-bottom: 0.5rem;\n  }\n"]))),g=f.Z.div(i||(i=(0,d.Z)(["\n  padding: 10px;\n  border-radius: 10px;\n  height: 510px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  transition: background 0.2s ease-in-out;\n"]))),h=t(184),x=(0,u.memo)((function(e){var n=e.id,t=e.name,r=e.imageUrl,i=e.handleRightClick,c=e.selected;return(0,h.jsx)("div",{children:(0,h.jsx)(p,{onContextMenu:function(e){return i(e,n)},children:(0,h.jsx)(l.rU,{to:"/".concat(n),children:(0,h.jsxs)(g,{style:{background:c?"lightblue":"white"},children:[(0,h.jsx)("img",{src:r,alt:t}),(0,h.jsx)("h2",{children:t})]})})})})})),b=f.Z.ul(c||(c=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1rem;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),m=f.Z.button(s||(s=(0,d.Z)(["\n  position: absolute;\n  width: 100%;\n  padding: 25px 30px;\n  cursor: pointer;\n  background-color: #ff3b30;\n  color: #fff;\n  font-size: 25px;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: #e53935;\n  }\n\n  opacity: ",";\n  transition: opacity 0.3s ease;\n"])),(function(e){return e.isVisible?1:0})),v=function(){var e=(0,a.Z)((function(e){return e.beerList})),n=(0,a.Z)((function(e){return e.toggleBeerSelection})),t=(0,a.Z)((function(e){return e.selectedBeers})),r=(0,a.Z)((function(e){return e.deleteSelectedBeers})),i=(0,u.useState)(!1),c=(0,o.Z)(i,2),s=c[0],l=c[1];(0,u.useEffect)((function(){l(t.length>0)}),[t]);var d=function(e,t){e.preventDefault(),n(t)};return(0,h.jsxs)("div",{children:[(0,h.jsx)(m,{isVisible:s,onClick:r,children:"Delete"}),(0,h.jsx)(b,{children:null===e||void 0===e?void 0:e.slice(0,15).map((function(e){var n=e.id,r=e.name,i=e.image_url;return(0,h.jsx)(x,{id:n,name:r,imageUrl:i,handleRightClick:d,selected:t.includes(n)},n)}))})]})},Z=function(){var e=(0,a.Z)((function(e){return e.fetchBeerList}));return(0,u.useEffect)((function(){localStorage.clear(),e(1)}),[e]),(0,h.jsx)(v,{})}},392:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(433),i=t(861),c=t(687),s=t.n(c),o=t(847),a=t(922),u=t(243);u.Z.defaults.baseURL="https://api.punkapi.com/v2/beers";var l=function(){var e=(0,i.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("",{params:{page:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=(0,o.Ue)((0,a.tJ)((function(e,n){return{beerList:[],page:1,selectedBeers:[],isFetched:!1,isLoading:!1,fetchBeerList:function(){var t=(0,i.Z)(s().mark((function t(i){var c,o,a,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),o=c.isFetched,a=c.isLoading,!o&&!a){t.next=3;break}return t.abrupt("return");case 3:return e({isLoading:!0}),t.prev=4,t.next=7,l(i);case 7:u=t.sent,e((function(e){return{beerList:[].concat((0,r.Z)(e.beerList),(0,r.Z)(u)),isFetched:!0}})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),alert(t.t0.message);case 14:return t.prev=14,e({isLoading:!1}),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})));return function(e){return t.apply(this,arguments)}}(),toggleBeerSelection:function(n){e((function(e){return{selectedBeers:e.selectedBeers.includes(n)?e.selectedBeers.filter((function(e){return e!==n})):[].concat((0,r.Z)(e.selectedBeers),[n])}}))},deleteSelectedBeers:function(){e((function(e){var n=e.beerList.filter((function(n){return!e.selectedBeers.includes(n.id)}));if(0===n.length){var t=e.page+1;return e.isFetched=!1,e.fetchBeerList(t),{beerList:n,selectedBeers:[],page:t}}return{beerList:n,selectedBeers:[],page:e.page}}))}}}),{name:"beer-store",storage:(0,a.FL)((function(){return localStorage})),onRehydrate:function(e){1===e.page&&(e.beerList=[])}})),f=d}}]);
//# sourceMappingURL=825.65c6d8bf.chunk.js.map