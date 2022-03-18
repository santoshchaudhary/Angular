import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependecyInjectionComponent } from './dependecy-injection.component';

describe('DependecyInjectionComponent', () => {
  let component: DependecyInjectionComponent;
  let fixture: ComponentFixture<DependecyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependecyInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependecyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
