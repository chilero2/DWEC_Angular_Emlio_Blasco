import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVillainousComponent } from './list-villainous.component';

describe('ListVillainousComponent', () => {
  let component: ListVillainousComponent;
  let fixture: ComponentFixture<ListVillainousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVillainousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVillainousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
