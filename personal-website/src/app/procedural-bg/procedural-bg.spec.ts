import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduralBg } from './procedural-bg';

describe('ProceduralBg', () => {
  let component: ProceduralBg;
  let fixture: ComponentFixture<ProceduralBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduralBg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduralBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
