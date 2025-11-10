import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reptiles } from './reptiles';

describe('Reptiles', () => {
  let component: Reptiles;
  let fixture: ComponentFixture<Reptiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reptiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reptiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
