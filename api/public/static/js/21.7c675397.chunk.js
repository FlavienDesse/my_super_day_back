(this.webpackJsonpmy_super_day=this.webpackJsonpmy_super_day||[]).push([[21],{601:function(e,t,a){"use strict";a.r(t),a.d(t,"NoteBlock",(function(){return x}));var n=a(96),i=a(15),l=a(0),r=a.n(l),o=a(589),c=Object(o.a)((function(e){return{gridContainer:{marginTop:"50px !important",marginBottom:"100px !important"},gridContainerSavedNote:{marginTop:"15px !important"},inputSaveFile:{width:"100%"},gridContainerModal:{marginTop:"15px"},title:{textAlign:"center"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{position:"absolute",width:350,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},editIcon:{fill:"rgba(255,140,0)"}}})),s=a(247),u=a(143),d=a(155),m=a.n(d),p=a(371),f=a.n(p),v=a(328),b=a(591),y=a(520),E=a.n(y);var h=function(e){var t=c(),a=r.a.useState(!0),n=Object(i.a)(a,2),l=n[0],o=n[1],d=r.a.useState(!0),p=Object(i.a)(d,2),b=p[0],y=p[1],h=r.a.useState(!1),g=Object(i.a)(h,2),N=g[0],j=g[1],S=r.a.useState(e.value),O=Object(i.a)(S,2),C=O[0],x=O[1];return r.a.createElement(v.a,{item:!0,xs:12,className:t.gridContainerSavedNote},r.a.createElement(v.a,{container:!0,spacing:0,justify:"center",alignItems:"center"},r.a.createElement(v.a,{item:!0,xs:7},r.a.createElement(s.a,{label:e.name,id:"outlined-basic",InputProps:{readOnly:l},multiline:!0,onChange:function(e){x(e.currentTarget.value)},value:C,className:t.inputSaveFile,variant:"outlined",size:"small"})),r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{"aria-label":"save",disabled:b,onClick:function(){j(!N),y(!b),o(!l),e.updateNoteDB(e.pos,C)}},r.a.createElement(f.a,{style:{fontSize:29},color:"primary"}))),r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{"aria-label":"delete",onClick:function(){return e.deleteNote(e.pos)}},r.a.createElement(m.a,{style:{fontSize:29},color:"secondary"}))),r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{"aria-label":"save",onClick:function(){y(!b),o(!l),j(!N)},disabled:N},r.a.createElement(E.a,{className:t.editIcon})))))},g=a(605),N=a(154),j=function e(t,a,n){Object(N.a)(this,e),this.name=t,this.value=a,this.id=n},S=a(16);function O(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}function C(e){var t=r.a.useRef(),a=c(),n=r.a.useState(O),l=Object(i.a)(n,1)[0];return r.a.createElement("div",null,r.a.createElement(g.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e.open,onClose:e.handleClose},r.a.createElement("div",{style:l,className:a.paper},r.a.createElement(v.a,null,r.a.createElement(v.a,{container:!0,justify:"center"},r.a.createElement("h3",null,"Titre de la note :")),r.a.createElement(v.a,{container:!0,justify:"center"},r.a.createElement(s.a,{inputRef:t,id:"outlined-basic",placeholder:"Titre",variant:"outlined",size:"small"})),r.a.createElement(v.a,{container:!0,justify:"space-evenly",alignItems:"center",className:a.gridContainerModal},r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){var a=e.allSaveFile.slice(),n={method:"POST",headers:Object.assign({},Object(S.b)(),{"Content-Type":"application/json"}),body:JSON.stringify({id_user:encodeURI(JSON.parse(window.localStorage.getItem("users")).id),title:t.current.value,value:e.valueTextFieldNote.value})};fetch("".concat(window.url,"/mysuperday/api/blocNotes/addNote"),n).then((function(e){return e.json()})).then((function(n){a.push(new j(t.current.value,e.valueTextFieldNote.value,n.id)),e.setAllSaveFile(a),e.handleClose()}))}},"VALIDER")),r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{variant:"contained",color:"secondary"},"ANNULER")))))))}function x(e){var t=c(),a=r.a.useState(!1),o=Object(i.a)(a,2),d=o[0],p=o[1],y=r.a.useState([]),E=Object(i.a)(y,2),g=E[0],N=E[1],O=r.a.useRef(),x=function(){p(!0)};function w(e,t){var a={method:"POST",headers:Object.assign({},Object(S.b)(),{"Content-Type":"application/json"}),body:JSON.stringify({id:g[e].id,newValue:t})};fetch("".concat(window.url,"/mysuperday/api/blocNotes/updateNote"),a).then((function(e){return e.json()}))}function T(e){var t={method:"POST",headers:Object.assign({},Object(S.b)(),{"Content-Type":"application/json"}),body:JSON.stringify({id:g[e].id})};fetch("".concat(window.url,"/mysuperday/api/blocNotes/deleteNote"),t).then((function(e){return e.json()})).then((function(t){var a=g.slice();a.splice(e,1),N(a)}))}return Object(l.useEffect)((function(){var e={method:"POST",headers:Object.assign({},Object(S.b)(),{"Content-Type":"application/json"}),body:JSON.stringify({id_user:encodeURI(JSON.parse(window.localStorage.getItem("users")).id)})};fetch("".concat(window.url,"/mysuperday/api/blocNotes/getAllNotes"),e).then((function(e){return e.json()})).then((function(e){var t,a=[],i=Object(n.a)(e);try{for(i.s();!(t=i.n()).done;){var l=t.value;a.push(new j(l.title,l.value,l.id))}}catch(r){i.e(r)}finally{i.f()}N(a)}))}),[]),r.a.createElement("div",{className:t.container},r.a.createElement(C,{allSaveFile:g,valueTextFieldNote:O.current,setAllSaveFile:N,handleOpen:x,handleClose:function(){p(!1)},open:d}),r.a.createElement(v.a,{container:!0,justify:"center"},r.a.createElement(v.a,{item:!0,xs:4,className:t.title},r.a.createElement(b.a,{variant:"elevation",elevation:5,color:"primary"},"Generation d'une nouvelle note")),r.a.createElement(v.a,{container:!0,item:!0,xs:12,spacing:0,justify:"center",alignItems:"center",className:t.gridContainer},r.a.createElement(v.a,{item:!0,xs:7},r.a.createElement(s.a,{inputRef:O,id:"outlined-basic",placeholder:"Nouvelle note",multiline:!0,rows:3,className:t.inputSaveFile,variant:"outlined",size:"small"})),r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{"aria-label":"save"},r.a.createElement(f.a,{onClick:function(){return x()},style:{fontSize:29},color:"primary"}))),r.a.createElement(v.a,{item:!0,xs:"auto"},r.a.createElement(u.a,{"aria-label":"delete"},r.a.createElement(m.a,{onClick:function(){return O.current.value=""},style:{fontSize:29},color:"secondary"})))),r.a.createElement(v.a,{item:!0,xs:3,className:t.title},r.a.createElement(b.a,{variant:"elevation",elevation:5,color:"primary"},"Consultation des notes")),g.map((function(e,t){return r.a.createElement(h,{updateNoteDB:w,key:t.toString(),pos:t,deleteNote:T,name:e.name,value:e.value})}))))}}}]);
//# sourceMappingURL=21.7c675397.chunk.js.map