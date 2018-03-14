import {Component} from "@angular/core";

@Component({
  selector: 'if-comp',
  template: `<hr>
            <p *ngIf="condition">Hello world!</p>
            <p *ngIf="!condition"> Bye world!</p>
            <button (click)="toggle()">Toggle</button>
            <hr>`,
//  template: ` <div *ngIf="condition; then thenBlock else elseBlock"></div>   
//            <ng-template #thenBlock>Then template</ng-template>  
//            <ng-template #elseBlock>Else template</ng-template>    
//            <button (click)="toggle()">Toggle</button>`,
  styles: ['hr{color:red;}']
})
export class ChildIfComponent {

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}