self.addEventListener('install', event => {
    event.waitUntil(precache())
})

async function precache () {
    const cache = await caches.open("v1")
    cache.addAll([
        '/',
        '/index.html',
        '/assets'
    ])
}