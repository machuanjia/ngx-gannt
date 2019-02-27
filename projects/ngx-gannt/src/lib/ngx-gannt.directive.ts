import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxGanntScroll]'
})
export class NgxGanntScrollDirective {
  public value: string;

  @Input()
  set ngxGanntScroll(value: {
    left?: number;
    top?: number;
    isHidden?: boolean;
  }) {
    if (value) {
      this.setScroll(value);
    }
  }

  constructor(private elementRef: ElementRef, private _render: Renderer2) {}

  setScroll(value: { left?: number; top?: number; isHidden?: boolean }) {
    if (value.left) {
      if (value.isHidden) {
        this._render.setStyle(
          this.elementRef.nativeElement,
          'transform',
          'translateX(' + (0-value.left) + 'px)'
        );
      } else {
        this.elementRef.nativeElement.scrollLeft = value.left;
      }
    }
    if (value.top) {
      this.elementRef.nativeElement.scrollTop = value.top;
    }
  }
}
