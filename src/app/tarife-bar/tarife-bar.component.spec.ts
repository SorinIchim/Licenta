import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifeBarComponent } from './tarife-bar.component';

describe('TarifeBarComponent', () => {
  let component: TarifeBarComponent;
  let fixture: ComponentFixture<TarifeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
