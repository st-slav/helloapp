import { Component } from '@angular/core';

@Component({
    selector: 'child-third-comp',
    template: `<hr>
              <p #userName>{{ name }}</p>
              <p>Имя из третьего компонента наследника: {{ userName.textContent }}</p>
              <input type="text" [(ngModel)]="name" />
              <hr>`,
    styles: [`hr {color: red;}`]
})
export class ChildThirdComponent {
    name: string = "Имя из третьего компонента";
}
