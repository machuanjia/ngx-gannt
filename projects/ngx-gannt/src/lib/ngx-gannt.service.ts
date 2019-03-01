import { Injectable } from '@angular/core';
import {
  NgxGanttConfig,
  NgxGanntViewTypes,
  NgxGanntScalesType
} from './ngx-gannt.constant';
import { NgxGanntUiService } from './ngx-gannt-ui.service';
import { NgxGanntDataService } from './ngx-gannt-data.service';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntService {
  public configuration: NgxGanttConfig = {
    view: NgxGanntViewTypes.task,
    date_type: NgxGanntScalesType.day
  };
  public uiOptions: {
    dividerXStatic?: number;
    containerWidth?: number;
    asideWidthStatic?: number;
    asideWidth?: number;
    articleScrollLeft?: number;
    articleScrollTop?: number;
    duration?: {
      start?: number;
      end?: number;
      unit?: number;
    };
    scale?: {
      size?: number;
      width?: number;
      list?: any;
    };
  };
  constructor() {}
  init(configuration: NgxGanttConfig) {
    this.configuration = configuration;
  }
  setUiOptions(params) {
    this.uiOptions = params;
  }
}
