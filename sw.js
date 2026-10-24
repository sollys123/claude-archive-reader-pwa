// Scope-relative cache: works at https://username.github.io/repo-name/
const CACHE_NAME='claude-reader-private-2026-10-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./archive/chunk-00.txt','./archive/chunk-01.txt','./archive/chunk-02.txt','./archive/chunk-03.txt','./archive/chunk-04.txt','./archive/chunk-05.txt','./archive/chunk-06.txt','./archive/chunk-07.txt','./archive/chunk-08.txt','./archive/chunk-09.txt','./archive/chunk-10.txt','./archive/chunk-11.txt','./archive/chunk-12.txt','./archive/chunk-13.txt','./archive/chunk-14.txt','./archive/chunk-15.txt','./archive/chunk-16.txt','./archive/chunk-17.txt','./archive/chunk-18.txt','./archive/chunk-19.txt','./archive/chunk-20.txt','./archive/chunk-21.txt','./archive/chunk-22.txt','./archive/chunk-23.txt','./archive/chunk-24.txt','./archive/chunk-25.txt','./archive/chunk-26.txt','./archive/chunk-27.txt','./archive/chunk-28.txt','./archive/chunk-29.txt','./archive/chunk-30.txt','./archive/chunk-31.txt'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  event.respondWith(caches.match(event.request).then(cached=>{
    if(cached) return cached;
    return fetch(event.request).then(res=>{
      if(res.ok){const copy=res.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
      return res;
    });
  }));
});
