interface User {firstname:string,lastname: string, age: number,email?:string}

function islegal(user:User){
  return user.age>=18
}

if(islegal({firstname:'santosh',lastname: 'pati ',age: 34})){
  console.log('legal')
}else{
  console.log('not legal')
}

interface Person {
  name: string;
  age: number;
  greet(phrase : string):void
}

class Employee implements Person{
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
greet(phrase: string){
  console.log(phrase);
}
}

const x = new Employee( "John", 30,)
x.greet('sfjslkfjsdj')
console.log(x)
