/* IndexedDB helper for image blobs. Metadata stays in LocalStorage. */
window.TCDB = (() => {
  const DB_NAME = 'timecapsule-media', STORE = 'images';
  function open() { return new Promise((resolve,reject)=>{ if(!('indexedDB' in window)) return reject(new Error('IndexedDB is unavailable in this browser.')); const req=indexedDB.open(DB_NAME,1); req.onupgradeneeded=()=>req.result.createObjectStore(STORE); req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); }); }
  async function put(id, blob) { const db=await open(); return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(blob,id);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error);}); }
  async function get(id) { const db=await open(); return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readonly'),r=tx.objectStore(STORE).get(id);r.onsuccess=()=>res(r.result||null);r.onerror=()=>rej(r.error);}); }
  async function remove(id) { const db=await open(); return new Promise((res,rej)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error);}); }
  return {put,get,remove};
})();