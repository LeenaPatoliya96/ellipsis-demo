import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisComponentComponent } from './ellipsis-component.component';

describe('EllipsisComponentComponent', () => {
  let component: EllipsisComponentComponent;
  let fixture: ComponentFixture<EllipsisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllipsisComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EllipsisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
