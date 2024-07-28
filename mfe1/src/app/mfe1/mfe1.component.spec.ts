import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1Component } from './mfe1.component';

describe('Mfe1Component', () => {
  let component: Mfe1Component;
  let fixture: ComponentFixture<Mfe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfe1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
