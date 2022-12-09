---
slug: quick-array-generation
title: JS快速生成数组的方法
authors: DK
tags: [CSS]
---

## 1、for循环

```javascript
const arr1 = new Array(100);

for(var i=0;i<arr1.length;i++){
  arr1[i] = i;
}

console.log(arr1);

// 生成0-99的数组
```

## 2、push方法

```javascript
const arr2 = new Array();

for(let i=0; i < 100; i++){
  arr2.push(i);
}

console.log(arr2);
```

## 3、while

<!--truncate-->


```javascript
const arr3 = new Array();
let i = 0;

while(i<100){
  arr3.push(i);
  i++;
}

console.log(arr3);
```

## 4、do while

```javascript
const arr4 = new Array();
let i = 0;

do{
  arr4.push(i);
  i++;
}
while(i<100)

console.log(arr4);
```

## 5、Object.keys

```javascript
const arr5 = Object.keys(Array.apply(null, {length:100})).map((item) => +item);

console.log(arr5);
```

## 6、Array.from

```javascript
const arr6 = Array.from({length:100}, (v,k) => k);

console.log(arr6);
```

## 7、Array.from

```javascript
const arr7 = Array.from(Array(100), (v,k) =>k);

console.log(arr7);
```

## 8、 new Array(100).keys()

```javascript
const arr8 = new Array(100).keys();

console.log(Array.from(arr8));
```

## 9、setInterval

```javascript
const arr9 = [];

let i = 0;

const timer = setInterval(function(){
  arr9[i] = i++;
  if(i>=100){
    clearInterval(timer);
    console.log(arr9);
  }
},1);
```

## 10、函数递归

```javascript
const arr = [];

let i = 0;

function MakeArray(num){
  if(i<num){
    arr[i] = i++;
    MakeArray(num);
  }
  return arr;
}

console.log(MakeArray(100));
```

## 11、字符串转数组

```javascript
const arr11 = new Array(100).toString().split(‘,‘).map(function(item,index){
  return index;
});

console.log(arr11);
```

## 12、\[…new Array(n).keys()\]

```javascript
const ListFn = len => [...new Array(len).keys()]

const list = ListFn(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```