(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{A6O4:function(n,t,o){"use strict";o.r(t),o.d(t,"SummaryPageModule",(function(){return v}));var e=o("ofXK"),c=o("3Pt+"),r=o("tyNb"),i=o("TEn/"),s=o("Ubhk"),a=o("fXoL"),b=o("sYmb"),u=o("HmFA");function l(n,t){1&n&&a.Ib(0,"ion-icon",11)}function m(n,t){1&n&&a.Ib(0,"ion-icon",12)}var g=function(n,t){return{correct:n,incorrect:t}};function f(n,t){if(1&n){var o=a.Lb();a.Kb(0,"ion-item",4),a.Sb("click",(function(){a.hc(o);var n=t.index;return a.Wb().goToQuestion(n)})),a.Kb(1,"ion-label",5),a.Kb(2,"span",6),a.nc(3),a.Jb(),a.Kb(4,"span",7),a.nc(5),a.Jb(),a.Ib(6,"app-answers",8),a.Jb(),a.mc(7,l,1,0,"ion-icon",9),a.mc(8,m,1,0,"ion-icon",10),a.Jb()}if(2&n){var e=t.$implicit,c=t.index;a.bc("ngClass",a.fc(6,g,!0===e.correct,!1===e.correct)),a.xb(3),a.oc(c+1),a.xb(2),a.pc(" ",e.givenAnswer," "),a.xb(1),a.bc("question",e),a.xb(1),a.bc("ngIf",!0===e.correct),a.xb(1),a.bc("ngIf",!1===e.correct)}}var p=function(){function n(n,t,o,e){this.navCtrl=n,this.platform=t,this.questionService=o,this.translate=e,this.summaryText="",this.questions=this.questionService.questions,this.questionService.resetAnsweredStatus(),this.setSummaryText()}return n.prototype.setSummaryText=function(){this.summaryText=this.translate.instant("summary.text",{correct:this.questionService.getTotalCorrect(),total:this.questions.length})},n.prototype.goToQuestion=function(n){this.questionService.index=n,this.navCtrl.navigateBack("/review")},n.\u0275fac=function(t){return new(t||n)(a.Hb(i.B),a.Hb(i.C),a.Hb(s.a),a.Hb(b.d))},n.\u0275cmp=a.Bb({type:n,selectors:[["app-summary"]],decls:14,vars:8,consts:[["color","secondary"],["slot","end"],["routerLink","/home","routerDirection","root"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"ion-text-wrap"],[1,"number"],["lang","ja",1,"given-answer"],[3,"question"],["name","checkmark-circle","color","success","slot","end",4,"ngIf"],["name","close-circle","color","danger","slot","end",4,"ngIf"],["name","checkmark-circle","color","success","slot","end"],["name","close-circle","color","danger","slot","end"]],template:function(n,t){1&n&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar",0),a.Kb(2,"ion-title"),a.nc(3),a.Xb(4,"translate"),a.Jb(),a.Kb(5,"ion-buttons",1),a.Kb(6,"ion-button",2),a.nc(7),a.Xb(8,"translate"),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Kb(9,"ion-content"),a.Kb(10,"ion-list"),a.Kb(11,"ion-item"),a.nc(12),a.Jb(),a.mc(13,f,9,9,"ion-item",3),a.Jb(),a.Jb()),2&n&&(a.xb(3),a.pc(" ",a.Yb(4,4,"summary.title")," "),a.xb(4),a.pc(" ",a.Yb(8,6,"summary.close")," "),a.xb(5),a.oc(t.summaryText),a.xb(1),a.bc("ngForOf",t.questions))},directives:[i.l,i.y,i.x,i.f,i.e,i.D,r.g,i.i,i.p,i.n,e.i,e.h,i.o,u.a,e.j,i.m],pipes:[b.c],styles:['ion-item[_ngcontent-%COMP%]{font-size:1.6rem}.number[_ngcontent-%COMP%]{color:#666}.number[_ngcontent-%COMP%]:after{content:"."}.summary[_ngcontent-%COMP%]{overflow-y:scroll;display:block}.correct[_ngcontent-%COMP%]   .given-answer[_ngcontent-%COMP%]{color:var(--ion-color-success)}.incorrect[_ngcontent-%COMP%]   .given-answer[_ngcontent-%COMP%]{color:var(--ion-color-danger)}answers[_ngcontent-%COMP%]   ion-list.list-ios[_ngcontent-%COMP%]{margin-bottom:0}ion-item[_ngcontent-%COMP%]:hover{cursor:pointer}']}),n}(),h=o("j1ZV"),d=[{path:"",component:p}],v=function(){function n(){}return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[e.b,c.b,i.z,r.h.forChild(d),b.b.forChild(),h.a]]}),n}()}}]);