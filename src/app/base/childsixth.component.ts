import {Component, ElementRef, ContentChild} from '@angular/core';

@Component({
    selector: 'child-sixth-comp',
    template: `<hr>
              <ng-content></ng-content>
              <button (click)="change()">Изменить</button>
              <hr>`,
    styles: [`hr {color: red;}`]
})
export class ChildSixthComponent {

    @ContentChild("headerContent")
    header: ElementRef;

    change() {
        console.log("ChildSixthComponent: " + this.header);
        this.header.nativeElement.textContent = "hell";
    }
}
