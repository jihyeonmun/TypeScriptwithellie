
/*element라는 내부 statement가 있다 이를 만들게 되면 */
/*아래와 같은 생성자가 생성됨. 원하는 DOM 요소를 만들게 된다 */


/*원하는 페이지가 생성된다 전달받은 parent 요소에 Dom 붙인다! */
import { BaseComponent, Component } from './../component.js';
export interface Composable {
  addChild(child: Component) : void;
}
type OnCloseListener =() =>void;




class PageItemComponet extends BaseComponent<HTMLElement> implements Composable{
  private closeListener ?: OnCloseListener;
  constructor(){
    super(`<li class="page-item">
          <section class="page-item__body"></section>
          <div class="page-item__controls">
            <button class="close">&times;</button>
          </div>
        </li>`);
        const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
        closeBtn.onclick = () => {
          this.closeListener && this.closeListener();
        };
  }
  addChild(child:Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener:OnCloseListener){
    this.closeListener = listener;

  }
}


export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page">This is PageComponenet!</ul>');
  }

  addChild(section: Component) {
    const item = new PageItemComponet();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    })
  }
}
