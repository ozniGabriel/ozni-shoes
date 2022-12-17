import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasculinosComponent } from './masculinos.component';

describe('MasculinosComponent', () => {
  let component: MasculinosComponent;
  let fixture: ComponentFixture<MasculinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasculinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasculinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
