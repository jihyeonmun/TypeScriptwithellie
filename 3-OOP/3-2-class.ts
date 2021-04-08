{
    
    type CoffeeCup = {
        shots:number;
        hasMilk:boolean;
    };

    class CoffeeMaker {
        BEANS_GRAM_PER_SHOT:number = 7 //number 생략 가능  
        coffeeBeans : number = 0;

        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;

        }

        makeCoffee(shots: number):CoffeeCup{
            if(this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
    
            }
            this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
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
}