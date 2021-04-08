{
    // //JavaScript
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // //TypeScript
    // function add(num1:number, num2:number):number{
    //     return num1 + num2;
    // }

    // //JavaScript
    // function jsFetchNum(id){
    //     return new Promise((resolve,reject)=> {
    //         resolve(100);
    //     });
    // }
    // //TypeScript
    // function fetchNum(id :string):Promise<number>{
    //     return new Promise((resolve,reject)=> {
    //         resolve(100);
    //     });
    // }


    //JavaScript => TypeScript 
    // Optional Parameter 
    function printName(firstName: string, lastName? : string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'job');
    printName('Ellie'); //에러였지만 ?를 통해서 문제 없음
    printName('Anna',undefined); //문제없음


    //Default parameter
    function printMessage(message:string = 'default message') {
        console.log(message);

    }
    printMessage();

    //Rest Parameter 
    function addNumbers(...numbers:number[]) : number {
        return numbers.reduce((a,b)=> a+b);
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5));
    console.log(addNumbers(1,2));
       
}