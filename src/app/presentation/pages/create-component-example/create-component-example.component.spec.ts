import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentExampleComponent } from './create-component-example.component';

describe('CreateComponentExampleComponent', () => {
  let component: CreateComponentExampleComponent;
  let fixture: ComponentFixture<CreateComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
