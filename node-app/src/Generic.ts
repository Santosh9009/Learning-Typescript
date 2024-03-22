function Anything<T>(arg: T){
  return arg;
}

let a = Anything<number>(3);
let b = Anything<String>("sjflasj");

console.log(a)
console.log(b)
