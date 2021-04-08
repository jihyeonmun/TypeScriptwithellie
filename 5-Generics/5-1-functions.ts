{
    function checkNotNullBad(arg: number | null):number{
        if (arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNullBad(123);
    
    function checkNotNull<GENERIC>(arg: GENERIC | null):GENERIC{
        if (arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    console.log(number);
    const boal:boolean = checkNotNull(true);
    console.log(boal);
    const str:string = checkNotNull('sd');
    console.log(str);
    //const nu:string = checkNotNull(null);
    //console.log(nu);
}