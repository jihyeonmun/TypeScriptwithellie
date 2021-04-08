{
    /**
     * Intersection -> 교집합의 의미 AND
     */

     type Student = {
         name : string;
         score: number;
     };

     type Worker = {
         employeeId: number;
         work: () => void;
     };

     function interWork(person: Student & Worker){
         console.log(person.name, person.employeeId, person.work());

     }
     interWork({
         name : 'ellie',
         score : 1,
         employeeId : 123,
         work : () => {},
     }) 
}