
// function getArrayLength(arr: number[] | string[] | boolean[]): number{
//   return arr.length;
// }

// function getArrayLength<T>(arr: T[]): number{
//   return arr.length;
// }

// const array1 = [1,2,3];
// const array2 = ['a','b','c'];
// const array3 = [true, false, true];

// getArrayLength<number>(array1);
// getArrayLength<string>(array2);
// getArrayLength<boolean>(array3);


// interface Vehicle<T> {
//   name: string;
//   color: string;
//   option: T;
// }

// const car:Vehicle<{price: number}> = {
//   name: 'car',
//   color: 'red',
//   option: {
//     price: 1000
//   }
// }

// const bike:Vehicle<boolean> = {
//   name: 'bike',
//   color: 'green',
//   option: true
// }



const makeArr1 = <T, Y>(x:T,y:Y): [T,Y] => {
  return [x,y];
}

const array = makeArr1<number, number>(4,5);
const array2 = makeArr1<string, string>('a','c');


const makeArr2 = <T, Y = string>(x:T,y:Y): [T,Y] => {
  return [x,y];
}

const array3 = makeArr2<string>('a','c');

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}

makeFullName({firstName: 'John', lastName: 'joe', location: 'Seoul'});