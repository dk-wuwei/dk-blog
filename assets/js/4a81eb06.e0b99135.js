"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7976],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(g,o(o({ref:r},s),{},{components:t})):n.createElement(g,o({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4197:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const i={slug:"reduce",title:"JS Reduce",authors:"DK",tags:["JavaScript"]},o=void 0,c={permalink:"/dk-blog/reduce",editUrl:"https://github.com/dk-wuwei/dk-blog/tree/main/blog/2024-01-03-reduce.md",source:"@site/blog/2024-01-03-reduce.md",title:"JS Reduce",description:"\u6a21\u62df\u5b9e\u73b0",date:"2024-01-03T00:00:00.000Z",formattedDate:"2024\u5e741\u67083\u65e5",tags:[{label:"JavaScript",permalink:"/dk-blog/tags/java-script"}],readingTime:1.63,hasTruncateMarker:!1,authors:[{name:"DK",title:"\u524d\u7aef\u5de5\u7a0b\u5e08",url:"https://github.com/dk-wuwei",imageURL:"https://avatars.githubusercontent.com/u/58164432?v=4",key:"DK"}],frontMatter:{slug:"reduce",title:"JS Reduce",authors:"DK",tags:["JavaScript"]},prevItem:{title:"JS Paradigm",permalink:"/dk-blog/Paradigm"},nextItem:{title:"\u5224\u65ad\u662f\u5426\u662f Promise \u5bf9\u8c61",permalink:"/dk-blog/promise"}},l={authorsImageUrls:[void 0]},u=[{value:"\u6a21\u62df\u5b9e\u73b0",id:"\u6a21\u62df\u5b9e\u73b0",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}],s={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6a21\u62df\u5b9e\u73b0"},"\u6a21\u62df\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Array.prototype.selfReduce = function (callback, initValue) {\n  // \u83b7\u53d6\u6e90\u6570\u7ec4\n  const originArray = this;\n\n  // \u5224\u65ad\u6e90\u6570\u7ec4\u662f\u5426\u4e3a\u7a7a\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u629b\u51fa\u5f02\u5e38\n  if (!originArray.length) {\n    throw new Error('selfReduce of empty array with no initial value');\n  }\n\n  // \u58f0\u660e\u7d2f\u8ba1\u5668\n  let accumulator\n\n  // \u662f\u5426\u6709\u521d\u59cb\u503c\u60c5\u51b5\n  // \u8bbe\u7f6e\u7d2f\u8ba1\u5668\u521d\u59cb\u503c\uff08\u5982\u679c\u6709\u521d\u59cb\u503c\uff0c\u7b2c\u4e00\u6b21\u8c03\u7528`callback`\u65f6\uff0c`callback`\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4e3a\u521d\u59cb\u503c\uff0c\u5426\u5219\u4e3a\u6e90\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\uff09\n  if (initValue === undefined) {\n    accumulator = originArray[0];\n  } else {\n    accumulator = initValue;\n  }\n\n  // \u904d\u5386\u6570\u7ec4\uff0c\u6267\u884c`callback`\u51fd\u6570\n  for (let i = 0; i < originArray.length; i++) {\n    // \u5982\u679c\u6ca1\u6709\u521d\u59cb\u503c\u4e14\u662f\u6700\u540e\u4e00\u6b21\u5faa\u73af\uff0c\u4e0d\u518d\u6267\u884ccallback\n    if (initValue === undefined && (i + 1) === originArray.length) break;\n\n    // \u5faa\u73af\u6267\u884c `callback`\n    // \u8fd9\u91cc\u5224\u65ad\u4e00\u4e0b`currentValue`\n    // \u56e0\u4e3a\u6709\u521d\u59cb\u503c\u65f6\uff0c`currentValue`\u662f`originArray[i]`\n    // \u6ca1\u6709\u521d\u59cb\u503c\u65f6`currentValue`\u662f`originArray[i + 1]`\n    accumulator = callback(accumulator, initValue === undefined ? originArray[i + 1] : originArray[i], i, originArray);\n  }\n\n  // \u628a\u7d2f\u8ba1\u5668\u8fd4\u56de\u51fa\u53bb\n  return accumulator\n}\n")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u627e\u51fa\u6700\u5927\u503c\nconst r = [2, 4, 8, 1].selfReduce((a, b) => Math.max(a, b))\nconsole.log(r) // \u8f93\u51fa\uff1a 8\n\n// \u6570\u7ec4\u5143\u7d20\u6c42\u548c\nconst arr = [1, 2, 3, 4];\nconst initVal = 0;\nconst total = arr.reduce((acc, cur, index, array) => {\n  console.log(acc, cur);\n  // 0 1\n  // 1 2\n  // 3 3\n  // 6 4\n  return acc + cur;\n}, initVal);\nconsole.log(total); // \u8f93\u51fa\uff1a10\n")))}p.isMDXComponent=!0}}]);