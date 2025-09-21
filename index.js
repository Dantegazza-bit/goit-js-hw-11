import{a as d,S as f,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="52390417-1bf501a7c6f4bb07aa1949c3b",y=d.create({baseURL:"https://pixabay.com/api/",params:{key:m,image_type:"photo",orientation:"horizontal",safesearch:"true"}});async function g(i){const{data:a}=await y.get("",{params:{q:i.trim()}});return a}const c=document.querySelector("#gallery"),s=document.querySelector("#page-loader");let p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const a=i.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="gallery-info">
          <div class="gallery-info-item"><b>Likes</b> ${t.likes}</div>
          <div class="gallery-info-item"><b>Views</b> ${t.views}</div>
          <div class="gallery-info-item"><b>Comments</b> ${t.comments}</div>
          <div class="gallery-info-item"><b>Downloads</b> ${t.downloads}</div>
        </div>
      </li>`).join("");c.innerHTML=a,p.refresh()}function b(){c.innerHTML=""}function v(){s.classList.add("active"),s.setAttribute("aria-hidden","false")}function L(){s.classList.remove("active"),s.setAttribute("aria-hidden","true")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",async i=>{i.preventDefault();const a=w.value.trim();if(a){b(),v();try{const{hits:t}=await g(a);if(!Array.isArray(t)||t.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t)}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}}});
//# sourceMappingURL=index.js.map
