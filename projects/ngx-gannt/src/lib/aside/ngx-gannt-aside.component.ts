import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { NgxGanntUiService } from '../ngx-gannt-ui.service';

@Component({
  selector: 'ngx-gannt-aside',
  templateUrl: './ngx-gannt-aside.component.html'
})
export class NgxGanntAsideComponent implements OnInit, OnDestroy {
  @HostBinding('class.ngx-gannt-aside') isAside = true;
  constructor(public ngxGanntUiService: NgxGanntUiService) {}
  ngOnInit() {}
  ngOnDestroy() {}
  articleScroll(event: Event) {
    this.ngxGanntUiService.setArticleScroll(
      event.srcElement.scrollLeft,
      event.srcElement.scrollTop
    );
  }
}
