(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{j:()=>n});const t=async function(e){try{const o=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=073602bf8ff34b64bdf213224231010&days=3&q=${e}`,{mode:"cors"}),c=await o.json();n=await c,function(){if(!document.querySelector(".container")){const e=document.createElement("div");e.classList.add("container"),document.body.appendChild(e)}const e=document.querySelector(".container");for(;e.firstChild;)e.removeChild(e.firstChild);const o=document.createElement("input");o.value="Bratislava",e.appendChild(o);const c=document.createElement("button");e.appendChild(c),c.textContent="click",c.addEventListener("click",(()=>{t(o.value)})),window.addEventListener("keypress",(e=>{"Enter"===e.key&&c.click()}));const d=document.createElement("div");d.classList.add("day-container"),e.appendChild(d);const a=document.createElement("div");d.appendChild(a),a.textContent=`${n.location.name} (${n.location.region}) ${n.location.country} ${n.location.localtime}`;const r=document.createElement("div");r.classList.add("astro"),d.appendChild(r);const i=["moonrise","moonset","sunrise","sunset"];function s(e){const t=document.createElement("div");r.appendChild(t),t.textContent=`${e.charAt(0).toUpperCase()+e.slice(1)}: ${n.forecast.forecastday[0].astro[e]}`}for(let e=0;e<i.length;e++)s(i[e]);const l=document.createElement("div");l.classList.add("current-condition"),d.appendChild(l);const u=document.createElement("div");u.textContent=n.current.condition.text,l.appendChild(u);const m=document.createElement("img");m.src="https:"+n.current.condition.icon,l.appendChild(m);const p=["cloud","feelslike_c","humidity","temp_c","vis_km","wind_kph","wind_dir"];function h(e){const t=document.createElement("div");l.appendChild(t),t.textContent=`${e.charAt(0).toUpperCase()+e.slice(1)}: ${n.current[e]}`}for(let e=0;e<p.length;e++)h(p[e]);const f=document.createElement("div");f.classList.add("forecast-container"),e.appendChild(f);const C=["condition","cloud","feelslike_c","humidity","temp_c"];function y(e,t){const o=document.createElement("div");if(document.querySelectorAll(".hour-card")[e].appendChild(o),"condition"===t){const c=document.createElement("img");document.querySelectorAll(".hour-card")[e].appendChild(c),o.textContent=n.forecast.forecastday[0].hour[e][t].text,c.src="https:"+n.forecast.forecastday[0].hour[e][t].icon}else o.textContent=o.textContent=n.forecast.forecastday[0].hour[e][t]}for(let e=0;e<n.forecast.forecastday[0].hour.length;e++){const t=document.createElement("div");f.appendChild(t),t.textContent=e+":00",t.classList.add("hour-card");for(let t=0;t<C.length;t++)y(e,C[t])}console.log(n),console.log(n.forecast.forecastday[0].hour);const v=new Date;console.log(v)}()}catch(e){console.error(e)}};let n;t("Zvolen")})();