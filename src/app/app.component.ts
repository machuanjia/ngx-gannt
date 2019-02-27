import { Component, HostBinding } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class.demo-wrap') isWrap = true;
  title = 'ngx-gannt';
  public view = 'task';
  public configuration = {
    view: 0,
    date_type: 0
  };
  public data = [
    {
      id: 1,
      name: 'root1',
      level: 0,
      children: [
        { id: 2, name: 'child1', level: 1 },
        { id: 3, name: 'child2', level: 1 }
      ]
    },
    {
      id: 4,
      name: 'root2',
      level: 0,
      children: [
        { id: 5, name: 'child2.1', level: 1 },
        {
          id: 6,
          name: 'child2.2',
          level: 1,
          children: [{ id: 7, name: 'subsub3', level: 2 }]
        }
      ]
    },
    {
      id: 1,
      name: 'root1',
      level: 0,
      children: [
        { id: 2, name: 'child1', level: 1 },
        { id: 3, name: 'child2', level: 1 }
      ]
    }
  ];
  dateOnChange(dates: { start: number; end: number }) {
    console.log(dates);
  }
}
