import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExamplesComponent } from './layout-examples.component';

describe('LayoutExamplesComponent', () => {
  let component: LayoutExamplesComponent;
  let fixture: ComponentFixture<LayoutExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
