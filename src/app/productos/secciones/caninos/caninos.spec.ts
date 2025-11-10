import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caninos } from './caninos';

describe('Caninos', () => {
  let component: Caninos;
  let fixture: ComponentFixture<Caninos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caninos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caninos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
