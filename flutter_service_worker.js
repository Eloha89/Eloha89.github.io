'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4169608db592fe410658fa180cd54952",
"assets/FontManifest.json": "24404a4a678b6005f39c747cd143a824",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3540e990102ed890105b21eda907317a",
"assets/packages/auth_buttons/images/default/apple.png": "ebc6d25b2a5f85ac1c55fc8493a6933d",
"assets/packages/auth_buttons/images/default/apple_white.png": "fee7941657354ff5a6522fb270de6b50",
"assets/packages/auth_buttons/images/default/email.png": "220771d987f09a46b5ee470d7d1fe14f",
"assets/packages/auth_buttons/images/default/email_white.png": "b138a1aedb7f7f0891923b0121cc8520",
"assets/packages/auth_buttons/images/default/facebook.png": "7cf5256d509b37c5e023d0e3bf89ca33",
"assets/packages/auth_buttons/images/default/facebook_white.png": "9377466f32681729736ca9347a2e4363",
"assets/packages/auth_buttons/images/default/github_black.png": "d7670a9b94f89048f0aa78dd1f813bc1",
"assets/packages/auth_buttons/images/default/github_white.png": "b69ee90f95f5baea1f6440b27d4d3d7f",
"assets/packages/auth_buttons/images/default/google.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/auth_buttons/images/default/huawei.png": "0ca2ffbecc245b5793e865ed98087fa8",
"assets/packages/auth_buttons/images/default/huawei_white.png": "b5c5ab42a71d5dde71d8cd965db05009",
"assets/packages/auth_buttons/images/default/microsoft.png": "96da9d69ca3c3f18e9383d01075a4a39",
"assets/packages/auth_buttons/images/default/twitter.png": "ce08a5ef8628e44e8f042f47d5df1661",
"assets/packages/auth_buttons/images/default/twitter_white.png": "0d4470494f8f7ed308ed1c0f59f13fa6",
"assets/packages/auth_buttons/images/outlined/apple.png": "982c4374fd8d68c835f51e1b218946c9",
"assets/packages/auth_buttons/images/outlined/apple_white.png": "b53bfa858ef99ed1cdcba417f5911847",
"assets/packages/auth_buttons/images/outlined/email.png": "4e322dbd031e5940d60ba4f82204d73d",
"assets/packages/auth_buttons/images/outlined/email_white.png": "3eed4eeffc6338fb1db70926f75e5dda",
"assets/packages/auth_buttons/images/outlined/facebook.png": "1ff2150aebd4781a3e290a1cc7dc1e1c",
"assets/packages/auth_buttons/images/outlined/facebook_white.png": "1148a3359d95ba55000798b3565d35ad",
"assets/packages/auth_buttons/images/outlined/google.png": "f16a82299f7fb65ad5b9fa493b4fdc79",
"assets/packages/auth_buttons/images/outlined/huawei.png": "596b8fc29dca10fb847162d8190ab922",
"assets/packages/auth_buttons/images/outlined/huawei_white.png": "fba6b79ab27cb950b8dc65d70a350cfa",
"assets/packages/auth_buttons/images/outlined/microsoft.png": "b74a53bdc17df88dd0ee39f302f8fb5a",
"assets/packages/auth_buttons/images/outlined/twitter.png": "6cc42f4430ea2d28e6bcebe8caba835e",
"assets/packages/auth_buttons/images/outlined/twitter_white.png": "7e0f8d607a2fd2e431d48bdad71cb7f9",
"assets/packages/auth_buttons/images/secondary/apple.png": "c92e950ff74f3d0aed25eae8f2b625a3",
"assets/packages/auth_buttons/images/secondary/email.png": "5a8046651666ff2e14ebb87473d87177",
"assets/packages/auth_buttons/images/secondary/email_white.png": "5f57417e36ae055d6f9f525e04c51213",
"assets/packages/auth_buttons/images/secondary/facebook.png": "17bc7ce24f8be2338c0fe756bc91021a",
"assets/packages/auth_buttons/images/secondary/google.png": "f6e6e8105bf24721e61dd67a38d894ed",
"assets/packages/auth_buttons/images/secondary/huawei.png": "2a9a4ae758b9ba527dc309de7f12706e",
"assets/packages/auth_buttons/images/secondary/microsoft.png": "8f8e4c2c6c1158fa0eb76c9dcca4a106",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "25e26b49492089deea672175452d50df",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "40a0b61f96a7fdb08a0da6cc780329cf",
"/": "40a0b61f96a7fdb08a0da6cc780329cf",
"main.dart.js": "70d80b3786e0ac6fe231ac96b35b0bcf",
"manifest.json": "74df2df88a8f57bd22a4dedc29190037",
"version.json": "aa26f6a479ab31c955a52d0659326f3b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
