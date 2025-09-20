'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3887e76524f8804757e91c620f897704",
"assets/AssetManifest.bin.json": "f7fde8fee5cf6e639223e774fdd3182c",
"assets/AssetManifest.json": "52bcd91cc1ada8b2fe0f66ec18987cfa",
"assets/assets/gifs/confirm_submit.gif": "333dfeda82c5e0ad60371bb9b4afad05",
"assets/assets/gifs/trash.gif": "de234eaa6873197922fdfae8c5284a5e",
"assets/assets/icons/icon-apple.svg": "7769c640bc92e58945b56790a6e98a76",
"assets/assets/icons/icon-banknote.svg": "4292b914cfe2f990b0739f0bafe4e3c3",
"assets/assets/icons/icon-calendar.svg": "f602014d7324e70d46b48331f1a069e2",
"assets/assets/icons/icon-check.png": "ae9cc252ef2d4b1fe3cf8a93c595434d",
"assets/assets/icons/icon-check.svg": "231a7e7c53a291f9403f94dea9e3902c",
"assets/assets/icons/icon-clock-in.svg": "5c9b6acdf2ca76709ec1e11174ff82a1",
"assets/assets/icons/icon-clock-out.svg": "c7f711ca23adf6fd041dbee8d206394f",
"assets/assets/icons/icon-close.svg": "06eabed3bde2f18d6422ae2e06e711da",
"assets/assets/icons/icon-confirm.png": "bfa6586374f9bff7c4a7ed915310f8bc",
"assets/assets/icons/icon-confirm.svg": "590090cd83b80c78a0fbcc09c5c65a2f",
"assets/assets/icons/icon-delete.svg": "01eeff9db59efdf788e55def5ac4eaeb",
"assets/assets/icons/icon-detail-location.png": "aba87f78f2f625af012171494b815b81",
"assets/assets/icons/icon-download.svg": "35c9beb7e1895e2f2fe993d574d1b05f",
"assets/assets/icons/icon-edit.svg": "7b8b4d92bb7ee317dd7ac8ebf4012f5a",
"assets/assets/icons/icon-gallery.svg": "02340995680b29b71ba6ea10587cea8f",
"assets/assets/icons/icon-google.svg": "d4f93721e58e7eb3b9ee367f8913664c",
"assets/assets/icons/icon-key.svg": "fe6f9eaa05c0a158cf7c5f963d09c2d6",
"assets/assets/icons/icon-loading.svg": "4956cbce152dfc5a53c38a8c72e2423e",
"assets/assets/icons/icon-pencil-edit.svg": "62e55143a0f27f59d5774f126f1e4342",
"assets/assets/icons/icon-pencil.svg": "71da9f84d5d12f9802a445685f3eb50a",
"assets/assets/icons/icon-route.png": "5d15c28a9f70e973bb36eb27248c1839",
"assets/assets/icons/icon-save-draft.svg": "44080b57f15e8402b02f8e9d2426eb7e",
"assets/assets/icons/icon-speedometer.svg": "adc498cbc58e168509e485c1fed493b5",
"assets/assets/icons/icon-upload.svg": "dee8df7321706659392f4c2e8c883b24",
"assets/assets/icons/icon-warning.svg": "c41efb6a74d92dc64fc981dde4625472",
"assets/assets/images/Afternoon.png": "73d80bbbd67a0c485e71b270bef6521e",
"assets/assets/images/Attendance-List-Icon.svg": "1ae0341229f7268cddae750f51388dd1",
"assets/assets/images/bg_illustration.png": "176ffefa4ada9f5637f7604ca27c2c0e",
"assets/assets/images/blue-banner-bg.jpg": "95baa3219d6518c002f5ff8bcfc077d7",
"assets/assets/images/Business-Trip-Icon.svg": "2f21c34840f0a7d93e65a74e2864540a",
"assets/assets/images/Claims-Icon.svg": "07322885e288cb09334aa7836d041325",
"assets/assets/images/Clock-In-Icon.svg": "35c093fb5560bf654658aae5da19812b",
"assets/assets/images/Clock-Out-Icon.svg": "e0fd46c3e4dec6064afc8af5219dc70a",
"assets/assets/images/Data-Update-Icon.svg": "46153835b9fe73680c18906bcc1f9f22",
"assets/assets/images/default-photo.webp": "165ec39924e2bffcfba89b82fcfb8f7f",
"assets/assets/images/Email-Sent.svg": "0c8cf70e37c78e66c54410775e2bafee",
"assets/assets/images/Empty-Data.svg": "453f71d8ea3c208e8f7fe9b4f4c48e8e",
"assets/assets/images/Evening.png": "6dd1682bc4b6f8f09774fbabf6f7e332",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/forgot-password.svg": "8910e1257fb0c67128322ae2d2b71887",
"assets/assets/images/ic_check.svg": "53d89843276734dcda2c59fe242c3f66",
"assets/assets/images/ic_clock.svg": "e626e2dc7862b380fefe03c19dd85be6",
"assets/assets/images/ic_close.svg": "9997b2ae329f61852466ddfaae4ed64e",
"assets/assets/images/ic_empty.svg": "3f53bc59bb900e756f54d874a5a0a888",
"assets/assets/images/ic_printer.svg": "1672971a4a05c50a7ba068f02e1c784f",
"assets/assets/images/ic_search.svg": "0f96b19f291ec1108adfc09df4bf20cf",
"assets/assets/images/ic_user_check.svg": "510a8d34a8f11d4753309b46659f5908",
"assets/assets/images/John.png": "3f8c2277896263fc63c8c829d81ff973",
"assets/assets/images/Leave-Icon.svg": "485b1ff784d16c1a3e047ff3f82e994c",
"assets/assets/images/logo.svg": "0607fc0e91d0e8f7463c9063d7a1c451",
"assets/assets/images/Main-Notification.svg": "c9cdf19f627bbac1ba3f797c415be4e4",
"assets/assets/images/Menu.svg": "94ac470b4563f980ce7c247f9f9c0c97",
"assets/assets/images/Morning.png": "4dc59bc07ddecc5a94a2ab1150751e05",
"assets/assets/images/Night.png": "258facd8f8d3c8b04b7eebffe5820987",
"assets/assets/images/Overtime-Icon.svg": "c88d34bbd1f1caad984712a0f8dfda00",
"assets/assets/images/Payslip-Icon.svg": "f0e49f2e7a5b776bc5d4399fe557005e",
"assets/assets/images/photo_example.png": "c3fdb1c237add98adbf0f897f059a869",
"assets/assets/images/Shift-Change-Icon.svg": "92201d6e87408008c5be7f38cc906b26",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "c29ce804c15b9a616731a3de5afe920f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9ea189c7175d199488acbb58a5b5e1e2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "063d43b7bac686f2de152ba13c592fee",
"/": "063d43b7bac686f2de152ba13c592fee",
"main.dart.js": "71374294ab555464197ac94cd9e21e87",
"manifest.json": "3065d7ea41bcb7d773bc63c397471978",
"version.json": "2c4d36da46d9d2fa97a7e3047ea20a9e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
