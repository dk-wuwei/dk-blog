"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,s=m["".concat(p,".").concat(g)]||m[g]||u[g]||i;return r?n.createElement(s,l(l({ref:t},d),{},{components:r})):n.createElement(s,l({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={slug:"margin\u548cpadding\u7684\u533a\u522b\u4ee5\u53ca\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528",title:"\u6d45\u6790MVVM",authors:"DK",tags:["CSS"]},l=void 0,o={permalink:"/dk-blog/margin\u548cpadding\u7684\u533a\u522b\u4ee5\u53ca\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528",editUrl:"https://github.com/dk-wuwei/dk-blog/tree/main/blog/2023-11-25-css-margin-padding.md",source:"@site/blog/2023-11-25-css-margin-padding.md",title:"\u6d45\u6790MVVM",description:"\u9996\u5148\u9700\u8981\u660e\u767d\uff0c\u76d2\u5b50\u6a21\u578b\u4e3b\u8981\u5b9a\u4e49\u56db\u4e2a\u533a\u57df\uff1a\u5185\u5bb9\uff08content\uff09\u3001\u8fb9\u6846\u4e0e\u5185\u5bb9\u7684\u533a\u57df\uff0c\u79f0\u4e3a\u5185\u8fb9\u8ddd\uff08padding\uff09\u3001\u8fb9\u6846\uff08border\uff09\u3001\u8fb9\u6846\u4e0e\u5916\u90e8\u7684\u533a\u57df\uff0c\u79f0\u4e3a\u5916\u8fb9\u8ddd\uff08margin\uff09\u3002",date:"2023-11-25T00:00:00.000Z",formattedDate:"2023\u5e7411\u670825\u65e5",tags:[{label:"CSS",permalink:"/dk-blog/tags/css"}],readingTime:1.78,hasTruncateMarker:!0,authors:[{name:"DK",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/dk-wuwei",imageURL:"https://avatars.githubusercontent.com/u/58164432?v=4",key:"DK"}],frontMatter:{slug:"margin\u548cpadding\u7684\u533a\u522b\u4ee5\u53ca\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528",title:"\u6d45\u6790MVVM",authors:"DK",tags:["CSS"]},prevItem:{title:"\u914d\u7f6e prettier",permalink:"/dk-blog/prettier"},nextItem:{title:"\u6d45\u6790MVVM",permalink:"/dk-blog/mvvm"}},p={authorsImageUrls:[void 0]},c=[{value:"\u533a\u522b",id:"\u533a\u522b",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"margin\u7684\u4f7f\u7528\u573a\u666f\uff1a",id:"margin\u7684\u4f7f\u7528\u573a\u666f",level:3},{value:"padding\u7684\u4f7f\u7528\u573a\u666f\uff1a",id:"padding\u7684\u4f7f\u7528\u573a\u666f",level:3},{value:"\u8865\u5145",id:"\u8865\u5145",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u660e\u767d\uff0c\u76d2\u5b50\u6a21\u578b\u4e3b\u8981\u5b9a\u4e49\u56db\u4e2a\u533a\u57df\uff1a\u5185\u5bb9\uff08content\uff09\u3001\u8fb9\u6846\u4e0e\u5185\u5bb9\u7684\u533a\u57df\uff0c\u79f0\u4e3a\u5185\u8fb9\u8ddd\uff08padding\uff09\u3001\u8fb9\u6846\uff08border\uff09\u3001\u8fb9\u6846\u4e0e\u5916\u90e8\u7684\u533a\u57df\uff0c\u79f0\u4e3a\u5916\u8fb9\u8ddd\uff08margin\uff09\u3002"),(0,a.kt)("h2",{id:"\u533a\u522b"},"\u533a\u522b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"margin\uff1a\u8868\u793a\u8fb9\u6846\u4ee5\u5916\u7684\u533a\u57df"),(0,a.kt)("li",{parentName:"ol"},"padding\uff1a\u8868\u793a\u8fb9\u6846\u4e0e\u5185\u5bb9\u4e4b\u95f4\u7684\u533a\u57df")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"margin\u7684\u4f7f\u7528\u573a\u666f"},"margin\u7684\u4f7f\u7528\u573a\u666f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u5728border\uff08\u8fb9\u6846\uff09\u4ee5\u5916\u7684\u533a\u57df\u6dfb\u52a0\u7a7a\u767d\u95f4\u8ddd\u65f6\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7a7a\u767d\u533a\u57df\u4e0d\u9700\u8981\u4f7f\u7528\u80cc\u666f\u989c\u8272\u65f6")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0a\u4e0b\u4e24\u4e2a\u76f8\u8fde\u7684\u76d2\u5b50\u4e4b\u95f4\u4f7f\u7528\u7684\u5916\u8fb9\u8ddd\u9700\u8981\u76f8\u4e92\u62b5\u6d88\u3002 \u9700\u8981\u4f7f\u7528\u8d1f\u503c\u5bf9\u9875\u9762\u5e03\u5c40\u65f6\uff08\u6ce8\u610f\uff1amargin\u7684\u503c\u53ef\u4ee5\u53d6\u8d1f\u6570\uff0cpadding\u7684\u503c\u662f\u4e0d\u80fd\u4f7f\u8d1f\u6570\u7684\uff09")),(0,a.kt)("h3",{id:"padding\u7684\u4f7f\u7528\u573a\u666f"},"padding\u7684\u4f7f\u7528\u573a\u666f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u5728border\u5185\u4fa7\u6dfb\u52a0\u7a7a\u767d"),(0,a.kt)("li",{parentName:"ol"},"\u7a7a\u767d\u533a\u57df\u9700\u8981\u4f7f\u7528\u5230\u80cc\u666f\u989c\u8272")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0a\u4e0b\u76f8\u8fde\u7684\u4e24\u4e2a\u76d2\u5b50\u4e4b\u95f4\u7684\u7a7a\u767d\uff0c\u95f4\u8ddd\u662f\u4e24\u8005\u4e4b\u548c \u6700\u540e\uff0c\u9700\u6ce8\u610fmargin\u662f\u7528\u6765\u9694\u5f00\u5143\u7d20\u4e0e\u5143\u7d20\u7684\u95f4\u8ddd\uff1bpadding\u662f\u7528\u6765\u9694\u5f00\u5143\u7d20\u4e0e\u5185\u5bb9\u7684\u95f4\u8ddd\uff1bmargin\u7528\u4e8e\u5e03\u5c40\u5206\u5f00\u5143\u7d20\uff0c\u4f7f\u5143\u7d20\u4e0e\u5143\u7d20\u4e92\u4e0d\u5e72\u6270\uff1bpadding\u7528\u4e8e\u5143\u7d20\u4e0e\u5185\u5bb9\u4e4b\u95f4\u95f4\u9694\uff0c\u8ba9\u5185\u5bb9\u4e0e\u5143\u7d20\u4e4b\u95f4\u6709\u4e00\u6bb5\u8ddd\u79bb\u3002")),(0,a.kt)("h2",{id:"\u8865\u5145"},"\u8865\u5145"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u602a\u5f02\u76d2\u6a21\u578b\uff1acontent=content+padding+border")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6807\u51c6\u76d2\u6a21\u578b\uff1acontent=content")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5728\u602a\u5f02\u76d2\u6a21\u578b\u4e2d\uff0c\u4e00\u4e2a\u5757\u7684\u603b\u5bbd\u5ea6\u53d7margin\u5f71\u54cd\uff0c\u4f46\u4e0d\u53d7padding\u7684\u5f71\u54cd\u3002")))))}u.isMDXComponent=!0}}]);