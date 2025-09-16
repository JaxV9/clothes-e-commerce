import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheCardComponent } from './clothe-card.component';

describe('ClotheCardComponent', () => {
  let component: ClotheCardComponent;
  let fixture: ComponentFixture<ClotheCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClotheCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClotheCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
