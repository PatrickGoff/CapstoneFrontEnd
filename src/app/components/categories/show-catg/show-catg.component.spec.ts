import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatgComponent } from './show-catg.component';

describe('ShowCatgComponent', () => {
  let component: ShowCatgComponent;
  let fixture: ComponentFixture<ShowCatgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCatgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
