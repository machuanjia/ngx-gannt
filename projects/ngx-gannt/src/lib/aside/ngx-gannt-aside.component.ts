import { Component, OnInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { NgxGanntUiService } from '../ngx-gannt-ui.service';
import { NgxGanntDataService } from '../ngx-gannt-data.service';

@Component({
  selector: 'ngx-gannt-aside',
  templateUrl: './ngx-gannt-aside.component.html'
})
export class NgxGanntAsideComponent implements OnInit, OnDestroy {
  @HostBinding('class.ngx-gannt-aside') isAside = true;
  @Input() node;
  constructor(
    public ngxGanntUiService: NgxGanntUiService,
    public ngxGanntDataService: NgxGanntDataService
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
