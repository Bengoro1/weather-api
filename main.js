(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{j:()=>n});const t=async function(e){try{const c=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=073602bf8ff34b64bdf213224231010&days=3&q=${e}`,{mode:"cors"}),o=await c.json();n=await o,function(){if(!document.querySelector(".container")){const e=document.createElement("div");e.classList.add("header"),document.body.appendChild(e),e.textContent="Weather API";const n=document.createElement("div");n.classList.add("container"),document.body.appendChild(n);const c=document.createElement("div");document.body.appendChild(c),c.classList.add("footer");const o=document.createElement("div");let a=(new Date).getFullYear();o.textContent=`Copyright © Bengoro1 ${a}`,o.setAttribute("class","signature"),c.appendChild(o);const d=document.createElement("img");d.setAttribute("src","./github.jpg"),d.setAttribute("alt","Logo"),d.setAttribute("class","git-logo"),d.setAttribute("onclick","window.open('https://github.com/Bengoro1','_newtab');"),o.appendChild(d);const r=document.createElement("div");n.appendChild(r),r.classList.add("input-container");const i=document.createElement("input");i.value="Bratislava",r.appendChild(i);const s=document.createElement("button");r.appendChild(s),s.textContent="Search",s.addEventListener("click",(()=>{t(i.value)})),window.addEventListener("keypress",(e=>{"Enter"===e.key&&s.click()}))}const e=document.querySelector(".container");for(;e.childNodes.length>1;)e.removeChild(e.lastChild);const c=document.createElement("div");c.classList.add("day-container"),e.appendChild(c);const o=document.createElement("div");c.appendChild(o),o.textContent=`${n.location.name} (${n.location.region}) ${n.location.country} ${n.location.localtime}`;const a=document.createElement("div");a.classList.add("astro"),c.appendChild(a);const d=["moonrise","moonset","sunrise","sunset"];function r(e){const t=document.createElement("div"),c=document.createElement("p"),o=document.createElement("p");a.appendChild(t),t.appendChild(c),t.appendChild(o),c.textContent=e.charAt(0).toUpperCase()+e.slice(1)+":",o.textContent=n.forecast.forecastday[0].astro[e]}for(let e=0;e<d.length;e++)r(d[e]);const i=document.createElement("div");i.classList.add("current-condition"),c.appendChild(i);const s=document.createElement("div");s.textContent=n.current.condition.text,i.appendChild(s);const l=document.createElement("img");l.src="https:"+n.current.condition.icon,i.appendChild(l);const m=["cloud","feelslike_c","humidity","temp_c","vis_km","wind_kph","wind_dir"];function u(e){const t=document.createElement("div");i.appendChild(t);const c=document.createElement("p"),o=document.createElement("p");switch(t.appendChild(c),t.appendChild(o),e){case"cloud":c.textContent="Cloud: ",o.textContent=n.current[e]+"%";break;case"feelslike_c":c.textContent="Feelslike:",o.textContent=n.current[e]+"°C";break;case"humidity":c.textContent="Humidity:",o.textContent=n.current[e]+"%";break;case"temp_c":c.textContent="Temperature:",o.textContent=n.current[e]+"°C";break;case"vis_km":c.textContent="Visibility:",o.textContent=n.current[e]+"km";break;case"wind_kph":c.textContent="Wind speed:",o.textContent=n.current[e]+"km/h";break;case"wind_dir":c.textContent="Wind direction:",o.textContent=n.current[e]}}for(let e=0;e<m.length;e++)u(m[e]);const p=document.createElement("div");p.classList.add("forecast-hour"),e.appendChild(p);const h=document.createElement("div");h.classList.add("forecast-day"),e.appendChild(h);const C=["condition","cloud","feelslike_c","humidity","temp_c"];function f(e,t){const c=document.createElement("div");document.querySelectorAll(".hour-card")[e].appendChild(c);const o=document.createElement("p"),a=document.createElement("p");switch(c.appendChild(o),c.appendChild(a),t){case"condition":const d=document.createElement("img");document.querySelectorAll(".hour-card")[e].appendChild(d),c.textContent=n.forecast.forecastday[0].hour[e][t].text,d.src="https:"+n.forecast.forecastday[0].hour[e][t].icon;break;case"cloud":o.textContent="Cloud:",a.textContent=n.forecast.forecastday[0].hour[e][t]+"%";break;case"feelslike_c":o.textContent="Feelslike:",a.textContent=n.forecast.forecastday[0].hour[e][t]+"°C";break;case"humidity":o.textContent="Humidity:",a.textContent=n.forecast.forecastday[0].hour[e][t]+"%";break;case"temp_c":o.textContent="Temperature:",a.textContent=n.forecast.forecastday[0].hour[e][t]+"°C"}}for(let e=0;e<n.forecast.forecastday[0].hour.length;e++){const t=document.createElement("div");p.appendChild(t),t.textContent=e+":00",t.classList.add("hour-card");for(let t=0;t<C.length;t++)f(e,C[t])}const y=["condition","avghumidity","avgtemp_c","maxwind_kph","daily_chance_of_rain"];function x(e,t){const c=document.createElement("div");document.querySelectorAll(".day-card")[e-1].appendChild(c);const o=document.createElement("p"),a=document.createElement("p");switch(c.appendChild(o),c.appendChild(a),t){case"condition":const d=document.createElement("img");document.querySelectorAll(".day-card")[e-1].appendChild(d),c.textContent=n.forecast.forecastday[e].day[t].text,d.src="https:"+n.forecast.forecastday[e].day[t].icon;break;case"avghumidity":o.textContent="Average humidity:",a.textContent=n.forecast.forecastday[e].day[t]+"%";break;case"avgtemp_c":o.textContent="Average temperature:",a.textContent=n.forecast.forecastday[e].day[t]+"°C";break;case"maxwind_kph":o.textContent="Max wind speed:",a.textContent=n.forecast.forecastday[e].day[t]+"km/h";break;case"daily_chance_of_rain":o.textContent="Chance of rain today:",a.textContent=n.forecast.forecastday[e].day[t]+"%"}}for(let e=1;e<n.forecast.forecastday.length;e++){const t=document.createElement("div");t.classList.add("day-card"),t.textContent=n.forecast.forecastday[e].date,h.appendChild(t);for(let t=0;t<y.length;t++)x(e,y[t])}}()}catch(e){console.error(e)}};let n;t("Bratislava")})();