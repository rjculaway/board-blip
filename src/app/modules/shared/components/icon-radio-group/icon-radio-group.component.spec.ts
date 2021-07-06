import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRadioGroupComponent } from './icon-radio-group.component';

describe('IconRadioGroupComponent', () => {
  let component: IconRadioGroupComponent;
  let fixture: ComponentFixture<IconRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconRadioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
