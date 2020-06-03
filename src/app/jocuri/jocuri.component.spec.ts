import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JocuriComponent } from './jocuri.component';

describe('JocuriComponent', () => {
  let component: JocuriComponent;
  let fixture: ComponentFixture<JocuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JocuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JocuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
