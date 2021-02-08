/*
 * Service worker installed to serve first time
 * This is the modular code to define the cache our application apis
 */

/* Dexie is used to save and fetch the data from the IndexedDB */

import Dexie from "dexie";
const { assets } = global.serviceWorkerOption;
let webpackAssets = [...assets, "./"];

//configuration for the post data
let postData = {};

//creating the database for the offline
const db = new Dexie("offline");
db.version(1).stores({
  postrequest: "++id,url,data",
});

//defining the assets to be the static and dynamic
const staticCacheName = "app-static-v1";
const dynamicCacheName = "app-dynamic-v1";
const apiCacheName = "app-api-v1";

let totalAssets = [...webpackAssets];

/*  Limiting the size of the cache not to blot the cache broser memory */

const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(
          keys[0].then(() => {
            return limitCacheSize(name, size);
          })
        );
      }
    });
  });
};

/* Update the cache from the machine */

// const updateCache = (name)=>{
//   caches.open(name).then
// }

/* Installing the service worker on the application */

self.addEventListener("install", (evt) => {
  console.log("Total Cache to be installed====>", totalAssets);
  self.skipWaiting().then(() => {
    self.clients.claim();
    /* This clients to ensure that the underlying service worker take effect immediately for both current client and all other active clients */
  }); //skip the waiting
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching all assets");
      cache
        .addAll(totalAssets)
        .then((cached) => {
          console.info("All Assetss are cached successfully");
        })
        .catch((err) => {
          console.error("Error while caching static assets", err);
          throw new Error(err);
        });
    })
  );
});

/*
 * Activate the service worker here
 * This section is used to perform action after activation
 * Action such as deleting cache
 * Now after the actiavtion of the serive worker we are deleting tghe old cache name and provide only the current cache there waiting for.
 */

self.addEventListener("activate", (evt) => {
  console.info("Service worker has been activate");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.keys().then((keys) => {
        const promises = [];
        for (let i = 0; i < keys.length; i++) {
          const split = keys[i].url.split("/");
          if (totalAssets.indexOf("/" + split[split.length - 1]) === -1) {
            promises.push(
              cache
                .delete(keys[i])
                .then((res) => console.info("deleting the key", keys[i]))
            );
          }
        }
        Promise.all(promises).then(() =>
          console.log("All old static caches deleted")
        );
      });
    })
  );
});

/*
 * Function to save the data to the indexedDB
 */

function saveDataToIndexDB(evt, postData) {
  //Saving the request to the database
  db.postrequest
    .add({
      url: evt.request.url,
      data: postData,
    })
    .then((dataresponse) => {
      // console.log("dataresponse", dataresponse);
      return postData;
    })
    .catch((err) => {
      // console.error("Post Request saving in IndexedDB failed");
      throw new Error(err);
    });
}

/*
 * This function is used to get the data from the cache and if not present then set to the cache
 * Check if the resource are in cache if not then the request based on the caching of the route
 */

self.addEventListener("fetch", (evt) => {
  // console.info("Fetching the request for the current evt", evt);

  /* We get the data when the application become online, then also return from the cache and also send it back */

  if (evt.request.mode === "navigate") {
    evt.respondWith(caches.match("/index.html"));
  }
  /*
   *Check if the database id empty or not in the database
   * If not empty then requet to the database to send the data back
   * Then continue to fetch the data
   */

  if (evt.request.url.indexOf("/api") === -1) {
    /* TODO-----> Try to cache the GET REQUEST for statics like image not api but cache api in case of offline and use event streams to bring the most relevant products */
    evt.respondWith(
      caches
        .match(evt.request)
        .then((cacheRes) => {
          return (
            cacheRes ||
            fetch(evt.request).then((fetchRes) => {
              return caches.open(dynamicCacheName).then((cache) => {
                //Here we update the cache and clone the response of the request then return the response
                return cache.put(evt.request.url, fetchRes.clone()).then(() => {
                  limitCacheSize(dynamicCacheName, 50);
                  return fetchRes;
                });
              });
            })
          );
        })
        .catch((err) => {
          if (evt.request.url.indexOf(".html") > -1) {
            return caches.match("/pages/fallback.html");
          }
        })
    );
  } else {
    if (evt.request.method !== "POST") {
      /*Functionality to fetch the request other than post and cache it if the request became offline then fetch from the cache */
      evt.respondWith(
        /* First fetch and cache the reponse */
        fetch(evt.request)
          .then((fetchRes) => {
            console.log(
              "HERE INSIDE _XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
              evt.request.url
            );
            if (evt.request.url.indexOf("/search") === -1) {
              return caches.open(apiCacheName).then((cache) => {
                return cache.put(evt.request.url, fetchRes.clone()).then(() => {
                  limitCacheSize(apiCacheName, 20);
                  return fetchRes;
                });
              });
            } else {
              return fetchRes;
            }
          })
          .catch((error) => {
            console.log(
              "HERE IN ERROR -----------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$",
              evt.request.url
            );
            return caches
              .match(evt.request)
              .then((cacheRes) => {
                console.log(
                  "CACCHES_IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
                  cacheRes
                );
                return cacheRes;
              })
              .catch((err) => {
                if (evt.request.url.indexOf(".html") > -1) {
                  return caches.match("/pages/fallback.html");
                }
              });
          })
        /* In case of failed event return the response from the cache */
      );
    } else {
      // console.log("HERE IN THE OCOD");
      /*
       * Caching the post request on indexedDatabase and send it when online
       * Not relying on navigator.onLine as it show false connection status
       * So trying to send the set to the index database in the catch functionality
       * Add the data of post to the database or send message to show data will be updated when connection is online
       */

      //To check if the app is online or not
      //If error in requesting means offline
      //and save in database in catch
      console.warn("Checking if ", evt.request.clone().hasOwnProperty("text"));
      let postDataCache = {};
      fetch(evt.request.clone())
        .then((fetchRes) => {
          return fetchRes;
        })
        .catch(() => {
          //Getting the post request method
          //Using clone in the event request is used as without clone the body stream lock error will thrown and can't copy request more than once

          //Checking if the post data
          // console.log("POST----->data", evt.request.url);

          //Check if not login functionality
          if (evt.request.url.indexOf("/login") === -1) {
            evt.request
              .clone()
              .text()
              .then((body) => {
                //To check if the form is form-data or just form
                if (body.indexOf("form-data") > -1) {
                  evt.request
                    .clone()
                    .formData()
                    .then((formData) => {
                      let form_data = {
                        formType: "form-data",
                      };

                      for (var pair of formData.entries()) {
                        console.log("KEY", pair[0], "Value", pair[1]);
                        form_data[pair[0]] = pair[1];
                      }
                      postDataCache = form_data;
                      saveDataToIndexDB(evt, postDataCache);
                    });
                } else {
                  postDataCache = JSON.parse(body);
                  saveDataToIndexDB(evt, postDataCache);
                }
              });
          }
        });
    }
  }
});
