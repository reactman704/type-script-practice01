
// Boolean
let boolen: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6;
let float: number = 1.2345;

// string
let string: string
let firstName: string = 'Doe';

// Array
// 한가지 타입만 가지는 배열

let names1: string[] = ['John','Kim']
let names2: Array<string> = ['john','kim']

// 여러 타입을 가지는 배열(유니온타입)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러타입을 단언할 수 없다면 Any 사용
let someArray: any[] = ['John',1,[],{},false];

// 

// 읽기 전용 배열 생성(readonly,ReadonlyArray)
let stringArray: readonly string[] = ['a','b','c'];
let numberArray: ReadonlyArray<number> = [1,2];

// stringArray.push('C');
// numberArray[0] = 3;

// Tuple타입
let tuple1: [string, number];
tuple1 = ['a',1];
// tuple1 = ['a',2,3];
// tuple1 = [1,2,3,];

let users: [number, string][]
users = [[1,'john'],[2,'doe']];

let tuple2: [string, number];
tuple2 = ['a',1];
tuple2.push(2);
console.log(tuple2);
// tuple2.push(false);

// any타입
let any: any = 'abc';
any = 1;
any = [];

// unknown 타입
let unknown:unknown = false;
// let string1: boolean = unknown;
let string1: boolean = unknown as boolean;

// Object
let obj: object = {};
let arr: object = [];
// let null: object = null;
let date: object = new Date();

const obj1: {id: number, title: string,desc:string} = {
  id: 1,
  title: "title1",
  desc: "내용임"
}

// Union 타입

let union: (string | number)
union = 'hi';
union = 1;
// union = [];

// Function
let func1: (arg1:number, arg2:number) => number;
func1 = function (x,y){
  return x * y
}

let func2: () => void;
func2 = function () {
  console.log('hi');
}

// Null, Undefined

// let number1:number = undefined
// let string9: string = null;
// let object: {a:10, b: false} = undefined;
// let undefined1: undefined = null;
let void1: void = undefined;


// Void
function greeting(): void {
  console.log('hi');
}

const hi: void = greeting()
console.log(hi)


// never
function throwError(): never{
  throw new Error('error');
}

function keepProcessing():never {
  while(true){
    console.log('hi');
  }
}

const never8: number[] = []
never8.push(1);
