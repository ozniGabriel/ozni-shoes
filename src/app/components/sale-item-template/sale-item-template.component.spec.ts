import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleItemTemplateComponent } from './sale-item-template.component';

describe('SaleItemTemplateComponent', () => {
  let component: SaleItemTemplateComponent;
  let fixture: ComponentFixture<SaleItemTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleItemTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleItemTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
