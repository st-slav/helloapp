import {Component} from "@angular/core";

@Component({
    selector: 'child-fifth-comp',
    template: `<hr>
              <p>{{ counter }}</p>
              <hr>`,
    styles: ['hr {color: red;}']
})
export class ChildFifthComponent {

    counter: number = 0;
    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }
}
