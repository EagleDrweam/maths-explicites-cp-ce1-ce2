const CACHE='maths-explicites-v1';
const FILES=['./','./index.html','./manifest.json','./assets/css/style.css','./assets/js/app.js','./data/seances/periode1/seance01.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
