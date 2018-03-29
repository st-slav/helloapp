import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import 'rxjs/add/observable/of';

@Injectable()
export class HttpService {

    constructor( private http: HttpClient ) {
        console.log( "object servce created" );
    }

//    getData() {
//        console.log( "get users" );
//        return this.http.get( 'user.json' );
//    }

    getUsers(): Observable<User[]> {
        return this.http.get( 'user.json' ).map(( data: any ) => {
            let usersList = data["userList"];
            return usersList.map( function( user: any ) {
                return { name: user.userName, age: user.userAge };
            } );
        } )
        .catch((error: any)=>{
            console.log(error);
            return Observable.throw(error);
        })
      //.catch((error: any)=> { return Observable.of([{name: "Tim", age: 23}])});
    }
}