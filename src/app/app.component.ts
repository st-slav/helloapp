import {Component, ViewChild, ElementRef} from '@angular/core';
import {ChildFifthComponent} from './childfifth.component';

@Component({
    selector: 'my-app',
    template: `<hr>
            <h2>Количество кликов: {{clicks}}</h2>
            <child-second-comp [userName]="name" [userAge]="age"
              (onChanged)="onChanged($event)" [(checkName)]="checkParentName"></child-second-comp>
            <input type="text" [(ngModel)]="name"/>
            <br><br>
            <input type="number" [(ngModel)]="age"/>
            <br><br>
            <p>Check Name: {{ checkParentName }}</p>
            <br><br>
            <child-comp><p>Привет {{ name }}!!!</p></child-comp>
            <child-third-comp></child-third-comp>
            <child-fourth-comp #counter></child-fourth-comp>
            <button (click)="counter.increment()">+</button>
            <button (click)="counter.decrement()">-</button>
            <br>
            <child-fifth-comp></child-fifth-comp>
            <button (click)="childIncrement()">+</button>
            <button (click)="childDecrement()">-</button>
            <br>
            <p #nameText>{{name}}</p>
            <p>{{nameText.textContent}}</p>
            <button (click)="change()">Изменить</button>
            <br>
            <child-sixth-comp>
              <h3>ChildSixth: <div #headerContent>{{name}}</div></h3>
            </child-sixth-comp>
            <hr>`,
    styles: [`h2, p {color: red;} hr {color: blue;}`]
})
export class AppComponent {
    name: string = 'Вазген';
    age: number = 24;
    clicks: number = 0;
    checkParentName: string = "Tom";

    @ViewChild(ChildFifthComponent)
    private counterComponent: ChildFifthComponent;

    @ViewChild("nameText")
    nameParagraph: ElementRef;

    onChanged(increaced: any) {
        increaced == true ? this.clicks++ : this.clicks--;
    }

    childIncrement() {
        this.counterComponent.increment();
    }
    childDecrement() {
        this.counterComponent.decrement();
    }

    change() {
        console.log(this.nameParagraph.nativeElement.textContent);
        if (this.nameParagraph.nativeElement.textContent == this.name) {
            this.nameParagraph.nativeElement.textContent = "hell";
        } else {
            this.nameParagraph.nativeElement.textContent = this.name;
        }
    }
}
