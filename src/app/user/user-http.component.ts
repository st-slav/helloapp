import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpService } from './http.service';

@Component( {
    selector: 'user-http',
    template: `<div>{{error}}</div>
                <ul>
                    <li *ngFor="let user of users">
                    	<p>Имя пользователя: {{user?.name}}</p>
                    	<p>Возраст пользователя: {{user?.age}}</p>
                	</li>
                </ul>`,
    providers: [HttpService]
} )
export class UserHttpComponent implements OnInit {
    users: User[] = [];
    error: any;

    constructor( private httpService: HttpService ) { }

    ngOnInit() {
        this.httpService.getUsers().subscribe(
                ( data: any ) => this.users = data,
                ( error: any) => {
                    this.error = error.message;
                    console.log(error);
                });
    }
}