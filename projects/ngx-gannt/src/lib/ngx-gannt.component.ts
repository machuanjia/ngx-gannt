import {
  Component,
  OnInit,
  HostBinding,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { NgxGanntUiService } from './ngx-gannt-ui.service';
import { NgxGanntService } from './ngx-gannt.service';

@Component({
  selector: 'ngx-gannt',
  templateUrl: './ngx-gannt.component.html',
  styleUrls: ['./ngx-gannt.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxGanntComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'ngx-gannt-wrap';
  @ViewChild('divider') divider;
  constructor(
    public ngxGanntUiService: NgxGanntUiService,
    public ngxGanntService: NgxGanntService
  ) {}

  ngOnInit() {
    this.ngxGanntUiService.init();
  }
  ngAfterViewInit() {
    this.ngxGanntUiService.dividerXStatic = this.divider.nativeElement.offsetLeft;
  }
  started(event:any){
    console.log('-=');
    console.log(event);
    console.log('-=');
  }
  moved(event: any) {
    this.ngxGanntUiService.setAsideWidth(event.pointerPosition.x);
  }
  ended(event: any) {
    // this.ngxGanntUiService.setAsideWidth(event.pointerPosition.x);
    console.log('-');
    console.log(event);
    console.log('-');
  }
}
