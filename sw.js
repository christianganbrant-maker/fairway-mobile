const CACHE = 'fairway-v2'
const BASE_PATH = new URL('./', self.location.href).pathname
const HOME = BASE_PATH

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll([
    HOME,
    `${BASE_PATH}manifest.webmanifest`,
    `${BASE_PATH}golf-icon.svg`,
  ])))
  self.skipWaiting()
})
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))))
  self.clients.claim()
})
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return
  const pathname = new URL(event.request.url).pathname
  if (pathname.startsWith(`${BASE_PATH}golf-data/`) || pathname.startsWith(`${BASE_PATH}maps/`)) return
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then((response) => {
      if (response.ok) caches.open(CACHE).then((cache) => cache.put(HOME, response.clone()))
      return response
    }).catch(() => caches.match(HOME)))
    return
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok) caches.open(CACHE).then((cache) => cache.put(event.request, response.clone()))
    return response
  })))
})
