(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"DK3/":function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return c}),e.d(t,"d",function(){return r});var r=function(){var n=window.TapticEngine;n&&n.selection()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},c=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},Jky2:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return u});var r=e("mrSG"),o=function(n,t){return null!==t.closest(n)},i=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},c=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t},a=/^[a-z][a-z0-9+\-.]*:/,u=function(n,t,e){return Object(r.b)(void 0,void 0,void 0,function(){var o;return Object(r.e)(this,function(r){return null!=n&&"#"!==n[0]&&!a.test(n)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(n,e)]):[2,!1]})})}},NTBD:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return r});var r=function(n,t,e){var r=new MutationObserver(function(n){e(o(n,t))});return r.observe(n,{childList:!0,subtree:!0}),r},o=function(n,t){var e;return n.forEach(function(n){for(var r=0;r<n.addedNodes.length;r++)e=i(n.addedNodes[r],t)||e}),e},i=function(n,t){if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find(function(n){return!0===n.checked})}},YNVt:function(n,t,e){"use strict";e.d(t,"a",function(){return y}),e.d(t,"b",function(){return j}),e.d(t,"c",function(){return g}),e.d(t,"d",function(){return E}),e.d(t,"e",function(){return c});var r=e("mrSG"),o=e("Twl7"),i=e("ocqh"),c=function(n){return new Promise(function(t,e){Object(o.m)(function(){a(n),u(n).then(function(e){e.animation&&e.animation.destroy(),s(n),t(e)},function(t){s(n),e(t)})})})},a=function(n){var t=n.enteringEl,e=n.leavingEl;O(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),e&&E(e,!1)},u=function(n){return Object(r.b)(void 0,void 0,void 0,function(){var t;return Object(r.e)(this,function(e){switch(e.label){case 0:return[4,l(n)];case 1:return[2,(t=e.sent())?f(t,n):d(n)]}})})},s=function(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},l=function(n){return Object(r.b)(void 0,void 0,void 0,function(){var t;return Object(r.e)(this,function(r){switch(r.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,e.e(128).then(e.bind(null,"xxD1"))]:[2,void 0];case 1:return t=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(129).then(e.bind(null,"v1ax"))];case 3:t=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,t]}})})},f=function(n,t){return Object(r.b)(void 0,void 0,void 0,function(){var o,i;return Object(r.e)(this,function(r){switch(r.label){case 0:return[4,h(t,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,e.e(11).then(e.bind(null,"5QBn"))];case 3:return[4,r.sent().create(n,t.baseEl,t)];case 4:return o=r.sent(),[3,6];case 5:return r.sent(),o=n(t.baseEl,t),[3,6];case 6:return b(t.enteringEl,t.leavingEl),[4,v(o,t)];case 7:return i=r.sent(),t.progressCallback&&t.progressCallback(void 0),i&&m(t.enteringEl,t.leavingEl),[2,{hasCompleted:i,animation:o}]}})})},d=function(n){return Object(r.b)(void 0,void 0,void 0,function(){var t,e;return Object(r.e)(this,function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,h(n,!1)];case 1:return r.sent(),b(t,e),m(t,e),[2,{hasCompleted:!0}]}})})},h=function(n,t){return Object(r.b)(void 0,void 0,void 0,function(){var e;return Object(r.e)(this,function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,p(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}})})},p=function(n,t){return Object(r.b)(void 0,void 0,void 0,function(){return Object(r.e)(this,function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},v=function(n,t){var e=t.progressCallback,r=new Promise(function(t){n.onFinish(function(e){"number"==typeof e?t(1===e):void 0!==n.hasCompleted&&t(n.hasCompleted)})});return e?(n.progressStart(!0),e(n)):n.play(),r},b=function(n,t){g(t,i.c),g(n,i.a)},m=function(n,t){g(n,i.b),g(t,i.d)},g=function(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},w=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return Object(r.b)(void 0,void 0,void 0,function(){var t;return Object(r.e)(this,function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}})})},E=function(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},O=function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},j=function(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}},dz5x:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e("CjQN"),o=e("CcnG"),i=function(){function n(n){this.socialSharing=n,this.options={message:"share this",subject:"the subject",files:["https://propertystays.com/wp-content/uploads/2019/04/Barcelona-city-breaks-400x400.jpg"],url:"https://www.website.com",chooserTitle:"Pick an app"}}return n.prototype.shareApp=function(){this.socialSharing.share("Whey not try PropertyStays.com app!","Share PropertyStays.com with your friends","https://propertystays.com/wp-content/uploads/2019/04/Barcelona-city-breaks-400x400.jpg","http://PropertyStays.com").then(function(){console.log("Shared")}).catch(function(n){console.log(n)})},n.prototype.shareAppWithOptions=function(n){var t=this;this.socialSharing.shareWithOptions(n||this.options).then(function(n){t.onSuccess(n)}).catch(function(n){t.onError(n)})},n.prototype.shareWithOptions=function(n,t,e,r){var o=this,i={message:n||null,subject:t||null,url:r||null};console.log(i),this.socialSharing.shareWithOptions(i).then(function(n){o.onSuccess(n)}).catch(function(n){o.onError(n)})},n.prototype.onSuccess=function(n){console.log("success func"),console.log("Share completed? "+n.completed),console.log("Shared to app: "+n.app)},n.prototype.onError=function(n){console.log("error func"),console.log("Sharing failed with message: "+n)},n.ngInjectableDef=o.S({factory:function(){return new n(o.W(r.a))},token:n,providedIn:"root"}),n}()},uYVq:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return o});var r=function(){return function(n,t){this.x=n,this.y=t}}(),o=function(n,t,e,r,o){var a=c(n.y,t.y,e.y,r.y,o);return i(n.x,t.x,e.x,r.x,a[0])},i=function(n,t,e,r,o){return o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+r*o))-n*Math.pow(o-1,3)},c=function(n,t,e,r,o){return a((r-=o)-3*(e-=o)+3*(t-=o)-(n-=o),3*e-6*t+3*n,3*t-3*n,n).filter(function(n){return n>=0&&n<=1})},a=function(n,t,e,r){if(0===n)return function(n,t,e){var o=t*t-4*n*r;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]}(t,e);var o=(3*(e/=n)-(t/=n)*t)/3,i=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];var c=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===c)return[Math.pow(i/2,.5)-t/3];if(c>0)return[Math.pow(-i/2+Math.sqrt(c),1/3)-Math.pow(i/2+Math.sqrt(c),1/3)-t/3];var a=Math.sqrt(Math.pow(-o/3,3)),u=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),s=2*Math.pow(a,1/3);return[s*Math.cos(u/3)-t/3,s*Math.cos((u+2*Math.PI)/3)-t/3,s*Math.cos((u+4*Math.PI)/3)-t/3]}},"v7+D":function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i});var r=e("mrSG"),o=function(n,t,e,o,i){return Object(r.b)(void 0,void 0,void 0,function(){var c;return Object(r.e)(this,function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,i,o)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,o&&o.forEach(function(n){return c.classList.add(n)}),i&&Object.assign(c,i),t.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,c]}})})},i=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},zwjO:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,a.forEach(function(n){for(var e=t.querySelectorAll(n),r=e.length-1;r>=0;r--){var c=e[r];c.parentNode?c.parentNode.removeChild(c):t.removeChild(c);for(var a=i(c),u=0;u<a.length;u++)o(a[u])}});for(var r=i(t),c=0;c<r.length;c++)o(r[c]);var u=document.createElement("div");u.appendChild(t);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(l){return console.error(l),""}},o=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),r=e.name;if(c.includes(r.toLowerCase())){var a=e.value;null!=a&&a.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var u=i(n);for(t=0;t<u.length;t++)o(u[t])}},i=function(n){return null!=n.children?n.children:n.childNodes},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]}}]);