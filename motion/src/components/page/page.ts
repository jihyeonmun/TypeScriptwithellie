/*element라는 내부 statement가 있다 이를 만들게 되면 */
/*아래와 같은 생성자가 생성됨. 원하는 DOM 요소를 만들게 된다 */
/*원하는 페이지가 생성된다 전달받은 parent 요소에 Dom 붙인다! */
export class PageComponent {
    private element: HTMLUListElement;
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }
    
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}