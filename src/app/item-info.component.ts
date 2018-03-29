import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>
            <router-outlet></router-outlet>
            <div>Товар: {{product}}</div>
            <div>Цена: {{price}}</div>`
})
export class ItemInfoComponent {

    private id: number;
    private product: string;
    private price: number;

    private routeSubsciption: Subscription;
    private querySubscription: Subscription;
    constructor(private route: ActivatedRoute) {
        this.routeSubsciption = route.params.subscribe(params => this.id = params['id']);
        this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
            this.product = queryParam['product'];
            this.price = queryParam['price'];
        });
    }
}