/** @license MIT - ©2013 Ruben Verborgh */
(function(){function e(){var c,u,f={then:function(e,n){return c(e,n)}};return function(){var i=[];c=function(n,r){var t=e();return i.push({d:t,resolve:n,reject:r}),t.promise},u=function(e,v,s){for(var a=0,p=i.length;p>a;a++){var h=i[a],l=h.d,d=h[e];typeof d!==t?l[e](v):r(d,v,l)}c=n(f,v,s),u=o}}(),{resolve:function(e){u("resolve",e,!0)},reject:function(e){u("reject",e,!1)},promise:f}}function n(n,o,c){return function(u,f){var i,v=c?u:f;return typeof v!==t?n:(setTimeout(r.bind(n,v,o,i=e())),i.promise)}}function r(e,n,r){try{var o=e(n);o&&typeof o.then===t?o.then(r.resolve,r.reject):r.resolve(o)}catch(c){r.reject(c)}}var t="function",o=function(){};window.promiscuous={resolve:function(e){var r={};return r.then=n(r,e,!0),r},reject:function(e){var r={};return r.then=n(r,e,!1),r},deferred:e}})();
