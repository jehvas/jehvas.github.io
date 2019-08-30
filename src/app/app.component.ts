import {Component, Output} from '@angular/core';
import {analyzeAndValidateNgModules} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  all_numbers = [];
  selected = Array(90).fill(false);
  random_num = 0;

  constructor() {
    this.all_numbers = Array(90).fill(0).map((x, i) => i + 1);
  }

  onClicked(num: any) {
    this.selected[num - 1] = !this.selected[num - 1];
  }

  random_number() {
    const available_numbers = this.selected.map((x, i) => {
      if (!x) {
        return i + 1;
      }
    }).filter(x => x !== undefined);
    const random_index = Math.floor(Math.random() * available_numbers.length);
    this.random_num = available_numbers[random_index];
    this.selected[this.random_num - 1] = true;
  }
}
