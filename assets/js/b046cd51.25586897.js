"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"gitlab-add-or-delete-branch",title:"gitlab \u5220\u9664\u3001\u65b0\u5efa\u8fdc\u7a0b\u5206\u652f\u95ee\u9898",authors:"DK",tags:["Git"]},i=void 0,l={permalink:"/dk-blog/gitlab-add-or-delete-branch",editUrl:"https://github.com/dk-wuwei/dk-blog/tree/main/blog/2024-02-01-gitlab-add-or-delete-branch.md",source:"@site/blog/2024-02-01-gitlab-add-or-delete-branch.md",title:"gitlab \u5220\u9664\u3001\u65b0\u5efa\u8fdc\u7a0b\u5206\u652f\u95ee\u9898",description:"\u5220\u9664\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4ecd\u663e\u793a\u5df2\u5220\u9664\u7684\u5206\u652f",date:"2024-02-01T00:00:00.000Z",formattedDate:"2024\u5e742\u67081\u65e5",tags:[{label:"Git",permalink:"/dk-blog/tags/git"}],readingTime:.85,hasTruncateMarker:!1,authors:[{name:"DK",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/dk-wuwei",imageURL:"https://avatars.githubusercontent.com/u/58164432?v=4",key:"DK"}],frontMatter:{slug:"gitlab-add-or-delete-branch",title:"gitlab \u5220\u9664\u3001\u65b0\u5efa\u8fdc\u7a0b\u5206\u652f\u95ee\u9898",authors:"DK",tags:["Git"]},nextItem:{title:"JS Paradigm",permalink:"/dk-blog/Paradigm"}},c={authorsImageUrls:[void 0]},u=[{value:"\u5220\u9664\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4ecd\u663e\u793a\u5df2\u5220\u9664\u7684\u5206\u652f",id:"\u5220\u9664\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4ecd\u663e\u793a\u5df2\u5220\u9664\u7684\u5206\u652f",level:2},{value:"\u65b0\u5efa\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4e0d\u663e\u793a\u5df2\u5efa\u7684\u5206\u652f",id:"\u65b0\u5efa\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4e0d\u663e\u793a\u5df2\u5efa\u7684\u5206\u652f",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5220\u9664\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4ecd\u663e\u793a\u5df2\u5220\u9664\u7684\u5206\u652f"},"\u5220\u9664\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4ecd\u663e\u793a\u5df2\u5220\u9664\u7684\u5206\u652f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 git branch -r \u547d\u4ee4\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\uff0c\u53d1\u73b0\u8fdc\u7a0b\u5206\u652f\u5df2\u7ecf\u5220\u9664\uff0c\u4f46\u672c\u5730\u8fd8\u663e\u793a"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 git remote show origin \u67e5\u770b remote \u5730\u5740\uff0c\u8fdc\u7a0b\u5206\u652f\uff0c\u53ca\u8fdc\u7a0b\u5206\u652f\u4e0e\u672c\u5730\u5206\u652f\u76f8\u5bf9\u5e94\u5173\u7cfb\u7b49\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 git remote prune origin \u540c\u6b65\u672c\u5730\u5206\u652f"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 git branch -r \u547d\u4ee4\u518d\u6b21\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u5c31\u4e0e gitlab \u4e00\u81f4\u4e86")),(0,a.kt)("h2",{id:"\u65b0\u5efa\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4e0d\u663e\u793a\u5df2\u5efa\u7684\u5206\u652f"},"\u65b0\u5efa\u5206\u652f\u540e\u672c\u5730\u67e5\u770b\u8fdc\u7a0b\u5206\u652f\u4e0d\u663e\u793a\u5df2\u5efa\u7684\u5206\u652f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 git remote update origin --prune \u547d\u4ee4"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 git branch -r \u5c31\u53ef\u4ee5\u67e5\u770b\u5230\u65b0\u5efa\u7684\u5206\u652f")))}m.isMDXComponent=!0}}]);