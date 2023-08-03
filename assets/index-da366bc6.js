(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const c={form:document.querySelector(".rent-form"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector(".backdrop")};function f(){c.modal.classList.toggle("is-hidden")}c.form.addEventListener("submit",function(e){e.preventDefault(),c.form.checkValidity()&&(f(),c.form.reset())});c.closeModalBtn.addEventListener("click",function(){f()});(function(e){e(document).ready(function(){var t=document.querySelector(".progress-wrap path"),r=t.getTotalLength();t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=r+" "+r,t.style.strokeDashoffset=r,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear";var i=function(){var l=e(window).scrollTop(),p=e(document).height()-e(window).height(),m=r-l*r/p;t.style.strokeDashoffset=m};i(),e(window).scroll(i);var o=50,n=550;jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>o?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(l){return l.preventDefault(),jQuery("html, body").animate({scrollTop:0},n),!1})})})(jQuery);(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".js-menu-link"),o=()=>{const n=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");const l=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};t.addEventListener("click",o),r.addEventListener("click",o),i.forEach(function(n){n.addEventListener("click",o)}),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();$(document).ready(function(){new Swiper(".swiper-review-container",{paginationClickable:!0,direction:"horizontal",dynamicBullets:!0,initialSlide:0,slidesOffsetBefore:0,pagination:{el:".slider-nav",clickable:!0},autoplay:{delay:2e3},speed:1e3,spaceBetween:20,breakpoints:{1280:{slidesPerView:3,spaceBetween:32,simulateTouch:!1},768:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1,spaceBetween:20}},keyboard:{enabled:!0,onlyInViewport:!0}})});const y=document.querySelectorAll(".back");let s=null;const h=document.querySelectorAll(".services-btn");h.forEach(e=>{e.addEventListener("click",w)});function w(e){const t=e.target.closest(".services-content");s&&s.classList.remove("flipped"),t.classList.add("flipped"),s=t}y.forEach(e=>{e.addEventListener("click",t=>{const r=t.target.closest(".services-content");s===r?(r.classList.remove("flipped"),s=null):(s&&s.classList.remove("flipped"),r.classList.add("flipped"),s=r)})});let g=document.querySelector(".swiper-button-prev"),v=document.querySelector(".swiper-button-next"),b=document.querySelector(".yachts-block__card-list");var a=new Swiper(".swiper",{slidesPerView:u(),direction:d(),navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{resize:function(){a.changeDirection(d()),a.params.slidesPerView=u(),a.update()}}});function d(){var e=window.innerWidth;return e<=115?"vertical":"horizontal"}function u(){var e=window.innerWidth;return e>=1280?3:e>=768?2:1}v.addEventListener("click",k);function k(){b.style.gap="12px"}g.addEventListener("click",L);function L(){}VanillaTilt.init(document.querySelectorAll(".yachts-block__card-set"),{max:3,speed:400,glare:!0,"max-glare":.1});VanillaTilt.init(document.querySelectorAll(".reviws-item"),{max:0,speed:400,glare:!0,"max-glare":.2});VanillaTilt.init(document.querySelectorAll(".hero-image-container"),{max:15,speed:900,glare:!1,transition:!0});let S=document.querySelector(".hero-btn");S.addEventListener("click",E);function E(){window.scroll({top:document.querySelector("#about").offsetTop,behavior:"smooth"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});jQuery(function(e){var t=function(){var r=e(window).scrollTop()+e(window).height(),i=e(".animatable");i.length==0&&e(window).off("scroll",t),i.each(function(o){var n=e(this);n.offset().top+n.height()-20<r&&n.removeClass("animatable").addClass("animated")})};e(window).on("scroll",t),e(window).trigger("scroll")});
