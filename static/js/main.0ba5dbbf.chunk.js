(this["webpackJsonpleave-me"]=this["webpackJsonpleave-me"]||[]).push([[0],{28:function(e,t,n){e.exports=n(42)},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),u=n.n(c),o=n(16),s=n(27),i=(n(37),n(4)),l=n(9),p=n(15),d=n(18),f=n(17),h=function(e){var t=e.product.title;return a.a.createElement(r.Fragment,null,a.a.createElement("span",null,t))},m=a.a.createContext(),v=m.Provider,E=m.Consumer,b=function(){return function(e){return function(t){return a.a.createElement(E,null,(function(n){return a.a.createElement(e,Object.assign({},t,{shopService:n}))}))}}},g=(n(38),function(){return a.a.createElement("div",null,"Spinner")}),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.shopService.getAllProducts().then((function(t){console.log(12345),e.props.productsLoaded(t)}))}},{key:"render",value:function(){var e=this.props,t=e.products,n=e.loading;return console.log(n),n?(console.log(23456),a.a.createElement(g,null)):a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(h,{product:e}))})))}}]),n}(r.Component),j={productsLoaded:function(e){return{type:"PRODUCTS_LOADED",payload:e}}},y=b()(Object(o.b)((function(e){return{products:e.products,loading:e.loading}}),j)(O)),w=function(){return a.a.createElement(y,null)},k=function(){return a.a.createElement("div",null,"Product page")},x=function(){return a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/",component:w,exact:!0}),a.a.createElement(i.a,{path:"/product/:id?",component:k}))},C=(n(40),function(){return a.a.createElement("div",null,"Error")}),D=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(C,null):this.props.children}}]),n}(r.Component),P=n(7),S=n.n(P),R=n(11),A=n(14),L={products:[],loading:!0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCTS_LOADED":return{products:t.payload,loading:!1};default:return e}},B=Object(A.b)(_),T=new function e(){var t=this;Object(l.a)(this,e),this._apiBase="http://majeste.pythonanywhere.com/api/v1",this.getResource=function(){var e=Object(R.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(n)+", received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllProducts=Object(R.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/products/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getProduct=function(){var e=Object(R.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/products/".concat(n,"/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.addOrder=function(){var e=Object(R.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/orders/",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};u.a.render(a.a.createElement(o.a,{store:B},a.a.createElement(D,null,a.a.createElement(v,{value:T},a.a.createElement(s.a,{basename:"/leave-me"},a.a.createElement(x,null))))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0ba5dbbf.chunk.js.map