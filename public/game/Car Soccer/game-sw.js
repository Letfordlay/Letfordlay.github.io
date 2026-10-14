// Local-copy stub: removes the original offline-cache service worker so the
// locally modified game files are served instead of the cached originals.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil((async () => {
  for (const name of await caches.keys()) {
    if (name.startsWith("car-soccer-game-")) await caches.delete(name);
  }
  await self.registration.unregister();
  for (const client of await self.clients.matchAll({ type: "window" })) {
    client.navigate(client.url).catch(() => {});
  }
})()));
