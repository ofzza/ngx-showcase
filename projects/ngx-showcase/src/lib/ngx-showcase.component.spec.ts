import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShowcaseComponent } from './ngx-showcase.component';

describe('NgxShowcaseComponent', () => {
  let component: NgxShowcaseComponent;
  let fixture: ComponentFixture<NgxShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
