import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { NgxGanntScalesType, NgxGanttConfig, NgxGanntViewTypes } from './ngx-gannt.constant';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntUiService {
  public dividerXStatic: number;
  public asideWidthStatic = 384;
  public asideWidth = 384;
  public articleScrollLeft = 0;
  public articleScrollTop = 0;
  public configuration: NgxGanttConfig = {
    view: NgxGanntViewTypes.task,
    date_type: NgxGanntScalesType.day
  };
  public duration: {
    start?: number;
    end?: number;
    unit?: number;
  };

  public scale: {
    size?: number;
    width?: number;
    list?: any;
  };

  constructor() {}

  init() {
    const _start = moment()
      .subtract(1, 'months')
      .startOf('month');
    const _end = moment()
      .add(1, 'months')
      .endOf('month');
    this.setDuration(_start, _end);
  }

  setAsideWidth(x: number) {
    this.asideWidth = this.asideWidthStatic + (x - this.dividerXStatic - 13);
  }

  setArticleScroll(left: number, top: number) {
    this.articleScrollLeft = left;
    this.articleScrollTop = top;
  }

  setDuration(_start?: any, _end?: any) {
    let _ds = _start;
    let _de = _end;
    switch (this.configuration.date_type) {
      case NgxGanntScalesType.day:
        this.duration = {
          start: _ds.format('X') * 1,
          end: _de.format('X') * 1
        };
        this.scale = {
          size:
            moment([_de.year(), _de.month(), _de.date()]).diff(
              moment([_ds.year(), _ds.month(), _ds.date()]),
              'days'
            ) + 1,
          width: 50
        };
        this.scale.list = this.setDayDurationScales();
        break;
      case NgxGanntScalesType.week:
        break;
      case NgxGanntScalesType.month:
        break;
      default:
        break;
    }
    this.duration.unit =
      (this.scale.width * this.scale.size) /
      (this.duration.end - this.duration.start);
  }

  setDayDurationScales():any[] {
    const _list = [];
    for (let i = 0; i < this.scale.size; i++) {
      const _date = moment(this.duration.start * 1000).add(i, 'days');
      const _dd = _date.format('DD');
      const obj = {
        id: 'col' + i,
        name: _dd,
        start: _date.format('X'),
        className: '',
        startText: '',
        today: false
      };
      if (_dd === '01') {
        obj.startText = _date.format('YYYY年MM月');
      } else {
        delete obj.startText;
      }
      if (_date.format('d') === '6') {
        obj.className = 'weekend';
      } else if (_date.format('d') === '0') {
        obj.className = 'weekend darken-border';
      } else if (_date.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
        obj.today = true;
        obj.className = 'today';
      }
      _list.push(obj);
    }
    return _list;
  }
}
