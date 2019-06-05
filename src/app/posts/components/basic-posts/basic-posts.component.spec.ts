import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPostsComponent } from './basic-posts.component';

describe('BasicPostsComponent', () => {
  let component: BasicPostsComponent;
  let fixture: ComponentFixture<BasicPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
