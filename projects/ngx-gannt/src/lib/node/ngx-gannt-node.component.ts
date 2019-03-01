import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  Renderer2,
  RendererFactory2
} from '@angular/core';
import { NgxGanntNodeShowType } from '../ngx-gannt.constant';
import { NgxGanntDataService } from '../ngx-gannt-data.service';
import { NgxGanntUiService } from '../ngx-gannt-ui.service';

@Component({
  selector: 'ngx-gannt-node',
  templateUrl: './ngx-gannt-node.component.html'
})
export class NgxGanntNodeComponent implements OnInit {
  // @Input() template: TemplateRef<any>;
  @ViewChild('tpl') tpl: TemplateRef<any>;
  @Input() node;
  @Input()
  type: number = NgxGanntNodeShowType.aside;
  handdleX = 0;
  dragDistance = 0;
  private renderer: Renderer2;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private ngxGanntDataService: NgxGanntDataService,
    private ngxGanntUiService: NgxGanntUiService,
    public rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.tpl);
   
  }

  nodeEnter(event: Event) {
    this.node.active = true;
  }

  nodeLeave(event: Event) {
    this.node.active = false;
  }

  expandNode(node) {
    this.node.isExpand = !!!this.node.isExpand;
  }

  nodeStarted(event, node, directe) {
    this.handdleX = event.source.element.nativeElement.getBoundingClientRect()[
      'x'
    ];

    console.log(event);
    console.log(this.handdleX);
  }

  nodeMoved(event, node, directe) {
    this.dragDistance = event.pointerPosition['x'] - this.handdleX;
    this.ngxGanntDataService.resizeEntity(node, this.dragDistance, directe);
    this.renderer.setStyle(event.source.element.nativeElement,'transform','translate3d(0px, 0px, 0px)');
  }

  nodeEnded(event, node, directe) {
    this.handdleX = 0;
    this.dragDistance = 0;
    this.ngxGanntDataService.resizeEntityEnd(event, node, directe);
    this.renderer.setStyle(event.source.element.nativeElement,'transform','translate3d(0px, 0px, 0px)');

  }
}
