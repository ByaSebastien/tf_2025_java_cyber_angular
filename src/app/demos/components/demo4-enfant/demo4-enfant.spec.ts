import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo4Enfant } from './demo4-enfant';

describe('Demo4Enfant', () => {
  let component: Demo4Enfant;
  let fixture: ComponentFixture<Demo4Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo4Enfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo4Enfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
