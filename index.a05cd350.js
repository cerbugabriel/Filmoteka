!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequire4383;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},e.parcelRequire4383=i);var n=i("jIucq");let r=(0,n.default)("#film_info_modal"),o=(0,n.default)(".img_content"),a=(0,n.default)(".film-detail_votes"),d=(0,n.default)(".film_title"),u=(0,n.default)(".film-detail_popularity"),f=(0,n.default)(".film-detail_original-title"),c=(0,n.default)(".film-detail_genre"),s=(0,n.default)(".film-detail_description"),g=(0,n.default)("#close-button"),p=(0,n.default)(".gallery");p.addEventListener("click",function(e){let t=e.target.parentNode,l=t.querySelector(".modal-info"),i=l.getAttribute("data-vote-count"),n=l.getAttribute("data-vote-avg");a.innerHTML=`Vote / Votes: ${n} / ${i}`;let g=t.querySelector("img"),p=g.getAttribute("src");o.innerHTML=`<img src="${p}">`;let y=t.querySelector(".container-info b"),m=y.textContent;d.innerHTML=` ${m} `;let b=l.getAttribute("data-popularity");u.innerHTML=`Popularity: ${b} `;let _=l.getAttribute("data_original_title");f.innerHTML=`Original-title: ${"undefined"===_?m:_} `;let v=t.querySelector(".container-info"),L=v.querySelector(".cont-descr"),T=L.querySelector("p").textContent;c.innerHTML=`Genre: ${T}`;let q=l.getAttribute("data-about");s.innerHTML+=` ${q} `,r.showModal()}),g.addEventListener("click",()=>{(function(){let e=r.querySelectorAll('[class*="film-detail"]');e.forEach(e=>{e.innerHTML=""})})(),r.close()})}();
//# sourceMappingURL=index.a05cd350.js.map
