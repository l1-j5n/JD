webpackJsonp([15],{Hz1P:function(t,e){},bnxR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"Login",data:function(){return{emilSum:this.$route.params.emilNum,description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"}},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}},mounted:function(){console.log(this.$router)},components:{GlobalFooter:i("MLgu").a}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticStyle:{height:"80px"}}),t._v(" "),i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("div",[i("a-icon",{staticStyle:{"font-size":"56px"},attrs:{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"}}),t._v(" "),i("p",{staticStyle:{"font-size":"30px","margin-top":"40px"}},[t._v("您的账户："+t._s(t.emilSum)+"注册成功")]),t._v(" "),i("p",[t._v(t._s(t.description))]),t._v(" "),i("div",{staticStyle:{"margin-top":"50px"}},[i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:t.goHomeHandle}},[t._v("返回首页")])],1),t._v(" "),i("div",{staticStyle:{height:"70px"}})],1)]),t._v(" "),i("GlobalFooter")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("div",{staticClass:"header"},[e("img",{staticClass:"logo",attrs:{alt:"logo",src:i("6v7K")}}),this._v(" "),e("span",{staticClass:"title"},[this._v("我也不知道叫啥名！")])]),this._v(" "),e("div",{staticClass:"desc"},[this._v("我也不知道怎么描述一下子！")])])}]};var o=i("VU/8")(s,n,!1,function(t){i("Hz1P")},null,null);e.default=o.exports}});