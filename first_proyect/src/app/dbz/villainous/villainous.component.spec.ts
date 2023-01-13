import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainousComponent } from './villainous.component';

describe('VillainousComponent', () => {
  let component: VillainousComponent;
  let fixture: ComponentFixture<VillainousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillainousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
