import {Component} from "@angular/core";

@Component({
  selector: 'for-comp',
  template: `<hr>
            <ul>
              <li *ngFor="let item of items">{{item}}</li>
            </ul>
            <br>
            <div>
              <p *ngFor="let item of items; let i = index">{{i+1}}. {{item}}</p>
            </div>
            <hr>`,
  styles: ['hr{color:red;}']
})
export class ChildForComponent {
  
  items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
}
