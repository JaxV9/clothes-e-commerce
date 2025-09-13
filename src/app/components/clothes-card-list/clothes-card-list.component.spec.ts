import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesCardListComponent } from './clothes-card-list.component';

describe('ClothesCardListComponent', () => {
  let component: ClothesCardListComponent;
  let fixture: ComponentFixture<ClothesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothesCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
