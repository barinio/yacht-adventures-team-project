(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const c={form:document.querySelector(".rent-form"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector(".backdrop")};function d(){c.modal.classList.toggle("is-hidden")}c.form.addEventListener("submit",function(t){t.preventDefault(),c.form.checkValidity()&&(d(),c.form.reset())});c.closeModalBtn.addEventListener("click",function(){d()});(function(t){t(document).ready(function(){var e=document.querySelector(".progress-wrap path"),r=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=r+" "+r,e.style.strokeDashoffset=r,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var l=function(){var i=t(window).scrollTop(),p=t(document).height()-t(window).height(),f=r-i*r/p;e.style.strokeDashoffset=f};l(),t(window).scroll(l);var n=50,o=550;jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>n?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(i){return i.preventDefault(),jQuery("html, body").animate({scrollTop:0},o),!1})})})(jQuery);(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),l=document.querySelectorAll(".js-menu-link"),n=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const i=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};e.addEventListener("click",n),r.addEventListener("click",n),l.forEach(function(o){o.addEventListener("click",n)}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();$(document).ready(function(){new Swiper(".swiper-container",{paginationClickable:!0,dynamicBullets:!0,simulateTouch:!0,pagination:{el:".slider-nav",clickable:!0},spaceBetween:20,loop:!1,breakpoints:{1280:{slidesPerView:3,spaceBetween:32,loop:!1},768:{slidesPerView:2,spaceBetween:16,loop:!1},320:{slidesPerView:1,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{sensivity:1}})});const m=document.querySelectorAll(".back");let s=null;const y=document.querySelectorAll(".services-btn");y.forEach(t=>{t.addEventListener("click",v)});function v(t){const e=t.target.closest(".services-content");s&&s.classList.remove("flipped"),e.classList.add("flipped"),s=e}document.addEventListener("click",t=>{t.target.closest(".services-content")||(s.classList.remove("flipped"),s=null)});m.forEach(t=>{t.addEventListener("click",e=>{const r=e.target.closest(".services-content");s===r?(r.classList.remove("flipped"),s=null):(s&&s.classList.remove("flipped"),r.classList.add("flipped"),s=r)})});var g=new Swiper(".swiper",{slidesPerView:2,direction:a(),navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{resize:function(){g.changeDirection(a())}}});function a(){var t=window.innerWidth<=320?"vertical":"horizontal";return t}let u=document.querySelector(".swiper.yachts-swiper"),w=document.querySelector(".swiper-button-prev"),h=document.querySelector(".swiper-button-next");h.addEventListener("click",b);function b(){u.style.overflow="visible"}w.addEventListener("click",L);function L(){u.style.overflow="hidden"}
