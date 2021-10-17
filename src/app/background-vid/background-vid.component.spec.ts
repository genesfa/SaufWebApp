import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundVidComponent } from './background-vid.component';

describe('BackgroundVidComponent', () => {
  let component: BackgroundVidComponent;
  let fixture: ComponentFixture<BackgroundVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundVidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
