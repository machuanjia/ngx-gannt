import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-gannt',
  templateUrl:'./ngx-gannt.component.html',
  styleUrls:['ngx-gannt.scss']
})
export class NgxGanntComponent implements OnInit {
  @HostBinding('class.ngx-gannt-wrap') isWrap = true;
  constructor() { }

  ngOnInit() {
  }

}
