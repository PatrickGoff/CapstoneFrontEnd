import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSellersComponent } from './add-edit-sellers.component';

describe('AddEditSellersComponent', () => {
  let component: AddEditSellersComponent;
  let fixture: ComponentFixture<AddEditSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
