const CACHE_NAME = 'c-tech-cache-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'style.css',
  'script.js',
  'Images/phone-and-laptop-repair-480.webp',
  'Images/phone-and-laptop-repair-560.webp',
  'Images/phone-and-laptop-repair.webp',
  'Images/mobile-accessories-480.webp',
  'Images/mobile-accessories-560.webp',
  'Images/mobile-accessories.webp',
  'Images/before-and-after.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestURL = new URL(event.request.url);
  if (requestURL.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return networkResponse;
      });
    }).catch(() => caches.match('index.html'))
  );
});
