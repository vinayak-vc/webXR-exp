const cacheName = "ViitorCloud-Mobile Touchpad-1.0.6";
const contentToCache = [
    "Build/Mobile Touchpad-1.0.6-WebGL-Release.loader.js",
    "Build/Mobile Touchpad-1.0.6-WebGL-Release.framework.js",
    "Build/Mobile Touchpad-1.0.6-WebGL-Release.data",
    "Build/Mobile Touchpad-1.0.6-WebGL-Release.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
