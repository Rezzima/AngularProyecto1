import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aves } from './aves';

describe('Aves', () => {
  let component: Aves;
  let fixture: ComponentFixture<Aves>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aves]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aves);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
