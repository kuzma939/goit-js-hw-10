import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as g}from"./assets/vendor-77e16229.js";const S=document.querySelector("input#datetime-picker"),n=document.querySelector("button"),c=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),d=document.querySelector("[data-seconds]");n.addEventListener("click",p);let r;y(S,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),r=t[0],r<Date.now()?(g.show({message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):n.disabled=!1}});function p(){isActive||(isActive=!0,input.disabled=!0,setInterval(()=>{const a=r-new Date,e=s(a);c.textContent=`${o(e.days)}`,u.textContent=`${o(e.hours)}`,i.textContent=`${o(e.minutes)}`,d.textContent=`${o(e.seconds)}`,n.disabled=!0,a<=0&&(c.textContent="00",u.textContent="00",i.textContent="00",d.textContent="00")},1e3))}function o(t){return String(t).padStart(2,"0")}function s(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:f}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=commonHelpers.js.map
