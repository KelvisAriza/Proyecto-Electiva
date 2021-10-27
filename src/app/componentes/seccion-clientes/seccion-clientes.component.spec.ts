import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionClientesComponent } from './seccion-clientes.component';

describe('SeccionClientesComponent', () => {
  let component: SeccionClientesComponent;
  let fixture: ComponentFixture<SeccionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
