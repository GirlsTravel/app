!function(e,r){for(var t in r)e[t]=r[t]}(this,function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=5)}([function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("firebase-functions")},function(e,r){e.exports=require("firebase-admin")},function(e,r){e.exports=require("cloudinary")},function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"createQuestion",(function(){return b})),t.d(n,"uploadUserProfileImage",(function(){return y}));var u={};t.r(u),t.d(u,"onAuthCreate",(function(){return w}));var o=t(2),a=t(3),i=t(0),c=t.n(i),s=t(1),l=t.n(s),f=function(){var e=l()(c.a.mark((function e(r){var t,n,u,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.title,n=r.body,u=r.uid,o=a.firestore().collection("posts").doc(),i={title:t,body:n,uid:u,id:o.id,likes:0,dislikes:0,comments:0},e.next=5,o.set(i);case 5:return e.abrupt("return",i.id);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=o.https.onCall(function(){var e=l()(c.a.mark((function e(r,t){var n,u,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.title,u=r.body,a=t.auth,e.prev=2,i=a.uid,e.next=6,f({title:n,body:u,uid:i});case 6:return s=e.sent,console.log("questionId: ",s),e.abrupt("return",{questionId:s});case 11:throw e.prev=11,e.t0=e.catch(2),console.error("catch error: ",e.t0),new o.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(r,t){return e.apply(this,arguments)}}()),d=t(4);d.config({cloud_name:"raina-images",api_key:"941472723594989",api_secret:"wLZ54moPdmSEfmnrR7hfhhCyoBQ"});var h=function(){var e=l()(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.image,e.next=3,d.v2.uploader.upload(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=l()(c.a.mark((function e(r){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.uid,n=r.photoURL,e.next=3,a.firestore().collection("users").doc(t).update({photoURL:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=o.https.onCall(function(){var e=l()(c.a.mark((function e(r,t){var n,u,a,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.image,u=t.auth,e.prev=2,a=u.uid,console.log("uid: ",a),console.log("image: ",n),e.next=8,h({image:n});case 8:return i=e.sent,s=i.url,e.next=12,v({uid:a,photoURL:s});case 12:return e.abrupt("return");case 15:throw e.prev=15,e.t0=e.catch(2),console.error("catch error: ",e.t0),new o.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(r,t){return e.apply(this,arguments)}}()),b=p,y=m,x=function(){var e=l()(c.a.mark((function e(r){var t,n,u,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.uid,n=r.email,u=r.emailVerified,o=a.firestore().collection("users").doc(t),i={uid:t,email:n,emailVerified:u,firstName:"",lastName:"",displayName:"",photoURL:""},e.next=5,o.set(i);case 5:return e.abrupt("return",i.id);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=o.auth.user().onCreate(function(){var e=l()(c.a.mark((function e(r){var t,n,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("user: ",r),t=r.uid,n=r.email,u=r.emailVerified,e.next=5,x({uid:t,email:n,emailVerified:u});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("catch error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}());t.d(r,"https",(function(){return g})),t.d(r,"auth",(function(){return k})),a.initializeApp();var g=n,k=u}]));