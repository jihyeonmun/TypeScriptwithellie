{
    
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    };
    //public -> 일반적으로 public 
    //private
    //protected

    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT:number = 7 //number 생략 가능  
        private coffeeBeans : number = 0;

        private constructor(coffeeBeans:number){ //makeMachine 쓰도록 유도
            this.coffeeBeans = coffeeBeans;

        }

        static makeMachine(coffeeBeans : number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans : number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number):CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
    
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return{
                shots : shots, 
                hasMilk : false,
            };
        }
   
    }
    // CoffeeMaker.BEAN_GRAM_PER_SHOT; //비공개
    //const maker = new CoffeeMaker(32);
    const maker2 = CoffeeMaker.makeMachine(3); //이렇게 유도
    maker2.fillCoffeeBeans(3);


    class User {
        get fullName() : string {
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age() : number {
            return this.internalAge;
        }
        set age(num : number ){
            if(num < 0){
                
            }
            this.internalAge = num;
        }
        constructor(private firstName : string, private lastName : string) {
        }
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    user.age = 6;
    console.log(user.fullName);
}
