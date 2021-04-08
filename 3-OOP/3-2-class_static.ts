{
    
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT:number = 7 //number 생략 가능  
        coffeeBeans : number = 0;

        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;

        }

        static makeMachine(coffeeBeans : number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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

    const maker = new CoffeeMaker(32);
    console.log(maker);
    
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(3); //static 하면 클래스 레벨에서 활용 가능!! 
}