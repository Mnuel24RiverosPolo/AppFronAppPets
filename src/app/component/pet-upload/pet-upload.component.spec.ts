import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetUploadComponent } from './pet-upload.component';

describe('PetUploadComponent', () => {
  let component: PetUploadComponent;
  let fixture: ComponentFixture<PetUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetUploadComponent]
    });
    fixture = TestBed.createComponent(PetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
