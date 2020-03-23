!function(e,t){for(var r in t)e[r]=t[r]}(this,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("firebase-admin")},function(e,t){e.exports=require("firebase-functions")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("cloudinary")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("shortid")},function(e,t){e.exports=require("slugify")},function(e,t){e.exports=require("email-validator")},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"postCommentsCreate",(function(){return E})),r.d(n,"postCommentsDelete",(function(){return q})),r.d(n,"postCommentRepliesCreate",(function(){return T})),r.d(n,"postCommentRepliesDelete",(function(){return U})),r.d(n,"postMetaCreate",(function(){return L})),r.d(n,"postMetaDelete",(function(){return H})),r.d(n,"usersUpdate",(function(){return M}));var o={};r.r(o),r.d(o,"createQuestion",(function(){return Ie})),r.d(o,"createQuestionComment",(function(){return ke})),r.d(o,"createQuestionReply",(function(){return ge})),r.d(o,"createQuestionLike",(function(){return Ce})),r.d(o,"deleteQuestion",(function(){return Re})),r.d(o,"deleteQuestionComment",(function(){return Ee})),r.d(o,"deleteQuestionReply",(function(){return qe})),r.d(o,"deleteQuestionLike",(function(){return Te})),r.d(o,"updateQuestion",(function(){return Ue})),r.d(o,"updateQuestionComment",(function(){return Le})),r.d(o,"updateQuestionReply",(function(){return He})),r.d(o,"uploadUserProfileImage",(function(){return Me})),r.d(o,"updateUserInformation",(function(){return Se})),r.d(o,"subscribeNewsletter",(function(){return Ve})),r.d(o,"createFeedback",(function(){return _e}));var u={};r.r(u),r.d(u,"onAuthCreate",(function(){return Qe}));var a=r(3),c=r(2),s=r(0),i=r.n(s),p=r(1),d=r.n(p),l=r(4),f=r.n(l),m=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.docRef,n=t.key,e.next=3,c.firestore().runTransaction(function(){var e=d()(i.a.mark((function e(t){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(r);case 2:o=e.sent.data(),t.update(r,f()({},n,o[n]+1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=a.firestore.document("postComments/{commentId}").onCreate(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.data(),o=n.questionId,u=c.firestore().collection("posts").doc(o),e.next=5,m({docRef:u,key:"comments"});case 5:return e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(0),console.error("postComments create Error: ",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),v=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.docRef,n=t.key,e.next=3,c.firestore().runTransaction(function(){var e=d()(i.a.mark((function e(t){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(r);case 2:o=e.sent.data(),t.update(r,f()({},n,Math.max(0,o[n]-1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a.firestore.document("postComments/{commentId}").onDelete(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.data(),o=n.questionId,u=c.firestore().collection("posts").doc(o),e.next=5,v({docRef:u,key:"comments"});case 5:return e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(0),console.error("postComments delete Error: ",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),x=a.firestore.document("postCommentReplies/{replyId}").onCreate(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.data(),o=n.commentId,u=c.firestore().collection("postComments").doc(o),e.next=5,m({docRef:u,key:"comments"});case 5:return e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(0),console.error("postCommentReplies create Error: ",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),b=a.firestore.document("postCommentReplies/{replyId}").onDelete(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.data(),o=n.commentId,u=c.firestore().collection("postComments").doc(o),e.next=5,v({docRef:u,key:"comments"});case 5:return e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(0),console.error("postCommentReplies delete Error: ",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),y=a.firestore.document("postMeta/{metaId}").onCreate(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.data(),o=n.questionId,u=n.commentId,a=u?c.firestore().collection("postComments").doc(u):c.firestore().collection("posts").doc(o),e.next=5,m({docRef:a,key:"likes"});case 5:return e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(0),console.error("postMeta create Error: ",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),I=a.firestore.document("postMeta/{metaId}").onDelete(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.data(),o=n.questionId,u=n.commentId,a=u?c.firestore().collection("postComments").doc(u):c.firestore().collection("posts").doc(o),e.next=5,v({docRef:a,key:"likes"});case 5:return e.abrupt("return");case 8:return e.prev=8,e.t0=e.catch(0),console.error("postMeta delete Error: ",e.t0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),k=r(6),g=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.documents,n=t.username,o=t.photoURL,u=c.firestore(),a=u.batch(),r.forEach((function(e){var t=e.collectionId,r=e.documentId,c=u.collection(t).doc(r);a.update(c,{username:n,photoURL:o})})),e.next=6,a.commit();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.collectionId,n=t.uid,o=[],u=c.firestore().collection(r).where("uid","==",n),e.next=5,u.get();case 5:return e.sent.forEach((function(e){return o.push({collectionId:r,documentId:e.id})})),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=a.firestore.document("users/{userId}").onUpdate(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,a,c,s,p,l,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=["posts","postComments","postCommentReplies"],o=t.before.data(),u=o.photoURL,a=o.username,c=t.after.data(),s=c.photoURL,p=c.username,l=c.uid,u!==s||a!==p){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,Promise.all(n.map(function(){var e=d()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({collectionId:t,uid:l});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return f=e.sent,e.next=11,g({documents:Object(k.flatten)(f),username:p,photoURL:s});case 11:return e.sent,e.abrupt("return");case 15:return e.prev=15,e.t0=e.catch(0),console.error("users update Error: ",e.t0),e.abrupt("return");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}()),E=h,q=w,T=x,U=b,L=y,H=I,M=R,S=r(7),V=r.n(S),_=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.collectionId,n=t.documentId,o=c.firestore().collection(r).where("id","==",n),e.next=4,o.get();case 4:return u=e.sent,e.abrupt("return",!u.empty);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=r(8),Q=r.n(N),A=function(e){return Q()(e,{remove:/[*+~.()'"!:@]/g,lower:!0,strict:!0})},F=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,e.next=3,c.firestore().collection("users").doc(r).get();case 3:if((n=e.sent).exists){e.next=6;break}throw new Error("User document does not exist in the Users collection");case 6:return e.abrupt("return",n.data());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a,s,p,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.documentId,n=t.title,o=t.body,u=t.uid,a=t.username,s=t.photoURL,p=c.firestore().collection("posts").doc(r),d={title:n,titleSlug:A(n),body:o,uid:u,username:a,photoURL:s,id:p.id,likes:0,comments:0,createdAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,p.set(d);case 5:return e.abrupt("return",{questionId:d.id,titleSlug:d.titleSlug});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=d()(i.a.mark((function e(){var t,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=3,r=0;case 2:if(!(r<t)){e.next=12;break}return n=V.a.generate(),e.next=6,_({collectionId:"posts",documentId:n});case 6:if(e.sent){e.next=9;break}return e.abrupt("return",n);case 9:r++,e.next=2;break;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s,p,d,l,f,m,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,o=t.body,u=r.auth,e.prev=2,c=u.uid,e.next=6,P();case 6:if(s=e.sent,c&&s){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,F({uid:c});case 11:return p=e.sent,d=p.username,l=p.photoURL,e.next=16,j({documentId:s,title:n,body:o,uid:c,username:d,photoURL:l});case 16:return f=e.sent,m=f.questionId,h=f.titleSlug,console.log("questionId: ",m),e.abrupt("return",{questionId:m,titleSlug:h});case 23:throw e.prev=23,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 27:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,r){return e.apply(this,arguments)}}()),D=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,e.next=3,c.firestore().collection("users").doc(r).get();case 3:if((n=e.sent).exists){e.next=6;break}throw new Error("User document does not exist in the Users collection");case 6:return e.abrupt("return",n.data());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a,s,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.body,n=t.uid,o=t.username,u=t.photoURL,a=t.questionId,s=c.firestore().collection("postComments").doc(),p={body:r,uid:n,username:o,photoURL:u,id:s.id,questionId:a,likes:0,comments:0,createdAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,s.set(p);case 5:return e.abrupt("return",p.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s,p,d,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.body,o=t.questionId,u=r.auth,e.prev=2,c=u.uid,e.next=6,D({uid:c});case 6:return s=e.sent,p=s.username,d=s.photoURL,e.next=11,z({body:n,uid:c,questionId:o,username:p,photoURL:d});case 11:return l=e.sent,console.log("commentId: ",l),e.abrupt("return",{commentId:l});case 16:throw e.prev=16,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),G=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,e.next=3,c.firestore().collection("users").doc(r).get();case 3:if((n=e.sent).exists){e.next=6;break}throw new Error("User document does not exist in the Users collection");case 6:return e.abrupt("return",n.data());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a,s,p,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.body,n=t.uid,o=t.username,u=t.photoURL,a=t.questionId,s=t.commentId,p=c.firestore().collection("postCommentReplies").doc(),d={body:r,uid:n,username:o,photoURL:u,id:p.id,questionId:a,commentId:s,likes:0,comments:0,createdAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,p.set(d);case 5:return e.abrupt("return",d.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s,p,d,l,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.body,o=t.questionId,u=t.commentId,c=r.auth,e.prev=2,s=c.uid,e.next=6,G({uid:s});case 6:return p=e.sent,d=p.username,l=p.photoURL,e.next=11,Z({body:n,uid:s,questionId:o,commentId:u,username:d,photoURL:l});case 11:return f=e.sent,console.log("replyId: ",f),e.abrupt("return",{replyId:f});case 16:throw e.prev=16,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),K=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.questionId,o=t.commentId,u=c.firestore().collection("postMeta").where("uid","==",r).where("questionId","==",n),u=o?u.where("commentId","==",o):u.where("commentId","==",null),e.next=5,u.get();case 5:if(!e.sent.empty){e.next=8;break}return e.abrupt("return",!1);case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.questionId,o=t.commentId,u=c.firestore().collection("postMeta").doc(),a={uid:r,questionId:n,commentId:o||null,id:u.id,createdAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,u.set(a);case 5:return e.abrupt("return",a.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.questionId,o=t.commentId,u=r.auth,e.prev=2,c=u.uid,e.next=6,K({uid:c,questionId:n,commentId:o});case 6:if(!e.sent){e.next=9;break}throw new Error("User has already liked the targeted document");case 9:return e.next=11,W({uid:c,questionId:n,commentId:o});case 11:return s=e.sent,console.log("likeId: ",s),e.abrupt("return",{likeId:s});case 16:throw e.prev=16,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),Y=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.collectionId,n=t.documentId,e.next=3,c.firestore().collection(r).doc(n).delete();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.collectionId,o=t.documentId,u=c.firestore().collection(n).where("uid","==",r).where("id","==",o),e.next=4,u.get();case 4:return a=e.sent,e.abrupt("return",!a.empty);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=r.auth,e.prev=2,u=o.uid,e.next=6,$({uid:u,collectionId:"posts",documentId:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,Y({collectionId:"posts",documentId:n});case 11:return e.abrupt("return",{id:n});case 14:throw e.prev=14,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,r){return e.apply(this,arguments)}}()),te=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=r.auth,e.prev=2,u=o.uid,e.next=6,$({uid:u,collectionId:"postComments",documentId:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,Y({collectionId:"postComments",documentId:n});case 11:return e.abrupt("return",{id:n});case 14:throw e.prev=14,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,r){return e.apply(this,arguments)}}()),re=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=r.auth,e.prev=2,u=o.uid,e.next=6,$({uid:u,collectionId:"postCommentReplies",documentId:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,Y({collectionId:"postCommentReplies",documentId:n});case 11:return e.abrupt("return",{id:n});case 14:throw e.prev=14,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,r){return e.apply(this,arguments)}}()),ne=function(){var e=d()(i.a.mark((function e(t){var r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.id,o=c.firestore().collection("postMeta").where("uid","==",r).where("id","==",n),e.next=4,o.get();case 4:if(!e.sent.empty){e.next=7;break}return e.abrupt("return",!1);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=d()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.next=3,c.firestore().collection("postMeta").doc(r).delete();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=r.auth,e.prev=2,u=o.uid,e.next=6,ne({uid:u,id:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,oe({id:n});case 11:return e.abrupt("return",{id:n});case 14:throw e.prev=14,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,r){return e.apply(this,arguments)}}()),ae=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.title,o=t.body,u=c.firestore().collection("posts").doc(r),a={title:n,titleSlug:A(n),body:o,updatedAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,u.update(a);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=t.title,u=t.body,c=r.auth,e.prev=2,s=c.uid,e.next=6,$({uid:s,collectionId:"posts",documentId:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,ae({id:n,title:o,body:u});case 11:return p=e.sent,console.log("questionId: ",p),e.abrupt("return",{questionId:p});case 16:throw e.prev=16,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),se=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.body,o=c.firestore().collection("postComments").doc(r),u={body:n,updatedAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,o.update(u);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=t.body,u=r.auth,e.prev=2,c=u.uid,e.next=6,$({uid:c,collectionId:"postComments",documentId:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,se({id:n,body:o});case 11:return s=e.sent,console.log("commentId: ",s),e.abrupt("return",{commentId:s});case 16:throw e.prev=16,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),pe=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.body,o=c.firestore().collection("postCommentReplies").doc(r),u={body:n,updatedAt:c.firestore.FieldValue.serverTimestamp()},e.next=5,o.update(u);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,o=t.body,u=r.auth,e.prev=2,c=u.uid,e.next=6,$({uid:c,collectionId:"postCommentReplies",documentId:n});case 6:if(e.sent){e.next=9;break}throw new Error("The targeted document does not exist");case 9:return e.next=11,pe({id:n,body:o});case 11:return s=e.sent,console.log("replyId: ",s),e.abrupt("return",{replyId:s});case 16:throw e.prev=16,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),le=r(5);le.config({cloud_name:"raina-images",api_key:"941472723594989",api_secret:"wLZ54moPdmSEfmnrR7hfhhCyoBQ"});var fe=function(){var e=d()(i.a.mark((function e(t){var r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.image,n=t.uid,o={public_id:n,folder:"user_profile_photo",format:"jpg"},e.next=4,le.v2.uploader.upload(r,o);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=d()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.photoURL,e.next=3,c.firestore().collection("users").doc(r).update({photoURL:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.image,o=r.auth,e.prev=2,u=o.uid,console.log("uid: ",u),console.log("image: ",n),e.next=8,fe({image:n,uid:u});case 8:return c=e.sent,s=c.secure_url,e.next=12,me({uid:u,photoURL:s});case 12:return e.abrupt("return");case 15:throw e.prev=15,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,r){return e.apply(this,arguments)}}()),ve=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.firstName,o=t.lastName,u=t.username,a=t.bio,s=t.email,e.next=3,c.firestore().collection("users").doc(r).update({uid:r,firstName:n,lastName:o,username:u,bio:a,email:s});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,c,s,p,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.firstName,o=t.lastName,u=t.username,c=t.bio,s=t.email,p=r.auth,e.prev=2,d=p.uid,console.log("uid: ",d),e.next=7,ve({uid:d,firstName:n,lastName:o,username:u,bio:c,email:s});case 7:return e.abrupt("return");case 10:throw e.prev=10,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","The function must be called while authenticated.");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,r){return e.apply(this,arguments)}}()),xe=r(9),be=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.email,o=r.auth,e.prev=2,xe.validate(n)){e.next=5;break}throw new Error("Invalid email address.");case 5:return u=null==o?void 0:o.uid,e.next=8,c.firestore().collection("newsletter").doc().set({uid:u||null,email:n.trim(),createdAt:c.firestore.FieldValue.serverTimestamp()});case 8:return e.abrupt("return");case 11:throw e.prev=11,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","Invalid email address.");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,r){return e.apply(this,arguments)}}()),ye=a.https.onCall(function(){var e=d()(i.a.mark((function e(t,r){var n,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.message,o=t.value,u=r.auth,e.prev=2,s=u.uid,e.next=6,c.firestore().collection("feedback").doc().set({uid:s||null,message:n.trim()||null,value:o.trim()||null,createdAt:c.firestore.FieldValue.serverTimestamp()});case 6:return e.abrupt("return");case 9:throw e.prev=9,e.t0=e.catch(2),console.error("catch error: ",e.t0),new a.https.HttpsError("failed-precondition","Feedback was not captured. Something went wrong.");case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,r){return e.apply(this,arguments)}}()),Ie=O,ke=B,ge=J,Ce=X,Re=ee,Ee=te,qe=re,Te=ue,Ue=ce,Le=ie,He=de,Me=he,Se=we,Ve=be,_e=ye,Ne=function(){var e=d()(i.a.mark((function e(t){var r,n,o,u,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.uid,n=t.email,o=t.emailVerified,u=c.firestore().collection("users").doc(r),a={uid:r,email:n,emailVerified:o,firstName:"",lastName:"",displayName:"",photoURL:""},e.next=5,u.set(a);case 5:return e.abrupt("return",a.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=a.auth.user().onCreate(function(){var e=d()(i.a.mark((function e(t){var r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("user: ",t),r=t.uid,n=t.email,o=t.emailVerified,e.next=5,Ne({uid:r,email:n,emailVerified:o});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("catch error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());r.d(t,"https",(function(){return Ae})),r.d(t,"auth",(function(){return Fe})),r.d(t,"db",(function(){return je})),c.initializeApp();var Ae=o,Fe=u,je=n}]));