import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'ngx-gannt-node',
  templateUrl: './ngx-gannt-node.component.html'
})
export class NgxGanntNodeComponent implements OnInit {
  @Input() template: TemplateRef<any>;
  @ViewChild('tpl') tpl: TemplateRef<any>;
  @Input() node;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.tpl);
  }
  nodeEnter(event: Event) {
    this.node.active = true;
  }
  nodeLeave(event: Event) {
    this.node.active = false;
  }
  expandNode(node){
    this.node.isExpand = !!!this.node.isExpand;
  }
}
