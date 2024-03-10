import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemaindersComponentComponent } from './remainders-component.component';

describe('RemaindersComponentComponent', () => {
  let component: RemaindersComponentComponent;
  let fixture: ComponentFixture<RemaindersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemaindersComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemaindersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
