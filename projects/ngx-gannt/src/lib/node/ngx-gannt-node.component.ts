import { Component, OnInit, Input } from '@angular/core';
import { nodeChildrenAsMap } from '@angular/router/src/utils/tree';

@Component({
  selector: 'ngx-gannt-node',
  templateUrl: './ngx-gannt-node.component.html'
})
export class NgxGanntNodeComponent implements OnInit {
  @Input() node;
  constructor() {}
  ngOnInit() {}
}
