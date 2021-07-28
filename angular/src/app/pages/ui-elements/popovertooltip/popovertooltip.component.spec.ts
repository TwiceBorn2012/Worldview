import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopovertooltipComponent } from './popovertooltip.component';

describe('PopovertooltipComponent', () => {
  let component: PopovertooltipComponent;
  let fixture: ComponentFixture<PopovertooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopovertooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopovertooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
