(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const a={form:document.querySelector(".rent-form"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector(".backdrop")};function f(){a.modal.classList.toggle("is-hidden")}a.form.addEventListener("submit",function(e){e.preventDefault(),a.form.checkValidity()&&(f(),a.form.reset())});a.closeModalBtn.addEventListener("click",function(){f()});(function(e){e(document).ready(function(){var n=document.querySelector(".progress-wrap path"),r=n.getTotalLength();n.style.transition=n.style.WebkitTransition="none",n.style.strokeDasharray=r+" "+r,n.style.strokeDashoffset=r,n.getBoundingClientRect(),n.style.transition=n.style.WebkitTransition="stroke-dashoffset 10ms linear";var i=function(){var s=e(window).scrollTop(),p=e(document).height()-e(window).height(),m=r-s*r/p;n.style.strokeDashoffset=m};i(),e(window).scroll(i);var o=50,t=550;jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>o?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(s){return s.preventDefault(),jQuery("html, body").animate({scrollTop:0},t),!1})})})(jQuery);(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".js-menu-link"),o=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");const s=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};n.addEventListener("click",o),r.addEventListener("click",o),i.forEach(function(t){t.addEventListener("click",o)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();$(document).ready(function(){new Swiper(".swiper-review-container",{paginationClickable:!0,direction:"horizontal",dynamicBullets:!0,initialSlide:0,slidesOffsetBefore:0,pagination:{el:".slider-nav",clickable:!0},autoplay:{delay:2e3},speed:1e3,spaceBetween:20,breakpoints:{1280:{slidesPerView:3,spaceBetween:32,simulateTouch:!1},768:{slidesPerView:2,spaceBetween:16},320:{slidesPerView:1,spaceBetween:20}},keyboard:{enabled:!0,onlyInViewport:!0}})});const y=document.querySelectorAll(".back");let l=null;const h=document.querySelectorAll(".services-btn");h.forEach(e=>{e.addEventListener("click",w)});function w(e){const n=e.target.closest(".services-content");l&&l.classList.remove("flipped"),n.classList.add("flipped"),l=n}y.forEach(e=>{e.addEventListener("click",n=>{const r=n.target.closest(".services-content");l===r?(r.classList.remove("flipped"),l=null):(l&&l.classList.remove("flipped"),r.classList.add("flipped"),l=r)})});let g=document.querySelector(".swiper-button-prev"),v=document.querySelector(".swiper-button-next"),b=document.querySelector(".yachts-block__card-list");var c=new Swiper(".swiper",{slidesPerView:u(),direction:d(),navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{resize:function(){c.changeDirection(d()),c.params.slidesPerView=u(),c.update()}}});function d(){var e=window.innerWidth;return e<=115?"vertical":"horizontal"}function u(){var e=window.innerWidth;return e>=1280?3:e>=768?2:1}v.addEventListener("click",k);function k(){b.style.gap="12px"}g.addEventListener("click",S);function S(){}VanillaTilt.init(document.querySelectorAll(".yachts-block__card-set"),{max:3,speed:400,glare:!0,"max-glare":.1});VanillaTilt.init(document.querySelectorAll(".reviws-item"),{max:0,speed:400,glare:!0,"max-glare":.2});VanillaTilt.init(document.querySelectorAll(".hero-image-container"),{max:15,speed:900,glare:!1,transition:!0});let L=document.querySelector(".hero-btn");L.addEventListener("click",E);function E(){window.scroll({top:document.querySelector("#about").offsetTop,behavior:"smooth"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});jQuery(function(e){var n=function(){var r=e(window).scrollTop()+e(window).height(),i=e(".animatable");i.each(function(o){var t=e(this);t.offset().top+t.height()+50<r?t.hasClass("animate-in")||t.removeClass("animate-out").css("top",t.css("top")).addClass("animate-in"):t.offset().top+t.height()+50>r&&t.hasClass("animate-in")&&t.removeClass("animate-in").css("top",t.css("top")).addClass("animate-out")})};e(window).on("scroll",n),e(window).trigger("scroll")});