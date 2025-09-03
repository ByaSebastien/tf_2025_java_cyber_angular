import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo5Detail } from './demo5-detail';

describe('Demo5Detail', () => {
  let component: Demo5Detail;
  let fixture: ComponentFixture<Demo5Detail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo5Detail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo5Detail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
