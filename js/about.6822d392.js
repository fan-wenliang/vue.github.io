"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[443],{9589:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var l=s(3396),r=s(7139);const n={class:"progress-wrap"},a=(0,l._)("p",null,"上传进度",-1),i={class:"progress"};function o(e,t,s,o,u,p){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",null,[(0,l._)("input",{type:"file",onChange:t[0]||(t[0]=e=>p.fileSelect(e))},null,32),(0,l._)("button",{onClick:t[1]||(t[1]=(...e)=>p.fileSubmit&&p.fileSubmit(...e))},"上传")]),(0,l._)("div",n,[a,(0,l._)("p",i,[(0,l._)("span",{style:(0,r.j5)(p.style)},null,4)])])])}var u={data(){return{file:{},progressBar:0}},computed:{style(){return{width:this.progressBar+"%"}}},methods:{fileSelect(e){this.file=e.target.files[0]},async fileSubmit(){const e=new FormData;e.append("file",this.file),await this.$axios.post("http://localhost:3000/file/upload",e,{onUploadProgress:e=>{var t=Math.round(100*e.loaded/e.total);this.progressBar=t}}).then((e=>{console.log(e.data)}))}}},p=s(89);const c=(0,p.Z)(u,[["render",o]]);var f=c}}]);
//# sourceMappingURL=about.6822d392.js.map