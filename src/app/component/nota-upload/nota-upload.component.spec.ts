import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaUploadComponent } from './nota-upload.component';

describe('NotaUploadComponent', () => {
  let component: NotaUploadComponent;
  let fixture: ComponentFixture<NotaUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaUploadComponent]
    });
    fixture = TestBed.createComponent(NotaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
