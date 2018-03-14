import {Injectable} from "@angular/core";
import {Phone} from "./phone";
import {LogService} from "./log.service";

@Injectable()
export class PhoneDataService {
  
  private data: Phone[] = [
    {name: "Apple iPhone 7", price: 56000},
    {name: "HP Elite x3", price: 55000},
    {name: "Alcatel Idol S4", price: 25000}
  ];
  
  constructor(private logService: LogService) {
    
  }
  
  getData(): Phone[] {
    this.logService.write("получение данных");
    return this.data;
  }
  
  addData(name: string, price: number) {
    this.data.push(new Phone(name, price));
    this.logService.write("данные добавлены - имя: " + name + "; цена: " + price);
  }
  
  delData(phone: Phone) {
    if(phone !== undefined && phone !== null) {
      let index: number = this.data.indexOf(phone, 0);
      
      if(index > -1) {
        this.data.splice(index, 1);
      }
    }
    this.logService.write("запись удалена - имя: " + phone.name + "; цена: " + phone.price);
  }
}