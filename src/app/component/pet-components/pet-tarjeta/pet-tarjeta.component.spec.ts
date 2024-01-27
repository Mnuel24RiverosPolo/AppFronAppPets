import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTarjetaComponent } from './pet-tarjeta.component';

describe('PetTarjetaComponent', () => {
  let component: PetTarjetaComponent;
  let fixture: ComponentFixture<PetTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetTarjetaComponent]
    });
    fixture = TestBed.createComponent(PetTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
