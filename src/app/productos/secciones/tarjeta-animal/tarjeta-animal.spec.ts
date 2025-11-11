import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAnimal } from './tarjeta-animal';

describe('TarjetaAnimal', () => {
  let component: TarjetaAnimal;
  let fixture: ComponentFixture<TarjetaAnimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaAnimal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaAnimal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
