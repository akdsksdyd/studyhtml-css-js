//자바스크립트는 매우 유연적이기 때문에 위험
//선언되지 않은 변수를 할당한다던지, 프로토타입을 변경한다던지
// use strict 는 ECMAScript에 포함되 있기 때문에 선언 해 두는 것이 좋다.
'use strict';
console.log('Hello World!');

let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);

const daysInWeek = 7;
const maxNumber = 5;

const count = 17; //integer
const size = 17.1; //decimal number
console.log('value:' ,count ,'type: ${',typeof count,'}');
console.log('value: ${', size, '}, type: ${', typeof size, '}');

//0
const infinity = 1 / 0; //무한
const negativeInfinity = -1 / 0; //-무한을 나누면 -무한 출력.
const nAn = 'not a number' / 2; //숫자가아닌 문자열을 나누게 되면 NaN출력
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//-2의 53승부터 2의 53승까지 표현이 가능한데
//bigInt 타입은 숫자 끝에 n이라는 문자 하나만 표시해주면 출력가능.
const bigInt = 1234567890123456798012345678901234657890n;
console.log('value: ${', bigInt,'}, type: ${', typeof bigInt,'}');
Number.MAX_SAFE_INTEGER;

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false : 0, null, undefined, NaN, ''
//true : 모든 값
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value:${test}, type: ${test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${x}`);

//심볼
//고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//다이나믹 타이핑
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`); //string 타입
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number로 변경됨

text = '7' + 5;
console.log(`value: ${text}, type: ${text}`); //숫자 5를 string으로 변환 후 더함.

//나눗셈은number만 가능하니까 js에서
//문자열을 그냥 숫자로 변환 후 나눗셈을 계산
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); 
//charAt은 문자열을 맞는데 누군가가 숫자로 변형해 버리면 에러가 나는것임.
//console.log(text.charAt(0)); //에러 발생.

//오브젝트
const ellie = {name : 'ellie', age: 20};
ellie.age = 21;

//Immutable data : premitive types (처음 선언한 타입), 변할 수 없는 오브젝트
//Mutable data types : 모든 오브젝트타입, JS에서는 대부분 변하는 오브젝트다.









