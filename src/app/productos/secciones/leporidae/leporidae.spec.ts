import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leporidae } from './leporidae';

describe('Leporidae', () => {
  let component: Leporidae;
  let fixture: ComponentFixture<Leporidae>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leporidae]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leporidae);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
