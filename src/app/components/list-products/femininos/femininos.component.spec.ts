import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemininosComponent } from './femininos.component';

describe('FemininosComponent', () => {
  let component: FemininosComponent;
  let fixture: ComponentFixture<FemininosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemininosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemininosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
