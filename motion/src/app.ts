import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from "./components/page/page.js";
/*App 클래스가 가장 첫 클래스라고 볼 수 있다*/
/*페이지 컴포넌트 만들어서 붙여주게 된다.*/
/*document라는 클래스를 받아와서 보여주게 된다. */ 
class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
      this.page = new PageComponent();
      this.page.attachTo(appRoot);
  
      const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
      image.attachTo(appRoot, 'beforeend');
    }
  }
  
  new App(document.querySelector('.document')! as HTMLElement);