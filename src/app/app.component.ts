import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<child-second-comp [userName]="name" [userAge]="age"></child-second-comp>
            <input type="text" [(ngModel)]="name"/>
            <br><hr><br>
            <child-comp><p>Привет {{ name }}!!!</p></child-comp>`,
  styles: [`h2, p {color: red;}`]
})
export class AppComponent {
  name: string = 'Вазген';
  age: number = 24;
}