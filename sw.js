const CACHE_NAME = 'rusalochka-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon36-192.png',
  '/icon36-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});