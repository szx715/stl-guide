// Service Worker — 离线缓存 STL 学习指南
const CACHE_NAME = 'stl-guide-v3';
const FILES = [
  '/',
  '/home.html',
  '/index.html',
  '/algo.html',
  '/ds.html',
  '/hutao.jpg',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json'
];

// 安装：预缓存所有静态资源
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 请求：缓存优先 + 网络兜底
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
