'use strict'

//1. String concatenation (연속적인 문자열)
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:

,,,,
1 + 2 = ${1 + 2}`);// ` (백틱 ?)을 이용하면 줄바꿈 하거나 중간에 문자를 추가해도 그대로 출력가능.
console.log("ellie`s \n\tbook"); //줄바꿈 \n, 띄우기 \t

//2. Numeric (숫자) 
console.log(1 + 1); //add 더하기
console.log(1 -1); // substrack 빼기
console.log(1 /1); //divide 나눗넴
console.log(1 * 1); //multiply 곱셈
console.log(5 % 2); //remainder 나머지
console.log(2 ** 3); //exponentiation 제곱

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operators (할당하는 오퍼레이터)
let x = 3;
const y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);//less than
console.log(10 <= 6);//less than or equal
console.log(10 > 6);//greater than
console.log(10 >= 6);//greater thar or equal

//6. Logical operators : ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// ||(or) - 앞에서부터 검사를 하는 도중 true가 나오면 뒤에는 실행 하지 않고, 멈춤.
//연산을 많이하는 함수를 호출하거나, 표현하는 것들을 제일 앞에 두게 되면x
//앞에 false일 떄, 마지막에 마지못해 출력하는게 제일 좋다.
//그래서 expression이나 함수를 호출하는 것들을 제일 뒤에 배치하는것이 효율적이다.
console.log(`or: ${value1 || value2 || check()}`);

// && - 앞에서부터 검사하는 도중 false가 나오면 뒤에는 실행 하지 않고, 멈춤.
//전부 다 true가 나와야 하기 때문.
//간편하게 null체크 같은 걸 할 때도 많이 쓰임.
//오브젝트가 null이면 false가 되기 때문에 뒤에가 실행이 안됨.
//nullalbeObject && nullableObject.something
//nullableObject가 null이 아닐 때 오브젝트썸띵 이라는 밸류를 받아오게 됨.
//if(nullableObject != null){
//    nullableObject.something;
//}
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        console.log('?');
    }
    return true;
} 

// !
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (자동형변환 o)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (자동형변환 x)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
//오브젝트로 담을 때는, 이름을 같게해도 사실 저장되는 건 다른 reference에 저장되기 때문에
//서로 다른 오브젝트를 가르키고있다.
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3); //위에 둘은 서로 다른 reference를 가르키기 때문에
//false 가 나오는 것이고, 1과 3은 같은 reference를 가르키기 때문에 true가 나온다.

//equality - puzzler
console.log(0 == false);//t
console.log(0 === false);//f
console.log('' == false);//t
console.log('' === false);//f
console.log(null == undefined);//t
console.log(null === undefined);//f

//8. Conditional operators : if
//if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}

//9. Ternary operator : ?
//condition ? value1 : value2;
//true면 앞의 구문, false면 뒤의 구문 (간단할때만)
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'Firefox';
switch(browser){
    case 'IE':
        console.log('go away!');
    break;
    
    case 'Chrome':
        case 'Firefox':
        console.log('love you!');
    break;
    
    //case 'Firefox':
    //    console.log('love you!');
    //break; 이렇게 똑같은 구문을 출력할 때는 case를 연달아 붙이는 것도 가능.

    default:
        console.log('same all!');
    break;
}

//11. Loops
//while loop, while문은 true일 때만 실행된다.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do-while loop, 먼저 블럭 안을 실행을 한 후, 조건이 맞는지 검사.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

//for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loop
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use continue)(짝수만)
for(let i = 0; i <= 10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i);
}
//Q2. iterate form 0 to 10 and print number until reaching 8 (use break)(8까지)
for(let i = 0; i <= 10; i++){
    console.log(i);
    if(i == 8)break;
}











