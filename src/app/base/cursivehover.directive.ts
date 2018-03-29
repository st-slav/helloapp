import {Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[cursive-hover]'
})
export class CursiveHoverDirective {
  
  @Input()
  selectedSize = "18px";
  
  @Input()
  defaultSize = "16px";
  
  private fontSize: string;
  private fontStyle = "normal";
  
  ngOnInit() {
    this.fontSize = this.defaultSize;
  }
  
  constructor() {}

  @HostBinding("style.fontStyle")
  get getFontStyle() {
    return this.fontStyle;
  }
  
  @HostBinding("style.fontSize")
  get getFontSize() {
    return this.fontSize;
  }

  @HostBinding("style.cursor")
  get getCursor() {
    return "pointer";
  }
  
  @HostListener("mouseenter")
  onMouseEnter() {
    this.fontSize = this.selectedSize;
    this.fontStyle = "italic";
  }
  
  @HostListener("mouseleave")
  onMouseLeave() {
    this.fontSize = this.defaultSize;
    this.fontStyle = "normal";
  }
}