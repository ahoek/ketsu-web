(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Mxbm:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("mrSG"),e=t("ZZ/e"),i=t("m4HQ"),s=t("OxyS"),r=t("P+PR"),a=t("KGMg"),b=t("d2it"),c=t("Ubhk"),g=function(){function n(n,l,t,u,o,e){this.navCtrl=n,this.dataService=l,this.platform=t,this.google=u,this.speech=o,this.settings=e,this.questions=[],this.questions[0]=new r.a}return Object.defineProperty(n.prototype,"index",{get:function(){return this.dataService.index},set:function(n){this.dataService.index=n},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){return o.b(this,void 0,void 0,function(){var n=this;return o.e(this,function(l){return this.dataService.load().then(function(l){l.length>0&&(n.questions=l),console.log("Loaded questions",n.questions),n.goToQuestion(n.index)}),this.platform.ready().then(function(){n.google.trackView("Review Page")}),[2]})})},n.prototype.ionViewDidEnter=function(){var n=this.answerInputNative.nativeElement;try{s.bind(n)}catch(l){console.error(l)}this.focusAnswerField()},n.prototype.focusAnswerField=function(){var n=this;setTimeout(function(){n.answerInputNative.nativeElement.focus()},250)},n.prototype.nextQuestion=function(){this.index<this.questions.length-1?this.goToQuestion(this.index+1):this.showSummary()},n.prototype.goToQuestion=function(n){var l=this;this.index=n,this.speech.say(this.currentQuestion().reading),this.platform.ready().then(function(){l.google.trackEvent("Question","show",l.questions[l.index].type,1)})},n.prototype.showSummary=function(){this.navCtrl.navigateForward("/summary")},n.prototype.checkAnswer=function(n){var l=this;console.log("Check answer for",n),n.checkAnswer(),!0!==n.answered?(n.answered=!0,n.correct||this.speech.say(n.answers[0].reading),this.platform.ready().then(function(){l.google.trackEvent("Question","answer-check",n.correct?"correct":"incorrect",1)})):this.nextQuestion()},n.prototype.classNames=function(){return this.questions[this.index]?{correct:!0===this.questions[this.index].correct,incorrect:!1===this.questions[this.index].correct}:{}},n.prototype.currentQuestion=function(){var n=this.questions[this.index];if(n){var l=this.getNa(n);return{word:n.word+l,reading:n.reading+l}}},n.prototype.getNa=function(n){return n.isOfType("na-adjective")&&!this.settings.reverse?"\u306a":""},n}(),p=function(){return function(){}}(),f=t("pMnS"),m=t("2M75"),h=t("HmFA"),d=t("oBZk"),k=t("A7o+"),w=t("Ip0R"),C=t("DnE0"),v=t("FpZY"),O=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),j=u.nb({encapsulation:0,styles:[["ion-list[_ngcontent-%COMP%]{margin-bottom:0}ion-item[_ngcontent-%COMP%]{--inner-border-width:0;--inner-padding-top:3px;--inner-padding-bottom:3px;--padding-top:1px;--padding-bottom:1px;--min-height:10px;--background:var(--app-color-bg-light)}[slot=start][_ngcontent-%COMP%]{margin-top:2px;margin-bottom:2px;font-size:1.5rem;width:29px;text-align:center;white-space:nowrap}[slot=start][name=no-suru][_ngcontent-%COMP%], [slot=start][name=tari][_ngcontent-%COMP%]{min-height:1.3rem;font-size:.9rem}[slot=start][name=no-suru][_ngcontent-%COMP%]{text-decoration:line-through}ion-note[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function x(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"span",[["slot","start"]],null,null,null,null,null)),(n()(),u.Fb(-1,null,["\u3066"])),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],null,function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.te-form")))})}function y(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","heart"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"heart")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.tai-form")))})}function M(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","walk"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"walk")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.volitional")))})}function P(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","flag"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"flag")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.potential")))})}function z(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","megaphone"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"megaphone")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.imperative")))})}function _(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,9,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","code-download"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(6,0,null,0,3,"ion-note",[],null,null,null,d.H,d.n)),u.ob(7,49152,null,0,e.W,[u.h,u.k],null,null),(n()(),u.Fb(8,0,["",""])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"code-download")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.conditional"))),n(l,8,0,u.Gb(l,8,0,u.zb(l,9).transform("setting.form.conditional-note")))})}function G(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"span",[["name","tari"],["slot","start"]],null,null,null,null,null)),(n()(),u.Fb(-1,null,["\u305f\u308a"])),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],null,function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.tari-form")))})}function I(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","bonfire"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"bonfire")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.passive")))})}function q(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name",""],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.form.causative")))})}function A(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,9,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","bowtie"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(6,0,null,0,3,"ion-note",[],null,null,null,d.H,d.n)),u.ob(7,49152,null,0,e.W,[u.h,u.k],null,null),(n()(),u.Fb(8,0,["",""])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"bowtie")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.speech-level.formal"))),n(l,8,0,u.Gb(l,8,0,u.zb(l,9).transform("setting.speech-level.formal-note")))})}function F(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,9,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","shirt"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(6,0,null,0,3,"ion-note",[],null,null,null,d.H,d.n)),u.ob(7,49152,null,0,e.W,[u.h,u.k],null,null),(n()(),u.Fb(8,0,["",""])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"shirt")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.speech-level.informal"))),n(l,8,0,u.Gb(l,8,0,u.zb(l,9).transform("setting.speech-level.informal-note")))})}function H(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","happy"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"happy")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.positive/negative.positive")))})}function D(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,5,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","sad"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"sad")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.positive/negative.negative")))})}function T(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,9,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","fastforward"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(6,0,null,0,3,"ion-note",[],null,null,null,d.H,d.n)),u.ob(7,49152,null,0,e.W,[u.h,u.k],null,null),(n()(),u.Fb(8,0,["",""])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"fastforward")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.tense.nonpast"))),n(l,8,0,u.Gb(l,8,0,u.zb(l,9).transform("setting.tense.nonpast-note")))})}function B(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,7,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","rewind"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(4,0,null,0,3,"ion-label",[],null,null,null,d.E,d.k)),u.ob(5,49152,null,0,e.M,[u.h,u.k],null,null),(n()(),u.Fb(6,0,["",""])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"rewind")},function(n,l){n(l,6,0,u.Gb(l,6,0,u.zb(l,7).transform("setting.tense.past")))})}function L(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,9,"ion-item",[],null,null,null,d.D,d.j)),u.ob(1,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"ion-icon",[["name","shuffle"],["slot","start"]],null,null,null,d.C,d.i)),u.ob(3,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(4,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(6,0,null,0,3,"ion-note",[],null,null,null,d.H,d.n)),u.ob(7,49152,null,0,e.W,[u.h,u.k],null,null),(n()(),u.Fb(8,0,["",""])),u.Ab(131072,k.j,[k.k,u.h])],function(n,l){n(l,3,0,"shuffle")},function(n,l){n(l,4,0,u.Gb(l,4,0,u.zb(l,5).transform("setting.special.reverse"))),n(l,8,0,u.Gb(l,8,0,u.zb(l,9).transform("setting.special.reverse-note")))})}function Q(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,34,"ion-list",[["ngClass","settings-list"]],null,null,null,d.G,d.l)),u.ob(1,278528,null,0,w.h,[u.s,u.t,u.k,u.D],{ngClass:[0,"ngClass"]},null),u.ob(2,49152,null,0,e.N,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,x)),u.ob(4,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,y)),u.ob(6,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,M)),u.ob(8,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,P)),u.ob(10,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,z)),u.ob(12,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,_)),u.ob(14,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,G)),u.ob(16,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,I)),u.ob(18,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,q)),u.ob(20,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,A)),u.ob(22,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,F)),u.ob(24,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,H)),u.ob(26,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,D)),u.ob(28,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,T)),u.ob(30,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,B)),u.ob(32,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,L)),u.ob(34,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"settings-list"),n(l,4,0,t.question.isOfType("te-form")),n(l,6,0,t.question.isOfType("tai-form")),n(l,8,0,t.question.isOfType("volitional")),n(l,10,0,t.question.isOfType("potential")),n(l,12,0,t.question.isOfType("imperative")),n(l,14,0,t.question.isOfType("conditional")),n(l,16,0,t.question.isOfType("tari-form")),n(l,18,0,t.question.isOfType("passive")),n(l,20,0,t.question.isOfType("causative")),n(l,22,0,t.question.isOfType("polite")),n(l,24,0,t.question.isOfType("plain")),n(l,26,0,t.question.isOfType("positive")),n(l,28,0,t.question.isOfType("negative")),n(l,30,0,t.question.isOfType("present")),n(l,32,0,t.question.isOfType("past")),n(l,34,0,!0===(null==t.settings?null:t.settings.reverse))},null)}var S=t("gIcY"),N=u.nb({encapsulation:0,styles:[[".scroll-content[_ngcontent-%COMP%]{overflow:hidden}.item-block[_ngcontent-%COMP%]{min-height:3rem}.dictionary[_ngcontent-%COMP%]{margin-top:17px}.dictionary[_ngcontent-%COMP%]   furigana[_ngcontent-%COMP%]{max-width:60%;font-size:2.1em}.dictionary[_ngcontent-%COMP%]   furigana[_ngcontent-%COMP%]   rt[_ngcontent-%COMP%]{font-size:60%}.dictionary[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{max-width:40%;color:var(--ion-color-dark)}.answer-item[_ngcontent-%COMP%]{margin-top:0;font-size:1.6em;line-height:1.2}.answer-item[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(170,170,170,.6)}.answer-item[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(170,170,170,.6)}.answer-item[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(170,170,170,.6)}.answer-item[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(170,170,170,.6)}.answer-item[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%]::placeholder{color:rgba(170,170,170,.6)}.answer-item.item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{padding-right:0}.answer-item[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]{margin:0;height:100%;width:45px}.answer-item[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;font-size:2em}.answer-input[_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%]{background-color:transparent}.answer-input[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;outline:0;border:none}.correct[_ngcontent-%COMP%]   .answer-item[_ngcontent-%COMP%]{--background:var(--ion-color-success);--color:var(--ion-color-success-contrast)}.correct[_ngcontent-%COMP%]   [type=submit][_ngcontent-%COMP%]{color:var(--ion-color-success-contrast)}.incorrect[_ngcontent-%COMP%]   .answer-item[_ngcontent-%COMP%]{--background:var(--ion-color-danger);--color:var(--ion-color-danger-contrast)}.incorrect[_ngcontent-%COMP%]   [type=submit][_ngcontent-%COMP%]{color:var(--ion-color-danger-contrast)}"]],data:{}});function E(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-answers",[],null,null,null,m.b,m.a)),u.ob(1,114688,null,0,h.a,[],{question:[0,"question"]},null)],function(n,l){var t=l.component;n(l,1,0,t.questions[t.index])},null)}function W(n){return u.Hb(0,[u.Db(402653184,1,{answerInputNative:0}),(n()(),u.pb(1,0,null,null,22,"ion-header",[],null,null,null,d.B,d.h)),u.ob(2,49152,null,0,e.A,[u.h,u.k],null,null),(n()(),u.pb(3,0,null,0,20,"ion-toolbar",[],null,null,null,d.N,d.t)),u.ob(4,49152,null,0,e.Ab,[u.h,u.k],null,null),(n()(),u.pb(5,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,d.x,d.d)),u.ob(6,49152,null,0,e.k,[u.h,u.k],null,null),(n()(),u.pb(7,0,null,0,5,"ion-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.showSummary()&&u),u},d.w,d.c)),u.ob(8,49152,null,0,e.j,[u.h,u.k],null,null),(n()(),u.pb(9,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,d.C,d.i)),u.ob(10,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.Fb(11,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(13,0,null,0,2,"ion-title",[],null,null,null,d.M,d.s)),u.ob(14,49152,null,0,e.yb,[u.h,u.k],null,null),(n()(),u.Fb(15,0,[" "," / "," "])),(n()(),u.pb(16,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,d.x,d.d)),u.ob(17,49152,null,0,e.k,[u.h,u.k],null,null),(n()(),u.pb(18,0,null,0,5,"ion-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.nextQuestion()&&u),u},d.w,d.c)),u.ob(19,49152,null,0,e.j,[u.h,u.k],null,null),(n()(),u.Fb(20,0,[" "," "])),u.Ab(131072,k.j,[k.k,u.h]),(n()(),u.pb(22,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,d.C,d.i)),u.ob(23,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.pb(24,0,null,null,33,"ion-content",[],null,null,null,d.z,d.f)),u.ob(25,278528,null,0,w.h,[u.s,u.t,u.k,u.D],{ngClass:[0,"ngClass"]},null),u.ob(26,49152,null,0,e.t,[u.h,u.k],null,null),(n()(),u.pb(27,0,null,0,6,"ion-item",[["class","dictionary"]],null,null,null,d.D,d.j)),u.ob(28,49152,null,0,e.G,[u.h,u.k],null,null),(n()(),u.pb(29,0,null,0,1,"furigana",[],null,null,null,C.b,C.a)),u.ob(30,49152,null,0,v.a,[],{input:[0,"input"]},null),(n()(),u.pb(31,0,null,0,2,"ion-note",[["class","note"],["slot","end"]],null,null,null,d.H,d.n)),u.ob(32,49152,null,0,e.W,[u.h,u.k],null,null),(n()(),u.Fb(33,0,[" "," "])),(n()(),u.pb(34,0,null,0,1,"app-review-settings-list",[],null,null,null,Q,j)),u.ob(35,114688,null,0,O,[],{question:[0,"question"],settings:[1,"settings"]},null),(n()(),u.pb(36,0,null,0,19,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,t){var o=!0,e=n.component;return"submit"===l&&(o=!1!==u.zb(n,38).onSubmit(t)&&o),"reset"===l&&(o=!1!==u.zb(n,38).onReset()&&o),"submit"===l&&(o=!1!==e.checkAnswer(e.questions[e.index])&&o),o},null,null)),u.ob(37,16384,null,0,S.l,[],null,null),u.ob(38,4210688,null,0,S.i,[[8,null],[8,null]],null,null),u.Cb(2048,null,S.b,null,[S.i]),u.ob(40,16384,null,0,S.h,[[4,S.b]],null,null),(n()(),u.pb(41,0,null,null,14,"ion-item",[["class","answer-item"],["lines","full"]],null,null,null,d.D,d.j)),u.ob(42,49152,null,0,e.G,[u.h,u.k],{lines:[0,"lines"]},null),(n()(),u.pb(43,0,[[1,0],["answerInput",1],["answerInputNative",1]],0,6,"input",[["autocapitalize","none"],["autocomplete","off"],["autocorrect","off"],["class","answer-input native-input sc-ion-input-ios"],["inputmode","kana"],["lang","ja"],["placeholder","\u7b54\u3048"],["spellcheck","false"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0,e=n.component;return"input"===l&&(o=!1!==u.zb(n,44)._handleInput(t.target.value)&&o),"blur"===l&&(o=!1!==u.zb(n,44).onTouched()&&o),"compositionstart"===l&&(o=!1!==u.zb(n,44)._compositionStart()&&o),"compositionend"===l&&(o=!1!==u.zb(n,44)._compositionEnd(t.target.value)&&o),"ngModelChange"===l&&(o=!1!==(e.questions[e.index].givenAnswer=t)&&o),o},null,null)),u.ob(44,16384,null,0,S.c,[u.D,u.k,[2,S.a]],null,null),u.Cb(1024,null,S.e,function(n){return[n]},[S.c]),u.ob(46,671744,null,0,S.j,[[2,S.b],[8,null],[8,null],[6,S.e]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),u.Bb(47,{standalone:0}),u.Cb(2048,null,S.f,null,[S.j]),u.ob(49,16384,null,0,S.g,[[4,S.f]],null,null),(n()(),u.pb(50,0,null,0,5,"ion-button",[["fill","clear"],["slot","end"],["type","submit"]],null,null,null,d.w,d.c)),u.ob(51,278528,null,0,w.h,[u.s,u.t,u.k,u.D],{ngClass:[0,"ngClass"]},null),u.Bb(52,{pulse:0}),u.ob(53,49152,null,0,e.j,[u.h,u.k],{fill:[0,"fill"],type:[1,"type"]},null),(n()(),u.pb(54,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,d.C,d.i)),u.ob(55,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.gb(16777216,null,0,1,null,E)),u.ob(57,16384,null,0,w.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,10,0,"arrow-back"),n(l,23,0,"arrow-forward"),n(l,25,0,t.classNames()),n(l,30,0,t.currentQuestion()),n(l,35,0,t.questions[t.index],t.settings),n(l,42,0,"full");var u=t.questions[t.index].givenAnswer,o=n(l,47,0,!0);n(l,46,0,u,o);var e=n(l,52,0,null==t.questions[t.index]?null:t.questions[t.index].answered);n(l,51,0,e),n(l,53,0,"clear","submit"),n(l,55,0,"arrow-forward"),n(l,57,0,!1===(null==t.questions[t.index]?null:t.questions[t.index].correct))},function(n,l){var t=l.component;n(l,11,0,u.Gb(l,11,0,u.zb(l,12).transform("review.stop"))),n(l,15,0,t.index+1,t.questions.length),n(l,20,0,u.Gb(l,20,0,u.zb(l,21).transform("review.skip"))),n(l,33,0,null==t.questions[t.index]?null:t.questions[t.index].meaning),n(l,36,0,u.zb(l,40).ngClassUntouched,u.zb(l,40).ngClassTouched,u.zb(l,40).ngClassPristine,u.zb(l,40).ngClassDirty,u.zb(l,40).ngClassValid,u.zb(l,40).ngClassInvalid,u.zb(l,40).ngClassPending),n(l,43,0,u.zb(l,49).ngClassUntouched,u.zb(l,49).ngClassTouched,u.zb(l,49).ngClassPristine,u.zb(l,49).ngClassDirty,u.zb(l,49).ngClassValid,u.zb(l,49).ngClassInvalid,u.zb(l,49).ngClassPending)})}function Z(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-review",[],null,null,null,W,N)),u.ob(1,114688,null,0,g,[e.Fb,c.a,e.Gb,i.a,b.a,a.a],null,null)],function(n,l){n(l,1,0)},null)}var R=u.lb("app-review",g,Z,{},{},[]),V=t("ZYCi"),U=t("j1ZV");t.d(l,"ReviewPageModuleNgFactory",function(){return Y});var Y=u.mb(p,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[f.a,R]],[3,u.j],u.x]),u.xb(4608,w.l,w.k,[u.u,[2,w.r]]),u.xb(4608,S.m,S.m,[]),u.xb(4608,e.a,e.a,[u.z,u.g]),u.xb(4608,e.Eb,e.Eb,[e.a,u.j,u.q,w.c]),u.xb(4608,e.Hb,e.Hb,[e.a,u.j,u.q,w.c]),u.xb(4608,k.g,k.f,[]),u.xb(4608,k.c,k.e,[]),u.xb(4608,k.i,k.d,[]),u.xb(4608,k.b,k.a,[]),u.xb(4608,k.k,k.k,[k.l,k.g,k.c,k.i,k.b,k.m,k.n]),u.xb(1073742336,w.b,w.b,[]),u.xb(1073742336,S.k,S.k,[]),u.xb(1073742336,S.d,S.d,[]),u.xb(1073742336,e.Cb,e.Cb,[]),u.xb(1073742336,V.o,V.o,[[2,V.u],[2,V.m]]),u.xb(1073742336,k.h,k.h,[]),u.xb(1073742336,U.a,U.a,[]),u.xb(1073742336,p,p,[]),u.xb(1024,V.k,function(){return[[{path:"",component:g}]]},[]),u.xb(256,k.n,void 0,[]),u.xb(256,k.m,void 0,[])])})}}]);