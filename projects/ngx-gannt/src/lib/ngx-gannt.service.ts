import { Injectable } from '@angular/core';
import {
  NgxGanttConfig,
  NgxGanntViewTypes,
  NgxGanntScalesType
} from './ngx-gannt.constant';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntService {
  public configuration: NgxGanttConfig = {
    view: NgxGanntViewTypes.task,
    date_type: NgxGanntScalesType.day
  };
  constructor() {}
  init(configuration: NgxGanttConfig) {
    this.configuration = configuration;
  }
}
