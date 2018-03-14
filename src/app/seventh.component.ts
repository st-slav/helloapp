import {Component} from '@angular/core';

@Component({
  selector: 'seventh-comp',
  template: `<hr>
            <p *while="condition">Первый параграф</p>
            <p *while="!condition">Второй параграф</p>
            <button (click)="toggle()">Toggle</button>
            <hr>`,
  styles: ['hr {color:red;}']
})
export class SeventhComponent {

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}