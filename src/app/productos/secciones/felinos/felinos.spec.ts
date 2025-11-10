import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Felinos } from './felinos';

describe('Felinos', () => {
  let component: Felinos;
  let fixture: ComponentFixture<Felinos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Felinos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Felinos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
