"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),s=o,M=d["".concat(c,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(M,i(i({ref:t},u),{},{components:r})):n.createElement(M,i({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={slug:"mvvm",title:"\u6d45\u6790MVVM",authors:"DK",tags:["JavaScript"]},i=void 0,a={permalink:"/dk-blog/mvvm",editUrl:"https://github.com/dk-wuwei/dk-blog/tree/main/blog/2023-08-16-mvvm.md",source:"@site/blog/2023-08-16-mvvm.md",title:"\u6d45\u6790MVVM",description:"\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u4e9b\u6a21\u5f0f\uff0c\u76ee\u7684\uff1a\u804c\u8d23\u5212\u5206\u3001\u5206\u5c42\uff08\u5c06Model\u5c42\u3001View\u5c42\u8fdb\u884c\u5206\u7c7b\uff09\u501f\u9274\u540e\u7aef\u601d\u60f3\uff0c\u5bf9\u4e8e\u524d\u7aef\u800c\u5df2\uff0c\u5c31\u662f\u5982\u4f55\u5c06\u6570\u636e\u540c\u6b65\u5230\u9875\u9762\u4e0a",date:"2023-08-16T00:00:00.000Z",formattedDate:"2023\u5e748\u670816\u65e5",tags:[{label:"JavaScript",permalink:"/dk-blog/tags/java-script"}],readingTime:2.35,hasTruncateMarker:!1,authors:[{name:"DK",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/dk-wuwei",imageURL:"https://avatars.githubusercontent.com/u/58164432?v=4",key:"DK"}],frontMatter:{slug:"mvvm",title:"\u6d45\u6790MVVM",authors:"DK",tags:["JavaScript"]},prevItem:{title:"\u6d45\u6790MVVM",permalink:"/dk-blog/margin\u548cpadding\u7684\u533a\u522b\u4ee5\u53ca\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528"},nextItem:{title:"\u89e3\u51b3 Git \u4fee\u6539\u6587\u4ef6\u547d\u5927\u5c0f\u5199\u540e\u63d0\u4ea4\u65e0\u6548",permalink:"/dk-blog/resolve-git-file-life-capitalization"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u6709\u8fd9\u4e9b\u6a21\u5f0f\uff0c\u76ee\u7684\uff1a\u804c\u8d23\u5212\u5206\u3001\u5206\u5c42\uff08\u5c06Model\u5c42\u3001View\u5c42\u8fdb\u884c\u5206\u7c7b\uff09\u501f\u9274\u540e\u7aef\u601d\u60f3\uff0c\u5bf9\u4e8e\u524d\u7aef\u800c\u5df2\uff0c\u5c31\u662f\u5982\u4f55\u5c06\u6570\u636e\u540c\u6b65\u5230\u9875\u9762\u4e0a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u7684 MVC \u6307\u7684\u662f,\u7528\u6237\u64cd\u4f5c\u4f1a\u8bf7\u6c42\u670d\u52a1\u7aef\u8def\u7531\uff0c\u8def\u7531\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u6765\u5904\u7406\uff0c\u63a7\u5236\u5668\u4f1a\u83b7\u53d6\u6570\u636e\u3002\u5c06\u7ed3\u679c\u8fd4\u56de\u7ed9\u524d\u7aef,\u9875\u9762\u91cd\u65b0\u6e32\u67d3"),(0,o.kt)("li",{parentName:"ul"},"MVVM\uff1a\u4f20\u7edf\u7684\u524d\u7aef\u4f1a\u5c06\u6570\u636e\u624b\u52a8\u6e32\u67d3\u5230\u9875\u9762\u4e0a, MVVM \u6a21\u5f0f\u4e0d\u9700\u8981\u7528\u6237\u6536\u5230\u64cd\u4f5c dom \u5143\u7d20,\u5c06\u6570\u636e\u7ed1\u5b9a\u5230 viewModel \u5c42\u4e0a\uff0c\u4f1a\u81ea\u52a8\u5c06\u6570\u636e\u6e32\u67d3\u5230\u9875\u9762\u4e2d\uff0c\u89c6\u56fe\u53d8\u5316\u4f1a\u901a\u77e5 viewModel\u5c42 \u66f4\u65b0\u6570\u636e\u3002ViewModel \u5c31\u662f\u6211\u4eec MVVM \u6a21\u5f0f\u4e2d\u7684\u6865\u6881")),(0,o.kt)("p",null,"MVVM\u6a21\u5f0f \u6620\u5c04\u5173\u7cfb\u7684\u7b80\u5316\uff0c\u9690\u85cf\u4e86controller"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MVVM\u662fModel-View-ViewModel\u7f29\u5199\uff0c\u4e5f\u5c31\u662f\u628aMVC\u4e2d\u7684Controller\u6f14\u53d8\u6210ViewModel\u3002Model\u5c42\u4ee3\u8868\u6570\u636e\u6a21\u578b\uff0cView\u4ee3\u8868UI\u7ec4\u4ef6\uff0cViewModel\u662fView\u548cModel\u5c42\u7684\u6865\u6881\uff0c\u6570\u636e\u4f1a\u7ed1\u5b9a\u5230viewModel\u5c42\u5e76\u81ea\u52a8\u5c06\u6570\u636e\u6e32\u67d3\u5230\u9875\u9762\u4e2d\uff0c\u89c6\u56fe\u53d8\u5316\u7684\u65f6\u5019\u4f1a\u901a\u77e5viewModel\u5c42\u66f4\u65b0\u6570\u636e\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Model: \u4ee3\u8868\u6570\u636e\u6a21\u578b\uff0c\u4e5f\u53ef\u4ee5\u5728Model\u4e2d\u5b9a\u4e49\u6570\u636e\u4fee\u6539\u548c\u64cd\u4f5c\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u6211\u4eec\u53ef\u4ee5\u628aModel\u79f0\u4e3a\u6570\u636e\u5c42\uff0c\u56e0\u4e3a\u5b83\u4ec5\u4ec5\u5173\u6ce8\u6570\u636e\u672c\u8eab\uff0c\u4e0d\u5173\u5fc3\u4efb\u4f55\u884c\u4e3a"),(0,o.kt)("li",{parentName:"ul"},"View: \u7528\u6237\u64cd\u4f5c\u754c\u9762\u3002\u5f53ViewModel\u5bf9Model\u8fdb\u884c\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7\u6570\u636e\u7ed1\u5b9a\u66f4\u65b0\u5230View"),(0,o.kt)("li",{parentName:"ul"},"ViewModel\uff1a \u4e1a\u52a1\u903b\u8f91\u5c42\uff0cView\u9700\u8981\u4ec0\u4e48\u6570\u636e\uff0cViewModel\u8981\u63d0\u4f9b\u8fd9\u4e2a\u6570\u636e\uff1bView\u6709\u67d0\u4e9b\u64cd\u4f5c\uff0cViewModel\u5c31\u8981\u54cd\u5e94\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u6240\u4ee5\u53ef\u4ee5\u8bf4\u5b83\u662fModel for View.")),(0,o.kt)("p",null,"\u603b\u7ed3\uff1a MVVM\u6a21\u5f0f\u7b80\u5316\u4e86\u754c\u9762\u4e0e\u4e1a\u52a1\u7684\u4f9d\u8d56\uff0c\u89e3\u51b3\u4e86\u6570\u636e\u9891\u7e41\u66f4\u65b0\u3002MVVM \u5728\u4f7f\u7528\u5f53\u4e2d\uff0c\u5229\u7528\u53cc\u5411\u7ed1\u5b9a\u6280\u672f\uff0c\u4f7f\u5f97 Model \u53d8\u5316\u65f6\uff0cViewModel \u4f1a\u81ea\u52a8\u66f4\u65b0\uff0c\u800c ViewModel \u53d8\u5316\u65f6\uff0cView \u4e5f\u4f1a\u81ea\u52a8\u53d8\u5316\u3002"))}m.isMDXComponent=!0}}]);