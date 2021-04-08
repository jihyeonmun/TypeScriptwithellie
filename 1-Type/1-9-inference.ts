{
    /**
     * Type Inteference
     */

     let text = 'hello';
     text = '1';

     function print(message ='hello'){ //할당하지 않으면 any -> 어떤 타입인지 명시!
         console.log(message);
     }
     print ('hello');
     //print(1); //에러

     function add(x:number, y : number) : number { //생략하지 않고 명시하는 게 중요!! 
         return x + y;
     }

     const result = add(1,2);
}
