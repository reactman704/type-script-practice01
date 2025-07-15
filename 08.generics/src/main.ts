

// // Partial
// interface Address {
//   email: string;
//   address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: 'john@abc.com' };
// const all: Address = { email: 'john@abc.com', address: 'john' }


// // Pick

// // interface Todo {
// //   title: string,
// //   desc: string,
// //   completed: boolean;
// // }

// // type TodoPreview = Pick<Todo, "title" | "completed">

// // const todo: TodoPreview = {
// //   title: "clean Room",
// //   completed: false
// // }


// // Omit 생략하다는 뜻

// interface Todo {
//   title: string;
//   desc: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "desc">

// const todo: TodoPreview = {
//   title: 'clean room',
//   completed: false,
//   createdAt: 123455
// }

// // Required

// // type User = {
// //   firstName: string,
// //   lastName?: string
// // }

// // let firstUser: User = {
// //   firstName: "John"
// // }

// // let secondUser: Required<User> = {
// //   firstName: 'John'
// // }


// // Record

// interface CatInfo {
//   age: number;
//   breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred"

// const cats: Record<CatName, CatInfo> = {
//   miffy: {age: 10, breed: 'persian'},
//   boris: {age: 5, breed: 'maine coon'},
//   mordred: {age: 16, breed: 'british shorthair'},
// }

// // ReturnType

// type T0 = ReturnType<()=>string>
// type T1 = ReturnType<(s: string) => void>

// function fn(str: string){
//   return str;
// }

// const a: ReturnType<typeof fn> = 'Hello';
// const b: ReturnType<typeof fn> = true;
