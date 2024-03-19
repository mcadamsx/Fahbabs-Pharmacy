import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierPageComponent } from './dispenser-page.component';

describe('CashierPageComponent', () => {
  let component: CashierPageComponent;
  let fixture: ComponentFixture<CashierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
