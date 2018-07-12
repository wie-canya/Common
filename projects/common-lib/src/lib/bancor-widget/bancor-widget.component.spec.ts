import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancorWidgetComponent } from './bancor-widget.component';

describe('BancorWidgetComponent', () => {
  let component: BancorWidgetComponent;
  let fixture: ComponentFixture<BancorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
