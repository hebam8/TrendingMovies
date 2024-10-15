import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductdetailesComponent } from './prouductdetailes.component';

describe('ProuductdetailesComponent', () => {
  let component: ProuductdetailesComponent;
  let fixture: ComponentFixture<ProuductdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductdetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
