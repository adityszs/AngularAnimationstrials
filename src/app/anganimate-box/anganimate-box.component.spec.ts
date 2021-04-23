import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnganimateBoxComponent } from './anganimate-box.component';

describe('AnganimateBoxComponent', () => {
  let component: AnganimateBoxComponent;
  let fixture: ComponentFixture<AnganimateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnganimateBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnganimateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
