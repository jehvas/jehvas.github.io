import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  all_numbers = [];
  selected = Array(100).fill(false);
  random_num = 0;
  constructor() {
    this.all_numbers = Array(100).fill(0).map((x, i) => i + 1);
  }

  onClicked(num: any) {
    this.selected[num - 1] = !this.selected[num - 1];
  }

  random_number() {
    this.random_num = Math.round(Math.random()*100);
  }
}
