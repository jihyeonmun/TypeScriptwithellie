/*element라는 내부 statement가 있다 이를 만들게 되면 */
/*아래와 같은 생성자가 생성됨. 원하는 DOM 요소를 만들게 된다 */


/*원하는 페이지가 생성된다 전달받은 parent 요소에 Dom 붙인다! */
import { BaseComponent } from './../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is PageComponenet!</ul>');
  }
}
