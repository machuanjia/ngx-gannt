import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-gannt-aside',
  templateUrl: './ngx-gannt-aside.component.html'
})
export class NgxGanntAsideComponent implements OnInit, OnDestroy {
  @HostBinding('class.ngx-gannt-aside') isAside = true;
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
}
