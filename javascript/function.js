//Function
//프로그램의 기본 구성 요소
//subprogram이라 불리기도 하고,  여러 번 사용할 수 있습니다.
//작업을 수행하거나 값을 계산합니다.

//1. Function을 정의하는 방법
// function functionName(param1, param2...){ body ... return;}
//하나의 function === 한가지의 일처리만 할 수 있게 만들어야 한다.
//변수의 이름은 명사형태로 많이 선언하지만 함수의 이름은 동사형태로 짓는게 국룰.
//함수의 이름을 지정하기 어려울 때는, 하나의 함수에 너무 많은 기능을 넣고 있는게 아닌지 생각.
//JS에서는 function이 object이다.
//때문에 JS에서는 함수(function)을 변수, 파라미터에 넣을 수 있고, return을 할 수도 있다.
function printHello(){
    console.log('Hello');
}
printHello();

//JS에서는 타입이 없기 때문에, 함수 자체의 인터페이스만 봤을 때, 어떤 타입을 전달하는지
//알 수 없다. JS내에서는 자동으로 형변환되서 출력이 되지만, 다른 타입을 중요시하는 언어
//에서는 이 JS코드가 좀 난해할 수 있다.
function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//2. Parameters
//primitive 타입은 메모리에 밸류가 그대로 저장되어 있기 때문에 밸류가 전달
//object 타입은 메모리에 reference가 저장되기 때문에 reference가 전달

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (ES6에 추가)
function showMessage(message, from = 'unknown'){//ES6부터는 변수 안에 default값을 넣어서 사용 가능.
    //if(from === undefined){
    //    from = 'unknown';
    //원래는 이렇게 undefined일 때, unknown을 지정해 줬는데
    //}
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //from이 정의되지 않았기 때문에 from 자리에 undefined가 나옴.

//4. Rest parameters (ES6)
function printAll(...args){ //배열 형태로 전달.
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
//밖에서는 안이 보이지 않지만, 안에서는 밖이 보인다.
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);
console.log(result);

//7. Early retutn, early exit
//user.point > 10 이상일 때의 로직을 짤 때, 굉장히 길어지면 가독성이 떨어지므로,
// 그 반대의 구문을 쓰고 빠르게 return을 사용해서 빠져나가는게 훨씬 좋다.
//조건이 맞을 때만 로직을 짤 수 있도록.
//bad
function upgraderUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgraderUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}

//1. Function expression
//함수 선언은 정의보다 빨리 호출될 수 있습니다.
//함수 표현식은 실행이 도달할 때 생성됩니다.

const print = function(){//anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3)); 

//2. 함수식을 이용한 Callback함수
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function () { //함수 이름이 없는 anonymous function
    console.log('yes!');
}

//함수 이름이 있는 named function
//디버깅을 할 때, 디버깅의 stack trace에 함수 이름이 나오게 하기 위해 사용.
//또는, 자신의 함수 안에 다시 호출 하기 위해 사용. 디컬젼 ? -- 이러면 스택 꽉차서 에러남.
const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//항상 anonymous function
const simplePrint = function() {
    console.log('simplePrint!');
} 
//원래는 이렇게 함수 정의를 해줘야 하지만
//Arrow function은 훨씬 간편하게 만들 수 있다.
const simplePrint2 = () => console.log('simplePrint!');

const add = () => a+b;
const add2 = function (a, b) {
     
    return a+b;
} 

const simpleMultiply = (a, b) => {
    //do something more
    return a+b;
}

//IIFE: Immediately Invoke Function Expression
(function hello() {
    console.log('IIFE');
})();

 
function calculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;

        case 'sunbstract':
            return a-b;
            
        case 'divide':
            return a/b;

        case 'multifly':
            return a*b;

        case 'remainder':
            return a%b;

        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 3));



