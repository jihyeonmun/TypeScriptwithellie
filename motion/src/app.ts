import { VideoComponent } from './components/page/item/video.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import {Composable, PageComponent} from './components/page/page.js';
import { Component } from './components/component.js';
/*App 클래스가 가장 첫 클래스라고 볼 수 있다*/
/*페이지 컴포넌트 만들어서 붙여주게 된다.*/
/*document라는 클래스를 받아와서 보여주게 된다. */ 

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const video = new VideoComponent('Video Title', 'https://youtube.com/watch?v=gnnJkTl7bCo');
    this.page.addChild(video);
  }
}

new App(document.querySelector('.document')! as HTMLElement);