import {
  Component,
  OnInit,
  HostBinding,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
  Input
} from '@angular/core';
import { NgxGanntUiService } from './ngx-gannt-ui.service';
import { NgxGanntService } from './ngx-gannt.service';
import { NgxGanntDataService } from './ngx-gannt-data.service';

@Component({
  selector: 'ngx-gannt',
  templateUrl: './ngx-gannt.component.html',
  styleUrls: ['./ngx-gannt.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxGanntComponent implements OnInit, AfterViewInit {
  @HostBinding('class') classes = 'ngx-gannt-wrap';
  @ViewChild('divider') divider;
  @ViewChild('ngxGanntContainer') ngxGanntContainer;
  @Input() data;
  @Input() configuration;

  constructor(
    public ngxGanntUiService: NgxGanntUiService,
    public ngxGanntDataService: NgxGanntDataService,
    public ngxGanntService: NgxGanntService
  ) {}

  ngOnInit() {
    this.ngxGanntUiService.dividerXStatic = this.divider.nativeElement.offsetLeft;
    this.ngxGanntUiService.containerWidth = this.ngxGanntContainer.nativeElement.clientWidth;
    this.ngxGanntUiService.init();
    this.ngxGanntService.init(this.configuration);
    this.ngxGanntDataService.init(this.data);
  }

  ngAfterViewInit() {}

  started(event: any) {}

  moved(event: any) {
    this.ngxGanntUiService.setAsideWidth(event.pointerPosition.x);
  }

  ended(event: any) {}
}
