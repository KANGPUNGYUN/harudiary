(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{9114:function(e,t,r){Promise.resolve().then(r.bind(r,8707))},8707:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=r(7437),i=r(2265),n=r(2749),a=r(1396),l=r.n(a),c=r(9222),o=r(4033);function d(){let[e,t]=(0,i.useState)(null),[r,a]=(0,i.useState)([]),{data:d}=(0,n.useSession)(),u=(0,o.useParams)();(0,i.useEffect)(()=>{let e=async()=>{let e=await c.Z.get("".concat("http://localhost:3000","/api/user/").concat(u.id,"/getUserData"),{headers:{authorization:"".concat(d)}}),t=await e.data;return t},r=async()=>{let e=await c.Z.get("".concat("http://localhost:3000","/api/user/").concat(u.id),{headers:{authorization:"".concat(d)}}),t=await e.data;return t};e().then(e=>t(e)),r().then(e=>a(e))},[d,u.id]);let h={1:"JAN",2:"FEB",3:"MAR",4:"APR",5:"MAY",6:"JUN",7:"JUL",8:"AUG",9:"SEP",10:"OCT",11:"NOV",12:"DEC"};return 0===Number(u.id)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"p-diary-list-title",children:"나의 하루"}),(0,s.jsx)("div",{className:"p-diary-list-unuser__outer",children:(0,s.jsxs)("div",{className:"p-diary-list-unuser",children:[(0,s.jsx)("p",{children:"로그인이 필요한 페이지입니다. 로그인 또는 회원가입을 해주세요."}),(0,s.jsx)(l(),{href:"/sign_in",className:"login-button confirm",children:"로그인 하러가기"})]})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h2",{className:"p-diary-list-title",children:[(0,s.jsx)("span",{className:"p-diary-list-title-user-nickname",children:null==e?void 0:e.name}),"의 하루"]}),0===r.length?(null==e?void 0:e.id)===(null==d?void 0:d.user.id)||(null==e?void 0:e.auth)===(null==d?void 0:d.user.provider)&&(null==e?void 0:e.email)===(null==d?void 0:d.user.email)?(0,s.jsx)("div",{className:"p-diary-list-unuser__outer",children:(0,s.jsxs)("div",{className:"p-diary-list-unuser",children:[(0,s.jsx)("p",{children:"아직 작성된 일기가 없습니다. 당신의 하루를 작성해 보세요."}),(0,s.jsx)(l(),{href:"/user/write",className:"login-button confirm",children:"나의 하루 작성하기"})]})}):(0,s.jsx)("div",{className:"p-diary-list-unuser__outer",children:(0,s.jsxs)("div",{className:"p-diary-list-unuser",children:[(0,s.jsx)("p",{children:"아직 작성된 일기가 없습니다."}),(0,s.jsx)(l(),{href:"/user",className:"login-button confirm",children:"모두의 하루로 이동하기"})]})}):(0,s.jsx)("ol",{className:"p-diary-list",children:r.map(e=>(0,s.jsx)("li",{className:"p-diary-item",children:(0,s.jsxs)(l(),{href:"/user/".concat(u.id,"/")+e.id,children:[(0,s.jsx)("h3",{children:10>Number(new Date(e.createdAt).toLocaleString("ko-KR").split(".")[2])?"0".concat(new Date(e.createdAt).toLocaleString("ko-KR").split(". ")[2]):new Date(e.createdAt).toLocaleString("ko-KR").split(".")[2]}),(0,s.jsx)("h4",{children:h[Number(new Date(e.createdAt).toLocaleString("ko-KR").split(".")[1])]}),(0,s.jsx)("h4",{children:new Date(e.createdAt).toLocaleString("kr-KR").split(".")[0]}),(0,s.jsx)("span",{className:"p-diary-item-fold"})]})},e.id))})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(2265),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var s,n={},o=null,d=null;for(s in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!c.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:o,ref:d,props:n,_owner:l.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(6685)}},function(e){e.O(0,[685,222,232,971,596,744],function(){return e(e.s=9114)}),_N_E=e.O()}]);