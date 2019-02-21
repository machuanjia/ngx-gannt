import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxGanntScroll]'
})
export class NgxGanntScrollDirective {
  public value: string;

  @Input()
  set ngxGanntScroll(value: { left?: number; top?: number }) {
    if (value) {
      this.setScroll(value);
    }
  }

  constructor(private elementRef: ElementRef, private _render: Renderer2) {}

  setScroll(value: { left?: number; top?: number }) {
    if (value.left) {
        setTimeout(()=>{
            // this._render.setStyle(this.elementRef, 'marginLeft', '-200px');
            this.elementRef.nativeElement.scrollLeft = value.left + 'px';
        });
      
        // this.elementRef.nativeElement.scrollLeft = value.left + 'px';
    }
    if (value.top) {
      this.elementRef.nativeElement.scrollLeft = value.top + 'px';
    }
  }
}
