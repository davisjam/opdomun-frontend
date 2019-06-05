import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumPostsComponent } from './premium-posts.component';

describe('PremiumPostsComponent', () => {
  let component: PremiumPostsComponent;
  let fixture: ComponentFixture<PremiumPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
