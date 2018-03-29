import {Component, OnInit} from "@angular/core";
import {PhoneDataService} from "./phone-data.service";
import {Phone} from "./phone";

@Component({
  selector: 'data-comp',
  template: `<div class="panel">
              <div class="form-inline">
                <div class="form-group">
                  <input type="text" class="form-control" [(ngModel)]="name" placeholder="Модель" />
                  <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                  <button class="btn btn-default" (click)="addItem(name, price)">Добавить</button>
                </div>
              </div>
            </div>
            <table class="table table-striped">
              <tr *ngFor="let item of items">
                <td>{{item.name}}</td>
              </tr>
            </table>`,
})
export class DataComponent implements OnInit {

  items: Phone[] = [];

  constructor(private phoneDataService: PhoneDataService) {

  }

  ngOnInit() {
    this.items = this.phoneDataService.getData();
  }

  addItem(name: string, price: number) {
    this.phoneDataService.addData(name, price);
  }
}