(this.webpackJsonplotto=this.webpackJsonplotto||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(26),c=n.n(i),a=(n(33),n(8)),o=n(9),l=n(11),u=n(10),b=(n(34),n(35),n(59)),m=n(60),d=n(27),h=n(13),j=n.n(h),f=n(61),p=n(62),x=n(7),O=n.n(x),v=n(12),N=n(1),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={lottonumber:"",price1:[],nearPrice1:[],price2:[],price3:[],price4:[],price5:[],front3:[],back3:[],back2:[],status:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://lotto.api.rayriffy.com/latest").then((function(t){e.setState({price1:t.data.response.prizes[0].number,nearPrice1:t.data.response.prizes[1].number,price2:t.data.response.prizes[2].number,price3:t.data.response.prizes[3].number,price4:t.data.response.prizes[4].number,price5:t.data.response.prizes[5].number,front3:t.data.response.runningNumbers[0].number,back3:t.data.response.runningNumbers[1].number,back2:t.data.response.runningNumbers[2].number})}))}},{key:"render",value:function(){var e=this;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"mt-4",children:[Object(N.jsx)(f.a,{onSubmit:function(t){t.preventDefault();var n=e.state.lottonumber,r=e.state.price1.find((function(e){return e===n}));if(void 0!==r)O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(r),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 1 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 6,000,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else{var s=e.state.nearPrice1.find((function(e){return e===n}));if(void 0!==s)O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(s),icon:"success",html:'<b style="color:green;">\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e02\u0e49\u0e32\u0e07\u0e40\u0e04\u0e35\u0e22\u0e07\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 1 \u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e25\u0e30 100,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else{var i=e.state.price2.find((function(e){return e===n}));if(void 0!==i)O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(i),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 2 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 200,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else{var c=e.state.price3.find((function(e){return e===n}));if(void 0!==c)O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(c),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 3 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 80,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else{var a=e.state.price4.find((function(e){return e===n}));if(void 0!==a)O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(a),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 4 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 40,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else{var o=e.state.price5.find((function(e){return e===n}));if(void 0!==o)O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(o),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e17\u0e35\u0e48 5 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 20,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else if(void 0!==e.state.front3.find((function(e){return e===n.slice(0,3)})))O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(n),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e40\u0e25\u0e02\u0e2b\u0e19\u0e49\u0e32 3 \u0e15\u0e31\u0e27 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 4,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else if(void 0!==e.state.back3.find((function(e){return e===n.slice(3,6)})))O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(n),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e40\u0e25\u0e02\u0e17\u0e49\u0e32\u0e22 3 \u0e15\u0e31\u0e27 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 4,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}));else void 0!==e.state.back2.find((function(e){return e===n.slice(4,6)}))?O.a.fire({position:"center",title:"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22 ".concat(n),icon:"success",html:'<b style="color:green;">\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e40\u0e25\u0e02\u0e17\u0e49\u0e32\u0e22 2 \u0e15\u0e31\u0e27 \u0e21\u0e39\u0e25\u0e04\u0e48\u0e32 2,000 \u0e1a\u0e32\u0e17</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})})):O.a.fire({position:"center",title:"\u0e40\u0e2a\u0e35\u0e22\u0e43\u0e08\u0e14\u0e49\u0e27\u0e22",icon:"error",html:'<b style="color:red;">\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25 \u0e07\u0e27\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e2d\u0e32\u0e43\u0e2b\u0e21\u0e48\u0e19\u0e30!</b>',showConfirmButton:!1}).then((function(t){e.setState({lottonumber:""})}))}}}}}},children:Object(N.jsxs)(f.a.Row,{className:"align-items-center",children:[Object(N.jsxs)(d.a,{children:[Object(N.jsx)(f.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Name"}),Object(N.jsx)(f.a.Control,{type:"tel",className:"mb-2",id:"inlineFormInput",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e25\u0e02\u0e2a\u0e25\u0e32\u0e01",onChange:function(t){e.setState({lottonumber:t.target.value})},value:this.state.lottonumber,maxLength:"6",minLength:"6",autoComplete:"off",required:!0})]}),Object(N.jsx)(d.a,{md:"auto",xs:"auto",children:Object(N.jsxs)(p.a,{type:"submit",className:"mb-2",children:[Object(N.jsx)(v.c,{})," \u0e15\u0e23\u0e27\u0e08\u0e2b\u0e27\u0e22"]})})]})}),Object(N.jsx)("hr",{})]})})}}]),n}(r.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"mt-5 text-center",children:Object(N.jsxs)("p",{children:["\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13 API \u0e08\u0e32\u0e01"," ",Object(N.jsxs)("a",{href:"https://github.com/rayriffy/thai-lotto-api",target:"_blank",className:"text-decoration-none",children:[Object(N.jsx)(v.b,{})," rayriffy"]})," ","| Develop by"," ",Object(N.jsxs)("a",{href:"https://www.facebook.com/tinngritS77/",target:"_blank",className:"text-decoration-none",children:[Object(N.jsx)(v.a,{})," onze"]})]})})})}}]),n}(r.Component),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={firstPrice:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://lotto.api.rayriffy.com/latest").then((function(t){e.setState({firstPrice:t.data.response})}))}},{key:"render",value:function(){return this.state.firstPrice.prizes?Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"mt-5",children:[Object(N.jsxs)("h4",{className:"text-muted ",children:["\u0e15\u0e23\u0e27\u0e08\u0e2b\u0e27\u0e22\u0e07\u0e27\u0e14\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48:"," ",Object(N.jsx)("span",{className:"text-warning",children:this.state.firstPrice.date})]}),Object(N.jsx)(g,{}),Object(N.jsx)("div",{className:"card bg-price11 shadow",children:Object(N.jsxs)("div",{className:"card-body text-center",children:[this.state.firstPrice.prizes[0].name," / \u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e25\u0e30"," ","\u0e3f".concat(Intl.NumberFormat().format(this.state.firstPrice.prizes[0].reward)),Object(N.jsx)("h1",{className:"display-2",children:this.state.firstPrice.prizes[0].number[0]})]})}),Object(N.jsxs)(m.a,{children:[Object(N.jsx)(d.a,{md:"4",className:"my-3",children:Object(N.jsxs)("div",{className:"card text-center ",children:[Object(N.jsxs)("div",{className:"card-header",children:[this.state.firstPrice.runningNumbers[0].name," ",Object(N.jsx)("br",{}),this.state.firstPrice.runningNumbers[0].amount,"\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e46\u0e25\u0e30"," ","\u0e3f".concat(Intl.NumberFormat().format(this.state.firstPrice.runningNumbers[0].reward))]}),Object(N.jsxs)("div",{className:"card-body text-center",children:[Object(N.jsx)("h1",{children:this.state.firstPrice.runningNumbers[0].number[0]+"  ,  "+this.state.firstPrice.runningNumbers[0].number[1]}),Object(N.jsx)("h1",{})]})]})}),Object(N.jsx)(d.a,{md:"4",className:"my-3",children:Object(N.jsxs)("div",{className:"card text-center ",children:[Object(N.jsxs)("div",{className:"card-header",children:[this.state.firstPrice.runningNumbers[1].name," ",Object(N.jsx)("br",{}),this.state.firstPrice.runningNumbers[1].amount,"\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e46\u0e25\u0e30"," ","\u0e3f".concat(Intl.NumberFormat().format(this.state.firstPrice.runningNumbers[1].reward))]}),Object(N.jsxs)("div",{className:"card-body text-center",children:[Object(N.jsx)("h1",{children:this.state.firstPrice.runningNumbers[1].number[0]+"  ,  "+this.state.firstPrice.runningNumbers[1].number[1]}),Object(N.jsx)("h1",{})]})]})}),Object(N.jsx)(d.a,{md:"4",className:"my-3",children:Object(N.jsxs)("div",{className:"card text-center ",children:[Object(N.jsxs)("div",{className:"card-header",children:[this.state.firstPrice.runningNumbers[2].name," ",Object(N.jsx)("br",{}),this.state.firstPrice.runningNumbers[2].amount,"\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e46\u0e25\u0e30"," ","\u0e3f".concat(Intl.NumberFormat().format(this.state.firstPrice.runningNumbers[2].reward))]}),Object(N.jsx)("div",{className:"card-body text-center",children:Object(N.jsx)("h1",{children:this.state.firstPrice.runningNumbers[2].number[0]})})]})})]}),Object(N.jsx)(m.a,{children:Object(N.jsx)(d.a,{md:"12",children:Object(N.jsx)("div",{className:"card text-center my-2",children:Object(N.jsxs)("div",{className:"card-body text-center",children:[this.state.firstPrice.prizes[1].name," /"," ",this.state.firstPrice.prizes[1].amount,"\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e46\u0e25\u0e30"," ","\u0e3f".concat(Intl.NumberFormat().format(this.state.firstPrice.prizes[1].reward)),Object(N.jsx)("h1",{children:this.state.firstPrice.prizes[1].number[0]+"  ,  "+this.state.firstPrice.prizes[1].number[1]}),Object(N.jsx)("h1",{})]})})})})]}),Object(N.jsx)(y,{})]})}):Object(N.jsx)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:Object(N.jsx)(b.a,{animation:"border",role:"status",children:Object(N.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),n}(r.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),i(e),c(e)}))};c.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(P,{})}),document.getElementById("root")),w()}},[[58,1,2]]]);
//# sourceMappingURL=main.ec5f1d22.chunk.js.map