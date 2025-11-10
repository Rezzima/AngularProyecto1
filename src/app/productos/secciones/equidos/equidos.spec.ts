import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Equidos } from './equidos';

describe('Equidos', () => {
  let component: Equidos;
  let fixture: ComponentFixture<Equidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Equidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Equidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
