import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierFormComponent } from './cashier-form.component';

describe('CashierFormComponent', () => {
  let component: CashierFormComponent;
  let fixture: ComponentFixture<CashierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CashierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
