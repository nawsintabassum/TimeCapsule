window.TCStore = (() => {
  const KEY='timecapsule-data-v1', SETTINGS='timecapsule-settings-v1';
  const defaults={name:'Dream Keeper',theme:'dark',reducedMotion:false};
  function load() { try {const v=JSON.parse(localStorage.getItem(KEY)||'{"version":1,"capsules":[]}');if(v.version!==1||!Array.isArray(v.capsules)) throw Error('Invalid local data');return v;} catch(e){console.error(e);return {version:1,capsules:[]};} }
  function save(data) { try{localStorage.setItem(KEY,JSON.stringify(data));return true;}catch(e){TCUI.toast('Could not save data. Browser storage may be full.','error');return false;} }
  function settings() {try{return {...defaults,...JSON.parse(localStorage.getItem(SETTINGS)||'{}')};}catch{return {...defaults};}}
  function saveSettings(s) {try{localStorage.setItem(SETTINGS,JSON.stringify(s));return true;}catch{TCUI.toast('Could not save settings.','error');return false;}}
  function all() {return load().capsules;}
  function get(id) {return all().find(c=>c.id===id);}
  function upsert(c) {const d=load(),i=d.capsules.findIndex(x=>x.id===c.id);if(i<0)d.capsules.unshift(c);else d.capsules[i]=c;return save(d);}
  function remove(id) {const d=load();d.capsules=d.capsules.filter(c=>c.id!==id);return save(d);}
  function status(c) {return c.status==='draft'?'draft':new Date(c.unlockAt).getTime()<=Date.now()?'unlocked':'locked';}
  function normalize(c) {return {...c,status:status(c)};}
  function exportData() {return {version:1,exportedAt:new Date().toISOString(),settings:settings(),capsules:all()};}
  return {load,save,settings,saveSettings,all,get,upsert,remove,status,normalize,exportData};
})();