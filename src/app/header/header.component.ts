import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'HELLO';
  logo_url = '/assets/images/logo.png';
  subtitle = '[⌘ + click] to show subtitle.';
  counter = 0;

  constructor() {}

  ngOnInit() {
    // setTimeout(() => {
      // this.title = 'The Will Will Web';
    // }, 2000);
  }

  changeTitle() {
    this.counter++;
    this.title = 'The Will Will Web';
  }
  isHightlight() {
    return this.counter % 2 === 1;
  }
  enlargeFontSize() {
    return (this.counter + 12) + 'px';
  }
  changeSubtitle(e: MouseEvent) {
    console.log(e);
    if (e.metaKey) {
      this.subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
    }
  }
}
