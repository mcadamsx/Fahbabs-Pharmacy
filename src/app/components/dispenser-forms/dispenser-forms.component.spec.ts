import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserFormsComponent } from './dispenser-forms.component';

describe('DispenserFormsComponent', () => {
  let component: DispenserFormsComponent;
  let fixture: ComponentFixture<DispenserFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispenserFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispenserFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
