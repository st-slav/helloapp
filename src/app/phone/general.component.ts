import {Component, OnInit} from "@angular/core";
import {PhoneDataService} from "./phone-data.service"
import {Phone} from "./phone";

@Component({
  selector: 'general',
  template: `<div class="container col-md-8">
              <div class="form-group">
                <label>Название модели</label>
                <input type="text" class="form-control" [(ngModel)]="name" placeholder="Модель" />
              </div>
              <div class="form-group">
                <label>Цена</label>
                <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
              </div>
              <div class="form-group">
                <label>Производитель</label>
                <select class="form-control" name="company" [(ngModel)]="company">
                  <option *ngFor="let comp of companies" [value]="comp">{{comp}}</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-default" (click)="addItem(name, price, company)">Добавить</button>
              </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Модель</th>
                  <th>Цена</th>
                  <th>Компания</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let item of items; let i = index" class="cursor-pointer" (click)="checkItem(item, i)" [class.active-row]="i == selectedRow">
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.company}}</td>
                  <td><button class="btn btn-default" (click)="delItem(item)">Удалить</button></td>
                </tr>
              </tbody>
            </table>
            <div>
                <p>Name: {{selectedPhone.name}}</p>
                <p>Price: {{selectedPhone.price}}</p>
                <p>Company: {{selectedPhone.company}}</p>
            </div>`,
  styles: [`.cursor-pointer {cursor:pointer;}
            .active-row {background-color:lightsteelblue !important;}`]
//  providers: [PhoneDataService, LogService] если нужно создание нового экземпляра сервиса для каждого объекта компонента
})
export class GeneralComponent implements OnInit {
  
  private items: Phone[] = [];
  private companies: string[] = [];
  private name: string;
  private price: number;
  private company: string;
  private selectedRow: number;
  private selectedPhone: Phone = new Phone("", null, "");
  
  ngOnInit() {
    this.items = this.phoneDataService.getData();
    this.companies = this.phoneDataService.getCompanies();
  }
  
  constructor(private phoneDataService: PhoneDataService) {}
  
  addItem(name: string, price: number, company: string) {
    if(name == "" || name == null || price == null) {
      return;
    }
    this.phoneDataService.addData(name, price, company);
    this.name = null;
    this.price = null;
    this.company = null;
  }
  
  delItem(item: Phone) {
    this.phoneDataService.delData(item);
    this.selectedRow = null;
    this.selectedPhone = new Phone("", null, "");
  }
  
  checkItem(item: Phone, i: number) {
    this.selectedRow = i;
    this.selectedPhone = item;
  }
}