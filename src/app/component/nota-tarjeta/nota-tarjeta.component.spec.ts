import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaTarjetaComponent } from './nota-tarjeta.component';

describe('NotaTarjetaComponent', () => {
  let component: NotaTarjetaComponent;
  let fixture: ComponentFixture<NotaTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaTarjetaComponent]
    });
    fixture = TestBed.createComponent(NotaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
