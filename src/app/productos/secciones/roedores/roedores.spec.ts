import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roedores } from './roedores';

describe('Roedores', () => {
  let component: Roedores;
  let fixture: ComponentFixture<Roedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roedores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roedores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
