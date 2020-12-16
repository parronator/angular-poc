import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionExampleComponent } from './collection-example.component';

describe('CollectionExampleComponent', () => {
  let component: CollectionExampleComponent;
  let fixture: ComponentFixture<CollectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
