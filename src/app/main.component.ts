import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class Item {
    id: number;
    price: number;
    product: string;
}

@Component({
    selector: 'main',
    template: `<div>
                <nav>
                    <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Главная</a>
                    <a routerLink="/about" routerLinkActive="active">О сайте</a>
                    <a routerLink="/general" routerLinkActive="active">Список телефонов</a>
                </nav>
                <ul class="nav">
                	<li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                	    <a routerLink="">Главная</a>
            	    </li>
                	<li routerLinkActive="active">
                	    <a routerLink="/about">О сайте</a>
            	    </li>
                    <li routerLinkActive="active">
                        <a [routerLink]="['item', '5']" [queryParams]="{'product':'phone', 'price':200}">item 5</a>
                    </li>
                    <li routerLinkActive="active">
                        <a [routerLink]="['item', '8']" [queryParams]="{'product':'tablet'}">item 8</a>
                    </li>
                    <li routerLinkActive="active">
                        <a routerLink="/item/5/details">Информация о товаре</a>
                    </li>
                    <li routerLinkActive="active">
                        <a routerLink="/item/5/stat">Статистика товара</a>
                    </li>
                </ul>
                <div class="form-group">
                	<h3>Параметры объекта</h3>
                	<input type="number" [(ngModel)]="item.id" class="form-control" placeholder="Номер модели" />
                	<br />
                	<input type="number" [(ngModel)]="item.price" class="form-control" placeholder="Цена" />
                	<br />
                	<input type="text" [(ngModel)]="item.product" class="form-control" placeholder="Товар" />
                	<br />
                	<button (click)="goItem(item)" class="btn btn-default">Перейти</button>
                </div>
            	<router-outlet></router-outlet>
                <button class="btn btn-default" (click)="goHome()">На главную</button>
            </div>`,
    styles: [`
        .nav{ clear: both;}
         a {float: left;}
         .active, .active a {color: red;}
     `]
})
export class MainComponent {

    item: Item = new Item();

    constructor(private router: Router) { }

    private goHome() {
        this.router.navigate(['']);
    }

    private goItem(myItem: Item) {
        this.router.navigate(
            ['/item', myItem.id],
            {
                queryParams: {
                    'product': myItem.product,
                    'price': myItem.price
                }
            }
        );
    }
}