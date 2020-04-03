import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincurrentneedComponent } from './admincurrentneed.component';

describe('AdmincurrentneedComponent', () => {
  let component: AdmincurrentneedComponent;
  let fixture: ComponentFixture<AdmincurrentneedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincurrentneedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincurrentneedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
