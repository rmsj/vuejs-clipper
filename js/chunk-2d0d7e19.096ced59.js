(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7e19"],{7967:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"area"},[t("h2",[e._v("Quick Start")]),t("h3",[e._v("First setup")]),e._m(0),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.initapp.html,expression:"code.initapp.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.initapp.js,expression:"code.initapp.js"}]},[t("code",{staticClass:"javascript"})]),t("div",{staticClass:"title"},[e._v("Css")]),t("div",[e._v("set clipper width")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.initapp.css,expression:"code.initapp.css"}]},[t("code",{staticClass:"css"})]),t("div",{staticClass:"title"},[e._v("Result")]),t("clipper-basic",{staticClass:"my-clipper",attrs:{src:"ex1.jpg"}})],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Upload image")]),t("div",[e._v("\n            You can use clipper-upload directly or implement by yourself.\n        ")]),t("h4",[e._v("(1) implement by yourself")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("add a file input")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload.html,expression:"code.upload.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("div",[e._v("tranfrom file to URL")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload.js,expression:"code.upload.js"}]},[t("code",{staticClass:"javascript"})]),t("div",{staticClass:"title"},[e._v("Css")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload.css,expression:"code.upload.css"}]},[t("code",{staticClass:"css"})])]),t("h4",[e._v("(2) Use clipper-upload")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("add clipper-upload, bind data.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload2.html,expression:"code.upload2.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.upload2.js,expression:"code.upload2.js"}]},[t("code",{staticClass:"javascript"})])]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Result (use clipper-upload)")]),t("clipper-upload",{model:{value:e.imgURL[0],callback:function(s){e.$set(e.imgURL,0,s)},expression:"imgURL[0]"}},[e._v("upload image")]),t("clipper-basic",{staticClass:"my-clipper",attrs:{src:e.imgURL[0]}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])])],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Get clipping result")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("Add a button")]),t("div",[e._v("Set 'ref' to use component's methods.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.result.html,expression:"code.result.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Js")]),t("div",[e._v("Add data")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.result.js1,expression:"code.result.js1"}]},[t("code",{staticClass:"javascript"})]),t("div",[e._v("Add getResult method")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.result.js,expression:"code.result.js"}]},[t("code",{staticClass:"javascript"})]),t("div",{staticClass:"title"},[e._v("Result")]),t("clipper-upload",{model:{value:e.imgURL[1],callback:function(s){e.$set(e.imgURL,1,s)},expression:"imgURL[1]"}},[e._v("upload image")]),t("button",{on:{click:function(s){e.getResult(1)}}},[e._v("clip image")]),t("clipper-basic",{ref:e.refs[1],staticClass:"my-clipper",attrs:{src:e.imgURL[1]}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])]),t("div",[t("div",[e._v("result:")]),t("img",{staticClass:"result",attrs:{src:e.resultURL[1],alt:""}})]),t("div",[e._v("There are many ways to transform canvas to URL,")]),t("div",[e._v("See more about "),t("router-link",{attrs:{to:"/examples/canvas-to-image"}},[e._v("canvas to image")]),e._v(".")],1)],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Preview clipping result")]),t("div",{staticClass:"tab"},[t("div",{staticClass:"title"},[e._v("Html")]),t("div",[e._v("Add clipper-preview component, set name.")]),t("div",[e._v("Add preview prop to clipper-basic that matches clipper-preview's name")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.preview.html,expression:"code.preview.html"}]},[t("code",{staticClass:"html"})]),t("div",{staticClass:"title"},[e._v("Result")]),t("clipper-upload",{model:{value:e.imgURL[2],callback:function(s){e.$set(e.imgURL,2,s)},expression:"imgURL[2]"}},[e._v("upload image")]),t("button",{on:{click:function(s){e.getResult(2)}}},[e._v("clip image")]),t("clipper-basic",{ref:e.refs[2],staticClass:"my-clipper",attrs:{src:e.imgURL[2],preview:"my-preview"}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])]),t("div",[t("div",[e._v("preview:")]),t("clipper-preview",{staticClass:"my-clipper",attrs:{name:"my-preview"}},[t("div",{staticClass:"placeholder",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("preview area")])])],1),t("div",[t("div",[e._v("result:")]),t("img",{staticClass:"result",attrs:{src:e.resultURL[2],alt:""}})])],1)]),t("div",{staticClass:"area"},[t("h3",[e._v("Full code")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.full,expression:"code.full"}]},[t("code",{staticClass:"html"})])])])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"p"},[e._v("Use components after "),t("a",{attrs:{href:"https://www.npmjs.com/package/vuejs-clipper",target:"_blank"}},[e._v("installation")]),e._v(".")])}],l=(t("cadf"),t("551c"),t("097d"),t("09b5")),c={data:function(){return{code:l["a"],refs:["clipper1","clipper2","clipper3"],imgURL:["","",""],resultURL:["","",""]}},methods:{getResult:function(e){var s=this.$refs[this.refs[e]].clip();this.$set(this.resultURL,e,s.toDataURL("image/jpg",1))}}},r=c,v=t("2877"),d=Object(v["a"])(r,i,a,!1,null,null,null);d.options.__file="Ex-quick-start.vue";s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d7e19.096ced59.js.map