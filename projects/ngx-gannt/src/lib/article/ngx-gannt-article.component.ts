import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  ViewChild,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import { NgxGanntUiService } from '../ngx-gannt-ui.service';
import { NgxGanntService } from '../ngx-gannt.service';
import { NgxGanntDataService } from '../ngx-gannt-data.service';

@Component({
  selector: 'ngx-gannt-article',
  templateUrl: './ngx-gannt-article.component.html'
})
export class NgxGanntArticleComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('class.ngx-gannt-article') isMain = true;
  @ViewChild('articleHeader') articleHeader;
  @ViewChild('articleBody') articleBody;
  trackByIdFn(index, item) {
    return item._id || item.id;
  }
  constructor(
    public ngxGanntUiService: NgxGanntUiService,
    public ngxGanntDataService: NgxGanntDataService,
    public ngxGanntService: NgxGanntService,
    private render: Renderer2
  ) {}
  ngOnInit() {}
  ngOnDestroy() {}
  ngAfterViewInit() {
    this.ngxGanntUiService.setDefaultScroll(this.articleBody);
  }
  articleScroll(event: Event) {
    this.ngxGanntUiService.setArticleScroll(
      event.srcElement.scrollLeft,
      event.srcElement.scrollTop
    );
    this.ngxGanntUiService.autoScrollDuration(this.articleBody);
  }
}
