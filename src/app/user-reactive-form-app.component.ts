import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component( {
    selector: 'user-reactive-form-app',
    template: `
        <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
        	<div class="form-group">
        		<label>Имя</label>
        		<input class="form-control" name="name" formControlName="userName" />
        		<div class="alert alert-danger" *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">Не указано имя</div>
    		</div>
    		<div class="form-group">
    			<label>Email</label>
    			<input class="form-control" name="email" formControlName="userEmail" />
    			<div class="alert alert-danger"
    			    *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
    			    Некорректный email
			    </div>
    		</div>
    		<div formArrayName="phones">
        		<div class="form-group" *ngFor="let phone of myForm.controls['phones'].controls; let i = index">
        		    <label>Телефон</label>
        		    <input class="form-control" formControlName="{{i}}" />
        		    <div class="alert alert-danger"
        		        *ngIf="myForm.controls['phones'].controls[i].invalid && myForm.controls['phones'].controls[i].touched">
        		        Некорректный номер
    		        </div>
    		    </div>
		    </div>
    		<div class="form-group">
    		    <button class="btn btn-default" (click)="addPhone()">Добавить телефон</button>
    		    <button class="btn btn-default" [disabled]="myForm.invalid">Отправить</button>
		    </div>
        </form>
    `,
    styles: [`
             input.ng-touched.ng-invalid{border:solid red 2px;}
             input.ng-touched.ng-valid{border:solid green 2px;}
    `]
} )
export class UserReactiveFormAppComponent {

    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup( {
            "userName": new FormControl( "Tom", [
                Validators.required,
                this.userNameValidator
            ] ),
            "userEmail": new FormControl( "", [
                Validators.required,
                Validators.pattern( "[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}" )
            ] ),
            "phones": new FormArray( [
                new FormControl( "+7", [Validators.required, Validators.pattern( "[0-9,+]{12}" )] )
            ] )
        } );
    }

    addPhone() {
        ( <FormArray>this.myForm.controls["phones"] ).push( new FormControl( "+7", [Validators.required, Validators.pattern( "[0-9,+]{12}" )] ) );
    }

    submit() {
        console.log( this.myForm );
    }

    userNameValidator( control: FormControl ): { [s: string]: boolean } {
        if ( control.value === "нет" ) {
            return { "userName": true };
        }
        return null;
    }
}