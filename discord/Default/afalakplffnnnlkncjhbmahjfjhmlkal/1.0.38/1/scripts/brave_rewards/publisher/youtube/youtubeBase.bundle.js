!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}({0:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));let r=null;const o=()=>r,i=e=>{r?e(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(t){if(!chrome.runtime.lastError&&t&&t.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void e(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void e(!0)},100))},u=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},1:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));const r=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const o=r+t.length,i=e.indexOf(n,o);let u="";return i!==o?u=-1!==i&&i>o||-1!==i?e.substring(o,i):e.substring(o):""===n&&(u=e.substring(o)),u},o=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const o=n[r];if(e[o]!==t[o])return!1}return!0},i=()=>"complete"===document.readyState&&"visible"===document.visibilityState},14:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(9);var i=n(1);const u=e=>`https://www.youtube.com/channel/${e}/videos`,a=e=>"youtube_"+e,s=e=>"youtube#channel:"+e,c=e=>{if(!e)return"";let t=i.c(e,'"avatar":{"thumbnails":[{"url":"','"');return t||(t=i.c(e,'"width":88,"height":88},{"url":"','"'),t||"")},l=e=>{if(!e)return"";let t=i.c(e,'"ucid":"','"');return t||(t=i.c(e,'HeaderRenderer":{"channelId":"','"'),t||(t=i.c(e,'<link rel="canonical" href="https://www.youtube.com/channel/','">'),t||(t=i.c(e,'browseEndpoint":{"browseId":"','"'),t||"")))},d=()=>document.querySelector("#contents .ytp-title-link"),f=e=>{if(!e||!e.href)return"";const t=new URL(e.href);return t?b(t):""},b=e=>{if(!e)return"";const t=new URLSearchParams(e.search);return t&&t.get("v")||""},h=e=>!(!e||!e.endsWith("/watch"));let p=!0;const m=e=>{p=e},y=e=>{const t=new URLSearchParams(e.search),n=(e=>e&&e.get("docid")||"")(t),o=a(n),i=(e=>{if(!e)return 0;const t=e.get("st"),n=e.get("et");if(!t||!n)return 0;const r=t.split(",");if(!r||0===r.length)return 0;const o=n.split(",");if(!o||0===o.length)return 0;if(r.length!==o.length)return 0;let i=0;for(let e=0;e<r.length;++e){const t=parseFloat(r[e]),n=parseFloat(o[e]);i+=Math.round(n-t)}return i})(t),u=Object(r.b)();u&&(u.postMessage({type:"MediaDurationMetadata",mediaType:"youtube",data:{mediaKey:o,duration:i,firstVisit:p}}),m(!1))},v=e=>{if(!e)return void Object(r.c)("youtube","Invalid channel id");const t=document.querySelector("#channel-container #text-container");if(!t)return void Object(r.c)("youtube","Unable to extract channel name from page");const n=s(e),o=(i=t)?i.innerText.trim():"";var i;if(!o)return void Object(r.c)("youtube","Invalid publisher name");let l="";const b=d(),h=f(b);h&&(l=a(h));const p=u(e),m=(e=>{for(const t of e){const e=c(t.text);if(e)return e}return""})(document.scripts),y=Object(r.b)();y&&y.postMessage({type:"SavePublisherVisit",mediaType:"youtube",data:{url:p,publisherKey:n,publisherName:o,mediaKey:l,favIconUrl:m}})},w=()=>{const e=location.href;fetch(e).then(e=>{if(!e.ok)throw new Error(`YouTube publisher request failed: ${e.statusText} (${e.status})`);return e.text()}).then(e=>{const t=l(e);if(!t)return void Object(r.c)("youtube","Invalid channel id");const n=s(t),o=(e=>{if(!e)return"";const t=i.c(e,'<meta itemprop="name" content="','"');return t||""})(e);if(!o)return void Object(r.c)("youtube","Invalid publisher name");let b="";const h=d(),p=f(h);p&&(b=a(p));const m=c(e),y=u(t),v=Object(r.b)();v&&v.postMessage({type:"SavePublisherVisit",mediaType:"youtube",data:{url:y,publisherKey:n,publisherName:o,mediaKey:b,favIconUrl:m}})}).catch(e=>{throw new Error("YouTube fetch request failed: "+e)})},g=(e,t,n,o)=>{const d=l(t);if(!d)return void Object(r.c)("youtube","Invalid channel id");const f=s(d),h=b(new URL(e));if(!h)return void Object(r.c)("youtube","Invalid media id");const p=a(h);if(!n&&!(n=(e=>{if(!e)return"";const t=i.c(e,'"author":"','"');if(!t)return"";let n=null;try{n=JSON.parse(`{"brave_publisher":"${t}"}`)}catch(e){throw new Error("Error parsing publisher name from response: "+e)}return n.brave_publisher})(t)))return void Object(r.c)("youtube","Invalid publisher name");o||(o=u(d));const m=c(t),y=Object(r.b)();y&&y.postMessage({type:"SavePublisherVisit",mediaType:"youtube",data:{url:o,publisherKey:f,publisherName:n,mediaKey:p,favIconUrl:m}})},O=()=>{const e=location.href,t=b(new URL(e));if(!t)return void Object(r.c)("youtube","Invalid media id");const n=(e=>"https://www.youtube.com/watch?v="+e)(t),o=encodeURI(n),i={};fetch("https://www.youtube.com/oembed?format=json&url="+o).then(t=>{if(!t.ok){if(401!==t.status)throw new Error(`YouTube oembed request failed: ${t.statusText} (${t.status})`);(e=>{fetch(e).then(e=>{if(!e.ok)throw new Error(`YouTube publisher request failed: ${e.statusText} (${e.status})`);return e.text()}).then(t=>{g(e,t,"","")}).catch(e=>{throw new Error("YouTube fetch request failed: "+e)})})(e)}return t.json()}).then(e=>(i.publisherUrl=e.author_url,i.publisherName=e.author_name,fetch(i.publisherUrl))).then(e=>{if(!e.ok)throw new Error(`YouTube publisher request failed: ${e.statusText} (${e.status})`);return e.text()}).then(t=>{g(e,t,i.publisherName,i.publisherUrl)}).catch(e=>{throw new Error("YouTube fetch request failed: "+e)})},j=()=>{var e;h(location.pathname)?O():(e=location.pathname)&&e.includes("/channel/")?v((e=>{if(!e)return"";const t=i.c(e+"/","/channel/","/");if(!t)return"";const n=t.split("?");return n&&0!==n.length?n[0]:""})(location.pathname)):(e=>!(!e||!e.includes("/user/")))(location.pathname)?w():(e=>{const t=["/","/account","/account_advanced","/account_billing","/account_notifications","/account_playback","/account_privacy","/account_sharing","/channel","/feed","/gaming","/oops","/pair","/playlist","/premium","/reporthistory","/subscription_manager","/user","/watch"];if(!e)return!1;const n=(e=>{if(!e)return"";let t=e.substring(0,e.indexOf("/",1));return t&&t!==e||(t=e.substring(0,e.indexOf("?",1)),t&&t!==e||(t=e)),t})(e);for(const e of t)if(n===e)return!0;return!1})(location.pathname)?(()=>{const e=Object(r.b)();e&&e.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:"https://www.youtube.com",publisherKey:"youtube.com",publisherName:"youtube.com",favIconUrl:""}})})():w()},T=(e,t)=>{if("youtube"!==e)return;if(!t||!t.url)return;const n=new URL(t.url);y(n)};chrome.extension.inIncognitoContext||(Object(r.a)(e=>{e?(document.addEventListener("readystatechange",(function(){"complete"!==document.readyState||"visible"!==document.visibilityState||h(location.pathname)||setTimeout(()=>{o.a("youtube","https://www.youtube.com/api/stats/watchtime?*",T),j()},200)})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&(o.a("youtube","https://www.youtube.com/api/stats/watchtime?*",T),j())})),document.addEventListener("yt-page-data-updated",(function(){"visible"===document.visibilityState&&(o.a("youtube","https://www.youtube.com/api/stats/watchtime?*",T),j()),m(!0)}))):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: youtubeBase.ts"))},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a}));var r=n(0);let o=!1,i=!1;const u=(e,t,n)=>{if(!e||o)return;o=!0;const i=Object(r.b)();i&&(i.postMessage({type:"RegisterOnCompletedWebRequest",mediaType:e,data:{urlPatterns:[t]}}),i.onMessage.addListener(e=>{switch(e.type){case"OnCompletedWebRequest":n(e.mediaType,e.details)}}))},a=(e,t,n,o)=>{if(!e||i)return;i=!0;const u=Object(r.b)();u&&(u.postMessage({type:"RegisterOnSendHeadersWebRequest",mediaType:e,data:{urlPatterns:t,extra:n}}),u.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnSendHeadersWebRequest":o(e.mediaType,e.data.details)}})))}}});