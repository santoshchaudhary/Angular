import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleFormComponent } from './life-cycle-form.component';

describe('LifeCycleFormComponent', () => {
  let component: LifeCycleFormComponent;
  let fixture: ComponentFixture<LifeCycleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
