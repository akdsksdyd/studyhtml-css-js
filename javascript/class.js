'use strict';

//Object-우호적인 프로그래밍
//class: 틀
//object: class의 instance
//JavaScript classes
//-introduced in ES6
//-prototype을 기반으로 해서 그 위에 덮어 씌운 것

//1. Class declarations
class Person{
    //constructor (생성자)
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
//get을 쓰는 순간 this.age는 데이터에 있는 age값을 바로 설정 하는게 아니라 get메서드를
//한번 거쳐서 return을 하고 set 을 쓰는 순간 set을 계속 호출 해서 설정한다.
//그렇기 때문에 age라는 변수를 그대로 쓰는 게 아니라 다른 변수로 선언.
//그리고 조건을 걸어서 사용한다.
    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

// const user1 = new User('Steve', 'Job', -1);
// console.log(user1.age);

//3. Fields (public, private)

class Experiment{
    publicField = 2;
    #privateField = 0; //# - private - class내부에서만 값을 읽거나 수정 가능.
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //private기 때문에 undefined뜸.

//4. Static properties and methods
class Article{
    static publisher = 'Dream Coding';
    
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        //consolo.log(Object.publisher);
        //static은 오브젝트에 값이 생성되는 것이 아니라 class내부에 생성되기 떄문에
        //오브젝트로 호출을 하게되면 undefined.
        console.log(Article.publisher);
    }
}

//함수도 마찬가지.
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance
//a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color =color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }

}

class Rectangle extends Shape {}

class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('');
    }

    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOF
console.log(rectangle instanceof Rectangle);//t
console.log(triangle instanceof Rectangle);//f
console.log(triangle instanceof Triangle);//t
console.log(triangle instanceof Shape);//t
console.log(triangle instanceof Object);//t





