import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  ViewChild,
  Renderer2
} from '@angular/core';
import { NgxGanntUiService } from '../ngx-gannt-ui.service';
import { NgxGanntService } from '../ngx-gannt.service';

@Component({
  selector: 'ngx-gannt-article',
  templateUrl: './ngx-gannt-article.component.html'
})
export class NgxGanntArticleComponent implements OnInit, OnDestroy {
  @HostBinding('class.ngx-gannt-article') isMain = true;
  @ViewChild('articleHeader') articleHeader;
  @ViewChild('articleBody') articleBody;

  constructor(
    public ngxGanntUiService: NgxGanntUiService,
    public ngxGanntService: NgxGanntService,
    private render: Renderer2
  ) {}
  ngOnInit() {}
  ngOnDestroy() {}
  articleScroll(event: Event) {
    this.ngxGanntUiService.setArticleScroll(
      event.srcElement.scrollLeft,
      event.srcElement.scrollTop
    );
  }
}
