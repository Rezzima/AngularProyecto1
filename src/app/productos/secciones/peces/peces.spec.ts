import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peces } from './peces';

describe('Peces', () => {
  let component: Peces;
  let fixture: ComponentFixture<Peces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
