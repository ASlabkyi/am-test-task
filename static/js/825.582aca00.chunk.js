"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[825],{825:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,i,c=t(392),s=t(791),u=t(87),a=t(168),o=t(686),l=o.Z.li(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 30vh;\n  padding-bottom: 30vh;\n\n  img {\n    max-height: 400px;\n  }\n\n  a {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    color: #333;\n    text-decoration: none;\n    cursor: pointer;\n    transition: color 0.2s ease-in-out;\n\n    &:hover {\n      color: #ff4500;\n    }\n  }\n\n  h2 {\n    font-size: 24px;\n    margin-bottom: 0.5rem;\n  }\n"]))),d=t(184),f=(0,s.memo)((function(e){var n=e.id,t=e.name,r=e.imageUrl,i=e.handleRightClick,c=e.selected;return(0,d.jsx)("div",{children:(0,d.jsx)(l,{onContextMenu:function(e){return i(e,n)},style:{background:c?"lightblue":"white"},children:(0,d.jsxs)(u.rU,{to:"/".concat(n),children:[(0,d.jsx)("img",{src:r,alt:t}),(0,d.jsx)("h2",{children:t})]})})})})),p=o.Z.ul(i||(i=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1rem;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),h=function(){var e=(0,c.Z)((function(e){return e.beerList})),n=(0,c.Z)((function(e){return e.toggleBeerSelection})),t=(0,c.Z)((function(e){return e.selectedBeers})),r=(0,c.Z)((function(e){return e.deleteSelectedBeers})),i=function(e,t){e.preventDefault(),n(t)};return(0,d.jsxs)("div",{children:[t.length>0&&(0,d.jsx)("button",{onClick:r,style:{width:"100%",padding:"25px 30px",cursor:"pointer"},children:"Delete"}),(0,d.jsx)(p,{children:null===e||void 0===e?void 0:e.slice(0,15).map((function(e){var n=e.id,r=e.name,c=e.image_url;return(0,d.jsx)(f,{id:n,name:r,imageUrl:c,handleRightClick:i,selected:t.includes(n)},n)}))})]})},g=function(){var e=(0,c.Z)((function(e){return e.fetchBeerList}));return(0,s.useEffect)((function(){e(1)}),[e]),(0,d.jsx)(h,{})}},392:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(433),i=t(861),c=t(687),s=t.n(c),u=t(847),a=t(243);a.Z.defaults.baseURL="https://api.punkapi.com/v2/beers";var o=function(){var e=(0,i.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("",{params:{page:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=(0,u.Ue)((function(e,n){return{beerList:[],page:1,selectedBeers:[],isFetched:!1,isLoading:!1,fetchBeerList:function(){var t=(0,i.Z)(s().mark((function t(i){var c,u,a,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),u=c.isFetched,a=c.isLoading,!u&&!a){t.next=3;break}return t.abrupt("return");case 3:return e({isLoading:!0}),t.prev=4,t.next=7,o(i);case 7:l=t.sent,e((function(e){return{beerList:[].concat((0,r.Z)(e.beerList),(0,r.Z)(l)),isFetched:!0}})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),alert(t.t0.message);case 14:return t.prev=14,e({isLoading:!1}),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[4,11,14,17]])})));return function(e){return t.apply(this,arguments)}}(),toggleBeerSelection:function(n){e((function(e){return{selectedBeers:e.selectedBeers.includes(n)?e.selectedBeers.filter((function(e){return e!==n})):[].concat((0,r.Z)(e.selectedBeers),[n])}}))},deleteSelectedBeers:function(){e((function(e){var n=e.beerList.filter((function(n){return!e.selectedBeers.includes(n.id)}));if(0===n.length){var t=e.page+1;return e.isFetched=!1,e.fetchBeerList(t),{beerList:n,selectedBeers:[],page:t}}return{beerList:n,selectedBeers:[],page:e.page}}))}}})),d=l}}]);
//# sourceMappingURL=825.582aca00.chunk.js.map