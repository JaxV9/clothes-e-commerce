import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesCardListPreviewComponent } from './clothes-card-list-preview.component';

describe('ClothesCardListPreviewComponent', () => {
  let component: ClothesCardListPreviewComponent;
  let fixture: ComponentFixture<ClothesCardListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothesCardListPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesCardListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
