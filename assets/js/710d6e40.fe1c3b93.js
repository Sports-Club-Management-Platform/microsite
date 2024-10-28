"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[900],{8676:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>_,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=i(4848),t=i(8453);const r={sidebar_position:3},s=void 0,c={id:"Authentication/Configuration",title:"Configuration",description:"Environment Variables",source:"@site/docs/Authentication/Configuration.md",sourceDirName:"Authentication",slug:"/Authentication/Configuration",permalink:"/microsite/docs/Authentication/Configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Backend",permalink:"/microsite/docs/Authentication/Backend"},next:{title:"Frontend",permalink:"/microsite/docs/Tickets/Frontend"}},a={},u=[{value:"Environment Variables",id:"environment-variables",level:3},{value:"User Microservice",id:"user-microservice",level:4},{value:"Frontend",id:"frontend",level:4}];function d(e){const n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,o.jsx)(n.p,{children:"Ensure the following environment variables are set in a .env file:"}),"\n",(0,o.jsx)(n.h4,{id:"user-microservice",children:"User Microservice"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"MYSQL_ROOT_PASSWORD=your_mysql_root_password\nMYSQL_DATABASE=your_mysql_database\nMYSQL_USER=your_mysql_user\nMYSQL_PASSWORD=your_mysql_password\n\nAWS_REGION=your_aws_region\nUSER_POOL_ID=your_user_pool_id\nCOGNITO_USER_CLIENT_ID=your_cognito_user_client_id\nCOGNITO_USER_CLIENT_SECRET=your_cognito_user_client_secret\nCOGNITO_TOKEN_ENDPOINT=your_cognito_token_endpoint\nREDIRECT_URI=your_redirect_uri\n"})}),"\n",(0,o.jsx)(n.h4,{id:"frontend",children:"Frontend"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-plaintext",children:"VITE_LOGIN_SIGN_UP=https://your_cognito_hostedui_domain.auth.your_aws_region.amazoncognito.com/login?client_id=your_cognito_user_client_id&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone&redirect_uri=your_redirect_uri\n"})})]})}function _(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var o=i(6540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);