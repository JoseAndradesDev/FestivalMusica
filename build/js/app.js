function iniciarApp(){scrollNav(),navfija(),crearGaleria()}function navfija(){const e=document.querySelector(".header"),t=document.querySelector(".festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(e.classList.remove("fijo"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navbar_princ a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n                <source srcset="build/img/thumb/${t}.avif" type="img/avif">\n                <source srcset="build/img/thumb/${t}.webp" type="img/webp">\n                <img loading="lazy" src="build/img/thumb/${t}.jpg"" type="img/jpg">\n        `,n.onclick=function(){mostrarImg(t)},e.appendChild(n)}}function mostrarImg(e){const t=document.createElement("picture");t.innerHTML=`\n                <source srcset="build/img/grande/${e}.avif" type="img/avif">\n                <source srcset="build/img/grande/${e}.webp" type="img/webp">\n                <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg"" type="img/jpg" alt"img galeria">\n        `;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-fondo"),n.remove()};const o=document.createElement("P");o.textContent="x",o.classList.add("btn-cerrar"),o.onclick=function(){document.querySelector("body").classList.remove("fijar-fondo"),n.remove()},n.appendChild(o);const i=document.querySelector("body");i.appendChild(n),i.classList.add("fijar-fondo")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));