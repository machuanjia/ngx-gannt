import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGanntComponent } from './ngx-gannt.component';

describe('NgxGanntComponent', () => {
  let component: NgxGanntComponent;
  let fixture: ComponentFixture<NgxGanntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGanntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGanntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
