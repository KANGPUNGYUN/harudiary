(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{6021:function(e,a,s){Promise.resolve().then(s.bind(s,5597))},5098:function(e,a,s){"use strict";s.d(a,{Z:function(){return l}});var t=s(7437),r=s(2759),c=s(504),i=s(4033);function l(){let e=(0,i.useRouter)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"modal__outer",children:(0,t.jsxs)("div",{className:"modal",children:[(0,t.jsx)("button",{className:"modal-escape",onClick:e.back,children:(0,t.jsx)(c.G,{icon:r.g82})}),(0,t.jsx)("h1",{className:"modal-title",children:"정상적으로 일기가 작성되었습니다."}),(0,t.jsx)("div",{className:"modal-button__outer",children:(0,t.jsx)("button",{className:"modal-button confirm",onClick:e.back,children:"확인"})})]})})})}},5597:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return m}});var t=s(7437),r=s(2749),c=s(4033),i=s(2265),l=s(1865),n=s(2759),o=s(504),d=s(5098),u=s(9222);function m(){var e,a,s;let m=(0,c.useRouter)(),{data:h}=(0,r.useSession)(),{register:p,handleSubmit:x,setValue:f,setError:j,watch:b,formState:{errors:N}}=(0,l.cI)({defaultValues:{isPublic:!1,user:{}}}),[y,v]=(0,i.useState)(0),k=b("isPublic"),g=new Date().toLocaleDateString("ko-KR"),_=g.split(". ")[0],w=g.split(". ")[1],C=g.split(".")[2];async function D(e){try{let a=await u.Z.post("".concat("http://localhost:3000","/api/signin/userCheck"),{email:e.user.email,auth:e.user.provider}),s=a.data;if(null===s)try{let a=await u.Z.post("".concat("http://localhost:3000","/api/signup/signupwithAuth"),{name:e.user.name,email:e.user.email,auth:e.user.provider,password:""});s=a.data.id}catch(e){console.error(e)}try{let a=await u.Z.get("".concat("http://localhost:3000","/api/user/").concat(s,"/checkDateValidate")),t=await a.data;if(new Date(null==t?void 0:t.createdAt).toLocaleString("ko-KR").slice(0,12)===new Date().toLocaleString("ko-KR").slice(0,12)){j("user",{message:"오늘 작성한 일기가 존재합니다. 하루에 하나의 일기만 작성이 가능하니 참고해주세요."});return}await u.Z.post("".concat("http://localhost:3000","/api/user/createDiary"),{title:e.title,content:e.content,isPublic:e.isPublic,authorId:s}),m.push("/user/write/?modal=true")}catch(e){console.error(e)}}catch(e){console.error(e)}}(0,i.useEffect)(()=>{(null==h?void 0:h.user)&&f("user",null==h?void 0:h.user)},[]);let P=(0,c.useSearchParams)(),S=null==P?void 0:P.get("modal");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),(0,t.jsxs)("form",{className:"p-diary-form",children:[S&&(0,t.jsx)(d.Z,{}),(0,t.jsxs)("div",{className:"p-diary-paper",children:[(0,t.jsx)("p",{className:"p-diary-date",children:"".concat(_,"년 ").concat(w,"월 ").concat(C,"일")}),(0,t.jsxs)("label",{className:"p-diary-form-title-label__outer",children:[(0,t.jsx)("input",{type:"text",className:N.title?"p-diary-form-title errored":"p-diary-form-title",...p("title",{required:"제목을 입력해주세요."}),placeholder:"오늘의 제목"}),(0,t.jsx)("span",{className:"underline"}),(0,t.jsx)("span",{className:"form-control-blind",children:"일기 제목 입력하기"})]}),(0,t.jsx)("div",{className:"p-signup-form-error-message",children:null===(e=N.title)||void 0===e?void 0:e.message}),(0,t.jsxs)("label",{children:[(0,t.jsx)("textarea",{className:N.content?"p-diary-form-content errored":"p-diary-form-content",...p("content",{required:"내용을 입력해주세요."}),placeholder:"당신의 하루를 작성해주세요.",onChange:e=>{v(e.target.value.length)},maxLength:250,wrap:"hard"}),(0,t.jsx)("span",{className:"form-control-blind",children:"일기 내용 입력하기"})]}),(0,t.jsxs)("div",{className:"p-diary-form-content-text-counter",children:[(0,t.jsx)("div",{className:"p-signup-form-error-message",children:null===(a=N.content)||void 0===a?void 0:a.message}),(0,t.jsxs)("p",{className:"p-diary-form-content-text-limit",children:[(0,t.jsx)("span",{children:y}),(0,t.jsx)("span",{children:"/250자"})]})]}),(0,t.jsxs)("div",{className:"p-diary-form-checkbox-label__outer",children:[(0,t.jsxs)("label",{className:"p-diary-form-checkbox-label",children:[(0,t.jsxs)("div",{className:k?"p-diary-form-checkbox-input__outer active":"p-diary-form-checkbox-input__outer",children:[(0,t.jsx)("div",{className:"p-diary-form-checkbox",children:(0,t.jsx)("span",{className:"p-diary-form-check"})}),(0,t.jsx)("input",{className:"p-diary-form-checkbox-input",type:"checkbox",checked:k,...p("isPublic")})]}),(0,t.jsx)("span",{className:"p-diary-form-checkbox-text__outer",children:(0,t.jsx)("span",{className:"p-diary-form-checkbox-text",children:"공개 여부"})})]}),(0,t.jsx)("span",{"data-tooltip":"체크박스를 check하면 일기 내용이 이용자 모두에게 공개되며, uncheck하면 비공개됩니다.",children:(0,t.jsx)(o.G,{icon:n.FDd})})]})]}),(0,t.jsx)("div",{className:"p-diary-form-error-message",children:null===(s=N.user)||void 0===s?void 0:s.message}),(0,t.jsx)("div",{className:"p-diary-form-utility",children:(0,t.jsx)("button",{onClick:x(e=>{(null==h?void 0:h.user)?D(e):j("user",{message:"로그인 정보가 없습니다. 먼저 로그인 하세요."})}),className:"p-diary-form-submit-button",children:"일기 올리기"})})]})]})}}},function(e){e.O(0,[676,35,222,232,865,971,596,744],function(){return e(e.s=6021)}),_N_E=e.O()}]);