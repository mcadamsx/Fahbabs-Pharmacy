import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserProductsComponent } from './dispenser-products.component';

describe('DispenserProductsComponent', () => {
  let component: DispenserProductsComponent;
  let fixture: ComponentFixture<DispenserProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispenserProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispenserProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
