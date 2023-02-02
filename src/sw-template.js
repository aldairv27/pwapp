/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');



const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { clientsClaim } = workbox.core;
const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute } = workbox.precaching;


clientsClaim();

precacheAndRoute(
    [
        ...self.__WB_MANIFEST,
        "/pokedex",
        '/pinpad',
        '/impresora_etiquetas',
        '/bascula',
        '/caja',
        '/scanner',
        '/impresora_tickets'
    ]);

registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.svg'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
        cacheName: 'imagesSvj',
        plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({ maxEntries: 50 }),
        ],
    }),
);

registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
        cacheName: 'imagesPng',
        plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({ maxEntries: 50 }),
        ],
    }),
);

registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.jpg'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
        cacheName: 'imagesJpg',
        plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({ maxEntries: 50 }),
        ],
    }),
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

const cacheFirst = [
    'https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2'
]

registerRoute(
    ({ _, url }) => {

        if (cacheFirst.includes(url.href)) return true

        return false;
    },
    new CacheFirst()
);

const cacheNetworkFirst = [
    'https://pokeapi.co/api/v2/pokemon/ditto'
]

registerRoute(
    ({ _, url }) => {

        if (cacheNetworkFirst.includes(url.href)) return true

        return false;
    },
    new NetworkFirst()
);