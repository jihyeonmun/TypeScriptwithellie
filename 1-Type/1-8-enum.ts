{
    /** 
     * Enum -> 상수 값을 한 곳에 모아두는 것!! 
     */
    //JavaScript 

    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUDESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({"MONDAY":0,"TUESDAY":2,"WEDNESDAY":2})
    const dayOfToday = DAYS_ENUM.MONDAY;
    // TypeScript 
    // type Days = 'Monday' | 'Tuesday' | 'Wednesday'; //이렇게 범위 지정하는 게 좋다! 
    enum Days {
        Monday, //자동 계산 0, =1로 지정하면 1씩 증가, 문자열 할당도 가능하나 수동으로! 
        Tuesday, //1
        Wednesday, //2
        Thursday, //2
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Tuesday);
    const day = Days.Saturday; //숫자 할당하게 되는 경우 범위 벗어나도 에러 컴파일 안난다!! 
    console.log(day);
}