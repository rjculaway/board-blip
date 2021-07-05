import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardFormComponent } from './billboard-form.component';

describe('BillboardFormComponent', () => {
  let component: BillboardFormComponent;
  let fixture: ComponentFixture<BillboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillboardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
