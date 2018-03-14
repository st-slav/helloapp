import {Injectable} from "@angular/core";
import {Phone} from "./phone";
import {LogService} from "./log.service";

@Injectable()
export class PhoneDataService {
  
  private companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel", "HP", "No name"];
  
  private data: Phone[] = [
    {name: "Apple iPhone 7", price: 56000, company: this.companies[0]},
    {name: "HP Elite x3", price: 55000, company: this.companies[7]},
    {name: "Alcatel Idol S4", price: 25000, company: this.companies[6]}
  ];
  
  constructor(private logService: LogService) {
    
  }
  
  getData(): Phone[] {
    this.logService.write("получение данных");
    return this.data;
  }
  
  addData(name: string, price: number, company: string = this.companies[8]) {
    var phone = new Phone(name, price, company);
    this.data.push(phone);
    this.logService.write("данные добавлены - имя: " + phone.name + "; цена: " + phone.price + "; компания: " + phone.company);
  }
  
  getCompanies(): string[] {
    return this.companies;
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