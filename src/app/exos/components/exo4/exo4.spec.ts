import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo4 } from './exo4';

describe('Exo4', () => {
  let component: Exo4;
  let fixture: ComponentFixture<Exo4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
