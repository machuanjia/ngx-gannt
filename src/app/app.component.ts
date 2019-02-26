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
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    },{
      id: 1,
      name: 'root1',
      children: [{ id: 2, name: 'child1' }, { id: 3, name: 'child2' }]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }]
        }
      ]
    }
  ];
  dateOnChange(dates: { start: number; end: number }) {
    console.log(dates);
  }
}
