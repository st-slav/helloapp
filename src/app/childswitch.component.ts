import {Component} from "@angular/core";
import { NgSwitchCase } from '@angular/common';

@Component({
  selector: "switch-comp",
  template: `<hr>
            <input type="number" [(ngModel)]="count">
            <div [ngSwitch]="count">
              <ng-template ngSwitchCase="1">збс</ng-template>
              <ng-template ngSwitchCase="2">норм</ng-template>
              <ng-template ngSwitchDefault>пойдёт</ng-template>
            </div>
            <hr>`,
  styles: ['hr{color:red;}']
})
export class ChildSwitchComponent {
  
  count:number = 0;
}