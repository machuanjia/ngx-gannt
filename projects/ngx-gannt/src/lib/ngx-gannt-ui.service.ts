import { Injectable, ElementRef } from '@angular/core';
import * as moment from 'moment';
import {
  NgxGanntScalesType,
  NgxGanttConfig,
  NgxGanntViewTypes,
  NgxGanntDifferUnit
} from './ngx-gannt.constant';
import { NgxGanntService } from './ngx-gannt.service';

@Injectable({
  providedIn: 'root'
})
export class NgxGanntUiService {
  public dividerXStatic: number;
  public containerWidth: number;
  public asideWidthStatic = 384;
  public asideWidth = 384;
  public articleScrollLeft = 0;
  public articleScrollTop = 0;

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

  constructor(private ngxGanntService: NgxGanntService) {}

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
    switch (this.ngxGanntService.configuration.date_type) {
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

  setDayDurationScales(): any[] {
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
  /**
   * @param element
   * 初始化设置滚动条到当天
   */
  setDefaultScroll(element: ElementRef) {
    let _from = moment();
    const _diffUnit: any = NgxGanntDifferUnit[this.ngxGanntService.configuration.date_type];
    const _cols = _from.diff(moment(this.duration.start * 1000), _diffUnit);
    element.nativeElement.scrollLeft =
      _cols * this.scale.width -
      (this.containerWidth - this.asideWidthStatic - 7) / 2;
  }

  /**
   * @param element
   * 滚动主任务区域，自动向后、前翻时间区间
   */
  autoScrollDuration(element: ElementRef) {
    if (!element) {
      return;
    }
    const _left = element.nativeElement.scrollLeft;
    switch (this.ngxGanntService.configuration.date_type) {
      case NgxGanntScalesType.day:
        if (
          _left >
          (this.scale.size - 5) * this.scale.width -
            (this.containerWidth - this.asideWidthStatic - 7)
        ) {
          this.setDuration(
            moment(this.duration.start * 1000),
            moment(this.duration.end * 1000).add(1, 'months')
          );
          element.nativeElement.scrollLeft = _left;
        }
        if (_left < 5 * this.scale.width) {
          this.setDuration(
            moment(this.duration.start * 1000).subtract(1, 'months'),
            moment(this.duration.end * 1000)
          );
          element.nativeElement.scrollLeft = _left + 30 * this.scale.width;
        }
        break;
      case NgxGanntScalesType.week:
        if (
          _left >
          (this.scale.size - 2) * this.scale.width -
            (this.containerWidth - this.asideWidthStatic - 7)
        ) {
          this.setDuration(
            moment(this.duration.start * 1000),
            moment(this.duration.end * 1000)
              .add(1, 'months')
              .endOf('week')
          );
          element.nativeElement.scrollLeft = _left;
        }
        if (_left < 2 * this.scale.width) {
          this.setDuration(
            moment(this.duration.start * 1000)
              .subtract(1, 'months')
              .startOf('week'),
            moment(this.duration.end * 1000)
          );
          element.nativeElement.scrollLeft = _left + 2 * this.scale.width;
        }
        break;
      case NgxGanntScalesType.month:
        if (
          _left >
          (this.scale.size - 0.5) * this.scale.width -
            (this.containerWidth - this.asideWidthStatic - 7)
        ) {
          this.setDuration(
            moment(this.duration.start * 1000),
            moment(this.duration.end * 1000)
              .add(1, 'years')
              .endOf('year')
          );
          element.nativeElement.scrollLeft = _left;
        }
        if (_left < 0.5 * this.scale.width) {
          this.setDuration(
            moment(this.duration.start * 1000)
              .subtract(1, 'years')
              .startOf('year'),
            moment(this.duration.end * 1000)
          );
          element.nativeElement.scrollLeft = _left + 0.5 * this.scale.width;
        }
        break;
      default:
        break;
    }
  }
}
