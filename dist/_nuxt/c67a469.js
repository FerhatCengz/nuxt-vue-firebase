(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{268:function(t,e,o){"use strict";var n={data:function(){return{post:{title:null,subTitle:null,author:null,text:null}}},props:{isUpdate:{type:Boolean,required:!1,default:!1}},methods:{onSubmit:function(){this.$emit("submit",this.post)}}},l=o(20),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center"},[e("form",{staticStyle:{width:"500px"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("fieldset",[t.isUpdate?e("legend",[t._v("Köse Yazısı Düzenle")]):e("legend",[t._v("Yeni Köse Yazısı")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Yazar Adı")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.author,expression:"post.author"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Yazarın adını giriniz.."},domProps:{value:t.post.author},on:{input:function(e){e.target.composing||t.$set(t.post,"author",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Baslık")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Yazının baslıgını giriniz.."},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Alt Baslık")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.subTitle,expression:"post.subTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Yazının alt baslıgını giriniz.."},domProps:{value:t.post.subTitle},on:{input:function(e){e.target.composing||t.$set(t.post,"subTitle",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Köse Yazısı")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.text,expression:"post.text"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.text},on:{input:function(e){e.target.composing||t.$set(t.post,"text",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.$router.push("/admin")}}},[t._v("İptal")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Kaydet")])])])])}),[],!1,null,null,null);e.a=component.exports},274:function(t,e,o){"use strict";o.r(e);var n={components:{PostForm:o(268).a}},l=o(20),component=Object(l.a)(n,(function(){return(0,this._self._c)("PostForm",{attrs:{"is-update":!0}})}),[],!1,null,null,null);e.default=component.exports}}]);