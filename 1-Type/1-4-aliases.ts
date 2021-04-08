{
    /**
    * Type Aliases
    */
    type Text = string;
    const name : string = 'ellie';
    const address : Text = 'korea'; //결국 문자열이기에 Text도 가능! 
    type Num = number;
    type Student = { //Student라는 타입을 설정 할 수 있음 
        name : string;
        age : number;

    };
    const student : Student = { //string number 형태로 이름 나이 정해야함
        name: 'dog',
        age : 12,
    };

    /** 
     * String Literal Types
     */
    type Name = 'name';
    let ellieName : Name;
    ellieName = 'name';
    type JSON = 'json';
    const json:JSON = 'json';


    type Boal = true;

}