

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;

// function add(a: any, b: any): any{
//   return a + b;
// }

// add('hello','world');
// add(1,2);


// function saySomething(word: string | string[]): string{
//   if(typeof word === "string"){
//     return word;
//   } else if(Array.isArray(word)){
//     return word.join(" ");
//   }
//   throw new Error('unalbe to say something');
// }


// 오버로딩

function saySomething(word: string): string;
function saySomething(word: string[]): string;
function saySomething(word: any): any{
  if(typeof word==="string"){
    return word;
  } else if(Array.isArray(word)){
    return word.join(' ');
  }
}

saySomething('hello') // 'hello'
