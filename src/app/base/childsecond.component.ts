import {Component, Input, Output, OnInit, EventEmitter} from "@angular/core";

@Component({
    selector: 'child-second-comp',
    template: `<hr>
            <h4>Компонент наследник</h4>
            <p>Имя пользователя: {{ userName }}</p>
            <p>Возраст пользователя: {{ userAge }}</p>
            <p>
                <button (click)="change(true)">+</button>
                <button (click)="change(false)">-</button>
            </p>
            <input type="text" [ngModel]="checkName" (ngModelChange)="onNameChange($event)"/>
            <hr>`,
     styles: [`hr {color: red;}`]
})
export class ChildSecondComponent implements OnInit {
    @Input() userName: string;
    _userAge: number;
    @Output() onChanged = new EventEmitter<boolean>();

    @Input() checkName: string;
    // dажно наименование переменной, т. е. имя_переменной + Change
    @Output() checkNameChange = new EventEmitter<string>();

    constructor() {
        console.log(`constructor ChildSecondComponent`);
    }

    ngOnInit() {
        // вызывается один раз после установки свойств компонента, которые участвуют в привязке.
        // Выполняет инициализацию компонента
        console.log(`onInit ChildSecondComponent`);
    }

    @Input()
    set userAge(age: number) {
        if (age < 0) {
            this._userAge = 0;
        } else if (age > 100) {
            this._userAge = 100;
        } else {
            this._userAge = age;
        }
    }

    get userAge() {
        return this._userAge;
    }

    change(increased: any) {
        this.onChanged.emit(increased);
    }

    onNameChange(model: string) {
        this.checkName = model;
        this.checkNameChange.emit(model);
    }
}
