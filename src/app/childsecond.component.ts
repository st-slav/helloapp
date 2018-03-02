import {Component, Input} from "@angular/core";

@Component({
  selector: 'child-second-comp',
  template: `<p>Имя пользователя: {{ userName }}</p>
             <p>Возраст пользователя: {{ userAge }}</p>`,
})


export class ChildSecondComponent {
  @Input() userName: string;
  _userAge: number;

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
}