const STATIC_CACHE_NAME = 'mwsrs1-static-v13';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME).then(function(cache) {
            return cache.addAll([
                '/',
                'css/styles.css',
                'css/responsive.css',
                'data/restaurants.json',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'img/1-1x.jpg',
                'img/2-1x.jpg',
                'img/3-1x.jpg',
                'img/4-1x.jpg',
                'img/5-1x.jpg',
                'img/6-1x.jpg',
                'img/7-1x.jpg',
                'img/8-1x.jpg',
                'img/9-1x.jpg',
                'img/10-1x.jpg',
                'img/1-large-1x.jpg',
                'img/2-large-1x.jpg',
                'img/3-large-1x.jpg',
                'img/4-large-1x.jpg',
                'img/5-large-1x.jpg',
                'img/6-large-1x.jpg',
                'img/7-large-1x.jpg',
                'img/8-large-1x.jpg',
                'img/9-large-1x.jpg',
                'img/10-large-1x.jpg',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                '/restaurant.html?id=1',
                '/restaurant.html?id=2',
                '/restaurant.html?id=3',
                '/restaurant.html?id=4',
                '/restaurant.html?id=5',
                '/restaurant.html?id=6',
                '/restaurant.html?id=7',
                '/restaurant.html?id=8',
                '/restaurant.html?id=9',
                '/restaurant.html?id=10'
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('mwsrs1-') &&
                        cacheName != STATIC_CACHE_NAME;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});