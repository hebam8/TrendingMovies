import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductComponent } from './prouduct.component';

describe('ProuductComponent', () => {
  let component: ProuductComponent;
  let fixture: ComponentFixture<ProuductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
