import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'user-form-app',
  template: `<form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
              <div class="form-group">
                <label>Имя</label>
                <input type="text" class="form-control" name="name" [(ngModel)]="name" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" [(ngModel)]="email" required email />
              </div>
              <div class="form-group">
                <label>Телефон</label>
                <input type="text" class="form-control" name="phone" [(ngModel)]="phone" required pattern="[0-9]{10}" />
              </div>
              <div class="form-group">
                <!--<button [disabled]="myForm.invalid" class="btn btn-default" (click)="onSubmit(myForm)">Добавить</button>-->
                <input type="submit" [disabled]="myForm.invalid" class="btn btn-default" value="Отправить" />
              </div>
            </form>
            <div>Имя: {{myForm.value.name}}</div>
            <div>Email: {{myForm.value.email}}</div>`,
  styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border: solid green 2px;}
  `]
})
export class UserFormAppComponent {
  
  onSubmit(form: NgForm) {
    console.log(form);
  }
}