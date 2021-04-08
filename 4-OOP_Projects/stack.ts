interface Stack {
    readonly size:number;
    push(value: string ): void;
    pop():string;
}

//배열은 칸을 이용해서 한다. 가장 끝을 빼면 stack 구현됨
//linked list -> 연결된 리스트는 그다음을 계속해서 가르키고 있다! 
//head가 마지막 노드를 가르키도록 하면 된다! 