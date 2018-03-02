import {Component} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<label>Введите имя (поле с двусторонней привязкой):</label>
              <input [(ngModel)]="name" placeholder="name">
              <br><br>
              <label>Введите имя (поле с двусторонней привязкой 2):</label>
              <input [(ngModel)]="name" placeholder="name">
              <br><br>
              <label>Введите имя (поле с односторонней привязкой):</label>
              <input type="text" [value]="name" placeholder="name">
              <h1>Добро пожаловать, {{name}}!</h1>
              <p>Количество кликов: {{ count }}</p>
              <button (click)="increase($event)">increment</button>
              <br><hr><br>
              <ng-content></ng-content>`,
  styleUrls: ['./app.component.css']
})

export class ChildComponent {
  name = 'Гриша';
  count: number = 0;

  increase($event: any): void {
    console.log($event);
    this.count++;
  }
}