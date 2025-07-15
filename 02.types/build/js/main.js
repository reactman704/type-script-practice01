"use strict";
// Boolean
let boolen;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// string
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['john', 'kim'];
// 여러 타입을 가지는 배열(유니온타입)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러타입을 단언할 수 없다면 Any 사용
let someArray = ['John', 1, [], {}, false];
// 
// 읽기 전용 배열 생성(readonly,ReadonlyArray)
let stringArray = ['a', 'b', 'c'];
let numberArray = [1, 2];
// stringArray.push('C');
// numberArray[0] = 3;
// Tuple타입
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a',2,3];
// tuple1 = [1,2,3,];
let users;
users = [[1, 'john'], [2, 'doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);
// any타입
let any = 'abc';
any = 1;
any = [];
// unknown 타입
let unknown = false;
// let string1: boolean = unknown;
let string1 = unknown;
// Object
let obj = {};
let arr = [];
// let null: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: "title1",
    desc: "내용임"
};
// Union 타입
let union;
union = 'hi';
union = 1;
// union = [];
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// Null, Undefined
// let number1:number = undefined
// let string9: string = null;
// let object: {a:10, b: false} = undefined;
// let undefined1: undefined = null;
let void1 = undefined;
// Void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi);
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never8 = [];
never8.push(1);
