(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{AF5P:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",(function(){return y}));var o=i("mrSG"),n=i("1ks5"),r=(i("ttJE"),i("wSPg")),a=i("qea4"),s=i("glkq"),d=i("CsPb"),c=(i("ocqh"),i("8E2B")),l=i("Jky2"),m=i("v7+D"),h=i("hPsP"),p=function(e,t){var i=Object(a.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o=Object(a.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),n=Object(a.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).beforeAddClass("show-modal").addAnimation([i,o]);if(t){var r=document.body,s="translateY("+("ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))")+") scale(0.93)",d=Object(a.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center"}).afterStyles({transform:s}).beforeAddWrite((function(){return r.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,transform:s,borderRadius:"10px 10px 0 0"}]);n.addAnimation(d)}return n},b=function(e,t,i){void 0===i&&(i=500);var o=Object(a.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n=Object(a.a)().addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(100%)"),r=Object(a.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation([o,n]);if(t){var s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement?"-10px":"max(30px, var(--ion-safe-area-top))",d=document.body,c=Object(a.a)().addElement(t).beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&Array.from(d.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&d.style.setProperty("background-color","")})).keyframes([{offset:0,transform:"translateY("+s+") scale(0.93)",borderRadius:"10px 10px 0 0"},{offset:1,transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);r.addAnimation(c)}return r},u=function(e){var t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)"),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([i,o])},f=function(e){var t=Object(a.a)(),i=Object(a.a)(),o=Object(a.a)(),n=e.querySelector(".modal-wrapper");return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,o])},y=function(){function e(e){var t=this;Object(n.k)(this,e),this.gestureAnimationDismissing=!1,this.presented=!1,this.mode=Object(n.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,c.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var i=t.usersElement,o=g[e.type];if(i&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});i.dispatchEvent(n)}},Object(c.e)(this.el),this.didPresent=Object(n.e)(this,"ionModalDidPresent",7),this.willPresent=Object(n.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(n.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(n.e)(this,"ionModalDidDismiss",7)}return e.prototype.present=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t,i,a,l,f=this;return Object(o.e)(this,(function(y){switch(y.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),i=this,[4,Object(m.a)(this.delegate,e,this.component,["ion-page"],t)];case 1:return i.usersElement=y.sent(),[4,Object(h.a)(this.usersElement)];case 2:return y.sent(),[4,Object(c.f)(this,"modalEnter",p,u,this.presentingElement)];case 3:return y.sent(),a=Object(n.d)(this),this.swipeToClose&&"ios"===a&&(l=this.animation=b(this.el,this.presentingElement),this.gesture=(v=l,w=function(){f.gestureAnimationDismissing=!0,f.animation.onFinish((function(){return Object(o.b)(f,void 0,void 0,(function(){return Object(o.e)(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(void 0,"gesture")];case 1:return e.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))},x=(g=this.el).offsetHeight,O=!1,j=Object(d.createGesture)({el:g,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:function(){v.progressStart(!0,O?1:0)},onMove:function(e){var t=e.deltaY/x;t<0||v.progressStep(t)},onEnd:function(e){var t=e.velocityY,i=e.deltaY/x;if(!(i<0)){var o=(e.deltaY+1e3*t)/x>=.5,n=o?-.001:.001;o?(v.easing("cubic-bezier(0.32, 0.72, 0, 1)"),n+=Object(s.a)([0,0],[.32,.72],[0,1],[1,1],i)[0]):(v.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=Object(s.a)([0,0],[1,0],[.68,.28],[1,1],i)[0]);var a=function(e,t){return Object(r.c)(400,e/Math.abs(1.1*t),500)}(o?i*x:(1-i)*x,t);O=o,j.enable(!1),v.onFinish((function(){o||j.enable(!0)})).progressEnd(o?1:0,n,a),o&&w()}}})),this.gesture.enable(!0)),[2]}var g,v,w,x,O,j}))}))},e.prototype.dismiss=function(e,t){return Object(o.b)(this,void 0,void 0,(function(){var i,n,r;return Object(o.e)(this,(function(o){switch(o.label){case 0:return this.gestureAnimationDismissing&&"gesture"!==t?[2,!1]:(i=void 0===this.animation||t===c.a||void 0===t?b:void 0,n=c.i.get(this)||[],[4,Object(c.g)(this,e,t,"modalLeave",i,f,this.presentingElement)]);case 1:return(r=o.sent())?[4,Object(m.b)(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),this.animation&&this.animation.destroy(),n.forEach((function(e){return e.destroy()})),o.label=3;case 3:return this.animation=void 0,[2,r]}}))}))},e.prototype.onDidDismiss=function(){return Object(c.h)(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return Object(c.h)(this.el,"ionModalWillDismiss")},e.prototype.render=function(){var e,t=Object(n.d)(this);return Object(n.i)(n.a,{"no-router":!0,"aria-modal":"true",class:Object.assign((e={},e[t]=!0,e["modal-card"]=void 0!==this.presentingElement,e),Object(l.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(n.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(n.i)("div",{role:"dialog",class:"modal-wrapper"}))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"},enumerable:!0,configurable:!0}),e}(),g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);