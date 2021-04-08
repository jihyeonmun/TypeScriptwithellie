{
    const obj= {
        name : 'ellie',
    }
    obj.name; //ellie
    obj['name']; //ellie

    type Animal = {
        name : string;
        age : number;
        gender: 'male'|'female';
    };

    type Name = Animal['name']; //String
    const text: Name = 'hello'
    type Gender = Animal['gender'];
    type Keys = keyof Animal; //'name' | 'age' |'gender'
    const key: Keys = 'gender';

    type Person = {
        name:string;
        gender:Animal['gender'];
    };
    const person:Person = {
        name:'ellie',
        gender:'male',
    }
}