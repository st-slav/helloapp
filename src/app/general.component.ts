import {Component, OnInit} from "@angular/core";
import {PhoneDataService} from "./phone-data.service"
import {Phone} from "./phone";

@Component({
  selector: 'general',
  template: `<div class="panel">
              <div class="form-inline">
                <div class="form-group">
                  <div class="col-md-8"><input type="text" class="form-control" [(ngModel)]="name" placeholder="Модель" /></div>
                </div>
                <div class="form-group">
                  <div class="col-md-6"><input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" /></div>
                </div>
                <div class="form-group">
                  <div class="col-md-offset-2 col-md-8"><button class="btn btn-default" (click)="addItem(name, price)">Добавить</button></div>
                </div>
              </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Модель</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of items">
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td><button class="btn btn-default" (click)="delItem(item)">Удалить</button></td>
                </tr>
              </tbody>
            </table>
            <data-comp></data-comp>
            <data-comp></data-comp>`,
//  providers: [PhoneDataService, LogService] если нужно создание нового экземпляра сервиса для каждого объекта компонента
})
export class GeneralComponent implements OnInit {
  
  items: Phone[] = [];
  name: string;
  price: number;
  
  ngOnInit() {
    this.items = this.phoneDataService.getData();
  }
  
  constructor(private phoneDataService: PhoneDataService) {}
  
  addItem(name: string, price: number) {
    if(name == "" || name == null || price == null) {
      return;
    }
    this.phoneDataService.addData(name, price);
    this.name = "";
    this.price = null;
  }
  
  delItem(item: Phone) {
    this.phoneDataService.delData(item);
  }
}