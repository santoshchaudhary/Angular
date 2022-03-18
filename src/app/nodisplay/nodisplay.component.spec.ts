import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodisplayComponent } from './nodisplay.component';

describe('NodisplayComponent', () => {
  let component: NodisplayComponent;
  let fixture: ComponentFixture<NodisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
