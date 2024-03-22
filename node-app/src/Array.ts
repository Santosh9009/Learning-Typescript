type user = {
  age: number;
}

function Userfilter(users: user[]) {

  let max = users[0].age;

  for (let i = 1; i < users.length; i++) { 
      if (users[i].age > max) {
          max = users[i].age;
      }
  }
  console.log("Maximum age:", max);
}

const users: user[] = [{ age: 45 }, { age: 34 }, { age: 5 }, { age: 57 }];

Userfilter(users);
