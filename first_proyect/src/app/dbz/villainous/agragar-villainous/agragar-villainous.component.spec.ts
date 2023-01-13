import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgragarVillainousComponent } from './agragar-villainous.component';

describe('AgragarVillainousComponent', () => {
  let component: AgragarVillainousComponent;
  let fixture: ComponentFixture<AgragarVillainousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgragarVillainousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgragarVillainousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
