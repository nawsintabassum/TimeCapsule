window.TCCountdown = {
  parts(date) { let ms=Math.max(0,new Date(date).getTime()-Date.now());const days=Math.floor(ms/86400000);ms%=86400000;const hours=Math.floor(ms/3600000);ms%=3600000;const minutes=Math.floor(ms/60000);ms%=60000;return {days,hours,minutes,seconds:Math.floor(ms/1000)}; },
  label(date) { if(new Date(date).getTime()<=Date.now()) return 'Unlocked'; const p=this.parts(date); return `${p.days}d ${p.hours}h ${p.minutes}m`; },
  markup(date) { const p=this.parts(date);return `<div class="countdown"><span>${p.days}<small>days</small></span><span>${p.hours}<small>hours</small></span><span>${p.minutes}<small>mins</small></span><span>${p.seconds}<small>secs</small></span></div>`; }
};