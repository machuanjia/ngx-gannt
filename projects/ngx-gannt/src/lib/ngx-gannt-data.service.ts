import { Injectable } from '@angular/core';
import { NgxGanntService } from './ngx-gannt.service';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntDataService {
  public data: [];
  constructor(private ngxGanntService: NgxGanntService) {}
  init(data: []) {
    this.data = data;
    this.initDatas();
  }
  initDatas() {
    this.recursionData(this.data);
  }
  recursionData(data: []) {
    data.forEach((n: any) => {
      this.formatEntities(n);
      if (n.children && n.children.length > 0) {
        this.recursionData(n.children);
      }
    });
  }
  formatEntities(entity: any) {
    let _start = entity.start;
    let _end = entity.end;

    if (_start && _end) {
      entity.left =
        (_start - this.ngxGanntService.uiOptions.duration.start) *
        this.ngxGanntService.uiOptions.duration.unit;
      entity.width =
        _end > _start
          ? (_end - _start) * this.ngxGanntService.uiOptions.duration.unit
          : 0;

      entity.x = entity.left;
      entity.w = entity.width;
    }
  }

  resizeEntity(entity, distance, directe) {
    if (!directe) {
      entity.x = entity.left + distance;
      entity.w = entity.width - distance;
    } else {
      entity.w = entity.width + distance;
    }
  }
  resizeEntityEnd(event,entity, directe) {
    entity.width = entity.w;
    entity.left = entity.x;
  }
}
