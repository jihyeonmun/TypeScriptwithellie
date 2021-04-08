type PositionType = {
    x:number;
    y:number;
}

interface PositionInterface {
    x:number;
    y:number;
}

interface PositionInterface {
    z:number;
}

// Ojbect!

const obj1 : PositionType = {
    x:1,
    y:1,
};

const obj2 : PositionInterface = {
    x:1,
    y:1,
    z:1, // 추가하는 순간 합집합으로 해야한다는 단점을 지님! 
};

//class 
class Pos1 implements PositionType {
    x:number;
    y:number;
}

class Pos2 implements PositionInterface {
    x:number;
    y:number;
    z:number;
}

//Extends 
interface ZPositionInterface extends PositionInterface {
    z:number;
}
type ZPositionType = PositionType & {z:number};

// only interface can be merged.
interface PositionInterface {
    z : number;
}

//Type aliases can use computed porperties

type Person = {
    name : string,
    age : number,
}

type name = Person['name'];
type NumberType = number;
type Direction = 'left' | 'right';