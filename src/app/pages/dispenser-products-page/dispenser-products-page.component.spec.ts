import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserProductsPageComponent } from './dispenser-products-page.component';

describe('DispenserProductsPageComponent', () => {
  let component: DispenserProductsPageComponent;
  let fixture: ComponentFixture<DispenserProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispenserProductsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispenserProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
