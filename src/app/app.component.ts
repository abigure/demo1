import { Component, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  input_keyword = '';
  input_keyword_2 = '';

  constructor(public articles: DataService) {

  }
  doRefresh(tw: HTMLInputElement) {
    this.input_keyword_2 = tw.value;
  }
  doDelete(id: number) {
    this.articles.data = this.articles.data.filter((v) => {
      return v.id !== id;
    });
  }


}
