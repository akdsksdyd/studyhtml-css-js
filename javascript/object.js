'use strict';

//Object 
//자바 스크립트의 데이터 유형 중 하나.
//관련 데이터 및 기능의 모음.
//JavaScript의 거의 모든 개체는 개체의 인스턴스.
//오브젝트는 키와 밸류의 집합체이다.
//object = {key : value};

//이런식으로 하면 받아야 할 데이터가 많아 지면 귀찮기 때문에 object로 한번에 받는다.
// const name = 'ellie';
// const age = 4;

// print(name, age);

// function print(name, age){
//     console.log(name);
//     console.log(age);
// }

const obj1 = {}; //object literal syntax
const obj2 = new Object();//object constructor syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

//JS의 오브젝트는 동적이기 때문에 위에 출력을 하고 밑에서 다른 값을 새로 지정을 해서
//호출해도 가능해진다. 
//이 방식은 나중에 코딩을 짤 때, 오류를 범할 수 있기 때문에 가능한 안쓰는 게 좋다.
ellie.hasJob = true;
console.log(ellie.hasJob);
//삭제도 가능
//사용 x
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. 계산된 properties
//키는 항상 string타입
console.log(ellie.name);
console.log(ellie['name']); //computed properties - 어느 값을 받을 지 모를 때 사용 (약간 scanner느낌)
ellie['hasJob'] = true;
console.log(ellie.hasJob);

//3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'stene', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = {name: ''};








