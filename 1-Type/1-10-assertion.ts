{
    /**
     * Type Assertions
     */

    function jsStrFunc(): any {
        return 'hello';
    }      
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any =  5;
    console.log((wrong as Array<number>).push(1)); //에러
    function findNumbers() : number[] | undefined {
        return undefined;
    }
    const numbers  = findNumbers();
    //numbers.push(2); //에러
    numbers!.push(2); //무조건 값이 있어!! -> 가능

    const button = document.querySelector('class')!;
    if(button) {
        button.nodeValue;
    }
    
}