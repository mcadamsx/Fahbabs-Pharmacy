import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineFormComponent } from './add-medicine-form.component';

describe('AddMedicineFormComponent', () => {
  let component: AddMedicineFormComponent;
  let fixture: ComponentFixture<AddMedicineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMedicineFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMedicineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
