import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserPageComponent } from './dispenser-page.component';

describe('DispenserPageComponent', () => {
  let component: DispenserPageComponent;
  let fixture: ComponentFixture<DispenserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispenserPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispenserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
