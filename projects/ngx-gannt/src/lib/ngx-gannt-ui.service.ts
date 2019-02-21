import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntUiService {
  public dividerXStatic: number;
  public asideWidthStatic = 384;
  public asideWidth = 384;
  public articleScrollLeft = 0;
  public articleScrollTop = 0;
  constructor() {}

  setAsideWidth(x: number) {
    this.asideWidth = this.asideWidthStatic + (x - this.dividerXStatic);
  }
  
  setArticleScroll(left: number, top: number) {
    this.articleScrollLeft = left;
    this.articleScrollTop = top;
  }
}
