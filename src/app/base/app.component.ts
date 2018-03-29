import {Component, ViewChild, ElementRef} from '@angular/core';
import {ChildFifthComponent} from './childfifth.component';

@Component({
  selector: 'my-app',
  template: `<hr>
            <h2>Количество кликов: {{clicks}}</h2>
            <child-second-comp [userName]="name" [userAge]="age"
              (onChanged)="onChanged($event)" [(checkName)]="checkParentName"></child-second-comp>
            <input type="text" [(ngModel)]="name"/>
            <br><br>
            <input type="number" [(ngModel)]="age"/>
            <br><br>
            <p bold>Check Name: {{ checkParentName }}</p>
            <br><br>
            <child-comp><p>Привет {{ name }}!!!</p></child-comp>
            <child-third-comp></child-third-comp>
            <child-fourth-comp #counter></child-fourth-comp>
            <button (click)="counter.increment()">+</button>
            <button (click)="counter.decrement()">-</button>
            <br>
            <child-fifth-comp></child-fifth-comp>
            <button (click)="childIncrement()">+</button>
            <button (click)="childDecrement()">-</button>
            <br>
            <p #nameText>{{name}}</p>
            <p>{{nameText.textContent}}</p>
            <button (click)="change()">Изменить</button>
            <br>
            <child-sixth-comp>
              <h3 [ngClass]="{verdanaFont:true}">ChildSixth: <span #headerContent [ngClass]="{verdanaFont:false, segoePrintFont:true}">{{name}}</span></h3>
            </child-sixth-comp>
            <div [class.verdanaFont]="true" [ngClass]="{invisible:visibility}">
              <h1>Hello Angular 5!</h1>
              <p [class.verdanaFont]="false" [class.segoePrintFont]="true">Angular 5 представляет модульную архитектуру приложения</p>
            </div>
            <button (click)="toggle()">Toggle</button>
            <div [ngStyle]="{'font-size':'13px', 'font-family':'Verdana'}">
              <h1>Hello Angular 5!</h1>
              <p [ngStyle]="{'font-size':'14px', 'font-family':'Segoe Print'}">Angular 5 представляет модульную архитектуру приложения</p>
            </div>
            <div [style.fontSize]="'13px'" [style.fontFamily]="'Verdana'">
              <h1>Hello Angular 5!</h1>
              <p [style.fontSize]="'30px'" [style.fontFamily]="'Segoe Print'" bold-hover cursive-hover [defaultSize]="'15px'" [selectedSize]="'30px'">Angular 5 представляет модульную архитектуру приложения</p>
            </div>
            <if-comp></if-comp>
            <for-comp></for-comp>
            <switch-comp></switch-comp>
            <seventh-comp></seventh-comp>
            <hr>`,
  styles: [`h2, p {color: red;} 
            hr {color: blue;}
            .verdanaFont{font-size:13px; font-family:Verdana;}
            .segoePrintFont{font-size:30px; font-family:"Segoe Print";}
            .invisible{display: none;}`]
})
export class AppComponent {
  name: string = 'Вазген';
  age: number = 24;
  clicks: number = 0;
  checkParentName: string = "Tom";
  visibility: boolean = true;

  @ViewChild(ChildFifthComponent)
  private counterComponent: ChildFifthComponent;

  @ViewChild("nameText")
  nameParagraph: ElementRef;

  onChanged(increaced: any) {
    increaced == true ? this.clicks++ : this.clicks--;
  }

  childIncrement() {
    this.counterComponent.increment();
  }
  childDecrement() {
    this.counterComponent.decrement();
  }

  change() {
    console.log(this.nameParagraph.nativeElement.textContent);
    if (this.nameParagraph.nativeElement.textContent == this.name) {
      this.nameParagraph.nativeElement.textContent = "hell";
    } else {
      this.nameParagraph.nativeElement.textContent = this.name;
    }
  }

  toggle() {
    this.visibility = !this.visibility;
  }
}
