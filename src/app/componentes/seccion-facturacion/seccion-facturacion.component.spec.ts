import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFacturacionComponent } from './seccion-facturacion.component';

describe('SeccionFacturacionComponent', () => {
  let component: SeccionFacturacionComponent;
  let fixture: ComponentFixture<SeccionFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionFacturacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
