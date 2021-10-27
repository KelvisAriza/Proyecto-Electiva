import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPrestamosComponent } from './seccion-prestamos.component';

describe('SeccionPrestamosComponent', () => {
  let component: SeccionPrestamosComponent;
  let fixture: ComponentFixture<SeccionPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPrestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
