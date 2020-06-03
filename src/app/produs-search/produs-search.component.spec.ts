import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdusSearchComponent } from './produs-search.component';

describe('ProdusSearchComponent', () => {
  let component: ProdusSearchComponent;
  let fixture: ComponentFixture<ProdusSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdusSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdusSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
