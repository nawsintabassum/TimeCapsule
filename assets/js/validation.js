window.TCValidate = {
  text(v, max=12000) { return typeof v === 'string' && v.trim().length > 0 && v.length <= max; },
  date(v) { const d=new Date(v); return v && !Number.isNaN(d.getTime()); },
  image(file) { if(!file) return true; return ['image/jpeg','image/png','image/webp','image/gif'].includes(file.type) && file.size <= 8*1024*1024; },
  backup(data) { return !!data && data.version === 1 && Array.isArray(data.capsules) && data.capsules.every(c=>c && typeof c.id==='string' && typeof c.title==='string' && typeof c.createdAt==='string'); }
};