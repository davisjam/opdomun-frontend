import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeOneOfUsComponent } from './be-one-of-us.component';

describe('BeOneOfUsComponent', () => {
  let component: BeOneOfUsComponent;
  let fixture: ComponentFixture<BeOneOfUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeOneOfUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeOneOfUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
