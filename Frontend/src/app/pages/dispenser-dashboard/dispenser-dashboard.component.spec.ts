import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserDashboardComponent } from './dispenser-dashboard.component';

describe('DispenserDashboardComponent', () => {
  let component: DispenserDashboardComponent;
  let fixture: ComponentFixture<DispenserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispenserDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispenserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
