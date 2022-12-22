'use strict';

//Array

//1. 생성
const arr1 = new Array();
const arr2 = [1, 2];

//2. 인덱스

const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

//3. array반복
console.clear();
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(function(fruit, index){
    console.log(fruit, index);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addtion, deletion, copy
//push: 값을 뒤에 집어넣는 것
fruits.push('딸기', '복숭아');
console.log(fruits);

//pop: 뒤에서 부터 값을 빼는 것
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: 앞에 값을 집어넣는 것.
fruits.unshift('딸기', '레몬');
console.log(fruits);

//shift: 앞에서 부터 값을 빼는 것.
fruits.shift();
fruits.shift();
console.log(fruits);

//쉬프트와 언쉬프트는 pop과 push보다 엄청 느림.
//pop과 push는 맨 뒤 데이터를 그냥 넣고 빼면 되지만
//shift, unshift는 앞에 값을 뒤로 밀고 앞에 값을 넣고 빼고 다시 뒤로 밀었던
//값들을 앞으로 당겨오기 때문에 느림.

//splice: 지정한 인덱스를 지우기
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1); //어느 인덱스부터 ~ 몇 개의 인덱스 까지 지울 것 인지.
console.log(fruits);
fruits.splice(1, 1, '풋사과', '수박'); //원하는 값을 지우고 나서 그 자리에 값을 넣는것도 가능
console.log(fruits);

//두가지 배열을 묶어서도 만들 수 있다.
const fruits2 = ['배', '참외'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));

console.log(fruits.includes('수박'));
console.log(fruits.includes('참외'));
console.log(fruits.indexOf('참외')); // true면 값의 인덱스 반환 false면 -1반환

//lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));











