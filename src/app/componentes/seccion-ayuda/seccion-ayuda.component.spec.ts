import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAyudaComponent } from './seccion-ayuda.component';

describe('SeccionAyudaComponent', () => {
  let component: SeccionAyudaComponent;
  let fixture: ComponentFixture<SeccionAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
