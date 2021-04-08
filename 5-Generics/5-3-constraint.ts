interface Employee {
    pay():void;
}

class FullTimeEmployee implements Employee {
    pay(){
        console.log(`full time!!`);
    }
    workFullTime(){

    }
}

class PartTimeEmployee {
    pay() {
        console.log(`part time!!`);
    }
    workPartTime(){}

}   
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 bad! 
function paybad(employee: Employee):Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee> (employee :T) :T {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();


const ellieAfterpay = pay(ellie); //명확하게 해줘야함! 
const bobAfterpay = pay(bob);

const obj = {
    name: 'ellie',
    age : 20,
};
const obj2 = {
    animal: 'horse',
    age : 2,
};


console.log(getValue(obj,'name')); //ellie
console.log(getValue(obj,'age')); //20
console.log(getValue(obj2,'age')); //2
console.log(getValue(obj2,'animal')); //horse

function getValue<T,K extends keyof T> (obj:T,key:K) :T[K]{
    return obj[key];
}