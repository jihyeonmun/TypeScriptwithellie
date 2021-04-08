{
    //JavaScript
    // old : var //hoisting 여러 문제 있음
    //var age = 5;
    //age = 1;
    
    // let es6 
    let name = 'hello';
    name = 'hi';

    // const
    //const age = 5;
    //age = 5; //에러


    /**
     * JavaScript
     * Primitive : nubmer, string, boolean, bigint, symbol, null, undefined
     * Object : function, array.....
     */

     // number
     const num: number = 0.1;

     // string
     const str:string = 'hello';

     //boolean 
     const bool:boolean = true;

     //undefined -> 값이 결정되지 않은거
    //let name: undefined; //??이렇게 안쓴다.
    let age: number | undefined;
    age = undefined;
    age = 1; //두가지 경우가 다되는 것이다.

    //활용
    function find(): number | undefined {
        return undefined;
    }

     //null -> 비어있는 거
    let person: null; //이러헥 안쓴다
    person = null; 
    //person = 1; //에러
    let person2 : string | null;

    //unknown -> 쓰지 않는 것이 좋다. 타입 없는 자바 스크립트 연동할때 씀
    let notSure : unknown = 0;
    notSure = 'he';
    notSure = true;

    //any -> 절대 쓰면 안됨. 거만한 놈.
    let anything: any = 0;
    anything = 'hello';

    //void -> 매번 먹어본 그맛 그자체 (void 없어도 됨)
    function print() : void {
        console.log('hello');
        return;
    }

    let unusable : void = undefined; //변수는 안쓴다!! 

    // never //함수 실행하면 return 없다. 
    // error를 날리거나 / while로 계속 실행하게 해야함.
    function throwError(message: string ):never{
        //message -> server(log)
        throw new Error(message);

        while (true) {

        }
        //return; -> 에러
    } 


    //object //비추 -> 모호해서 안하는 게 좋다! 
    let obj: object;
    function acceptSomeObject(obj:object) {}
    acceptSomeObject({name : 'ellie'});
    acceptSomeObject({animal : 'dog'});
    
}