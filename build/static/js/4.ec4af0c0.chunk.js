(this["webpackJsonpadmintools-front"]=this["webpackJsonpadmintools-front"]||[]).push([[4],{437:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(4),c=n(0),i=n(3),s=n.n(i),u=n(5),o=n(6),d=n(149),l=n(196),f=n(390),j=n(195),p=n(361),b=n(290),m=n(394),h=n(183),O=n(33),x=Object(d.a)((function(e){return{root:{padding:e.spacing.m},header:{textAlign:"center"},subHeader:{textAlign:"center",color:e.palette.neutralTertiary}}})),v=function(e){var t=e.items,n=e.setItems,i=x(),d=Object(c.useState)(""),v=Object(a.a)(d,2),w=v[0],g=v[1],y=function(){var e=Object(o.a)(s.a.mark((function e(t,r){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.updateItem(Object(u.a)(Object(u.a)({},t),{},{type:r}));case 2:a=e.sent,n((function(e){var n=Object(u.a)(Object(u.a)({},t),{},{type:a.type});return e.map((function(e){return e.id===t.id?n:e}))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(e){return function(t){t.target.checked?y(e,"Achieved"):y(e,"Planned")}},I=function(){var e=Object(o.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=7;break}return r={content:t,createdDate:new Date,modifiedDate:new Date,status:"Active",type:"Planned",periodId:null,relatedItemId:null},e.next=4,O.a.addOrphan(r);case 4:a=e.sent,n((function(e){return e.concat(a)})),g("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.deleteItem(t.id);case 2:n((function(e){return e.filter((function(e){return e.id!==t.id}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:i.root,children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(j.a,{block:!0,className:i.header,variant:"mediumPlus",children:"Planned items"}),Object(r.jsx)(j.a,{block:!0,className:i.subHeader,variant:"medium",children:"Here you will see items planned over past periods"}),Object(r.jsx)(b.a,{}),Object(r.jsx)(m.a,{items:t,onRenderCell:function(e){return Object(r.jsxs)(l.a,{horizontalAlign:"start",verticalAlign:"center",horizontal:!0,children:[Object(r.jsx)(f.a,{name:e.content,checked:"Achieved"===e.type,onChange:k(e)}),Object(r.jsx)(l.a.Item,{grow:1,children:Object(r.jsx)(j.a,{variant:"medium",children:e.content})}),Object(r.jsx)(p.a,{iconProps:{iconName:"ChromeClose"},disabled:null!==e.relatedItemId,onClick:function(){return A(e)}})]})}}),Object(r.jsx)(b.a,{}),Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),I(w)},children:Object(r.jsx)(h.a,{autoComplete:"off",value:w,onChange:function(e){g(e.target.value)},suffix:"Add",onRenderSuffix:function(e){var t=e.suffix;return Object(r.jsx)(p.a,{type:"submit",default:!0,iconProps:{iconName:"Add"},children:t})}})})]})})},w=function(e){var t=e.setItems;return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,O.a.getOrphans("Planned,Achieved");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),null},g=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w,{setItems:i}),Object(r.jsx)(v,{items:n,setItems:i})]})};t.default=g}}]);
//# sourceMappingURL=4.ec4af0c0.chunk.js.map