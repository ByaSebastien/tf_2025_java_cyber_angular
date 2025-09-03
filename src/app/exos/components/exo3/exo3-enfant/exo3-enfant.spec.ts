import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo3Enfant } from './exo3-enfant';

describe('Exo3Enfant', () => {
  let component: Exo3Enfant;
  let fixture: ComponentFixture<Exo3Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo3Enfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo3Enfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
