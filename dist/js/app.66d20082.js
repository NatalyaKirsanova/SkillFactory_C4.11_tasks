(function(t){function o(o){for(var r,i,n=o[0],d=o[1],l=o[2],c=0,p=[];c<n.length;c++)i=n[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);u&&u(o);while(p.length)p.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],r=!0,n=1;n<e.length;n++){var d=e[n];0!==s[d]&&(r=!1)}r&&(a.splice(o--,1),t=i(i.s=e[0]))}return t}var r={},s={app:0},a=[];function i(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)i.d(e,r,function(o){return t[o]}.bind(null,r));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=o,n=n.slice();for(var l=0;l<n.length;l++)o(n[l]);var u=d;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var r=e("85ec"),s=e.n(r);s.a},"33f6":function(t,o,e){},"39a3":function(t,o,e){"use strict";var r=e("33f6"),s=e.n(r);s.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("f9e3");var r=e("5f5b"),s=e("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],n=(e("034f"),e("2877")),d={},l=Object(n["a"])(d,a,i,!1,null,null,null),u=l.exports,c=e("8c4f"),p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"col-sm-10"},[e("h1",[t._v("Задачи: "+t._s(t.kolTaskTrue+t.kolTaskFalse))]),t.showConfirmation?e("confirmation",{attrs:{message:t.message},on:{new_trigger:t.show_alert}}):t._e(),e("div"),e("div",{staticClass:"d-flex flex-row justify-content-between mb-4"},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-modal",modifiers:{"todo-modal":!0}}],staticClass:"btn btn-success btn-sm align-left d-block",attrs:{type:"button",id:"task-add"}},[t._v(" Добавить задачу ")]),e("button",{staticClass:"btn btn-danger btn-sm align-left d-block",attrs:{type:"button",id:"task-del"},on:{click:t.delete_all}},[t._v(" Удалить все задачи ")])]),e("table",{staticClass:"table table-dark table-stripped table-hover"},[e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[e("font",{attrs:{color:"green"}},[t._v("Вып.:")])],1),e("th",[e("font",{attrs:{color:"green"}},[t._v(t._s(t.kolTaskTrue))])],1),e("th",[e("font",{attrs:{color:"red"}},[t._v("Не вып.:")])],1),e("th",[e("font",{attrs:{color:"red"}},[t._v(t._s(t.kolTaskFalse))])],1)]),t._m(0)]),e("tbody",t._l(t.todos,(function(o,r){return e("tr",{key:r},[e("td",{staticClass:"todo-uid"},[t._v(t._s(o.uid))]),e("td",[t._v(t._s(o.description))]),e("td",[o.is_completed?e("span",[t._v("Выполнено")]):e("span",[t._v("Не выполнено")])]),e("td",[e("div",{staticClass:"btn-group",attrs:{role:"group"}},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.todo-update-modal",modifiers:{"todo-update-modal":!0}}],staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.updateTodo(o)}}},[t._v("Обновить")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteTodo(o)}}},[t._v("X")])])])])})),0)]),e("b-modal",{ref:"addTodoModal",attrs:{id:"todo-modal",title:"Добавить задачу","hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{id:"form-description-group",label:"Описание:","label-for":"form-description-input"}},[e("b-form-input",{attrs:{id:"form-description-input",type:"text",required:"",placeholder:"Завести задачу"},model:{value:t.addTodoForm.description,callback:function(o){t.$set(t.addTodoForm,"description",o)},expression:"addTodoForm.description"}})],1),e("b-form-group",{attrs:{id:"form-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-checks"},model:{value:t.addTodoForm.is_completed,callback:function(o){t.$set(t.addTodoForm,"is_completed",o)},expression:"addTodoForm.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Добавить")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1),e("b-modal",{ref:"updateTodoModal",attrs:{id:"todo-update-modal",title:"Update","hide-footer":""}},[e("b-form",{staticClass:"w-100",on:{submit:t.onUpdateSubmit,reset:t.onUpdateReset}},[e("b-form-group",{attrs:{id:"form-update-description-group",label:"Описание:","label-for":"form-update-description-input"}},[e("b-form-input",{attrs:{id:"form-update-description-input",type:"text",required:""},model:{value:t.updateTodoForm.description,callback:function(o){t.$set(t.updateTodoForm,"description",o)},expression:"updateTodoForm.description"}})],1),e("b-form-group",{attrs:{id:"form-update-complete-group"}},[e("b-form-checkbox-group",{attrs:{id:"form-update-checks"},model:{value:t.updateTodoForm.is_completed,callback:function(o){t.$set(t.updateTodoForm,"is_completed",o)},expression:"updateTodoForm.is_completed"}},[e("b-form-checkbox",{attrs:{value:"true"}},[t._v("Задача выполнена?")])],1)],1),e("b-button-group",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Обновить")]),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Сброс")])],1)],1)],1)],1)])},m=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("tr",[e("th",[t._v("Uid")]),e("th",[t._v("Описание")]),e("th",[t._v("Выполнена?")]),e("th")])}],f=(e("a4d3"),e("e01a"),e("fb6a"),e("a9e3"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-alert",{attrs:{variant:"success",show:"",dismissible:""},on:{dismissed:t.showalert}},[t._v(t._s(t.message)+" ")])],1)}),h=[],b={props:["message"],methods:{showalert:function(){this.$emit("new_trigger")}}},v=b,_=Object(n["a"])(v,f,h,!1,null,null,null),g=_.exports,T={name:"Todo",data:function(){return{todos:[],addTodoForm:{description:"",is_completed:[]},updateTodoForm:{uid:0,description:"",is_completed:[]},message:"",showConfirmation:!1,kolTaskTrue:0,kolTaskFalse:0}},methods:{getTodos:function(){this.todos=[],this.kolTaskTrue=0,this.kolTaskFalse=0;for(var t=0;t<localStorage.length;t+=1){var o=localStorage.key(t);if("task-"===o.slice(0,5)){var e=JSON.parse(localStorage.getItem(o));this.todos.push(e),e.is_completed?this.kolTaskTrue+=1:this.kolTaskFalse+=1}}this.todos.sort((function(t,o){return t.uid-o.uid}))},resetForm:function(){this.addTodoForm.description="",this.addTodoForm.is_completed=[],this.updateTodoForm.description="",this.updateTodoForm.is_completed=[]},onSubmit:function(t){t.preventDefault(),this.$refs.addTodoModal.hide();for(var o=0,e="",r=0,s=0;s<localStorage.length;s+=1)e=localStorage.key(s),"task-"===e.slice(0,5)&&(o=Number(e.substr(5)),o>r&&(r=o));var a="task-".concat(r+1),i={description:this.addTodoForm.description,is_completed:this.addTodoForm.is_completed.length>0,uid:String(r+1)};localStorage.setItem(a,JSON.stringify(i)),this.getTodos(),this.message='Задача "'.concat(i.description,'" добавлена'),this.showConfirmation=!0,this.showDismissibleAlert=!0,this.resetForm()},onReset:function(t){t.preventDefault(),this.$refs.addTodoModal.hide(),this.resetForm()},updateTodo:function(t){this.updateTodoForm.uid=t.uid,this.updateTodoForm.description=t.description,t.is_completed&&(this.updateTodoForm.is_completed=[!0])},onUpdateSubmit:function(t){t.preventDefault(),this.$refs.updateTodoModal.hide();var o={description:this.updateTodoForm.description,is_completed:this.updateTodoForm.is_completed.length>0,uid:this.updateTodoForm.uid};localStorage.setItem("task-".concat(o.uid),JSON.stringify(o)),this.message="Задача обновлена",this.showConfirmation=!0,this.getTodos()},onUpdateReset:function(t){t.preventDefault(),this.$refs.updateTodoModal.hide(),this.resetForm()},deleteTodo:function(t){localStorage.removeItem("task-".concat(t.uid)),this.message="Задача удалена из списка",this.getTodos(),this.showConfirmation=!0},show_alert:function(){this.showConfirmation=!this.showConfirmation},delete_all:function(){localStorage.clear(),this.todos=[],this.kolTaskTrue=0,this.kolTaskFalse=0}},components:{confirmation:g},created:function(){this.getTodos()}},k=T,y=(e("39a3"),Object(n["a"])(k,p,m,!1,null,null,null)),F=y.exports;s["default"].use(c["a"]);var w=new c["a"]({mode:"history",base:"",routes:[{path:"/todos",name:"todos",component:F}]});s["default"].use(r["a"]),s["default"].config.productionTip=!1,new s["default"]({router:w,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,o,e){}});
//# sourceMappingURL=app.66d20082.js.map