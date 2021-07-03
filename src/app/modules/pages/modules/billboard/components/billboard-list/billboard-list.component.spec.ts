import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardListComponent } from './billboard-list.component';

describe('BillboardListComponent', () => {
  let component: BillboardListComponent;
  let fixture: ComponentFixture<BillboardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillboardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
