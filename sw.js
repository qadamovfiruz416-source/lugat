var C="firuz-v1",F=["./","index.html","icon-192.png","icon-512.png","manifest.json"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener("fetch",function(e){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
