(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{nI0H:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_spinner",(function(){return f}));var n=t("rePB"),s=t("1OyB"),i=t("vuIU"),a=t("sxy2"),o=t("N4tN"),c=t("sPtc"),l=t("6i10"),f=function(){function e(r){Object(s.a)(this,e),Object(a.q)(this,r),this.paused=!1}return Object(i.a)(e,[{key:"getName",value:function(){var e=this.name||o.c.get("spinner"),r=Object(o.b)(this);return e||("ios"===r?"lines":"circular")}},{key:"render",value:function(){var e,r=this,t=Object(o.b)(r),s=r.getName(),i=l.a[s]||l.a.lines,f="number"==typeof r.duration&&r.duration>10?r.duration:i.dur,u=[];if(void 0!==i.circles)for(var k=0;k<i.circles;k++)u.push(p(i,f,k,i.circles));else if(void 0!==i.lines)for(var d=0;d<i.lines;d++)u.push(m(i,f,d,i.lines));return Object(a.l)(a.c,{class:Object(c.a)(r.color,(e={},Object(n.a)(e,t,!0),Object(n.a)(e,"spinner-".concat(s),!0),Object(n.a)(e,"spinner-paused",!!r.paused||o.c.getBoolean("_testing")),e)),role:"progressbar",style:i.elmDuration?{animationDuration:f+"ms"}:{}},u)}}]),e}(),p=function(e,r,t,n){var s=e.fn(r,t,n);return s.style["animation-duration"]=r+"ms",Object(a.l)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(a.l)("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))},m=function(e,r,t,n){var s=e.fn(r,t,n);return s.style["animation-duration"]=r+"ms",Object(a.l)("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(a.l)("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))};f.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"}}]);