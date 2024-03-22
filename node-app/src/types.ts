
function print(any : string | number ){
  console.log(any)
}
print('sdfj');

type employee = {
  name: string,
  Joining_Date: Date
}

type Manager ={
  name: string,
  salary: number
} 

type Supermanager = Manager & employee;

function Smanager(ob : Supermanager){
  console.log(ob);
}

Smanager({name:'santosh',Joining_Date:new Date(),salary: 4555})