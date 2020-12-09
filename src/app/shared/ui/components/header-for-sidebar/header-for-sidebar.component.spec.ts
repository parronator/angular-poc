import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForSidebarComponent } from './header-for-sidebar.component';

describe('HeaderComponent', () => {
  let component: HeaderForSidebarComponent;
  let fixture: ComponentFixture<HeaderForSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderForSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
