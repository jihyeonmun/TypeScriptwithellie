{
    //Array
    const fruits : string[] = ['tomato', 'banana'];
    const scores : number[] = [1,2,3];
    const score : Array<number> = [1,3,4];
    function printArray(fruits: readonly string[]){} //string만 readonly 가능
        //fruits.push -> 에러 (읽기만 가능)
    
    //Tuple -> interface, type alisa, class로 쓰는 것이 맞다! 
    let student : [string, number];
    student  = ['name', 123];
    student[0] //name
    student[1] //123


    //student.name; //클래스가 보다 더 깔금하다!
    //student.age;
    
    const [name, age] = student;

    //동적으로 묶는 경우에만 유용한 편이다!!

    
 }