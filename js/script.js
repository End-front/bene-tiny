"use strict";function mouseMove3D(s,l,d){return!(!s||!l||void 0===d||window.checkBrowser.supportsTouch)&&(s.addEventListener("mousemove",function(t){var e=Math.ceil(s.clientWidth/2),i=Math.ceil(s.clientHeight/2),r=t.clientX-e,n=-(t.clientY-i)/i,a=r/e,o=Math.sqrt(Math.pow(n,2)+Math.pow(a,2))*d;l.style.WebkitTransform="rotate3d("+n+", "+a+", 0, "+o+"deg)",l.style.transform="rotate3d("+n+", "+a+", 0, "+o+"deg)"}),s.addEventListener("mouseout",function(t){}),!0)}function validateArrayInputs(t,e){if(!t)return!0;e||(e={allRequired:!0});for(var i={},r=!0,n=0;n<t.length;n++){var a=t[n],o=a.getAttribute("type")||"text",s=!0===e.allRequired||a.hasAttribute("required"),l=a.getAttribute("name")||!1;a.classList.contains("input-invalid")&&(r=!1),!s||l&&1===i[l]||("radio"!=o&&"checkbox"!=o?"hidden"!=o&&""==a.value&&(a.classList.add("input-invalid"),r=!1):(i[l]=1,notEmptyCheckBoxOrRadio(l)||(markInvalidGrougInput(l),r=!1)))}return r}function notEmptyCheckBoxOrRadio(t){return 0<document.querySelectorAll("input[name="+t+"]:checked").length}function markInvalidGrougInput(t){var e=document.querySelectorAll("input[name="+t+"]");if(e)for(var i=0;i<e.length;i++){var r=e[i];r.classList.add("input-invalid"),r.addEventListener("change",function(){UnmarkInvalidGrougInput(t)},{once:!0})}}function UnmarkInvalidGrougInput(t){var e=document.querySelectorAll("input[name="+t+"]");if(e)for(var i=0;i<e.length;i++){e[i].classList.remove("input-invalid")}}document.addEventListener("DOMContentLoaded",function(){function t(){for(var t=document.querySelectorAll(".svg-background, .box-image"),e=0;e<t.length;e++){var i=t[e],r=0,n=0;i.classList.contains("svg-background-1")&&(r=84.5,n=70.5),i.classList.contains("svg-background-2")&&(r=17,n=22),i.classList.contains("svg-background-3")&&(n=r=7.5),i.classList.contains("svg-background-4")&&(n=r=11.7),i.classList.contains("svg-background-5")&&(n=r=13.7),i.classList.contains("svg-background-6")&&(r=15.8,n=25.8),i.classList.contains("box-image-1")&&(r=25,n=20),i.classList.contains("svg-background--list")&&(r=39.5,n=41),i.style.marginTop=i.clientHeight*r/100+"px",i.style.marginBottom=i.clientHeight*n/100+"px"}}t();(new function(){function d(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"next",i=n.apply(this,[this.formSlider.activeIndex]);if(t="next"===e?n.apply(this,[this.formSlider.activeIndex+1]):"prev"===e?n.apply(this,[this.formSlider.activeIndex-1]):isNaN(parseInt(e))?e:n.apply(this,[e]),i&&t){i.classList.remove("active-slide"),t.classList.add("active-slide"),this.formSlider.activeIndex=parseInt(t.getAttribute("data-index")),this.formSlider.activeSlide=t,this.formSlider.activeHeight=t.clientHeight;var r=parseInt(getComputedStyle(t,!0).marginRight);isNaN(r)&&(r=0),this.formSlider.offsetWidth=t.clientWidth+r,this.formSlider.outer.style.height=this.formSlider.activeHeight+"px",this.formSlider.outer.style.transform="translate("+-this.formSlider.offsetWidth*this.formSlider.activeIndex+"px,0)"}}function n(t){return!isNaN(parseInt(t))&&this.formSlider.items[t]}this.init=function(){var s=this,l=document.querySelectorAll(".form-slider");if(l){for(var t=function(t){var r=l[t],e=r.querySelector(".form-slider__wrapper"),i=r.querySelector(".form-slider__outer"),n=r.querySelectorAll(".form-slider__item");if(s.formMain=r,e&&i&&n){r.formSlider={},r.formSlider.wrapper=e,r.formSlider.outer=i,r.formSlider.items=n;for(var a=function(t){var e=n[t];e.setAttribute("data-index",t),t==r.formSlider.activeIndex?d.apply(r,[r.formSlider.activeIndex]):e.classList.remove("active-slide");var i=e.querySelector("button");i&&i.addEventListener("click",function(t){t.preventDefault(),validateArrayInputs(e.querySelectorAll("input"))&&d.apply(r,["next"])})},o=r.formSlider.activeIndex=0;o<n.length;o++)a(o);window.addEventListener("load",function(){d.apply(r,[r.formSlider.activeIndex]),console.log(this)}),window.addEventListener("resize",function(){d.apply(r,[r.formSlider.activeIndex])})}},e=0;e<l.length;e++)t(e);return this}}}).init();window.addEventListener("load",function(){}),window.addEventListener("resize",t)}),window.addEventListener("load",function(){var t=document.querySelectorAll(".mouse-move-box");if(t)for(var e=0;e<t.length;e++){var i=t[e];mouseMove3D(i.closest("section"),i.querySelector(".mouse-move-box__wrapper"),10)}if(function(){var r=document.querySelectorAll('a[href^="#"]:not(.smooth-scroll-checked)');if(r)for(var t=function(t){var e=r[t],i=e.getAttribute("href");1<i.length&&e.addEventListener("click",function(t){return t.preventDefault(),smoothScrollToCoords(i,{listenChange:!1,duration:1e3,positionBlock:"top",margin:50,speed:!1}),!1}),e.classList.add("smooth-scroll-checked")},e=0;e<r.length;e++)t(e)}(),AOS){var r=function(){var t=document.querySelectorAll(".section-3 .cart-icon-circle");if(t)for(var e=0;e<t.length;e++){var i=t[e];window.innerWidth<992?(i.removeAttribute("data-aos-anchor"),i.removeAttribute("data-aos-delay"),i.removeAttribute("data-aos-anchor-placement")):(i.setAttribute("data-aos-anchor","#aosStart1"),i.setAttribute("data-aos-delay",100*(e+1)),i.setAttribute("data-aos-anchor-placement","top-center"))}var r=document.querySelectorAll(".section-4 .big-ul-list li");if(r)for(var n=0;n<r.length;n++){var a=r[n];window.innerWidth<992?(a.removeAttribute("data-aos-anchor"),a.removeAttribute("data-aos-delay"),a.removeAttribute("data-aos-anchor-placement")):(a.setAttribute("data-aos-anchor","#aosStart2"),a.setAttribute("data-aos-delay",100+50*(n+1)),a.setAttribute("data-aos-anchor-placement","top-center"))}};setTimeout(function(){r(),AOS.init()},0),window.addEventListener("resize",function(){r(),AOS.refresh()})}});