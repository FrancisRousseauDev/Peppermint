import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotCollectionsComponent } from './hot-collections.component';

describe('HotCollectionsComponent', () => {
  let component: HotCollectionsComponent;
  let fixture: ComponentFixture<HotCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
