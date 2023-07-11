(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const v of d)if(v.type==="childList")for(const m of v.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(d){const v={};return d.integrity&&(v.integrity=d.integrity),d.referrerpolicy&&(v.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?v.credentials="include":d.crossorigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function l(d){if(d.ep)return;d.ep=!0;const v=r(d);fetch(d.href,v)}})();/*!
* reveal.js 4.4.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/const $t=(S,e)=>{for(let r in e)S[r]=e[r];return S},W=(S,e)=>Array.from(S.querySelectorAll(e)),ne=(S,e,r)=>{r?S.classList.add(e):S.classList.remove(e)},It=S=>{if(typeof S=="string"){if(S==="null")return null;if(S==="true")return!0;if(S==="false")return!1;if(S.match(/^-?[\d\.]+$/))return parseFloat(S)}return S},zt=(S,e)=>{S.style.transform=e},Vt=(S,e)=>{let r=S.matches||S.matchesSelector||S.msMatchesSelector;return!(!r||!r.call(S,e))},vt=(S,e)=>{if(typeof S.closest=="function")return S.closest(e);for(;S;){if(Vt(S,e))return S;S=S.parentNode}return null},Ge=(S,e,r,l="")=>{let d=S.querySelectorAll("."+r);for(let m=0;m<d.length;m++){let y=d[m];if(y.parentNode===S)return y}let v=document.createElement(e);return v.className=r,v.innerHTML=l,S.appendChild(v),v},se=S=>{let e=document.createElement("style");return e.type="text/css",S&&S.length>0&&(e.styleSheet?e.styleSheet.cssText=S:e.appendChild(document.createTextNode(S))),document.head.appendChild(e),e},ze=()=>{let S={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,e=>{S[e.split("=").shift()]=e.split("=").pop()});for(let e in S){let r=S[e];S[e]=It(unescape(r))}return S.dependencies!==void 0&&delete S.dependencies,S},tn=(S,e=0)=>{if(S){let r,l=S.style.height;return S.style.height="0px",S.parentNode.style.height="auto",r=e-S.parentNode.offsetHeight,S.style.height=l+"px",S.parentNode.style.removeProperty("height"),r}return e},en={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},$e=navigator.userAgent,Dt=/(iphone|ipod|ipad|android)/gi.test($e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,De=/android/gi.test($e);var qe={};Object.defineProperty(qe,"__esModule",{value:!0});var Pe=Object.assign||function(S){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(S[l]=r[l])}return S},nn=qe.default=function(S){if(S){var e=function(L){return[].slice.call(L)},r=0,l=1,d=2,v=3,m=[],y=null,f="requestAnimationFrame"in S?function(){S.cancelAnimationFrame(y),y=S.requestAnimationFrame(function(){return I(m.filter(function(L){return L.dirty&&L.active}))})}:function(){},U=function(L){return function(){m.forEach(function(x){return x.dirty=L}),f()}},I=function(L){L.filter(function(b){return!b.styleComputed}).forEach(function(b){b.styleComputed=h(b)}),L.filter(Y).forEach(lt);var x=L.filter(H);x.forEach($),x.forEach(function(b){lt(b),N(b)}),x.forEach(bt)},N=function(L){return L.dirty=r},$=function(L){L.availableWidth=L.element.parentNode.clientWidth,L.currentWidth=L.element.scrollWidth,L.previousFontSize=L.currentFontSize,L.currentFontSize=Math.min(Math.max(L.minSize,L.availableWidth/L.currentWidth*L.previousFontSize),L.maxSize),L.whiteSpace=L.multiLine&&L.currentFontSize===L.minSize?"normal":"nowrap"},H=function(L){return L.dirty!==d||L.dirty===d&&L.element.parentNode.clientWidth!==L.availableWidth},h=function(L){var x=S.getComputedStyle(L.element,null);L.currentFontSize=parseFloat(x.getPropertyValue("font-size")),L.display=x.getPropertyValue("display"),L.whiteSpace=x.getPropertyValue("white-space")},Y=function(L){var x=!1;return!L.preStyleTestCompleted&&(/inline-/.test(L.display)||(x=!0,L.display="inline-block"),L.whiteSpace!=="nowrap"&&(x=!0,L.whiteSpace="nowrap"),L.preStyleTestCompleted=!0,x)},lt=function(L){L.element.style.whiteSpace=L.whiteSpace,L.element.style.display=L.display,L.element.style.fontSize=L.currentFontSize+"px"},bt=function(L){L.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:L.previousFontSize,newValue:L.currentFontSize,scaleFactor:L.currentFontSize/L.previousFontSize}}))},gt=function(L,x){return function(){L.dirty=x,L.active&&f()}},mt=function(L){return function(){m=m.filter(function(x){return x.element!==L.element}),L.observeMutations&&L.observer.disconnect(),L.element.style.whiteSpace=L.originalStyle.whiteSpace,L.element.style.display=L.originalStyle.display,L.element.style.fontSize=L.originalStyle.fontSize}},it=function(L){return function(){L.active||(L.active=!0,f())}},rt=function(L){return function(){return L.active=!1}},nt=function(L){L.observeMutations&&(L.observer=new MutationObserver(gt(L,l)),L.observer.observe(L.element,L.observeMutations))},Z={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in S&&{subtree:!0,childList:!0,characterData:!0}},V=null,F=function(){S.clearTimeout(V),V=S.setTimeout(U(d),dt.observeWindowDelay)},at=["resize","orientationchange"];return Object.defineProperty(dt,"observeWindow",{set:function(L){var x=(L?"add":"remove")+"EventListener";at.forEach(function(b){S[x](b,F)})}}),dt.observeWindow=!0,dt.observeWindowDelay=100,dt.fitAll=U(v),dt}function ot(L,x){var b=Pe({},Z,x),kt=L.map(function(ft){var st=Pe({},b,{element:ft,active:!0});return function(et){et.originalStyle={whiteSpace:et.element.style.whiteSpace,display:et.element.style.display,fontSize:et.element.style.fontSize},nt(et),et.newbie=!0,et.dirty=!0,m.push(et)}(st),{element:ft,fit:gt(st,v),unfreeze:it(st),freeze:rt(st),unsubscribe:mt(st)}});return f(),kt}function dt(L){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof L=="string"?ot(e(document.querySelectorAll(L)),x):ot([L],x)[0]}}(typeof window>"u"?null:window);class sn{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){let r=this.Reveal.getConfig().preloadIframes;return typeof r!="boolean"&&(r=e.hasAttribute("data-preload")),r}load(e,r={}){e.style.display=this.Reveal.getConfig().display,W(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(d=>{(d.tagName!=="IFRAME"||this.shouldPreload(d))&&(d.setAttribute("src",d.getAttribute("data-src")),d.setAttribute("data-lazy-loaded",""),d.removeAttribute("data-src"))}),W(e,"video, audio").forEach(d=>{let v=0;W(d,"source[data-src]").forEach(m=>{m.setAttribute("src",m.getAttribute("data-src")),m.removeAttribute("data-src"),m.setAttribute("data-lazy-loaded",""),v+=1}),Dt&&d.tagName==="VIDEO"&&d.setAttribute("playsinline",""),v>0&&d.load()});let l=e.slideBackgroundElement;if(l){l.style.display="block";let d=e.slideBackgroundContentElement,v=e.getAttribute("data-background-iframe");if(l.hasAttribute("data-loaded")===!1){l.setAttribute("data-loaded","true");let y=e.getAttribute("data-background-image"),f=e.getAttribute("data-background-video"),U=e.hasAttribute("data-background-video-loop"),I=e.hasAttribute("data-background-video-muted");if(y)/^data:/.test(y.trim())?d.style.backgroundImage=`url(${y.trim()})`:d.style.backgroundImage=y.split(",").map(N=>`url(${encodeURI(N.trim())})`).join(",");else if(f&&!this.Reveal.isSpeakerNotes()){let N=document.createElement("video");U&&N.setAttribute("loop",""),I&&(N.muted=!0),Dt&&(N.muted=!0,N.setAttribute("playsinline","")),f.split(",").forEach($=>{let H=((h="")=>en[h.split(".").pop()])($);N.innerHTML+=H?`<source src="${$}" type="${H}">`:`<source src="${$}">`}),d.appendChild(N)}else if(v&&r.excludeIframes!==!0){let N=document.createElement("iframe");N.setAttribute("allowfullscreen",""),N.setAttribute("mozallowfullscreen",""),N.setAttribute("webkitallowfullscreen",""),N.setAttribute("allow","autoplay"),N.setAttribute("data-src",v),N.style.width="100%",N.style.height="100%",N.style.maxHeight="100%",N.style.maxWidth="100%",d.appendChild(N)}}let m=d.querySelector("iframe[data-src]");m&&this.shouldPreload(l)&&!/autoplay=(1|true|yes)/gi.test(v)&&m.getAttribute("src")!==v&&m.setAttribute("src",v)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach(r=>{nn(r,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(e){e.style.display="none";let r=this.Reveal.getSlideBackground(e);r&&(r.style.display="none",W(r,"iframe[src]").forEach(l=>{l.removeAttribute("src")})),W(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(l=>{l.setAttribute("data-src",l.getAttribute("src")),l.removeAttribute("src")}),W(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach(l=>{l.setAttribute("data-src",l.getAttribute("src")),l.removeAttribute("src")})}formatEmbeddedContent(){let e=(r,l,d)=>{W(this.Reveal.getSlidesElement(),"iframe["+r+'*="'+l+'"]').forEach(v=>{let m=v.getAttribute(r);m&&m.indexOf(d)===-1&&v.setAttribute(r,m+(/\?/.test(m)?"&":"?")+d)})};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(e){e&&!this.Reveal.isSpeakerNotes()&&(W(e,'img[src$=".gif"]').forEach(r=>{r.setAttribute("src",r.getAttribute("src"))}),W(e,"video, audio").forEach(r=>{if(vt(r,".fragment")&&!vt(r,".fragment.visible"))return;let l=this.Reveal.getConfig().autoPlayMedia;if(typeof l!="boolean"&&(l=r.hasAttribute("data-autoplay")||!!vt(r,".slide-background")),l&&typeof r.play=="function")if(r.readyState>1)this.startEmbeddedMedia({target:r});else if(Dt){let d=r.play();d&&typeof d.catch=="function"&&r.controls===!1&&d.catch(()=>{r.controls=!0,r.addEventListener("play",()=>{r.controls=!1})})}else r.removeEventListener("loadeddata",this.startEmbeddedMedia),r.addEventListener("loadeddata",this.startEmbeddedMedia)}),W(e,"iframe[src]").forEach(r=>{vt(r,".fragment")&&!vt(r,".fragment.visible")||this.startEmbeddedIframe({target:r})}),W(e,"iframe[data-src]").forEach(r=>{vt(r,".fragment")&&!vt(r,".fragment.visible")||r.getAttribute("src")!==r.getAttribute("data-src")&&(r.removeEventListener("load",this.startEmbeddedIframe),r.addEventListener("load",this.startEmbeddedIframe),r.setAttribute("src",r.getAttribute("data-src")))}))}startEmbeddedMedia(e){let r=!!vt(e.target,"html"),l=!!vt(e.target,".present");r&&l&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(e){let r=e.target;if(r&&r.contentWindow){let l=!!vt(e.target,"html"),d=!!vt(e.target,".present");if(l&&d){let v=this.Reveal.getConfig().autoPlayMedia;typeof v!="boolean"&&(v=r.hasAttribute("data-autoplay")||!!vt(r,".slide-background")),/youtube\.com\/embed\//.test(r.getAttribute("src"))&&v?r.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(r.getAttribute("src"))&&v?r.contentWindow.postMessage('{"method":"play"}',"*"):r.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(e,r={}){r=$t({unloadIframes:!0},r),e&&e.parentNode&&(W(e,"video, audio").forEach(l=>{l.hasAttribute("data-ignore")||typeof l.pause!="function"||(l.setAttribute("data-paused-by-reveal",""),l.pause())}),W(e,"iframe").forEach(l=>{l.contentWindow&&l.contentWindow.postMessage("slide:stop","*"),l.removeEventListener("load",this.startEmbeddedIframe)}),W(e,'iframe[src*="youtube.com/embed/"]').forEach(l=>{!l.hasAttribute("data-ignore")&&l.contentWindow&&typeof l.contentWindow.postMessage=="function"&&l.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),W(e,'iframe[src*="player.vimeo.com/"]').forEach(l=>{!l.hasAttribute("data-ignore")&&l.contentWindow&&typeof l.contentWindow.postMessage=="function"&&l.contentWindow.postMessage('{"method":"pause"}',"*")}),r.unloadIframes===!0&&W(e,"iframe[data-src]").forEach(l=>{l.setAttribute("src","about:blank"),l.removeAttribute("src")}))}}class rn{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,r){let l="none";e.slideNumber&&!this.Reveal.isPrintingPDF()&&(e.showSlideNumber==="all"||e.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(l="block"),this.element.style.display=l}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let r,l=this.Reveal.getConfig(),d="h.v";if(typeof l.slideNumber=="function")r=l.slideNumber(e);else{typeof l.slideNumber=="string"&&(d=l.slideNumber),/c/.test(d)||this.Reveal.getHorizontalSlides().length!==1||(d="c");let m=e&&e.dataset.visibility==="uncounted"?0:1;switch(r=[],d){case"c":r.push(this.Reveal.getSlidePastCount(e)+m);break;case"c/t":r.push(this.Reveal.getSlidePastCount(e)+m,"/",this.Reveal.getTotalSlides());break;default:let y=this.Reveal.getIndices(e);r.push(y.h+m);let f=d==="h/v"?"/":".";this.Reveal.isVerticalSlide(e)&&r.push(f,y.v+1)}}let v="#"+this.Reveal.location.getHash(e);return this.formatNumber(r[0],r[1],r[2],v)}formatNumber(e,r,l,d="#"+this.Reveal.location.getHash()){return typeof l!="number"||isNaN(l)?`<a href="${d}">
					<span class="slide-number-a">${e}</span>
					</a>`:`<a href="${d}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${r}</span>
					<span class="slide-number-b">${l}</span>
					</a>`}destroy(){this.element.remove()}}const ie=S=>{let e=S.match(/^#([0-9a-f]{3})$/i);if(e&&e[1])return e=e[1],{r:17*parseInt(e.charAt(0),16),g:17*parseInt(e.charAt(1),16),b:17*parseInt(e.charAt(2),16)};let r=S.match(/^#([0-9a-f]{6})$/i);if(r&&r[1])return r=r[1],{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16)};let l=S.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(l)return{r:parseInt(l[1],10),g:parseInt(l[2],10),b:parseInt(l[3],10)};let d=S.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return d?{r:parseInt(d[1],10),g:parseInt(d[2],10),b:parseInt(d[3],10),a:parseFloat(d[4])}:null};class an{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(e=>{let r=this.createBackground(e,this.element);W(e,"section").forEach(l=>{this.createBackground(l,r),r.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(e,r){let l=document.createElement("div");l.className="slide-background "+e.className.replace(/present|past|future/,"");let d=document.createElement("div");return d.className="slide-background-content",l.appendChild(d),r.appendChild(l),e.slideBackgroundElement=l,e.slideBackgroundContentElement=d,this.sync(e),l}sync(e){const r=e.slideBackgroundElement,l=e.slideBackgroundContentElement,d={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},v=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),r.removeAttribute("data-loaded"),r.removeAttribute("data-background-hash"),r.removeAttribute("data-background-size"),r.removeAttribute("data-background-transition"),r.style.backgroundColor="",l.style.backgroundSize="",l.style.backgroundRepeat="",l.style.backgroundPosition="",l.style.backgroundImage="",l.style.opacity="",l.innerHTML="",d.background&&(/^(http|file|\/\/)/gi.test(d.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(d.background)?e.setAttribute("data-background-image",d.background):r.style.background=d.background),(d.background||d.backgroundColor||d.backgroundGradient||d.backgroundImage||d.backgroundVideo||d.backgroundIframe)&&r.setAttribute("data-background-hash",d.background+d.backgroundSize+d.backgroundImage+d.backgroundVideo+d.backgroundIframe+d.backgroundColor+d.backgroundGradient+d.backgroundRepeat+d.backgroundPosition+d.backgroundTransition+d.backgroundOpacity),d.backgroundSize&&r.setAttribute("data-background-size",d.backgroundSize),d.backgroundColor&&(r.style.backgroundColor=d.backgroundColor),d.backgroundGradient&&(r.style.backgroundImage=d.backgroundGradient),d.backgroundTransition&&r.setAttribute("data-background-transition",d.backgroundTransition),v&&r.setAttribute("data-preload",""),d.backgroundSize&&(l.style.backgroundSize=d.backgroundSize),d.backgroundRepeat&&(l.style.backgroundRepeat=d.backgroundRepeat),d.backgroundPosition&&(l.style.backgroundPosition=d.backgroundPosition),d.backgroundOpacity&&(l.style.opacity=d.backgroundOpacity);let m=d.backgroundColor;if(!m||!ie(m)){let f=window.getComputedStyle(r);f&&f.backgroundColor&&(m=f.backgroundColor)}if(m){const f=ie(m);f&&f.a!==0&&(typeof(y=m)=="string"&&(y=ie(y)),(y?(299*y.r+587*y.g+114*y.b)/1e3:null)<128?e.classList.add("has-dark-background"):e.classList.add("has-light-background"))}var y}update(e=!1){let r=this.Reveal.getCurrentSlide(),l=this.Reveal.getIndices(),d=null,v=this.Reveal.getConfig().rtl?"future":"past",m=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((y,f)=>{y.classList.remove("past","present","future"),f<l.h?y.classList.add(v):f>l.h?y.classList.add(m):(y.classList.add("present"),d=y),(e||f===l.h)&&W(y,".slide-background").forEach((U,I)=>{U.classList.remove("past","present","future"),I<l.v?U.classList.add("past"):I>l.v?U.classList.add("future"):(U.classList.add("present"),f===l.h&&(d=U))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),d){this.Reveal.slideContent.startEmbeddedContent(d);let y=d.querySelector(".slide-background-content");if(y){let I=y.style.backgroundImage||"";/\.gif/i.test(I)&&(y.style.backgroundImage="",window.getComputedStyle(y).opacity,y.style.backgroundImage=I)}let f=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,U=d.getAttribute("data-background-hash");U&&U===f&&d!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=d}r&&["has-light-background","has-dark-background"].forEach(y=>{r.classList.contains(y)?this.Reveal.getRevealElement().classList.add(y):this.Reveal.getRevealElement().classList.remove(y)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let r,l,d=this.Reveal.getHorizontalSlides(),v=this.Reveal.getVerticalSlides(),m=this.element.style.backgroundSize.split(" ");m.length===1?r=l=parseInt(m[0],10):(r=parseInt(m[0],10),l=parseInt(m[1],10));let y,f,U=this.element.offsetWidth,I=d.length;y=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:I>1?(r-U)/(I-1):0,f=y*e.h*-1;let N,$,H=this.element.offsetHeight,h=v.length;N=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(l-H)/(h-1),$=h>0?N*e.v:0,this.element.style.backgroundPosition=f+"px "+-$+"px"}}destroy(){this.element.remove()}}const on=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,_e=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let Ne=0;class ln{constructor(e){this.Reveal=e}run(e,r){this.reset();let l=this.Reveal.getSlides(),d=l.indexOf(r),v=l.indexOf(e);if(e.hasAttribute("data-auto-animate")&&r.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===r.getAttribute("data-auto-animate-id")&&!(d>v?r:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||se();let m=this.getAutoAnimateOptions(r);e.dataset.autoAnimate="pending",r.dataset.autoAnimate="pending",m.slideDirection=d>v?"forward":"backward";let y=e.style.display==="none";y&&(e.style.display=this.Reveal.getConfig().display);let f=this.getAutoAnimatableElements(e,r).map(U=>this.autoAnimateElements(U.from,U.to,U.options||{},m,Ne++));if(y&&(e.style.display="none"),r.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let U=.8*m.duration,I=.2*m.duration;this.getUnmatchedAutoAnimateElements(r).forEach(N=>{let $=this.getAutoAnimateOptions(N,m),H="unmatched";$.duration===m.duration&&$.delay===m.delay||(H="unmatched-"+Ne++,f.push(`[data-auto-animate="running"] [data-auto-animate-target="${H}"] { transition: opacity ${$.duration}s ease ${$.delay}s; }`)),N.dataset.autoAnimateTarget=H},this),f.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${U}s ease ${I}s; }`)}this.autoAnimateStyleSheet.innerHTML=f.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,r.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:r,sheet:this.autoAnimateStyleSheet}})}}reset(){W(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(e=>{e.dataset.autoAnimate=""}),W(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(e=>{delete e.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,r,l,d,v){e.dataset.autoAnimateTarget="",r.dataset.autoAnimateTarget=v;let m=this.getAutoAnimateOptions(r,d);l.delay!==void 0&&(m.delay=l.delay),l.duration!==void 0&&(m.duration=l.duration),l.easing!==void 0&&(m.easing=l.easing);let y=this.getAutoAnimatableProperties("from",e,l),f=this.getAutoAnimatableProperties("to",r,l);if(r.classList.contains("fragment")&&(delete f.styles.opacity,e.classList.contains("fragment"))&&(e.className.match(_e)||[""])[0]===(r.className.match(_e)||[""])[0]&&d.slideDirection==="forward"&&r.classList.add("visible","disabled"),l.translate!==!1||l.scale!==!1){let N=this.Reveal.getScale(),$={x:(y.x-f.x)/N,y:(y.y-f.y)/N,scaleX:y.width/f.width,scaleY:y.height/f.height};$.x=Math.round(1e3*$.x)/1e3,$.y=Math.round(1e3*$.y)/1e3,$.scaleX=Math.round(1e3*$.scaleX)/1e3,$.scaleX=Math.round(1e3*$.scaleX)/1e3;let H=l.translate!==!1&&($.x!==0||$.y!==0),h=l.scale!==!1&&($.scaleX!==0||$.scaleY!==0);if(H||h){let Y=[];H&&Y.push(`translate(${$.x}px, ${$.y}px)`),h&&Y.push(`scale(${$.scaleX}, ${$.scaleY})`),y.styles.transform=Y.join(" "),y.styles["transform-origin"]="top left",f.styles.transform="none"}}for(let N in f.styles){const $=f.styles[N],H=y.styles[N];$===H?delete f.styles[N]:($.explicitValue===!0&&(f.styles[N]=$.value),H.explicitValue===!0&&(y.styles[N]=H.value))}let U="",I=Object.keys(f.styles);return I.length>0&&(y.styles.transition="none",f.styles.transition=`all ${m.duration}s ${m.easing} ${m.delay}s`,f.styles["transition-property"]=I.join(", "),f.styles["will-change"]=I.join(", "),U='[data-auto-animate-target="'+v+'"] {'+Object.keys(y.styles).map(N=>N+": "+y.styles[N]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+v+'"] {'+Object.keys(f.styles).map(N=>N+": "+f.styles[N]+" !important;").join("")+"}"),U}getAutoAnimateOptions(e,r){let l={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(l=$t(l,r),e.parentNode){let d=vt(e.parentNode,"[data-auto-animate-target]");d&&(l=this.getAutoAnimateOptions(d,l))}return e.dataset.autoAnimateEasing&&(l.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(l.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(l.delay=parseFloat(e.dataset.autoAnimateDelay)),l}getAutoAnimatableProperties(e,r,l){let d=this.Reveal.getConfig(),v={styles:[]};if(l.translate!==!1||l.scale!==!1){let y;if(typeof l.measure=="function")y=l.measure(r);else if(d.center)y=r.getBoundingClientRect();else{let f=this.Reveal.getScale();y={x:r.offsetLeft*f,y:r.offsetTop*f,width:r.offsetWidth*f,height:r.offsetHeight*f}}v.x=y.x,v.y=y.y,v.width=y.width,v.height=y.height}const m=getComputedStyle(r);return(l.styles||d.autoAnimateStyles).forEach(y=>{let f;typeof y=="string"&&(y={property:y}),y.from!==void 0&&e==="from"?f={value:y.from,explicitValue:!0}:y.to!==void 0&&e==="to"?f={value:y.to,explicitValue:!0}:(y.property==="line-height"&&(f=parseFloat(m["line-height"])/parseFloat(m["font-size"])),isNaN(f)&&(f=m[y.property])),f!==""&&(v.styles[y.property]=f)}),v}getAutoAnimatableElements(e,r){let l=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,r),d=[];return l.filter((v,m)=>{if(d.indexOf(v.to)===-1)return d.push(v.to),!0})}getAutoAnimatePairs(e,r){let l=[];const d="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(l,e,r,"[data-id]",v=>v.nodeName+":::"+v.getAttribute("data-id")),this.findAutoAnimateMatches(l,e,r,d,v=>v.nodeName+":::"+v.innerText),this.findAutoAnimateMatches(l,e,r,"img, video, iframe",v=>v.nodeName+":::"+(v.getAttribute("src")||v.getAttribute("data-src"))),this.findAutoAnimateMatches(l,e,r,"pre",v=>v.nodeName+":::"+v.innerText),l.forEach(v=>{Vt(v.from,d)?v.options={scale:!1}:Vt(v.from,"pre")&&(v.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(l,v.from,v.to,".hljs .hljs-ln-code",m=>m.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(l,v.from,v.to,".hljs .hljs-ln-line[data-line-number]",m=>m.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),l}getLocalBoundingBox(e){const r=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*r*100)/100,y:Math.round(e.offsetTop*r*100)/100,width:Math.round(e.offsetWidth*r*100)/100,height:Math.round(e.offsetHeight*r*100)/100}}findAutoAnimateMatches(e,r,l,d,v,m){let y={},f={};[].slice.call(r.querySelectorAll(d)).forEach((U,I)=>{const N=v(U);typeof N=="string"&&N.length&&(y[N]=y[N]||[],y[N].push(U))}),[].slice.call(l.querySelectorAll(d)).forEach((U,I)=>{const N=v(U);let $;if(f[N]=f[N]||[],f[N].push(U),y[N]){const H=f[N].length-1,h=y[N].length-1;y[N][H]?($=y[N][H],y[N][H]=null):y[N][h]&&($=y[N][h],y[N][h]=null)}$&&e.push({from:$,to:U,options:m})})}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce((r,l)=>{const d=l.querySelector("[data-auto-animate-target]");return l.hasAttribute("data-auto-animate-target")||d||r.push(l),l.querySelector("[data-auto-animate-target]")&&(r=r.concat(this.getUnmatchedAutoAnimateElements(l))),r},[])}}class cn{constructor(e){this.Reveal=e}configure(e,r){e.fragments===!1?this.disable():r.fragments===!1&&this.enable()}disable(){W(this.Reveal.getSlidesElement(),".fragment").forEach(e=>{e.classList.add("visible"),e.classList.remove("current-fragment")})}enable(){W(this.Reveal.getSlidesElement(),".fragment").forEach(e=>{e.classList.remove("visible"),e.classList.remove("current-fragment")})}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let r=e.querySelectorAll(".fragment:not(.disabled)"),l=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:r.length-l.length>0,next:!!l.length}}return{prev:!1,next:!1}}sort(e,r=!1){e=Array.from(e);let l=[],d=[],v=[];e.forEach(y=>{if(y.hasAttribute("data-fragment-index")){let f=parseInt(y.getAttribute("data-fragment-index"),10);l[f]||(l[f]=[]),l[f].push(y)}else d.push([y])}),l=l.concat(d);let m=0;return l.forEach(y=>{y.forEach(f=>{v.push(f),f.setAttribute("data-fragment-index",m)}),m++}),r===!0?l:v}sortAll(){this.Reveal.getHorizontalSlides().forEach(e=>{let r=W(e,"section");r.forEach((l,d)=>{this.sort(l.querySelectorAll(".fragment"))},this),r.length===0&&this.sort(e.querySelectorAll(".fragment"))})}update(e,r){let l={shown:[],hidden:[]},d=this.Reveal.getCurrentSlide();if(d&&this.Reveal.getConfig().fragments&&(r=r||this.sort(d.querySelectorAll(".fragment"))).length){let v=0;if(typeof e!="number"){let m=this.sort(d.querySelectorAll(".fragment.visible")).pop();m&&(e=parseInt(m.getAttribute("data-fragment-index")||0,10))}Array.from(r).forEach((m,y)=>{if(m.hasAttribute("data-fragment-index")&&(y=parseInt(m.getAttribute("data-fragment-index"),10)),v=Math.max(v,y),y<=e){let f=m.classList.contains("visible");m.classList.add("visible"),m.classList.remove("current-fragment"),y===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(m)),m.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(m)),f||(l.shown.push(m),this.Reveal.dispatchEvent({target:m,type:"visible",bubbles:!1}))}else{let f=m.classList.contains("visible");m.classList.remove("visible"),m.classList.remove("current-fragment"),f&&(this.Reveal.slideContent.stopEmbeddedContent(m),l.hidden.push(m),this.Reveal.dispatchEvent({target:m,type:"hidden",bubbles:!1}))}}),e=typeof e=="number"?e:-1,e=Math.max(Math.min(e,v),-1),d.setAttribute("data-fragment",e)}return l}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,r=0){let l=this.Reveal.getCurrentSlide();if(l&&this.Reveal.getConfig().fragments){let d=this.sort(l.querySelectorAll(".fragment:not(.disabled)"));if(d.length){if(typeof e!="number"){let m=this.sort(l.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=m?parseInt(m.getAttribute("data-fragment-index")||0,10):-1}e+=r;let v=this.update(e,d);return v.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:v.hidden[0],fragments:v.hidden}}),v.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:v.shown[0],fragments:v.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!v.shown.length&&!v.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class dn{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),W(this.Reveal.getRevealElement(),".slides section").forEach(d=>{d.classList.contains("stack")||d.addEventListener("click",this.onSlideClicked,!0)});const e=70,r=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=r.width+e,this.overviewSlideHeight=r.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const l=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:l.h,indexv:l.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((e,r)=>{e.setAttribute("data-index-h",r),zt(e,"translate3d("+r*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&W(e,"section").forEach((l,d)=>{l.setAttribute("data-index-h",r),l.setAttribute("data-index-v",d),zt(l,"translate3d(0, "+d*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e,r)=>{zt(e,"translate3d("+r*this.overviewSlideWidth+"px, 0, 0)"),W(e,".slide-background").forEach((l,d)=>{zt(l,"translate3d(0, "+d*this.overviewSlideHeight+"px, 0)")})})}update(){const e=Math.min(window.innerWidth,window.innerHeight),r=Math.max(e/5,150)/e,l=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+r+")","translateX("+-l.h*this.overviewSlideWidth+"px)","translateY("+-l.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),W(this.Reveal.getRevealElement(),".slides section").forEach(r=>{zt(r,""),r.removeEventListener("click",this.onSlideClicked,!0)}),W(this.Reveal.getBackgroundsElement(),".slide-background").forEach(r=>{zt(r,"")}),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let r=e.target;for(;r&&!r.nodeName.match(/section/gi);)r=r.parentNode;if(r&&!r.classList.contains("disabled")&&(this.deactivate(),r.nodeName.match(/section/gi))){let l=parseInt(r.getAttribute("data-index-h"),10),d=parseInt(r.getAttribute("data-index-v"),10);this.Reveal.slide(l,d)}}}}class un{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(e,r){e.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(e,r){typeof e=="object"&&e.keyCode?this.bindings[e.keyCode]={callback:r,key:e.key,description:e.description}:this.bindings[e]={callback:r,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,r){this.shortcuts[e]=r}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(e){e.shiftKey&&e.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(e){let r=this.Reveal.getConfig();if(typeof r.keyboardCondition=="function"&&r.keyboardCondition(e)===!1||r.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let l=e.keyCode,d=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let v=document.activeElement&&document.activeElement.isContentEditable===!0,m=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),y=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),f=!([32,37,38,39,40,78,80].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(v||m||y||f)return;let U,I=[66,86,190,191];if(typeof r.keyboard=="object")for(U in r.keyboard)r.keyboard[U]==="togglePause"&&I.push(parseInt(U,10));if(this.Reveal.isPaused()&&I.indexOf(l)===-1)return!1;let N=r.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),$=!1;if(typeof r.keyboard=="object"){for(U in r.keyboard)if(parseInt(U,10)===l){let H=r.keyboard[U];typeof H=="function"?H.apply(null,[e]):typeof H=="string"&&typeof this.Reveal[H]=="function"&&this.Reveal[H].call(),$=!0}}if($===!1){for(U in this.bindings)if(parseInt(U,10)===l){let H=this.bindings[U].callback;typeof H=="function"?H.apply(null,[e]):typeof H=="string"&&typeof this.Reveal[H]=="function"&&this.Reveal[H].call(),$=!0}}$===!1&&($=!0,l===80||l===33?this.Reveal.prev({skipFragments:e.altKey}):l===78||l===34?this.Reveal.next({skipFragments:e.altKey}):l===72||l===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&N?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):l===76||l===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&N?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):l===75||l===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&N?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):l===74||l===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&N?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):l===36?this.Reveal.slide(0):l===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):l===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):l===58||l===59||l===66||l===86||l===190||l===191?this.Reveal.togglePause():l===70?(H=>{let h=(H=H||document.documentElement).requestFullscreen||H.webkitRequestFullscreen||H.webkitRequestFullScreen||H.mozRequestFullScreen||H.msRequestFullscreen;h&&h.apply(H)})(r.embedded?this.Reveal.getViewportElement():document.documentElement):l===65?r.autoSlideStoppable&&this.Reveal.toggleAutoSlide(d):$=!1),$?e.preventDefault&&e.preventDefault():l!==27&&l!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}}class hn{constructor(e){var r,l,d;d=1e3,(l="MAX_REPLACE_STATE_FREQUENCY")in(r=this)?Object.defineProperty(r,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[l]=d,this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash){let r=e.replace(/^#\/?/,""),l=r.split("/");if(/^[0-9]*$/.test(l[0])||!r.length){const d=this.Reveal.getConfig();let v,m=d.hashOneBasedIndex?1:0,y=parseInt(l[0],10)-m||0,f=parseInt(l[1],10)-m||0;return d.fragmentInURL&&(v=parseInt(l[2],10),isNaN(v)&&(v=void 0)),{h:y,v:f,f:v}}{let d,v;/\/[-\d]+$/g.test(r)&&(v=parseInt(r.split("/").pop(),10),v=isNaN(v)?void 0:v,r=r.split("/").shift());try{d=document.getElementById(decodeURIComponent(r))}catch{}if(d)return{...this.Reveal.getIndices(d),f:v}}return null}readURL(){const e=this.Reveal.getIndices(),r=this.getIndicesFromHash();r?r.h===e.h&&r.v===e.v&&r.f===void 0||this.Reveal.slide(r.h,r.v,r.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let r=this.Reveal.getConfig(),l=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e=="number")this.writeURLTimeout=setTimeout(this.writeURL,e);else if(l){let d=this.getHash();r.history?window.location.hash=d:r.hash&&(d==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+d))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout(()=>this.replaceState(e),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let r="/",l=e||this.Reveal.getCurrentSlide(),d=l?l.getAttribute("id"):null;d&&(d=encodeURIComponent(d));let v=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(v.f=void 0),typeof d=="string"&&d.length)r="/"+d,v.f>=0&&(r+="/"+v.f);else{let m=this.Reveal.getConfig().hashOneBasedIndex?1:0;(v.h>0||v.v>0||v.f>=0)&&(r+=v.h+m),(v.v>0||v.f>=0)&&(r+="/"+(v.v+m)),v.f>=0&&(r+="/"+v.f)}return r}onWindowHashChange(e){this.readURL()}}class pn{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const e=this.Reveal.getConfig().rtl,r=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=W(r,".navigate-left"),this.controlsRight=W(r,".navigate-right"),this.controlsUp=W(r,".navigate-up"),this.controlsDown=W(r,".navigate-down"),this.controlsPrev=W(r,".navigate-prev"),this.controlsNext=W(r,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(e,r){this.element.style.display=e.controls?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows)}bind(){let e=["touchstart","click"];De&&(e=["touchstart"]),e.forEach(r=>{this.controlsLeft.forEach(l=>l.addEventListener(r,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(l=>l.addEventListener(r,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(l=>l.addEventListener(r,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(l=>l.addEventListener(r,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(l=>l.addEventListener(r,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(l=>l.addEventListener(r,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(e=>{this.controlsLeft.forEach(r=>r.removeEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(r=>r.removeEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(r=>r.removeEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(r=>r.removeEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(r=>r.removeEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(r=>r.removeEventListener(e,this.onNavigateNextClicked,!1))})}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(l=>{l.classList.remove("enabled","fragmented"),l.setAttribute("disabled","disabled")}),e.left&&this.controlsLeft.forEach(l=>{l.classList.add("enabled"),l.removeAttribute("disabled")}),e.right&&this.controlsRight.forEach(l=>{l.classList.add("enabled"),l.removeAttribute("disabled")}),e.up&&this.controlsUp.forEach(l=>{l.classList.add("enabled"),l.removeAttribute("disabled")}),e.down&&this.controlsDown.forEach(l=>{l.classList.add("enabled"),l.removeAttribute("disabled")}),(e.left||e.up)&&this.controlsPrev.forEach(l=>{l.classList.add("enabled"),l.removeAttribute("disabled")}),(e.right||e.down)&&this.controlsNext.forEach(l=>{l.classList.add("enabled"),l.removeAttribute("disabled")});let r=this.Reveal.getCurrentSlide();if(r){let l=this.Reveal.fragments.availableRoutes();l.prev&&this.controlsPrev.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),l.next&&this.controlsNext.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(r)?(l.prev&&this.controlsUp.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),l.next&&this.controlsDown.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")})):(l.prev&&this.controlsLeft.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}),l.next&&this.controlsRight.forEach(d=>{d.classList.add("fragmented","enabled"),d.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let l=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&l.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&l.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class gn{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(e,r){this.element.style.display=e.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let r=this.Reveal.getSlides(),l=r.length,d=Math.floor(e.clientX/this.getMaxWidth()*l);this.Reveal.getConfig().rtl&&(d=l-d);let v=this.Reveal.getIndices(r[d]);this.Reveal.slide(v.h,v.v)}destroy(){this.element.remove()}}class mn{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,r){e.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let r=e.detail||-e.wheelDelta;r>0?this.Reveal.next():r<0&&this.Reveal.prev()}}}const Me=(S,e)=>{const r=document.createElement("script");r.type="text/javascript",r.async=!1,r.defer=!1,r.src=S,typeof e=="function"&&(r.onload=r.onreadystatechange=d=>{(d.type==="load"||/loaded|complete/.test(r.readyState))&&(r.onload=r.onreadystatechange=r.onerror=null,e())},r.onerror=d=>{r.onload=r.onreadystatechange=r.onerror=null,e(new Error("Failed loading script: "+r.src+`
`+d))});const l=document.querySelector("head");l.insertBefore(r,l.lastChild)};class fn{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(e,r){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise(l=>{let d=[],v=0;if(r.forEach(m=>{m.condition&&!m.condition()||(m.async?this.asyncDependencies.push(m):d.push(m))}),d.length){v=d.length;const m=y=>{y&&typeof y.callback=="function"&&y.callback(),--v==0&&this.initPlugins().then(l)};d.forEach(y=>{typeof y.id=="string"?(this.registerPlugin(y),m(y)):typeof y.src=="string"?Me(y.src,()=>m(y)):(console.warn("Unrecognized plugin format",y),m())})}else this.initPlugins().then(l)})}initPlugins(){return new Promise(e=>{let r=Object.values(this.registeredPlugins),l=r.length;if(l===0)this.loadAsync().then(e);else{let d,v=()=>{--l==0?this.loadAsync().then(e):d()},m=0;d=()=>{let y=r[m++];if(typeof y.init=="function"){let f=y.init(this.Reveal);f&&typeof f.then=="function"?f.then(v):v()}else v()},d()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(e=>{Me(e.src,e.callback)}),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]=="string"?(e=arguments[1]).id=arguments[0]:typeof e=="function"&&(e=e());let r=e.id;typeof r!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",e):this.registeredPlugins[r]===void 0?(this.registeredPlugins[r]=e,this.state==="loaded"&&typeof e.init=="function"&&e.init(this.Reveal)):console.warn('reveal.js: "'+r+'" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(e=>{typeof e.destroy=="function"&&e.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class vn{constructor(e){this.Reveal=e}async setupPDF(){const e=this.Reveal.getConfig(),r=W(this.Reveal.getRevealElement(),".slides section"),l=e.slideNumber&&/all|print/i.test(e.showSlideNumber),d=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),v=Math.floor(d.width*(1+e.margin)),m=Math.floor(d.height*(1+e.margin)),y=d.width,f=d.height;await new Promise(requestAnimationFrame),se("@page{size:"+v+"px "+m+"px; margin: 0px;}"),se(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+y+"px; max-height:"+f+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=v+"px",document.body.style.height=m+"px";const U=document.querySelector(".reveal-viewport");let I;if(U){const Y=window.getComputedStyle(U);Y&&Y.background&&(I=Y.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(y,f),await new Promise(requestAnimationFrame);const N=r.map(Y=>Y.scrollHeight),$=[],H=r[0].parentNode;let h=1;r.forEach(function(Y,lt){if(Y.classList.contains("stack")===!1){let bt=(v-y)/2,gt=(m-f)/2;const mt=N[lt];let it=Math.max(Math.ceil(mt/m),1);it=Math.min(it,e.pdfMaxPagesPerSlide),(it===1&&e.center||Y.classList.contains("center"))&&(gt=Math.max((m-mt)/2,0));const rt=document.createElement("div");if($.push(rt),rt.className="pdf-page",rt.style.height=(m+e.pdfPageHeightOffset)*it+"px",I&&(rt.style.background=I),rt.appendChild(Y),Y.style.left=bt+"px",Y.style.top=gt+"px",Y.style.width=y+"px",this.Reveal.slideContent.layout(Y),Y.slideBackgroundElement&&rt.insertBefore(Y.slideBackgroundElement,Y),e.showNotes){const nt=this.Reveal.getSlideNotes(Y);if(nt){const V=typeof e.showNotes=="string"?e.showNotes:"inline",F=document.createElement("div");F.classList.add("speaker-notes"),F.classList.add("speaker-notes-pdf"),F.setAttribute("data-layout",V),F.innerHTML=nt,V==="separate-page"?$.push(F):(F.style.left=8+"px",F.style.bottom=8+"px",F.style.width=v-2*8+"px",rt.appendChild(F))}}if(l){const nt=document.createElement("div");nt.classList.add("slide-number"),nt.classList.add("slide-number-pdf"),nt.innerHTML=h++,rt.appendChild(nt)}if(e.pdfSeparateFragments){const nt=this.Reveal.fragments.sort(rt.querySelectorAll(".fragment"),!0);let Z;nt.forEach(function(V,F){Z&&Z.forEach(function(ot){ot.classList.remove("current-fragment")}),V.forEach(function(ot){ot.classList.add("visible","current-fragment")},this);const at=rt.cloneNode(!0);if(l){const ot=F+1;at.querySelector(".slide-number-pdf").innerHTML+="."+ot}$.push(at),Z=V},this),nt.forEach(function(V){V.forEach(function(F){F.classList.remove("visible","current-fragment")})})}else W(rt,".fragment:not(.fade-out)").forEach(function(nt){nt.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),$.forEach(Y=>H.appendChild(Y)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class bn{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(e){if(Vt(e,"video, audio"))return!0;for(;e&&typeof e.hasAttribute=="function";){if(e.hasAttribute("data-prevent-swipe"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let r=this.Reveal.getConfig();if(this.touchCaptured)De&&e.preventDefault();else{this.Reveal.onUserInput(e);let l=e.touches[0].clientX,d=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let v=this.Reveal.availableRoutes({includeFragments:!0}),m=l-this.touchStartX,y=d-this.touchStartY;m>40&&Math.abs(m)>Math.abs(y)?(this.touchCaptured=!0,r.navigationMode==="linear"?r.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):m<-40&&Math.abs(m)>Math.abs(y)?(this.touchCaptured=!0,r.navigationMode==="linear"?r.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):y>40&&v.up?(this.touchCaptured=!0,r.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):y<-40&&v.down&&(this.touchCaptured=!0,r.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),r.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}}class kn{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,r){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!=="focus"&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state="focus"}blur(){this.state!=="blur"&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state="blur"}isFocused(){return this.state==="focus"}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let r=vt(e.target,".reveal");r&&r===this.Reveal.getRevealElement()||this.blur()}}class yn{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,r){e.showNotes&&this.element.setAttribute("data-layout",typeof e.showNotes=="string"?e.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let r=e.querySelectorAll("aside.notes");return r?Array.from(r).map(l=>l.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class wn{constructor(e,r){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=r,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const r=this.playing;this.playing=e,!r&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,r=this.diameter2-this.thickness,l=this.diameter2,d=this.diameter2,v=28;this.progressOffset+=.1*(1-this.progressOffset);const m=-Math.PI/2+e*(2*Math.PI),y=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(l,d,r+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(l,d,r,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(l,d,r,y,m,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(l-14,d-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,v),this.context.fillRect(18,0,10,v)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,v),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(e,r){this.canvas.addEventListener(e,r,!1)}off(e,r){this.canvas.removeEventListener(e,r,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var xn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,dependencies:[],plugins:[]};function Oe(S,e){arguments.length<2&&(e=arguments[0],S=document.querySelector(".reveal"));const r={};let l,d,v,m,y,f={},U=!1,I={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},N=[],$=1,H={layout:"",overview:""},h={},Y="idle",lt=0,bt=0,gt=-1,mt=!1,it=new sn(r),rt=new rn(r),nt=new ln(r),Z=new an(r),V=new cn(r),F=new dn(r),at=new un(r),ot=new hn(r),dt=new pn(r),L=new gn(r),x=new mn(r),b=new fn(r),kt=new vn(r),ft=new kn(r),st=new bn(r),et=new yn(r);function Pt(p){if(!S)throw'Unable to find presentation root (<div class="reveal">).';if(h.wrapper=S,h.slides=S.querySelector(".slides"),!h.slides)throw'Unable to find slides container (<div class="slides">).';return f={...xn,...f,...e,...p,...ze()},_t(),window.addEventListener("load",K,!1),b.load(f.plugins,f.dependencies).then(pt),new Promise(k=>r.on("ready",k))}function _t(){f.embedded===!0?h.viewport=vt(S,".reveal-viewport")||S:(h.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),h.viewport.classList.add("reveal-viewport")}function pt(){U=!0,z(),M(),i(),t(),n(),We(),c(),ot.readURL(),Z.update(!0),setTimeout(()=>{h.slides.classList.remove("no-transition"),h.wrapper.classList.add("ready"),R({type:"ready",data:{indexh:l,indexv:d,currentSlide:m}})},1),kt.isPrintingPDF()&&(g(),document.readyState==="complete"?kt.setupPDF():window.addEventListener("load",()=>{kt.setupPDF()}))}function z(){f.showHiddenSlides||W(h.wrapper,'section[data-visibility="hidden"]').forEach(p=>{p.parentNode.removeChild(p)})}function M(){h.slides.classList.add("no-transition"),Dt?h.wrapper.classList.add("no-hover"):h.wrapper.classList.remove("no-hover"),Z.render(),rt.render(),dt.render(),L.render(),et.render(),h.pauseOverlay=Ge(h.wrapper,"div","pause-overlay",f.controls?'<button class="resume-button">Resume presentation</button>':null),h.statusElement=o(),h.wrapper.setAttribute("role","application")}function o(){let p=h.wrapper.querySelector(".aria-status");return p||(p=document.createElement("div"),p.style.position="absolute",p.style.height="1px",p.style.width="1px",p.style.overflow="hidden",p.style.clip="rect( 1px, 1px, 1px, 1px )",p.classList.add("aria-status"),p.setAttribute("aria-live","polite"),p.setAttribute("aria-atomic","true"),h.wrapper.appendChild(p)),p}function a(p){h.statusElement.textContent=p}function s(p){let k="";if(p.nodeType===3)k+=p.textContent;else if(p.nodeType===1){let C=p.getAttribute("aria-hidden"),_=window.getComputedStyle(p).display==="none";C==="true"||_||Array.from(p.childNodes).forEach(B=>{k+=s(B)})}return k=k.trim(),k===""?"":k+" "}function t(){setInterval(()=>{h.wrapper.scrollTop===0&&h.wrapper.scrollLeft===0||(h.wrapper.scrollTop=0,h.wrapper.scrollLeft=0)},1e3)}function n(){document.addEventListener("fullscreenchange",jt),document.addEventListener("webkitfullscreenchange",jt)}function i(){f.postMessage&&window.addEventListener("message",Se,!1)}function c(p){const k={...f};if(typeof p=="object"&&$t(f,p),r.isReady()===!1)return;const C=h.wrapper.querySelectorAll(".slides section").length;h.wrapper.classList.remove(k.transition),h.wrapper.classList.add(f.transition),h.wrapper.setAttribute("data-transition-speed",f.transitionSpeed),h.wrapper.setAttribute("data-background-transition",f.backgroundTransition),h.viewport.style.setProperty("--slide-width",f.width+"px"),h.viewport.style.setProperty("--slide-height",f.height+"px"),f.shuffle&&Xt(),ne(h.wrapper,"embedded",f.embedded),ne(h.wrapper,"rtl",f.rtl),ne(h.wrapper,"center",f.center),f.pause===!1&&qt(),f.previewLinks?(q(),O("[data-preview-link=false]")):(O(),q("[data-preview-link]:not([data-preview-link=false])")),nt.reset(),y&&(y.destroy(),y=null),C>1&&f.autoSlide&&f.autoSlideStoppable&&(y=new wn(h.wrapper,()=>Math.min(Math.max((Date.now()-gt)/lt,0),1)),y.on("click",Ye),mt=!1),f.navigationMode!=="default"?h.wrapper.setAttribute("data-navigation-mode",f.navigationMode):h.wrapper.removeAttribute("data-navigation-mode"),et.configure(f,k),ft.configure(f,k),x.configure(f,k),dt.configure(f,k),L.configure(f,k),at.configure(f,k),V.configure(f,k),rt.configure(f,k),de()}function u(){window.addEventListener("resize",Re,!1),f.touch&&st.bind(),f.keyboard&&at.bind(),f.progress&&L.bind(),f.respondToHashChanges&&ot.bind(),dt.bind(),ft.bind(),h.slides.addEventListener("click",Ee,!1),h.slides.addEventListener("transitionend",Ae,!1),h.pauseOverlay.addEventListener("click",qt,!1),f.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Le,!1)}function g(){st.unbind(),ft.unbind(),at.unbind(),dt.unbind(),L.unbind(),ot.unbind(),window.removeEventListener("resize",Re,!1),h.slides.removeEventListener("click",Ee,!1),h.slides.removeEventListener("transitionend",Ae,!1),h.pauseOverlay.removeEventListener("click",qt,!1)}function w(){g(),Ut(),O(),et.destroy(),ft.destroy(),b.destroy(),x.destroy(),dt.destroy(),L.destroy(),Z.destroy(),rt.destroy(),document.removeEventListener("fullscreenchange",jt),document.removeEventListener("webkitfullscreenchange",jt),document.removeEventListener("visibilitychange",Le,!1),window.removeEventListener("message",Se,!1),window.removeEventListener("load",K,!1),h.pauseOverlay&&h.pauseOverlay.remove(),h.statusElement&&h.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),h.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),h.wrapper.removeAttribute("data-transition-speed"),h.wrapper.removeAttribute("data-background-transition"),h.viewport.classList.remove("reveal-viewport"),h.viewport.style.removeProperty("--slide-width"),h.viewport.style.removeProperty("--slide-height"),h.slides.style.removeProperty("width"),h.slides.style.removeProperty("height"),h.slides.style.removeProperty("zoom"),h.slides.style.removeProperty("left"),h.slides.style.removeProperty("top"),h.slides.style.removeProperty("bottom"),h.slides.style.removeProperty("right"),h.slides.style.removeProperty("transform"),Array.from(h.wrapper.querySelectorAll(".slides section")).forEach(p=>{p.style.removeProperty("display"),p.style.removeProperty("top"),p.removeAttribute("hidden"),p.removeAttribute("aria-hidden")})}function E(p,k,C){S.addEventListener(p,k,C)}function A(p,k,C){S.removeEventListener(p,k,C)}function T(p){typeof p.layout=="string"&&(H.layout=p.layout),typeof p.overview=="string"&&(H.overview=p.overview),H.layout?zt(h.slides,H.layout+" "+H.overview):zt(h.slides,H.overview)}function R({target:p=h.wrapper,type:k,data:C,bubbles:_=!0}){let B=document.createEvent("HTMLEvents",1,2);return B.initEvent(k,_,!0),$t(B,C),p.dispatchEvent(B),p===h.wrapper&&P(k),B}function P(p,k){if(f.postMessageEvents&&window.parent!==window.self){let C={namespace:"reveal",eventName:p,state:we()};$t(C,k),window.parent.postMessage(JSON.stringify(C),"*")}}function q(p="a"){Array.from(h.wrapper.querySelectorAll(p)).forEach(k=>{/^(http|www)/gi.test(k.getAttribute("href"))&&k.addEventListener("click",Te,!1)})}function O(p="a"){Array.from(h.wrapper.querySelectorAll(p)).forEach(k=>{/^(http|www)/gi.test(k.getAttribute("href"))&&k.removeEventListener("click",Te,!1)})}function j(p){Q(),h.overlay=document.createElement("div"),h.overlay.classList.add("overlay"),h.overlay.classList.add("overlay-preview"),h.wrapper.appendChild(h.overlay),h.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${p}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${p}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,h.overlay.querySelector("iframe").addEventListener("load",k=>{h.overlay.classList.add("loaded")},!1),h.overlay.querySelector(".close").addEventListener("click",k=>{Q(),k.preventDefault()},!1),h.overlay.querySelector(".external").addEventListener("click",k=>{Q()},!1)}function X(p){typeof p=="boolean"?p?D():Q():h.overlay?Q():D()}function D(){if(f.help){Q(),h.overlay=document.createElement("div"),h.overlay.classList.add("overlay"),h.overlay.classList.add("overlay-help"),h.wrapper.appendChild(h.overlay);let p='<p class="title">Keyboard Shortcuts</p><br/>',k=at.getShortcuts(),C=at.getBindings();p+="<table><th>KEY</th><th>ACTION</th>";for(let _ in k)p+=`<tr><td>${_}</td><td>${k[_]}</td></tr>`;for(let _ in C)C[_].key&&C[_].description&&(p+=`<tr><td>${C[_].key}</td><td>${C[_].description}</td></tr>`);p+="</table>",h.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${p}</div>
				</div>
			`,h.overlay.querySelector(".close").addEventListener("click",_=>{Q(),_.preventDefault()},!1)}}function Q(){return!!h.overlay&&(h.overlay.parentNode.removeChild(h.overlay),h.overlay=null,!0)}function K(){if(h.wrapper&&!kt.isPrintingPDF()){if(!f.disableLayout){Dt&&!f.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const p=ct(),k=$;G(f.width,f.height),h.slides.style.width=p.width+"px",h.slides.style.height=p.height+"px",$=Math.min(p.presentationWidth/p.width,p.presentationHeight/p.height),$=Math.max($,f.minScale),$=Math.min($,f.maxScale),$===1?(h.slides.style.zoom="",h.slides.style.left="",h.slides.style.top="",h.slides.style.bottom="",h.slides.style.right="",T({layout:""})):(h.slides.style.zoom="",h.slides.style.left="50%",h.slides.style.top="50%",h.slides.style.bottom="auto",h.slides.style.right="auto",T({layout:"translate(-50%, -50%) scale("+$+")"}));const C=Array.from(h.wrapper.querySelectorAll(".slides section"));for(let _=0,B=C.length;_<B;_++){const J=C[_];J.style.display!=="none"&&(f.center||J.classList.contains("center")?J.classList.contains("stack")?J.style.top=0:J.style.top=Math.max((p.height-J.scrollHeight)/2,0)+"px":J.style.top="")}k!==$&&R({type:"resize",data:{oldScale:k,scale:$,size:p}})}h.viewport.style.setProperty("--slide-scale",$),L.update(),Z.updateParallax(),F.isActive()&&F.update()}}function G(p,k){W(h.slides,"section > .stretch, section > .r-stretch").forEach(C=>{let _=tn(C,k);if(/(img|video)/gi.test(C.nodeName)){const B=C.naturalWidth||C.videoWidth,J=C.naturalHeight||C.videoHeight,ht=Math.min(p/B,_/J);C.style.width=B*ht+"px",C.style.height=J*ht+"px"}else C.style.width=p+"px",C.style.height=_+"px"})}function ct(p,k){const C={width:f.width,height:f.height,presentationWidth:p||h.wrapper.offsetWidth,presentationHeight:k||h.wrapper.offsetHeight};return C.presentationWidth-=C.presentationWidth*f.margin,C.presentationHeight-=C.presentationHeight*f.margin,typeof C.width=="string"&&/%$/.test(C.width)&&(C.width=parseInt(C.width,10)/100*C.presentationWidth),typeof C.height=="string"&&/%$/.test(C.height)&&(C.height=parseInt(C.height,10)/100*C.presentationHeight),C}function tt(p,k){typeof p=="object"&&typeof p.setAttribute=="function"&&p.setAttribute("data-previous-indexv",k||0)}function Et(p){if(typeof p=="object"&&typeof p.setAttribute=="function"&&p.classList.contains("stack")){const k=p.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(p.getAttribute(k)||0,10)}return 0}function xt(p=m){return p&&p.parentNode&&!!p.parentNode.nodeName.match(/section/i)}function Ht(){return!(!m||!xt(m))&&!m.nextElementSibling}function oe(){return l===0&&d===0}function Zt(){return!!m&&!m.nextElementSibling&&(!xt(m)||!m.parentNode.nextElementSibling)}function le(){if(f.pause){const p=h.wrapper.classList.contains("paused");Ut(),h.wrapper.classList.add("paused"),p===!1&&R({type:"paused"})}}function qt(){const p=h.wrapper.classList.contains("paused");h.wrapper.classList.remove("paused"),Mt(),p&&R({type:"resumed"})}function ce(p){typeof p=="boolean"?p?le():qt():Ot()?qt():le()}function Ot(){return h.wrapper.classList.contains("paused")}function Ue(p){typeof p=="boolean"?p?Bt():Ft():mt?Bt():Ft()}function Fe(){return!(!lt||mt)}function St(p,k,C,_){if(R({type:"beforeslidechange",data:{indexh:p===void 0?l:p,indexv:k===void 0?d:k,origin:_}}).defaultPrevented)return;v=m;const B=h.wrapper.querySelectorAll(".slides>section");if(B.length===0)return;k!==void 0||F.isActive()||(k=Et(B[p])),v&&v.parentNode&&v.parentNode.classList.contains("stack")&&tt(v.parentNode,d);const J=N.concat();N.length=0;let ht=l||0,wt=d||0;l=ue(".slides>section",p===void 0?l:p),d=ue(".slides>section.present>section",k===void 0?d:k);let Lt=l!==ht||d!==wt;Lt||(v=null);let Nt=B[l];m=Nt.querySelectorAll("section")[d]||Nt;let ut=!1;Lt&&v&&m&&!F.isActive()&&(v.hasAttribute("data-auto-animate")&&m.hasAttribute("data-auto-animate")&&v.getAttribute("data-auto-animate-id")===m.getAttribute("data-auto-animate-id")&&!(l>ht||d>wt?m:v).hasAttribute("data-auto-animate-restart")&&(ut=!0,h.slides.classList.add("disable-slide-transitions")),Y="running"),Qt(),K(),F.isActive()&&F.update(),C!==void 0&&V.goto(C),v&&v!==m&&(v.classList.remove("present"),v.setAttribute("aria-hidden","true"),oe()&&setTimeout(()=>{Ke().forEach(At=>{tt(At,0)})},0));t:for(let At=0,Je=N.length;At<Je;At++){for(let Kt=0;Kt<J.length;Kt++)if(J[Kt]===N[At]){J.splice(Kt,1);continue t}h.viewport.classList.add(N[At]),R({type:N[At]})}for(;J.length;)h.viewport.classList.remove(J.pop());Lt&&R({type:"slidechanged",data:{indexh:l,indexv:d,previousSlide:v,currentSlide:m,origin:_}}),!Lt&&v||(it.stopEmbeddedContent(v),it.startEmbeddedContent(m)),requestAnimationFrame(()=>{a(s(m))}),L.update(),dt.update(),et.update(),Z.update(),Z.updateParallax(),rt.update(),V.update(),ot.writeURL(),Mt(),ut&&(setTimeout(()=>{h.slides.classList.remove("disable-slide-transitions")},0),f.autoAnimate&&nt.run(v,m))}function de(){g(),u(),K(),lt=f.autoSlide,Mt(),Z.create(),ot.writeURL(),V.sortAll(),dt.update(),L.update(),Qt(),et.update(),et.updateVisibility(),Z.update(!0),rt.update(),it.formatEmbeddedContent(),f.autoPlayMedia===!1?it.stopEmbeddedContent(m,{unloadIframes:!1}):it.startEmbeddedContent(m),F.isActive()&&F.layout()}function Be(p=m){Z.sync(p),V.sync(p),it.load(p),Z.update(),et.update()}function We(){Tt().forEach(p=>{W(p,"section").forEach((k,C)=>{C>0&&(k.classList.remove("present"),k.classList.remove("past"),k.classList.add("future"),k.setAttribute("aria-hidden","true"))})})}function Xt(p=Tt()){p.forEach((k,C)=>{let _=p[Math.floor(Math.random()*p.length)];_.parentNode===k.parentNode&&k.parentNode.insertBefore(k,_);let B=k.querySelectorAll("section");B.length&&Xt(B)})}function ue(p,k){let C=W(h.wrapper,p),_=C.length,B=kt.isPrintingPDF(),J=!1,ht=!1;if(_){f.loop&&(k>=_&&(J=!0),(k%=_)<0&&(k=_+k,ht=!0)),k=Math.max(Math.min(k,_-1),0);for(let yt=0;yt<_;yt++){let ut=C[yt],At=f.rtl&&!xt(ut);ut.classList.remove("past"),ut.classList.remove("present"),ut.classList.remove("future"),ut.setAttribute("hidden",""),ut.setAttribute("aria-hidden","true"),ut.querySelector("section")&&ut.classList.add("stack"),B?ut.classList.add("present"):yt<k?(ut.classList.add(At?"future":"past"),f.fragments&&he(ut)):yt>k?(ut.classList.add(At?"past":"future"),f.fragments&&pe(ut)):yt===k&&f.fragments&&(J?pe(ut):ht&&he(ut))}let wt=C[k],Lt=wt.classList.contains("present");wt.classList.add("present"),wt.removeAttribute("hidden"),wt.removeAttribute("aria-hidden"),Lt||R({target:wt,type:"visible",bubbles:!1});let Nt=wt.getAttribute("data-state");Nt&&(N=N.concat(Nt.split(" ")))}else k=0;return k}function he(p){W(p,".fragment").forEach(k=>{k.classList.add("visible"),k.classList.remove("current-fragment")})}function pe(p){W(p,".fragment.visible").forEach(k=>{k.classList.remove("visible","current-fragment")})}function Qt(){let p,k,C=Tt(),_=C.length;if(_&&l!==void 0){let B=F.isActive()?10:f.viewDistance;Dt&&(B=F.isActive()?6:f.mobileViewDistance),kt.isPrintingPDF()&&(B=Number.MAX_VALUE);for(let J=0;J<_;J++){let ht=C[J],wt=W(ht,"section"),Lt=wt.length;if(p=Math.abs((l||0)-J)||0,f.loop&&(p=Math.abs(((l||0)-J)%(_-B))||0),p<B?it.load(ht):it.unload(ht),Lt){let Nt=Et(ht);for(let yt=0;yt<Lt;yt++){let ut=wt[yt];k=Math.abs(J===(l||0)?(d||0)-yt:yt-Nt),p+k<B?it.load(ut):it.unload(ut)}}}be()?h.wrapper.classList.add("has-vertical-slides"):h.wrapper.classList.remove("has-vertical-slides"),ve()?h.wrapper.classList.add("has-horizontal-slides"):h.wrapper.classList.remove("has-horizontal-slides")}}function Rt({includeFragments:p=!1}={}){let k=h.wrapper.querySelectorAll(".slides>section"),C=h.wrapper.querySelectorAll(".slides>section.present>section"),_={left:l>0,right:l<k.length-1,up:d>0,down:d<C.length-1};if(f.loop&&(k.length>1&&(_.left=!0,_.right=!0),C.length>1&&(_.up=!0,_.down=!0)),k.length>1&&f.navigationMode==="linear"&&(_.right=_.right||_.down,_.left=_.left||_.up),p===!0){let B=V.availableRoutes();_.left=_.left||B.prev,_.up=_.up||B.prev,_.down=_.down||B.next,_.right=_.right||B.next}if(f.rtl){let B=_.left;_.left=_.right,_.right=B}return _}function ge(p=m){let k=Tt(),C=0;t:for(let _=0;_<k.length;_++){let B=k[_],J=B.querySelectorAll("section");for(let ht=0;ht<J.length;ht++){if(J[ht]===p)break t;J[ht].dataset.visibility!=="uncounted"&&C++}if(B===p)break;B.classList.contains("stack")===!1&&B.dataset.visibility!=="uncounted"&&C++}return C}function je(){let p=ke(),k=ge();if(m){let C=m.querySelectorAll(".fragment");if(C.length>0){let _=.9;k+=m.querySelectorAll(".fragment.visible").length/C.length*_}}return Math.min(k/(p-1),1)}function me(p){let k,C=l,_=d;if(p){let B=xt(p),J=B?p.parentNode:p,ht=Tt();C=Math.max(ht.indexOf(J),0),_=void 0,B&&(_=Math.max(W(p.parentNode,"section").indexOf(p),0))}if(!p&&m&&m.querySelectorAll(".fragment").length>0){let B=m.querySelector(".current-fragment");k=B&&B.hasAttribute("data-fragment-index")?parseInt(B.getAttribute("data-fragment-index"),10):m.querySelectorAll(".fragment.visible").length-1}return{h:C,v:_,f:k}}function Yt(){return W(h.wrapper,'.slides section:not(.stack):not([data-visibility="uncounted"])')}function Tt(){return W(h.wrapper,".slides>section")}function fe(){return W(h.wrapper,".slides>section>section")}function Ke(){return W(h.wrapper,".slides>section.stack")}function ve(){return Tt().length>1}function be(){return fe().length>1}function Ve(){return Yt().map(p=>{let k={};for(let C=0;C<p.attributes.length;C++){let _=p.attributes[C];k[_.name]=_.value}return k})}function ke(){return Yt().length}function ye(p,k){let C=Tt()[p],_=C&&C.querySelectorAll("section");return _&&_.length&&typeof k=="number"?_?_[k]:void 0:C}function Ze(p,k){let C=typeof p=="number"?ye(p,k):p;if(C)return C.slideBackgroundElement}function we(){let p=me();return{indexh:p.h,indexv:p.v,indexf:p.f,paused:Ot(),overview:F.isActive()}}function Xe(p){if(typeof p=="object"){St(It(p.indexh),It(p.indexv),It(p.indexf));let k=It(p.paused),C=It(p.overview);typeof k=="boolean"&&k!==Ot()&&ce(k),typeof C=="boolean"&&C!==F.isActive()&&F.toggle(C)}}function Mt(){if(Ut(),m&&f.autoSlide!==!1){let p=m.querySelector(".current-fragment");p||(p=m.querySelector(".fragment"));let k=p?p.getAttribute("data-autoslide"):null,C=m.parentNode?m.parentNode.getAttribute("data-autoslide"):null,_=m.getAttribute("data-autoslide");k?lt=parseInt(k,10):_?lt=parseInt(_,10):C?lt=parseInt(C,10):(lt=f.autoSlide,m.querySelectorAll(".fragment").length===0&&W(m,"video, audio").forEach(B=>{B.hasAttribute("data-autoplay")&&lt&&1e3*B.duration/B.playbackRate>lt&&(lt=1e3*B.duration/B.playbackRate+1e3)})),!lt||mt||Ot()||F.isActive()||Zt()&&!V.availableRoutes().next&&f.loop!==!0||(bt=setTimeout(()=>{typeof f.autoSlideMethod=="function"?f.autoSlideMethod():ee(),Mt()},lt),gt=Date.now()),y&&y.setPlaying(bt!==-1)}}function Ut(){clearTimeout(bt),bt=-1}function Ft(){lt&&!mt&&(mt=!0,R({type:"autoslidepaused"}),clearTimeout(bt),y&&y.setPlaying(!1))}function Bt(){lt&&mt&&(mt=!1,R({type:"autoslideresumed"}),Mt())}function Wt({skipFragments:p=!1}={}){I.hasNavigatedHorizontally=!0,f.rtl?(F.isActive()||p||V.next()===!1)&&Rt().left&&St(l+1,f.navigationMode==="grid"?d:void 0):(F.isActive()||p||V.prev()===!1)&&Rt().left&&St(l-1,f.navigationMode==="grid"?d:void 0)}function Jt({skipFragments:p=!1}={}){I.hasNavigatedHorizontally=!0,f.rtl?(F.isActive()||p||V.prev()===!1)&&Rt().right&&St(l-1,f.navigationMode==="grid"?d:void 0):(F.isActive()||p||V.next()===!1)&&Rt().right&&St(l+1,f.navigationMode==="grid"?d:void 0)}function Gt({skipFragments:p=!1}={}){(F.isActive()||p||V.prev()===!1)&&Rt().up&&St(l,d-1)}function te({skipFragments:p=!1}={}){I.hasNavigatedVertically=!0,(F.isActive()||p||V.next()===!1)&&Rt().down&&St(l,d+1)}function xe({skipFragments:p=!1}={}){if(p||V.prev()===!1)if(Rt().up)Gt({skipFragments:p});else{let k;if(k=f.rtl?W(h.wrapper,".slides>section.future").pop():W(h.wrapper,".slides>section.past").pop(),k&&k.classList.contains("stack")){let C=k.querySelectorAll("section").length-1||void 0;St(l-1,C)}else Wt({skipFragments:p})}}function ee({skipFragments:p=!1}={}){if(I.hasNavigatedHorizontally=!0,I.hasNavigatedVertically=!0,p||V.next()===!1){let k=Rt();k.down&&k.right&&f.loop&&Ht()&&(k.down=!1),k.down?te({skipFragments:p}):f.rtl?Wt({skipFragments:p}):Jt({skipFragments:p})}}function Qe(p){f.autoSlideStoppable&&Ft()}function Se(p){let k=p.data;if(typeof k=="string"&&k.charAt(0)==="{"&&k.charAt(k.length-1)==="}"&&(k=JSON.parse(k),k.method&&typeof r[k.method]=="function"))if(on.test(k.method)===!1){const C=r[k.method].apply(r,k.args);P("callback",{method:k.method,result:C})}else console.warn('reveal.js: "'+k.method+'" is is blacklisted from the postMessage API')}function Ae(p){Y==="running"&&/section/gi.test(p.target.nodeName)&&(Y="idle",R({type:"slidetransitionend",data:{indexh:l,indexv:d,previousSlide:v,currentSlide:m}}))}function Ee(p){const k=vt(p.target,'a[href^="#"]');if(k){const C=k.getAttribute("href"),_=ot.getIndicesFromHash(C);_&&(r.slide(_.h,_.v,_.f),p.preventDefault())}}function Re(p){K()}function Le(p){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function jt(p){(document.fullscreenElement||document.webkitFullscreenElement)===h.wrapper&&(p.stopImmediatePropagation(),setTimeout(()=>{r.layout(),r.focus.focus()},1))}function Te(p){if(p.currentTarget&&p.currentTarget.hasAttribute("href")){let k=p.currentTarget.getAttribute("href");k&&(j(k),p.preventDefault())}}function Ye(p){Zt()&&f.loop===!1?(St(0,0),Bt()):mt?Bt():Ft()}const Ce={VERSION:"4.4.0",initialize:Pt,configure:c,destroy:w,sync:de,syncSlide:Be,syncFragments:V.sync.bind(V),slide:St,left:Wt,right:Jt,up:Gt,down:te,prev:xe,next:ee,navigateLeft:Wt,navigateRight:Jt,navigateUp:Gt,navigateDown:te,navigatePrev:xe,navigateNext:ee,navigateFragment:V.goto.bind(V),prevFragment:V.prev.bind(V),nextFragment:V.next.bind(V),on:E,off:A,addEventListener:E,removeEventListener:A,layout:K,shuffle:Xt,availableRoutes:Rt,availableFragments:V.availableRoutes.bind(V),toggleHelp:X,toggleOverview:F.toggle.bind(F),togglePause:ce,toggleAutoSlide:Ue,isFirstSlide:oe,isLastSlide:Zt,isLastVerticalSlide:Ht,isVerticalSlide:xt,isPaused:Ot,isAutoSliding:Fe,isSpeakerNotes:et.isSpeakerNotesWindow.bind(et),isOverview:F.isActive.bind(F),isFocused:ft.isFocused.bind(ft),isPrintingPDF:kt.isPrintingPDF.bind(kt),isReady:()=>U,loadSlide:it.load.bind(it),unloadSlide:it.unload.bind(it),showPreview:j,hidePreview:Q,addEventListeners:u,removeEventListeners:g,dispatchEvent:R,getState:we,setState:Xe,getProgress:je,getIndices:me,getSlidesAttributes:Ve,getSlidePastCount:ge,getTotalSlides:ke,getSlide:ye,getPreviousSlide:()=>v,getCurrentSlide:()=>m,getSlideBackground:Ze,getSlideNotes:et.getSlideNotes.bind(et),getSlides:Yt,getHorizontalSlides:Tt,getVerticalSlides:fe,hasHorizontalSlides:ve,hasVerticalSlides:be,hasNavigatedHorizontally:()=>I.hasNavigatedHorizontally,hasNavigatedVertically:()=>I.hasNavigatedVertically,addKeyBinding:at.addKeyBinding.bind(at),removeKeyBinding:at.removeKeyBinding.bind(at),triggerKey:at.triggerKey.bind(at),registerKeyboardShortcut:at.registerKeyboardShortcut.bind(at),getComputedSlideSize:ct,getScale:()=>$,getConfig:()=>f,getQueryHash:ze,getSlidePath:ot.getHash.bind(ot),getRevealElement:()=>S,getSlidesElement:()=>h.slides,getViewportElement:()=>h.viewport,getBackgroundsElement:()=>Z.element,registerPlugin:b.registerPlugin.bind(b),hasPlugin:b.hasPlugin.bind(b),getPlugin:b.getPlugin.bind(b),getPlugins:b.getRegisteredPlugins.bind(b)};return $t(r,{...Ce,announceStatus:a,getStatusText:s,print:kt,focus:ft,progress:L,controls:dt,location:ot,overview:F,fragments:V,slideContent:it,slideNumber:rt,onUserInput:Qe,closeOverlay:Q,updateSlidesVisibility:Qt,layoutSlideContents:G,transformSlides:T,cueAutoSlide:Mt,cancelAutoSlide:Ut}),Ce}let Ct=Oe,Ie=[];Ct.initialize=S=>(Object.assign(Ct,new Oe(document.querySelector(".reveal"),S)),Ie.map(e=>e(Ct)),Ct.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(S=>{Ct[S]=(...e)=>{Ie.push(r=>r[S].call(null,...e))}}),Ct.isReady=()=>!1,Ct.VERSION="4.4.0";var He=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re={},Sn={get exports(){return re},set exports(S){re=S}};(function(S,e){(function(r,l){S.exports=l()})(He,function(){function r(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let l={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const d=/[&<>"']/,v=/[&<>"']/g,m=/[<>"']|&(?!#?\w+;)/,y=/[<>"']|&(?!#?\w+;)/g,f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U=s=>f[s];function I(s,t){if(t){if(d.test(s))return s.replace(v,U)}else if(m.test(s))return s.replace(y,U);return s}const N=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function $(s){return s.replace(N,(t,n)=>(n=n.toLowerCase())==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const H=/(^|[^\[])\^/g;function h(s,t){s=s.source||s,t=t||"";const n={replace:(i,c)=>(c=(c=c.source||c).replace(H,"$1"),s=s.replace(i,c),n),getRegex:()=>new RegExp(s,t)};return n}const Y=/[^\w:]/g,lt=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function bt(s,t,n){if(s){let i;try{i=decodeURIComponent($(n)).replace(Y,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}t&&!lt.test(n)&&(n=function(i,c){gt[" "+i]||(mt.test(i)?gt[" "+i]=i+"/":gt[" "+i]=F(i,"/",!0));const u=(i=gt[" "+i]).indexOf(":")===-1;return c.substring(0,2)==="//"?u?c:i.replace(it,"$1")+c:c.charAt(0)==="/"?u?c:i.replace(rt,"$1")+c:i+c}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const gt={},mt=/^[^:]+:\/*[^/]*$/,it=/^([^:]+:)[\s\S]*$/,rt=/^([^:]+:\/*[^/]*)[\s\S]*$/,nt={exec:function(){}};function Z(s){let t,n,i=1;for(;i<arguments.length;i++)for(n in t=arguments[i],t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n]);return s}function V(s,t){const n=s.replace(/\|/g,(c,u,g)=>{let w=!1,E=u;for(;--E>=0&&g[E]==="\\";)w=!w;return w?"|":" |"}).split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function F(s,t,n){const i=s.length;if(i===0)return"";let c=0;for(;c<i;){const u=s.charAt(i-c-1);if(u!==t||n){if(u===t||!n)break;c++}else c++}return s.substr(0,i-c)}function at(s){s&&s.sanitize&&!s.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ot(s,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=s),t>>=1,s+=s;return n+s}function dt(s,t,n,i){const c=t.href,u=t.title?I(t.title):null,g=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){i.state.inLink=!0;const w={type:"link",raw:n,href:c,title:u,text:g,tokens:i.inlineTokens(g,[])};return i.state.inLink=!1,w}return{type:"image",raw:n,href:c,title:u,text:I(g)}}class L{constructor(t){this.options=t||l}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:F(i,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const i=n[0],c=function(u,g){const w=u.match(/^(\s+)(?:```)/);if(w===null)return g;const E=w[1];return g.split(`
`).map(A=>{const T=A.match(/^\s+/);if(T===null)return A;const[R]=T;return R.length>=E.length?A.slice(E.length):A}).join(`
`)}(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim():n[2],text:c}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let i=n[2].trim();if(/#$/.test(i)){const u=F(i,"#");this.options.pedantic?i=u.trim():u&&!/ $/.test(u)||(i=u.trim())}const c={type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:[]};return this.lexer.inline(c.text,c.tokens),c}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const i=n[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(i,[]),text:i}}}list(t){let n=this.rules.block.list.exec(t);if(n){let i,c,u,g,w,E,A,T,R,P,q,O,j=n[1].trim();const X=j.length>1,D={type:"list",raw:"",ordered:X,start:X?+j.slice(0,-1):"",loose:!1,items:[]};j=X?`\\d{1,9}\\${j.slice(-1)}`:`\\${j}`,this.options.pedantic&&(j=X?j:"[*+-]");const Q=new RegExp(`^( {0,3}${j})((?: [^\\n]*)?(?:\\n|$))`);for(;t&&(O=!1,n=Q.exec(t))&&!this.rules.block.hr.test(t);){if(i=n[0],t=t.substring(i.length),T=n[2].split(`
`,1)[0],R=t.split(`
`,1)[0],this.options.pedantic?(g=2,q=T.trimLeft()):(g=n[2].search(/[^ ]/),g=g>4?1:g,q=T.slice(g),g+=n[1].length),E=!1,!T&&/^ *$/.test(R)&&(i+=R+`
`,t=t.substring(R.length+1),O=!0),!O){const G=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;t&&(P=t.split(`
`,1)[0],T=P,this.options.pedantic&&(T=T.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!G.test(T));){if(T.search(/[^ ]/)>=g||!T.trim())q+=`
`+T.slice(g);else{if(E)break;q+=`
`+T}E||T.trim()||(E=!0),i+=P+`
`,t=t.substring(P.length+1)}}D.loose||(A?D.loose=!0:/\n *\n *$/.test(i)&&(A=!0)),this.options.gfm&&(c=/^\[[ xX]\] /.exec(q),c&&(u=c[0]!=="[ ] ",q=q.replace(/^\[[ xX]\] +/,""))),D.items.push({type:"list_item",raw:i,task:!!c,checked:u,loose:!1,text:q}),D.raw+=i}D.items[D.items.length-1].raw=i.trimRight(),D.items[D.items.length-1].text=q.trimRight(),D.raw=D.raw.trimRight();const K=D.items.length;for(w=0;w<K;w++){this.lexer.state.top=!1,D.items[w].tokens=this.lexer.blockTokens(D.items[w].text,[]);const G=D.items[w].tokens.filter(tt=>tt.type==="space"),ct=G.every(tt=>{const Et=tt.raw.split("");let xt=0;for(const Ht of Et)if(Ht===`
`&&(xt+=1),xt>1)return!0;return!1});!D.loose&&G.length&&ct&&(D.loose=!0,D.items[w].loose=!0)}return D}}html(t){const n=this.rules.block.html.exec(t);if(n){const i={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(i.type="paragraph",i.text=this.options.sanitizer?this.options.sanitizer(n[0]):I(n[0]),i.tokens=[],this.lexer.inline(i.text,i.tokens)),i}}def(t){const n=this.rules.block.def.exec(t);if(n)return n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),{type:"def",tag:n[1].toLowerCase().replace(/\s+/g," "),raw:n[0],href:n[2],title:n[3]}}table(t){const n=this.rules.block.table.exec(t);if(n){const i={type:"table",header:V(n[1]).map(c=>({text:c})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=n[0];let c,u,g,w,E=i.align.length;for(c=0;c<E;c++)/^ *-+: *$/.test(i.align[c])?i.align[c]="right":/^ *:-+: *$/.test(i.align[c])?i.align[c]="center":/^ *:-+ *$/.test(i.align[c])?i.align[c]="left":i.align[c]=null;for(E=i.rows.length,c=0;c<E;c++)i.rows[c]=V(i.rows[c],i.header.length).map(A=>({text:A}));for(E=i.header.length,u=0;u<E;u++)i.header[u].tokens=[],this.lexer.inlineTokens(i.header[u].text,i.header[u].tokens);for(E=i.rows.length,u=0;u<E;u++)for(w=i.rows[u],g=0;g<w.length;g++)w[g].tokens=[],this.lexer.inlineTokens(w[g].text,w[g].tokens);return i}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n){const i={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const i={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}text(t){const n=this.rules.block.text.exec(t);if(n){const i={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:I(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):I(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const g=F(i.slice(0,-1),"\\");if((i.length-g.length)%2==0)return}else{const g=function(w,E){if(w.indexOf(E[1])===-1)return-1;const A=w.length;let T=0,R=0;for(;R<A;R++)if(w[R]==="\\")R++;else if(w[R]===E[0])T++;else if(w[R]===E[1]&&(T--,T<0))return R;return-1}(n[2],"()");if(g>-1){const w=(n[0].indexOf("!")===0?5:4)+n[1].length+g;n[2]=n[2].substring(0,g),n[0]=n[0].substring(0,w).trim(),n[3]=""}}let c=n[2],u="";if(this.options.pedantic){const g=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(c);g&&(c=g[1],u=g[3])}else u=n[3]?n[3].slice(1,-1):"";return c=c.trim(),/^</.test(c)&&(c=this.options.pedantic&&!/>$/.test(i)?c.slice(1):c.slice(1,-1)),dt(n,{href:c&&c.replace(this.rules.inline._escapes,"$1"),title:u&&u.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let c=(i[2]||i[1]).replace(/\s+/g," ");if(c=n[c.toLowerCase()],!c||!c.href){const u=i[0].charAt(0);return{type:"text",raw:u,text:u}}return dt(i,c,i[0],this.lexer)}}emStrong(t,n,i=""){let c=this.rules.inline.emStrong.lDelim.exec(t);if(!c||c[3]&&i.match(/[\p{L}\p{N}]/u))return;const u=c[1]||c[2]||"";if(!u||u&&(i===""||this.rules.inline.punctuation.exec(i))){const g=c[0].length-1;let w,E,A=g,T=0;const R=c[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(R.lastIndex=0,n=n.slice(-1*t.length+g);(c=R.exec(n))!=null;){if(w=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!w)continue;if(E=w.length,c[3]||c[4]){A+=E;continue}if((c[5]||c[6])&&g%3&&!((g+E)%3)){T+=E;continue}if(A-=E,A>0)continue;if(E=Math.min(E,E+A+T),Math.min(g,E)%2){const q=t.slice(1,g+c.index+E);return{type:"em",raw:t.slice(0,g+c.index+E+1),text:q,tokens:this.lexer.inlineTokens(q,[])}}const P=t.slice(2,g+c.index+E-1);return{type:"strong",raw:t.slice(0,g+c.index+E+1),text:P,tokens:this.lexer.inlineTokens(P,[])}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let i=n[2].replace(/\n/g," ");const c=/[^ ]/.test(i),u=/^ /.test(i)&&/ $/.test(i);return c&&u&&(i=i.substring(1,i.length-1)),i=I(i,!0),{type:"codespan",raw:n[0],text:i}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(t,n){const i=this.rules.inline.autolink.exec(t);if(i){let c,u;return i[2]==="@"?(c=I(this.options.mangle?n(i[1]):i[1]),u="mailto:"+c):(c=I(i[1]),u=c),{type:"link",raw:i[0],text:c,href:u,tokens:[{type:"text",raw:c,text:c}]}}}url(t,n){let i;if(i=this.rules.inline.url.exec(t)){let c,u;if(i[2]==="@")c=I(this.options.mangle?n(i[0]):i[0]),u="mailto:"+c;else{let g;do g=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(g!==i[0]);c=I(i[0]),u=i[1]==="www."?"http://"+c:c}return{type:"link",raw:i[0],text:c,href:u,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(t,n){const i=this.rules.inline.text.exec(t);if(i){let c;return c=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):I(i[0]):i[0]:I(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:c}}}}const x={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:nt,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};x.def=h(x.def).replace("label",x._label).replace("title",x._title).getRegex(),x.bullet=/(?:[*+-]|\d{1,9}[.)])/,x.listItemStart=h(/^( *)(bull) */).replace("bull",x.bullet).getRegex(),x.list=h(x.list).replace(/bull/g,x.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+x.def.source+")").getRegex(),x._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",x._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,x.html=h(x.html,"i").replace("comment",x._comment).replace("tag",x._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),x.paragraph=h(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.blockquote=h(x.blockquote).replace("paragraph",x.paragraph).getRegex(),x.normal=Z({},x),x.gfm=Z({},x.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),x.gfm.table=h(x.gfm.table).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.gfm.paragraph=h(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",x.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.pedantic=Z({},x.normal,{html:h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",x._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nt,paragraph:h(x.normal._paragraph).replace("hr",x.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",x.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const b={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:nt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:nt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function kt(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ft(s){let t,n,i="";const c=s.length;for(t=0;t<c;t++)n=s.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),i+="&#"+n+";";return i}b._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",b.punctuation=h(b.punctuation).replace(/punctuation/g,b._punctuation).getRegex(),b.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,b.escapedEmSt=/\\\*|\\_/g,b._comment=h(x._comment).replace("(?:-->|$)","-->").getRegex(),b.emStrong.lDelim=h(b.emStrong.lDelim).replace(/punct/g,b._punctuation).getRegex(),b.emStrong.rDelimAst=h(b.emStrong.rDelimAst,"g").replace(/punct/g,b._punctuation).getRegex(),b.emStrong.rDelimUnd=h(b.emStrong.rDelimUnd,"g").replace(/punct/g,b._punctuation).getRegex(),b._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,b._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,b._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,b.autolink=h(b.autolink).replace("scheme",b._scheme).replace("email",b._email).getRegex(),b._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,b.tag=h(b.tag).replace("comment",b._comment).replace("attribute",b._attribute).getRegex(),b._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,b._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,b._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,b.link=h(b.link).replace("label",b._label).replace("href",b._href).replace("title",b._title).getRegex(),b.reflink=h(b.reflink).replace("label",b._label).replace("ref",x._label).getRegex(),b.nolink=h(b.nolink).replace("ref",x._label).getRegex(),b.reflinkSearch=h(b.reflinkSearch,"g").replace("reflink",b.reflink).replace("nolink",b.nolink).getRegex(),b.normal=Z({},b),b.pedantic=Z({},b.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",b._label).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",b._label).getRegex()}),b.gfm=Z({},b.normal,{escape:h(b.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),b.gfm.url=h(b.gfm.url,"i").replace("email",b.gfm._extended_email).getRegex(),b.breaks=Z({},b.gfm,{br:h(b.br).replace("{2,}","*").getRegex(),text:h(b.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class st{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||l,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:x.normal,inline:b.normal};this.options.pedantic?(n.block=x.pedantic,n.inline=b.pedantic):this.options.gfm&&(n.block=x.gfm,this.options.breaks?n.inline=b.breaks:n.inline=b.gfm),this.tokenizer.rules=n}static get rules(){return{block:x,inline:b}}static lex(t,n){return new st(n).lex(t)}static lexInline(t,n){return new st(n).inlineTokens(t)}lex(t){let n;for(t=t.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(t,this.tokens);n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){let i,c,u,g;for(this.options.pedantic&&(t=t.replace(/^ +$/gm,""));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(w=>!!(i=w.call({lexer:this},t,n))&&(t=t.substring(i.raw.length),n.push(i),!0))))if(i=this.tokenizer.space(t))t=t.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);else if(i=this.tokenizer.code(t))t=t.substring(i.raw.length),c=n[n.length-1],!c||c.type!=="paragraph"&&c.type!=="text"?n.push(i):(c.raw+=`
`+i.raw,c.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=c.text);else if(i=this.tokenizer.fences(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.heading(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.hr(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.blockquote(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.list(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.html(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.def(t))t=t.substring(i.raw.length),c=n[n.length-1],!c||c.type!=="paragraph"&&c.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(c.raw+=`
`+i.raw,c.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=c.text);else if(i=this.tokenizer.table(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.lheading(t))t=t.substring(i.raw.length),n.push(i);else{if(u=t,this.options.extensions&&this.options.extensions.startBlock){let w=1/0;const E=t.slice(1);let A;this.options.extensions.startBlock.forEach(function(T){A=T.call({lexer:this},E),typeof A=="number"&&A>=0&&(w=Math.min(w,A))}),w<1/0&&w>=0&&(u=t.substring(0,w+1))}if(this.state.top&&(i=this.tokenizer.paragraph(u)))c=n[n.length-1],g&&c.type==="paragraph"?(c.raw+=`
`+i.raw,c.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=c.text):n.push(i),g=u.length!==t.length,t=t.substring(i.raw.length);else if(i=this.tokenizer.text(t))t=t.substring(i.raw.length),c=n[n.length-1],c&&c.type==="text"?(c.raw+=`
`+i.raw,c.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=c.text):n.push(i);else if(t){const w="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(w);break}throw new Error(w)}}return this.state.top=!0,n}inline(t,n){this.inlineQueue.push({src:t,tokens:n})}inlineTokens(t,n=[]){let i,c,u,g,w,E,A=t;if(this.tokens.links){const T=Object.keys(this.tokens.links);if(T.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(A))!=null;)T.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(A=A.slice(0,g.index)+"["+ot("a",g[0].length-2)+"]"+A.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.blockSkip.exec(A))!=null;)A=A.slice(0,g.index)+"["+ot("a",g[0].length-2)+"]"+A.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(g=this.tokenizer.rules.inline.escapedEmSt.exec(A))!=null;)A=A.slice(0,g.index)+"++"+A.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(w||(E=""),w=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(T=>!!(i=T.call({lexer:this},t,n))&&(t=t.substring(i.raw.length),n.push(i),!0))))if(i=this.tokenizer.escape(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.tag(t))t=t.substring(i.raw.length),c=n[n.length-1],c&&i.type==="text"&&c.type==="text"?(c.raw+=i.raw,c.text+=i.text):n.push(i);else if(i=this.tokenizer.link(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(i.raw.length),c=n[n.length-1],c&&i.type==="text"&&c.type==="text"?(c.raw+=i.raw,c.text+=i.text):n.push(i);else if(i=this.tokenizer.emStrong(t,A,E))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.codespan(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.br(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.del(t))t=t.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.autolink(t,ft))t=t.substring(i.raw.length),n.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(t,ft))){if(u=t,this.options.extensions&&this.options.extensions.startInline){let T=1/0;const R=t.slice(1);let P;this.options.extensions.startInline.forEach(function(q){P=q.call({lexer:this},R),typeof P=="number"&&P>=0&&(T=Math.min(T,P))}),T<1/0&&T>=0&&(u=t.substring(0,T+1))}if(i=this.tokenizer.inlineText(u,kt))t=t.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(E=i.raw.slice(-1)),w=!0,c=n[n.length-1],c&&c.type==="text"?(c.raw+=i.raw,c.text+=i.text):n.push(i);else if(t){const T="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(T);break}throw new Error(T)}}else t=t.substring(i.raw.length),n.push(i);return n}}class et{constructor(t){this.options=t||l}code(t,n,i){const c=(n||"").match(/\S*/)[0];if(this.options.highlight){const u=this.options.highlight(t,c);u!=null&&u!==t&&(i=!0,t=u)}return t=t.replace(/\n$/,"")+`
`,c?'<pre><code class="'+this.options.langPrefix+I(c,!0)+'">'+(i?t:I(t,!0))+`</code></pre>
`:"<pre><code>"+(i?t:I(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,n,i,c){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+c.slug(i)+'">'+t+"</h"+n+`>
`:"<h"+n+">"+t+"</h"+n+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,i){const c=n?"ol":"ul";return"<"+c+(n&&i!==1?' start="'+i+'"':"")+`>
`+t+"</"+c+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,n){return n&&(n="<tbody>"+n+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,n){const i=n.header?"th":"td";return(n.align?"<"+i+' align="'+n.align+'">':"<"+i+">")+t+"</"+i+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,n,i){if((t=bt(this.options.sanitize,this.options.baseUrl,t))===null)return i;let c='<a href="'+I(t)+'"';return n&&(c+=' title="'+n+'"'),c+=">"+i+"</a>",c}image(t,n,i){if((t=bt(this.options.sanitize,this.options.baseUrl,t))===null)return i;let c='<img src="'+t+'" alt="'+i+'"';return n&&(c+=' title="'+n+'"'),c+=this.options.xhtml?"/>":">",c}text(t){return t}}class Pt{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,i){return""+i}image(t,n,i){return""+i}br(){return""}}class _t{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let i=t,c=0;if(this.seen.hasOwnProperty(i)){c=this.seen[t];do c++,i=t+"-"+c;while(this.seen.hasOwnProperty(i))}return n||(this.seen[t]=c,this.seen[i]=0),i}slug(t,n={}){const i=this.serialize(t);return this.getNextSafeSlug(i,n.dryrun)}}class pt{constructor(t){this.options=t||l,this.options.renderer=this.options.renderer||new et,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Pt,this.slugger=new _t}static parse(t,n){return new pt(n).parse(t)}static parseInline(t,n){return new pt(n).parseInline(t)}parse(t,n=!0){let i,c,u,g,w,E,A,T,R,P,q,O,j,X,D,Q,K,G,ct,tt="";const Et=t.length;for(i=0;i<Et;i++)if(P=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[P.type]&&(ct=this.options.extensions.renderers[P.type].call({parser:this},P),ct!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(P.type)))tt+=ct||"";else switch(P.type){case"space":continue;case"hr":tt+=this.renderer.hr();continue;case"heading":tt+=this.renderer.heading(this.parseInline(P.tokens),P.depth,$(this.parseInline(P.tokens,this.textRenderer)),this.slugger);continue;case"code":tt+=this.renderer.code(P.text,P.lang,P.escaped);continue;case"table":for(T="",A="",g=P.header.length,c=0;c<g;c++)A+=this.renderer.tablecell(this.parseInline(P.header[c].tokens),{header:!0,align:P.align[c]});for(T+=this.renderer.tablerow(A),R="",g=P.rows.length,c=0;c<g;c++){for(E=P.rows[c],A="",w=E.length,u=0;u<w;u++)A+=this.renderer.tablecell(this.parseInline(E[u].tokens),{header:!1,align:P.align[u]});R+=this.renderer.tablerow(A)}tt+=this.renderer.table(T,R);continue;case"blockquote":R=this.parse(P.tokens),tt+=this.renderer.blockquote(R);continue;case"list":for(q=P.ordered,O=P.start,j=P.loose,g=P.items.length,R="",c=0;c<g;c++)D=P.items[c],Q=D.checked,K=D.task,X="",D.task&&(G=this.renderer.checkbox(Q),j?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=G+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=G+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:G}):X+=G),X+=this.parse(D.tokens,j),R+=this.renderer.listitem(X,K,Q);tt+=this.renderer.list(R,q,O);continue;case"html":tt+=this.renderer.html(P.text);continue;case"paragraph":tt+=this.renderer.paragraph(this.parseInline(P.tokens));continue;case"text":for(R=P.tokens?this.parseInline(P.tokens):P.text;i+1<Et&&t[i+1].type==="text";)P=t[++i],R+=`
`+(P.tokens?this.parseInline(P.tokens):P.text);tt+=n?this.renderer.paragraph(R):R;continue;default:{const xt='Token with "'+P.type+'" type was not found.';if(this.options.silent)return void console.error(xt);throw new Error(xt)}}return tt}parseInline(t,n){n=n||this.renderer;let i,c,u,g="";const w=t.length;for(i=0;i<w;i++)if(c=t[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[c.type]&&(u=this.options.extensions.renderers[c.type].call({parser:this},c),u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)))g+=u||"";else switch(c.type){case"escape":g+=n.text(c.text);break;case"html":g+=n.html(c.text);break;case"link":g+=n.link(c.href,c.title,this.parseInline(c.tokens,n));break;case"image":g+=n.image(c.href,c.title,c.text);break;case"strong":g+=n.strong(this.parseInline(c.tokens,n));break;case"em":g+=n.em(this.parseInline(c.tokens,n));break;case"codespan":g+=n.codespan(c.text);break;case"br":g+=n.br();break;case"del":g+=n.del(this.parseInline(c.tokens,n));break;case"text":g+=n.text(c.text);break;default:{const E='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(E);throw new Error(E)}}return g}}function z(s,t,n){if(s==null)throw new Error("marked(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");if(typeof t=="function"&&(n=t,t=null),at(t=Z({},z.defaults,t||{})),n){const i=t.highlight;let c;try{c=st.lex(s,t)}catch(w){return n(w)}const u=function(w){let E;if(!w)try{t.walkTokens&&z.walkTokens(c,t.walkTokens),E=pt.parse(c,t)}catch(A){w=A}return t.highlight=i,w?n(w):n(null,E)};if(!i||i.length<3||(delete t.highlight,!c.length))return u();let g=0;return z.walkTokens(c,function(w){w.type==="code"&&(g++,setTimeout(()=>{i(w.text,w.lang,function(E,A){if(E)return u(E);A!=null&&A!==w.text&&(w.text=A,w.escaped=!0),g--,g===0&&u()})},0))}),void(g===0&&u())}try{const i=st.lex(s,t);return t.walkTokens&&z.walkTokens(i,t.walkTokens),pt.parse(i,t)}catch(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+I(i.message+"",!0)+"</pre>";throw i}}z.options=z.setOptions=function(s){var t;return Z(z.defaults,s),t=z.defaults,l=t,z},z.getDefaults=r,z.defaults=l,z.use=function(...s){const t=Z({},...s),n=z.defaults.extensions||{renderers:{},childTokens:{}};let i;s.forEach(c=>{if(c.extensions&&(i=!0,c.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if(u.renderer){const g=n.renderers?n.renderers[u.name]:null;n.renderers[u.name]=g?function(...w){let E=u.renderer.apply(this,w);return E===!1&&(E=g.apply(this,w)),E}:u.renderer}if(u.tokenizer){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[u.level]?n[u.level].unshift(u.tokenizer):n[u.level]=[u.tokenizer],u.start&&(u.level==="block"?n.startBlock?n.startBlock.push(u.start):n.startBlock=[u.start]:u.level==="inline"&&(n.startInline?n.startInline.push(u.start):n.startInline=[u.start]))}u.childTokens&&(n.childTokens[u.name]=u.childTokens)})),c.renderer){const u=z.defaults.renderer||new et;for(const g in c.renderer){const w=u[g];u[g]=(...E)=>{let A=c.renderer[g].apply(u,E);return A===!1&&(A=w.apply(u,E)),A}}t.renderer=u}if(c.tokenizer){const u=z.defaults.tokenizer||new L;for(const g in c.tokenizer){const w=u[g];u[g]=(...E)=>{let A=c.tokenizer[g].apply(u,E);return A===!1&&(A=w.apply(u,E)),A}}t.tokenizer=u}if(c.walkTokens){const u=z.defaults.walkTokens;t.walkTokens=function(g){c.walkTokens.call(this,g),u&&u.call(this,g)}}i&&(t.extensions=n),z.setOptions(t)})},z.walkTokens=function(s,t){for(const n of s)switch(t.call(z,n),n.type){case"table":for(const i of n.header)z.walkTokens(i.tokens,t);for(const i of n.rows)for(const c of i)z.walkTokens(c.tokens,t);break;case"list":z.walkTokens(n.items,t);break;default:z.defaults.extensions&&z.defaults.extensions.childTokens&&z.defaults.extensions.childTokens[n.type]?z.defaults.extensions.childTokens[n.type].forEach(function(i){z.walkTokens(n[i],t)}):n.tokens&&z.walkTokens(n.tokens,t)}},z.parseInline=function(s,t){if(s==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof s!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected");at(t=Z({},z.defaults,t||{}));try{const n=st.lexInline(s,t);return t.walkTokens&&z.walkTokens(n,t.walkTokens),pt.parseInline(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+I(n.message+"",!0)+"</pre>";throw n}},z.Parser=pt,z.parser=pt.parse,z.Renderer=et,z.TextRenderer=Pt,z.Lexer=st,z.lexer=st.lex,z.Tokenizer=L,z.Slugger=_t,z.parse=z;/*!
   * The reveal.js markdown plugin. Handles parsing of
   * markdown inside of presentations as well as loading
   * of external markdown documents.
   */const M="__SCRIPT_END__",o=/\[([\s\d,|-]*)\]/,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return()=>{let s;function t(T){var R=(T.querySelector("[data-template]")||T.querySelector("script")||T).textContent,P=(R=R.replace(new RegExp(M,"g"),"<\/script>")).match(/^\n?(\s*)/)[1].length,q=R.match(/^\n?(\t*)/)[1].length;return q>0?R=R.replace(new RegExp("\\n?\\t{"+q+"}","g"),`
`):P>1&&(R=R.replace(new RegExp("\\n? {"+P+"}","g"),`
`)),R}function n(T){for(var R=T.attributes,P=[],q=0,O=R.length;q<O;q++){var j=R[q].name,X=R[q].value;/data\-(markdown|separator|vertical|notes)/gi.test(j)||(X?P.push(j+'="'+X+'"'):P.push(j))}return P.join(" ")}function i(T){return(T=T||{}).separator=T.separator||`\r?
---\r?
`,T.notesSeparator=T.notesSeparator||"notes?:",T.attributes=T.attributes||"",T}function c(T,R){R=i(R);var P=T.split(new RegExp(R.notesSeparator,"mgi"));return P.length===2&&(T=P[0]+'<aside class="notes">'+z(P[1].trim())+"</aside>"),'<script type="text/template">'+(T=T.replace(/<\/script>/g,M))+"<\/script>"}function u(T,R){R=i(R);for(var P,q,O,j=new RegExp(R.separator+(R.verticalSeparator?"|"+R.verticalSeparator:""),"mg"),X=new RegExp(R.separator),D=0,Q=!0,K=[];P=j.exec(T);)!(q=X.test(P[0]))&&Q&&K.push([]),O=T.substring(D,P.index),q&&Q?K.push(O):K[K.length-1].push(O),D=j.lastIndex,Q=q;(Q?K:K[K.length-1]).push(T.substring(D));for(var G="",ct=0,tt=K.length;ct<tt;ct++)K[ct]instanceof Array?(G+="<section "+R.attributes+">",K[ct].forEach(function(Et){G+="<section data-markdown>"+c(Et,R)+"</section>"}),G+="</section>"):G+="<section "+R.attributes+" data-markdown>"+c(K[ct],R)+"</section>";return G}function g(T){return new Promise(function(R){var P=[];[].slice.call(T.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(q,O){q.getAttribute("data-markdown").length?P.push(function(j){return new Promise(function(X,D){var Q=new XMLHttpRequest,K=j.getAttribute("data-markdown"),G=j.getAttribute("data-charset");G!=null&&G!=""&&Q.overrideMimeType("text/html; charset="+G),Q.onreadystatechange=function(ct,tt){tt.readyState===4&&(tt.status>=200&&tt.status<300||tt.status===0?X(tt,K):D(tt,K))}.bind(this,j,Q),Q.open("GET",K,!0);try{Q.send()}catch(ct){console.warn("Failed to get the Markdown file "+K+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+ct),X(Q,K)}})}(q).then(function(j,X){q.outerHTML=u(j.responseText,{separator:q.getAttribute("data-separator"),verticalSeparator:q.getAttribute("data-separator-vertical"),notesSeparator:q.getAttribute("data-separator-notes"),attributes:n(q)})},function(j,X){q.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+X+" failed with HTTP status "+j.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):q.outerHTML=u(t(q),{separator:q.getAttribute("data-separator"),verticalSeparator:q.getAttribute("data-separator-vertical"),notesSeparator:q.getAttribute("data-separator-notes"),attributes:n(q)})}),Promise.all(P).then(R)})}function w(T,R,P){var q,O,j=new RegExp(P,"mg"),X=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg"),D=T.nodeValue;if(q=j.exec(D)){var Q=q[1];for(D=D.substring(0,q.index)+D.substring(j.lastIndex),T.nodeValue=D;O=X.exec(Q);)O[2]?R.setAttribute(O[1],O[2]):R.setAttribute(O[3],"");return!0}return!1}function E(T,R,P,q,O){if(R!=null&&R.childNodes!=null&&R.childNodes.length>0)for(var j=R,X=0;X<R.childNodes.length;X++){var D=R.childNodes[X];if(X>0)for(var Q=X-1;Q>=0;){var K=R.childNodes[Q];if(typeof K.setAttribute=="function"&&K.tagName!="BR"){j=K;break}Q-=1}var G=T;D.nodeName=="section"&&(G=D,j=D),typeof D.setAttribute!="function"&&D.nodeType!=Node.COMMENT_NODE||E(G,D,j,q,O)}R.nodeType==Node.COMMENT_NODE&&w(R,P,q)==0&&w(R,T,O)}function A(){var T=s.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(T).forEach(function(R){R.setAttribute("data-markdown-parsed",!0);var P=R.querySelector("aside.notes"),q=t(R);R.innerHTML=z(q),E(R,R,null,R.getAttribute("data-element-attributes")||R.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",R.getAttribute("data-attributes")||R.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),P&&R.appendChild(P)}),Promise.resolve()}return{id:"markdown",init:function(T){s=T;let{renderer:R,animateLists:P,...q}=s.getConfig().markdown||{};return R||(R=new z.Renderer,R.code=(O,j)=>{let X="";return o.test(j)&&(X=j.match(o)[1].trim(),X=`data-line-numbers="${X}"`,j=j.replace(o,"").trim()),`<pre><code ${X} class="${j}">${O=O.replace(/([&<>'"])/g,D=>a[D])}</code></pre>`}),P===!0&&(R.listitem=O=>`<li class="fragment">${O}</li>`),z.setOptions({renderer:R,...q}),g(s.getRevealElement()).then(A)},processSlides:g,convertSlides:A,slidify:u,marked:z}}})})(Sn);const An=re;var ae={},En={get exports(){return ae},set exports(S){ae=S}};(function(S,e){(function(r,l){S.exports=l()})(He,function(){function r(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let l={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const d=/[&<>"']/,v=/[&<>"']/g,m=/[<>"']|&(?!#?\w+;)/,y=/[<>"']|&(?!#?\w+;)/g,f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},U=M=>f[M];function I(M,o){if(o){if(d.test(M))return M.replace(v,U)}else if(m.test(M))return M.replace(y,U);return M}const N=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function $(M){return M.replace(N,(o,a)=>(a=a.toLowerCase())==="colon"?":":a.charAt(0)==="#"?a.charAt(1)==="x"?String.fromCharCode(parseInt(a.substring(2),16)):String.fromCharCode(+a.substring(1)):"")}const H=/(^|[^\[])\^/g;function h(M,o){M=M.source||M,o=o||"";const a={replace:(s,t)=>(t=(t=t.source||t).replace(H,"$1"),M=M.replace(s,t),a),getRegex:()=>new RegExp(M,o)};return a}const Y=/[^\w:]/g,lt=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function bt(M,o,a){if(M){let s;try{s=decodeURIComponent($(a)).replace(Y,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}o&&!lt.test(a)&&(a=function(s,t){gt[" "+s]||(mt.test(s)?gt[" "+s]=s+"/":gt[" "+s]=F(s,"/",!0));const n=(s=gt[" "+s]).indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:s.replace(it,"$1")+t:t.charAt(0)==="/"?n?t:s.replace(rt,"$1")+t:s+t}(o,a));try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const gt={},mt=/^[^:]+:\/*[^/]*$/,it=/^([^:]+:)[\s\S]*$/,rt=/^([^:]+:\/*[^/]*)[\s\S]*$/,nt={exec:function(){}};function Z(M){let o,a,s=1;for(;s<arguments.length;s++)for(a in o=arguments[s],o)Object.prototype.hasOwnProperty.call(o,a)&&(M[a]=o[a]);return M}function V(M,o){const a=M.replace(/\|/g,(t,n,i)=>{let c=!1,u=n;for(;--u>=0&&i[u]==="\\";)c=!c;return c?"|":" |"}).split(/ \|/);let s=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),a.length>o)a.splice(o);else for(;a.length<o;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(/\\\|/g,"|");return a}function F(M,o,a){const s=M.length;if(s===0)return"";let t=0;for(;t<s;){const n=M.charAt(s-t-1);if(n!==o||a){if(n===o||!a)break;t++}else t++}return M.substr(0,s-t)}function at(M){M&&M.sanitize&&!M.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ot(M,o){if(o<1)return"";let a="";for(;o>1;)1&o&&(a+=M),o>>=1,M+=M;return a+M}function dt(M,o,a,s){const t=o.href,n=o.title?I(o.title):null,i=M[1].replace(/\\([\[\]])/g,"$1");if(M[0].charAt(0)!=="!"){s.state.inLink=!0;const c={type:"link",raw:a,href:t,title:n,text:i,tokens:s.inlineTokens(i,[])};return s.state.inLink=!1,c}return{type:"image",raw:a,href:t,title:n,text:I(i)}}class L{constructor(o){this.options=o||l}space(o){const a=this.rules.block.newline.exec(o);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(o){const a=this.rules.block.code.exec(o);if(a){const s=a[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?s:F(s,`
`)}}}fences(o){const a=this.rules.block.fences.exec(o);if(a){const s=a[0],t=function(n,i){const c=n.match(/^(\s+)(?:```)/);if(c===null)return i;const u=c[1];return i.split(`
`).map(g=>{const w=g.match(/^\s+/);if(w===null)return g;const[E]=w;return E.length>=u.length?g.slice(u.length):g}).join(`
`)}(s,a[3]||"");return{type:"code",raw:s,lang:a[2]?a[2].trim():a[2],text:t}}}heading(o){const a=this.rules.block.heading.exec(o);if(a){let s=a[2].trim();if(/#$/.test(s)){const n=F(s,"#");this.options.pedantic?s=n.trim():n&&!/ $/.test(n)||(s=n.trim())}const t={type:"heading",raw:a[0],depth:a[1].length,text:s,tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}hr(o){const a=this.rules.block.hr.exec(o);if(a)return{type:"hr",raw:a[0]}}blockquote(o){const a=this.rules.block.blockquote.exec(o);if(a){const s=a[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:a[0],tokens:this.lexer.blockTokens(s,[]),text:s}}}list(o){let a=this.rules.block.list.exec(o);if(a){let s,t,n,i,c,u,g,w,E,A,T,R,P=a[1].trim();const q=P.length>1,O={type:"list",raw:"",ordered:q,start:q?+P.slice(0,-1):"",loose:!1,items:[]};P=q?`\\d{1,9}\\${P.slice(-1)}`:`\\${P}`,this.options.pedantic&&(P=q?P:"[*+-]");const j=new RegExp(`^( {0,3}${P})((?: [^\\n]*)?(?:\\n|$))`);for(;o&&(R=!1,a=j.exec(o))&&!this.rules.block.hr.test(o);){if(s=a[0],o=o.substring(s.length),w=a[2].split(`
`,1)[0],E=o.split(`
`,1)[0],this.options.pedantic?(i=2,T=w.trimLeft()):(i=a[2].search(/[^ ]/),i=i>4?1:i,T=w.slice(i),i+=a[1].length),u=!1,!w&&/^ *$/.test(E)&&(s+=E+`
`,o=o.substring(E.length+1),R=!0),!R){const D=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;o&&(A=o.split(`
`,1)[0],w=A,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!D.test(w));){if(w.search(/[^ ]/)>=i||!w.trim())T+=`
`+w.slice(i);else{if(u)break;T+=`
`+w}u||w.trim()||(u=!0),s+=A+`
`,o=o.substring(A.length+1)}}O.loose||(g?O.loose=!0:/\n *\n *$/.test(s)&&(g=!0)),this.options.gfm&&(t=/^\[[ xX]\] /.exec(T),t&&(n=t[0]!=="[ ] ",T=T.replace(/^\[[ xX]\] +/,""))),O.items.push({type:"list_item",raw:s,task:!!t,checked:n,loose:!1,text:T}),O.raw+=s}O.items[O.items.length-1].raw=s.trimRight(),O.items[O.items.length-1].text=T.trimRight(),O.raw=O.raw.trimRight();const X=O.items.length;for(c=0;c<X;c++){this.lexer.state.top=!1,O.items[c].tokens=this.lexer.blockTokens(O.items[c].text,[]);const D=O.items[c].tokens.filter(K=>K.type==="space"),Q=D.every(K=>{const G=K.raw.split("");let ct=0;for(const tt of G)if(tt===`
`&&(ct+=1),ct>1)return!0;return!1});!O.loose&&D.length&&Q&&(O.loose=!0,O.items[c].loose=!0)}return O}}html(o){const a=this.rules.block.html.exec(o);if(a){const s={type:"html",raw:a[0],pre:!this.options.sanitizer&&(a[1]==="pre"||a[1]==="script"||a[1]==="style"),text:a[0]};return this.options.sanitize&&(s.type="paragraph",s.text=this.options.sanitizer?this.options.sanitizer(a[0]):I(a[0]),s.tokens=[],this.lexer.inline(s.text,s.tokens)),s}}def(o){const a=this.rules.block.def.exec(o);if(a)return a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),{type:"def",tag:a[1].toLowerCase().replace(/\s+/g," "),raw:a[0],href:a[2],title:a[3]}}table(o){const a=this.rules.block.table.exec(o);if(a){const s={type:"table",header:V(a[1]).map(t=>({text:t})),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:a[3]&&a[3].trim()?a[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=a[0];let t,n,i,c,u=s.align.length;for(t=0;t<u;t++)/^ *-+: *$/.test(s.align[t])?s.align[t]="right":/^ *:-+: *$/.test(s.align[t])?s.align[t]="center":/^ *:-+ *$/.test(s.align[t])?s.align[t]="left":s.align[t]=null;for(u=s.rows.length,t=0;t<u;t++)s.rows[t]=V(s.rows[t],s.header.length).map(g=>({text:g}));for(u=s.header.length,n=0;n<u;n++)s.header[n].tokens=[],this.lexer.inlineTokens(s.header[n].text,s.header[n].tokens);for(u=s.rows.length,n=0;n<u;n++)for(c=s.rows[n],i=0;i<c.length;i++)c[i].tokens=[],this.lexer.inlineTokens(c[i].text,c[i].tokens);return s}}}lheading(o){const a=this.rules.block.lheading.exec(o);if(a){const s={type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}paragraph(o){const a=this.rules.block.paragraph.exec(o);if(a){const s={type:"paragraph",raw:a[0],text:a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}text(o){const a=this.rules.block.text.exec(o);if(a){const s={type:"text",raw:a[0],text:a[0],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}escape(o){const a=this.rules.inline.escape.exec(o);if(a)return{type:"escape",raw:a[0],text:I(a[1])}}tag(o){const a=this.rules.inline.tag.exec(o);if(a)return!this.lexer.state.inLink&&/^<a /i.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):I(a[0]):a[0]}}link(o){const a=this.rules.inline.link.exec(o);if(a){const s=a[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const i=F(s.slice(0,-1),"\\");if((s.length-i.length)%2==0)return}else{const i=function(c,u){if(c.indexOf(u[1])===-1)return-1;const g=c.length;let w=0,E=0;for(;E<g;E++)if(c[E]==="\\")E++;else if(c[E]===u[0])w++;else if(c[E]===u[1]&&(w--,w<0))return E;return-1}(a[2],"()");if(i>-1){const c=(a[0].indexOf("!")===0?5:4)+a[1].length+i;a[2]=a[2].substring(0,i),a[0]=a[0].substring(0,c).trim(),a[3]=""}}let t=a[2],n="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(t);i&&(t=i[1],n=i[3])}else n=a[3]?a[3].slice(1,-1):"";return t=t.trim(),/^</.test(t)&&(t=this.options.pedantic&&!/>$/.test(s)?t.slice(1):t.slice(1,-1)),dt(a,{href:t&&t.replace(this.rules.inline._escapes,"$1"),title:n&&n.replace(this.rules.inline._escapes,"$1")},a[0],this.lexer)}}reflink(o,a){let s;if((s=this.rules.inline.reflink.exec(o))||(s=this.rules.inline.nolink.exec(o))){let t=(s[2]||s[1]).replace(/\s+/g," ");if(t=a[t.toLowerCase()],!t||!t.href){const n=s[0].charAt(0);return{type:"text",raw:n,text:n}}return dt(s,t,s[0],this.lexer)}}emStrong(o,a,s=""){let t=this.rules.inline.emStrong.lDelim.exec(o);if(!t||t[3]&&s.match(/[\p{L}\p{N}]/u))return;const n=t[1]||t[2]||"";if(!n||n&&(s===""||this.rules.inline.punctuation.exec(s))){const i=t[0].length-1;let c,u,g=i,w=0;const E=t[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(E.lastIndex=0,a=a.slice(-1*o.length+i);(t=E.exec(a))!=null;){if(c=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!c)continue;if(u=c.length,t[3]||t[4]){g+=u;continue}if((t[5]||t[6])&&i%3&&!((i+u)%3)){w+=u;continue}if(g-=u,g>0)continue;if(u=Math.min(u,u+g+w),Math.min(i,u)%2){const T=o.slice(1,i+t.index+u);return{type:"em",raw:o.slice(0,i+t.index+u+1),text:T,tokens:this.lexer.inlineTokens(T,[])}}const A=o.slice(2,i+t.index+u-1);return{type:"strong",raw:o.slice(0,i+t.index+u+1),text:A,tokens:this.lexer.inlineTokens(A,[])}}}}codespan(o){const a=this.rules.inline.code.exec(o);if(a){let s=a[2].replace(/\n/g," ");const t=/[^ ]/.test(s),n=/^ /.test(s)&&/ $/.test(s);return t&&n&&(s=s.substring(1,s.length-1)),s=I(s,!0),{type:"codespan",raw:a[0],text:s}}}br(o){const a=this.rules.inline.br.exec(o);if(a)return{type:"br",raw:a[0]}}del(o){const a=this.rules.inline.del.exec(o);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2],[])}}autolink(o,a){const s=this.rules.inline.autolink.exec(o);if(s){let t,n;return s[2]==="@"?(t=I(this.options.mangle?a(s[1]):s[1]),n="mailto:"+t):(t=I(s[1]),n=t),{type:"link",raw:s[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(o,a){let s;if(s=this.rules.inline.url.exec(o)){let t,n;if(s[2]==="@")t=I(this.options.mangle?a(s[0]):s[0]),n="mailto:"+t;else{let i;do i=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(i!==s[0]);t=I(s[0]),n=s[1]==="www."?"http://"+t:t}return{type:"link",raw:s[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(o,a){const s=this.rules.inline.text.exec(o);if(s){let t;return t=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):I(s[0]):s[0]:I(this.options.smartypants?a(s[0]):s[0]),{type:"text",raw:s[0],text:t}}}}const x={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:nt,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};x.def=h(x.def).replace("label",x._label).replace("title",x._title).getRegex(),x.bullet=/(?:[*+-]|\d{1,9}[.)])/,x.listItemStart=h(/^( *)(bull) */).replace("bull",x.bullet).getRegex(),x.list=h(x.list).replace(/bull/g,x.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+x.def.source+")").getRegex(),x._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",x._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,x.html=h(x.html,"i").replace("comment",x._comment).replace("tag",x._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),x.paragraph=h(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.blockquote=h(x.blockquote).replace("paragraph",x.paragraph).getRegex(),x.normal=Z({},x),x.gfm=Z({},x.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),x.gfm.table=h(x.gfm.table).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.gfm.paragraph=h(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",x.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex(),x.pedantic=Z({},x.normal,{html:h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",x._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nt,paragraph:h(x.normal._paragraph).replace("hr",x.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",x.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const b={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:nt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:nt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function kt(M){return M.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ft(M){let o,a,s="";const t=M.length;for(o=0;o<t;o++)a=M.charCodeAt(o),Math.random()>.5&&(a="x"+a.toString(16)),s+="&#"+a+";";return s}b._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",b.punctuation=h(b.punctuation).replace(/punctuation/g,b._punctuation).getRegex(),b.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,b.escapedEmSt=/\\\*|\\_/g,b._comment=h(x._comment).replace("(?:-->|$)","-->").getRegex(),b.emStrong.lDelim=h(b.emStrong.lDelim).replace(/punct/g,b._punctuation).getRegex(),b.emStrong.rDelimAst=h(b.emStrong.rDelimAst,"g").replace(/punct/g,b._punctuation).getRegex(),b.emStrong.rDelimUnd=h(b.emStrong.rDelimUnd,"g").replace(/punct/g,b._punctuation).getRegex(),b._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,b._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,b._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,b.autolink=h(b.autolink).replace("scheme",b._scheme).replace("email",b._email).getRegex(),b._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,b.tag=h(b.tag).replace("comment",b._comment).replace("attribute",b._attribute).getRegex(),b._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,b._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,b._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,b.link=h(b.link).replace("label",b._label).replace("href",b._href).replace("title",b._title).getRegex(),b.reflink=h(b.reflink).replace("label",b._label).replace("ref",x._label).getRegex(),b.nolink=h(b.nolink).replace("ref",x._label).getRegex(),b.reflinkSearch=h(b.reflinkSearch,"g").replace("reflink",b.reflink).replace("nolink",b.nolink).getRegex(),b.normal=Z({},b),b.pedantic=Z({},b.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",b._label).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",b._label).getRegex()}),b.gfm=Z({},b.normal,{escape:h(b.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),b.gfm.url=h(b.gfm.url,"i").replace("email",b.gfm._extended_email).getRegex(),b.breaks=Z({},b.gfm,{br:h(b.br).replace("{2,}","*").getRegex(),text:h(b.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class st{constructor(o){this.tokens=[],this.tokens.links=Object.create(null),this.options=o||l,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const a={block:x.normal,inline:b.normal};this.options.pedantic?(a.block=x.pedantic,a.inline=b.pedantic):this.options.gfm&&(a.block=x.gfm,this.options.breaks?a.inline=b.breaks:a.inline=b.gfm),this.tokenizer.rules=a}static get rules(){return{block:x,inline:b}}static lex(o,a){return new st(a).lex(o)}static lexInline(o,a){return new st(a).inlineTokens(o)}lex(o){let a;for(o=o.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(o,this.tokens);a=this.inlineQueue.shift();)this.inlineTokens(a.src,a.tokens);return this.tokens}blockTokens(o,a=[]){let s,t,n,i;for(this.options.pedantic&&(o=o.replace(/^ +$/gm,""));o;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>!!(s=c.call({lexer:this},o,a))&&(o=o.substring(s.raw.length),a.push(s),!0))))if(s=this.tokenizer.space(o))o=o.substring(s.raw.length),s.raw.length===1&&a.length>0?a[a.length-1].raw+=`
`:a.push(s);else if(s=this.tokenizer.code(o))o=o.substring(s.raw.length),t=a[a.length-1],!t||t.type!=="paragraph"&&t.type!=="text"?a.push(s):(t.raw+=`
`+s.raw,t.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=t.text);else if(s=this.tokenizer.fences(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.heading(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.hr(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.blockquote(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.list(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.html(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.def(o))o=o.substring(s.raw.length),t=a[a.length-1],!t||t.type!=="paragraph"&&t.type!=="text"?this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title}):(t.raw+=`
`+s.raw,t.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=t.text);else if(s=this.tokenizer.table(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.lheading(o))o=o.substring(s.raw.length),a.push(s);else{if(n=o,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const u=o.slice(1);let g;this.options.extensions.startBlock.forEach(function(w){g=w.call({lexer:this},u),typeof g=="number"&&g>=0&&(c=Math.min(c,g))}),c<1/0&&c>=0&&(n=o.substring(0,c+1))}if(this.state.top&&(s=this.tokenizer.paragraph(n)))t=a[a.length-1],i&&t.type==="paragraph"?(t.raw+=`
`+s.raw,t.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):a.push(s),i=n.length!==o.length,o=o.substring(s.raw.length);else if(s=this.tokenizer.text(o))o=o.substring(s.raw.length),t=a[a.length-1],t&&t.type==="text"?(t.raw+=`
`+s.raw,t.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=t.text):a.push(s);else if(o){const c="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}return this.state.top=!0,a}inline(o,a){this.inlineQueue.push({src:o,tokens:a})}inlineTokens(o,a=[]){let s,t,n,i,c,u,g=o;if(this.tokens.links){const w=Object.keys(this.tokens.links);if(w.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)w.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,i.index)+"["+ot("a",i[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,i.index)+"["+ot("a",i[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(g))!=null;)g=g.slice(0,i.index)+"++"+g.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;o;)if(c||(u=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(w=>!!(s=w.call({lexer:this},o,a))&&(o=o.substring(s.raw.length),a.push(s),!0))))if(s=this.tokenizer.escape(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.tag(o))o=o.substring(s.raw.length),t=a[a.length-1],t&&s.type==="text"&&t.type==="text"?(t.raw+=s.raw,t.text+=s.text):a.push(s);else if(s=this.tokenizer.link(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.reflink(o,this.tokens.links))o=o.substring(s.raw.length),t=a[a.length-1],t&&s.type==="text"&&t.type==="text"?(t.raw+=s.raw,t.text+=s.text):a.push(s);else if(s=this.tokenizer.emStrong(o,g,u))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.codespan(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.br(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.del(o))o=o.substring(s.raw.length),a.push(s);else if(s=this.tokenizer.autolink(o,ft))o=o.substring(s.raw.length),a.push(s);else if(this.state.inLink||!(s=this.tokenizer.url(o,ft))){if(n=o,this.options.extensions&&this.options.extensions.startInline){let w=1/0;const E=o.slice(1);let A;this.options.extensions.startInline.forEach(function(T){A=T.call({lexer:this},E),typeof A=="number"&&A>=0&&(w=Math.min(w,A))}),w<1/0&&w>=0&&(n=o.substring(0,w+1))}if(s=this.tokenizer.inlineText(n,kt))o=o.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(u=s.raw.slice(-1)),c=!0,t=a[a.length-1],t&&t.type==="text"?(t.raw+=s.raw,t.text+=s.text):a.push(s);else if(o){const w="Infinite loop on byte: "+o.charCodeAt(0);if(this.options.silent){console.error(w);break}throw new Error(w)}}else o=o.substring(s.raw.length),a.push(s);return a}}class et{constructor(o){this.options=o||l}code(o,a,s){const t=(a||"").match(/\S*/)[0];if(this.options.highlight){const n=this.options.highlight(o,t);n!=null&&n!==o&&(s=!0,o=n)}return o=o.replace(/\n$/,"")+`
`,t?'<pre><code class="'+this.options.langPrefix+I(t,!0)+'">'+(s?o:I(o,!0))+`</code></pre>
`:"<pre><code>"+(s?o:I(o,!0))+`</code></pre>
`}blockquote(o){return`<blockquote>
`+o+`</blockquote>
`}html(o){return o}heading(o,a,s,t){return this.options.headerIds?"<h"+a+' id="'+this.options.headerPrefix+t.slug(s)+'">'+o+"</h"+a+`>
`:"<h"+a+">"+o+"</h"+a+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(o,a,s){const t=a?"ol":"ul";return"<"+t+(a&&s!==1?' start="'+s+'"':"")+`>
`+o+"</"+t+`>
`}listitem(o){return"<li>"+o+`</li>
`}checkbox(o){return"<input "+(o?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(o){return"<p>"+o+`</p>
`}table(o,a){return a&&(a="<tbody>"+a+"</tbody>"),`<table>
<thead>
`+o+`</thead>
`+a+`</table>
`}tablerow(o){return`<tr>
`+o+`</tr>
`}tablecell(o,a){const s=a.header?"th":"td";return(a.align?"<"+s+' align="'+a.align+'">':"<"+s+">")+o+"</"+s+`>
`}strong(o){return"<strong>"+o+"</strong>"}em(o){return"<em>"+o+"</em>"}codespan(o){return"<code>"+o+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(o){return"<del>"+o+"</del>"}link(o,a,s){if((o=bt(this.options.sanitize,this.options.baseUrl,o))===null)return s;let t='<a href="'+I(o)+'"';return a&&(t+=' title="'+a+'"'),t+=">"+s+"</a>",t}image(o,a,s){if((o=bt(this.options.sanitize,this.options.baseUrl,o))===null)return s;let t='<img src="'+o+'" alt="'+s+'"';return a&&(t+=' title="'+a+'"'),t+=this.options.xhtml?"/>":">",t}text(o){return o}}class Pt{strong(o){return o}em(o){return o}codespan(o){return o}del(o){return o}html(o){return o}text(o){return o}link(o,a,s){return""+s}image(o,a,s){return""+s}br(){return""}}class _t{constructor(){this.seen={}}serialize(o){return o.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(o,a){let s=o,t=0;if(this.seen.hasOwnProperty(s)){t=this.seen[o];do t++,s=o+"-"+t;while(this.seen.hasOwnProperty(s))}return a||(this.seen[o]=t,this.seen[s]=0),s}slug(o,a={}){const s=this.serialize(o);return this.getNextSafeSlug(s,a.dryrun)}}class pt{constructor(o){this.options=o||l,this.options.renderer=this.options.renderer||new et,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Pt,this.slugger=new _t}static parse(o,a){return new pt(a).parse(o)}static parseInline(o,a){return new pt(a).parseInline(o)}parse(o,a=!0){let s,t,n,i,c,u,g,w,E,A,T,R,P,q,O,j,X,D,Q,K="";const G=o.length;for(s=0;s<G;s++)if(A=o[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[A.type]&&(Q=this.options.extensions.renderers[A.type].call({parser:this},A),Q!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(A.type)))K+=Q||"";else switch(A.type){case"space":continue;case"hr":K+=this.renderer.hr();continue;case"heading":K+=this.renderer.heading(this.parseInline(A.tokens),A.depth,$(this.parseInline(A.tokens,this.textRenderer)),this.slugger);continue;case"code":K+=this.renderer.code(A.text,A.lang,A.escaped);continue;case"table":for(w="",g="",i=A.header.length,t=0;t<i;t++)g+=this.renderer.tablecell(this.parseInline(A.header[t].tokens),{header:!0,align:A.align[t]});for(w+=this.renderer.tablerow(g),E="",i=A.rows.length,t=0;t<i;t++){for(u=A.rows[t],g="",c=u.length,n=0;n<c;n++)g+=this.renderer.tablecell(this.parseInline(u[n].tokens),{header:!1,align:A.align[n]});E+=this.renderer.tablerow(g)}K+=this.renderer.table(w,E);continue;case"blockquote":E=this.parse(A.tokens),K+=this.renderer.blockquote(E);continue;case"list":for(T=A.ordered,R=A.start,P=A.loose,i=A.items.length,E="",t=0;t<i;t++)O=A.items[t],j=O.checked,X=O.task,q="",O.task&&(D=this.renderer.checkbox(j),P?O.tokens.length>0&&O.tokens[0].type==="paragraph"?(O.tokens[0].text=D+" "+O.tokens[0].text,O.tokens[0].tokens&&O.tokens[0].tokens.length>0&&O.tokens[0].tokens[0].type==="text"&&(O.tokens[0].tokens[0].text=D+" "+O.tokens[0].tokens[0].text)):O.tokens.unshift({type:"text",text:D}):q+=D),q+=this.parse(O.tokens,P),E+=this.renderer.listitem(q,X,j);K+=this.renderer.list(E,T,R);continue;case"html":K+=this.renderer.html(A.text);continue;case"paragraph":K+=this.renderer.paragraph(this.parseInline(A.tokens));continue;case"text":for(E=A.tokens?this.parseInline(A.tokens):A.text;s+1<G&&o[s+1].type==="text";)A=o[++s],E+=`
`+(A.tokens?this.parseInline(A.tokens):A.text);K+=a?this.renderer.paragraph(E):E;continue;default:{const ct='Token with "'+A.type+'" type was not found.';if(this.options.silent)return void console.error(ct);throw new Error(ct)}}return K}parseInline(o,a){a=a||this.renderer;let s,t,n,i="";const c=o.length;for(s=0;s<c;s++)if(t=o[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[t.type]&&(n=this.options.extensions.renderers[t.type].call({parser:this},t),n!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(t.type)))i+=n||"";else switch(t.type){case"escape":i+=a.text(t.text);break;case"html":i+=a.html(t.text);break;case"link":i+=a.link(t.href,t.title,this.parseInline(t.tokens,a));break;case"image":i+=a.image(t.href,t.title,t.text);break;case"strong":i+=a.strong(this.parseInline(t.tokens,a));break;case"em":i+=a.em(this.parseInline(t.tokens,a));break;case"codespan":i+=a.codespan(t.text);break;case"br":i+=a.br();break;case"del":i+=a.del(this.parseInline(t.tokens,a));break;case"text":i+=a.text(t.text);break;default:{const u='Token with "'+t.type+'" type was not found.';if(this.options.silent)return void console.error(u);throw new Error(u)}}return i}}function z(M,o,a){if(M==null)throw new Error("marked(): input parameter is undefined or null");if(typeof M!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(M)+", string expected");if(typeof o=="function"&&(a=o,o=null),at(o=Z({},z.defaults,o||{})),a){const s=o.highlight;let t;try{t=st.lex(M,o)}catch(c){return a(c)}const n=function(c){let u;if(!c)try{o.walkTokens&&z.walkTokens(t,o.walkTokens),u=pt.parse(t,o)}catch(g){c=g}return o.highlight=s,c?a(c):a(null,u)};if(!s||s.length<3||(delete o.highlight,!t.length))return n();let i=0;return z.walkTokens(t,function(c){c.type==="code"&&(i++,setTimeout(()=>{s(c.text,c.lang,function(u,g){if(u)return n(u);g!=null&&g!==c.text&&(c.text=g,c.escaped=!0),i--,i===0&&n()})},0))}),void(i===0&&n())}try{const s=st.lex(M,o);return o.walkTokens&&z.walkTokens(s,o.walkTokens),pt.parse(s,o)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,o.silent)return"<p>An error occurred:</p><pre>"+I(s.message+"",!0)+"</pre>";throw s}}return z.options=z.setOptions=function(M){var o;return Z(z.defaults,M),o=z.defaults,l=o,z},z.getDefaults=r,z.defaults=l,z.use=function(...M){const o=Z({},...M),a=z.defaults.extensions||{renderers:{},childTokens:{}};let s;M.forEach(t=>{if(t.extensions&&(s=!0,t.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if(n.renderer){const i=a.renderers?a.renderers[n.name]:null;a.renderers[n.name]=i?function(...c){let u=n.renderer.apply(this,c);return u===!1&&(u=i.apply(this,c)),u}:n.renderer}if(n.tokenizer){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");a[n.level]?a[n.level].unshift(n.tokenizer):a[n.level]=[n.tokenizer],n.start&&(n.level==="block"?a.startBlock?a.startBlock.push(n.start):a.startBlock=[n.start]:n.level==="inline"&&(a.startInline?a.startInline.push(n.start):a.startInline=[n.start]))}n.childTokens&&(a.childTokens[n.name]=n.childTokens)})),t.renderer){const n=z.defaults.renderer||new et;for(const i in t.renderer){const c=n[i];n[i]=(...u)=>{let g=t.renderer[i].apply(n,u);return g===!1&&(g=c.apply(n,u)),g}}o.renderer=n}if(t.tokenizer){const n=z.defaults.tokenizer||new L;for(const i in t.tokenizer){const c=n[i];n[i]=(...u)=>{let g=t.tokenizer[i].apply(n,u);return g===!1&&(g=c.apply(n,u)),g}}o.tokenizer=n}if(t.walkTokens){const n=z.defaults.walkTokens;o.walkTokens=function(i){t.walkTokens.call(this,i),n&&n.call(this,i)}}s&&(o.extensions=a),z.setOptions(o)})},z.walkTokens=function(M,o){for(const a of M)switch(o.call(z,a),a.type){case"table":for(const s of a.header)z.walkTokens(s.tokens,o);for(const s of a.rows)for(const t of s)z.walkTokens(t.tokens,o);break;case"list":z.walkTokens(a.items,o);break;default:z.defaults.extensions&&z.defaults.extensions.childTokens&&z.defaults.extensions.childTokens[a.type]?z.defaults.extensions.childTokens[a.type].forEach(function(s){z.walkTokens(a[s],o)}):a.tokens&&z.walkTokens(a.tokens,o)}},z.parseInline=function(M,o){if(M==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof M!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(M)+", string expected");at(o=Z({},z.defaults,o||{}));try{const a=st.lexInline(M,o);return o.walkTokens&&z.walkTokens(a,o.walkTokens),pt.parseInline(a,o)}catch(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,o.silent)return"<p>An error occurred:</p><pre>"+I(a.message+"",!0)+"</pre>";throw a}},z.Parser=pt,z.parser=pt.parse,z.Renderer=et,z.TextRenderer=Pt,z.Lexer=st,z.lexer=st.lex,z.Tokenizer=L,z.Slugger=_t,z.parse=z,()=>{let M,o,a=null;function s(){if(a&&!a.closed)a.focus();else{if(a=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),a.marked=z,a.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!a)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const c=o.getConfig().url,u=typeof c=="string"?c:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;M=setInterval(function(){a.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:o.getState(),url:u}),"*")},500),window.addEventListener("message",n)})()}}function t(c){let u=o.getCurrentSlide(),g=u.querySelectorAll("aside.notes"),w=u.querySelector(".current-fragment"),E={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:o.getState()};if(u.hasAttribute("data-notes")&&(E.notes=u.getAttribute("data-notes"),E.whitespace="pre-wrap"),w){let A=w.querySelector("aside.notes");A?(E.notes=A.innerHTML,E.markdown=typeof A.getAttribute("data-markdown")=="string",g=null):w.hasAttribute("data-notes")&&(E.notes=w.getAttribute("data-notes"),E.whitespace="pre-wrap",g=null)}g&&(E.notes=Array.from(g).map(A=>A.innerHTML).join(`
`),E.markdown=g[0]&&typeof g[0].getAttribute("data-markdown")=="string"),a.postMessage(JSON.stringify(E),"*")}function n(c){if(function(u){try{return window.location.origin===u.source.location.origin}catch{return!1}}(c)){let u=JSON.parse(c.data);u&&u.namespace==="reveal-notes"&&u.type==="connected"?(clearInterval(M),i()):u&&u.namespace==="reveal-notes"&&u.type==="call"&&function(g,w,E){let A=o[g].apply(o,w);a.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:A,callId:E}),"*")}(u.methodName,u.arguments,u.callId)}}function i(){o.on("slidechanged",t),o.on("fragmentshown",t),o.on("fragmenthidden",t),o.on("overviewhidden",t),o.on("overviewshown",t),o.on("paused",t),o.on("resumed",t),t()}return{id:"notes",init:function(c){o=c,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?s():window.addEventListener("message",u=>{if(!a&&typeof u.data=="string"){let w;try{w=JSON.parse(u.data)}catch{}w&&w.namespace==="reveal-notes"&&w.type==="heartbeat"&&(g=u.source,a&&!a.closed?a.focus():(a=g,window.addEventListener("message",n),i()))}var g}),o.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){s()}))},open:s}}})})(En);const Rn=ae;let Ln=new Ct({plugins:[An,Rn]});Ln.initialize({progress:!1,controls:!0,hashOneBasedIndex:!0,hash:!0,transition:"none",history:!0}).then(()=>console.log("reveal.js api initialized")).catch(S=>console.error(S));
