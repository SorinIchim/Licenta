import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifeBarUVComponent } from './tarife-bar-uv.component';

describe('TarifeBarUVComponent', () => {
  let component: TarifeBarUVComponent;
  let fixture: ComponentFixture<TarifeBarUVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifeBarUVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifeBarUVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
