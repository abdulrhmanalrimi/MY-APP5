// Service Worker for النحو ببساطة PWA
const CACHE_NAME = 'nahw-app-v2';
const RUNTIME_CACHE = 'nahw-runtime-v2';

// Normalize asset paths to support subdirectory hosting (مثل GitHub Pages)
const APP_ORIGIN = self.location.origin;
const APP_BASE_PATH = (self.registration && self.registration.scope)
  ? new URL(self.registration.scope).pathname
  : '/';

const withBase = (path) => new URL(path, `${APP_ORIGIN}${APP_BASE_PATH}`).toString();
const OFFLINE_URL = withBase('offline.html');

// Files to cache immediately
const PRECACHE_URLS = [
  withBase(''),
  withBase('index.html'),
  withBase('manifest.json'),
  withBase('app.js'),
  withBase('pwa.js'),
  withBase('style.css'),
  withBase('index.css'),
  OFFLINE_URL,
  withBase('icon-192.png'),
  withBase('icon-512.png'),
  withBase('apple-touch-icon.png')
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // For navigation requests, try network first, then cache, then offline page
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the new version
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request)
            .then((response) => {
              return response || caches.match(withBase('index.html')) || caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // For other requests, try cache first, then network
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cache the fetched response
          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
