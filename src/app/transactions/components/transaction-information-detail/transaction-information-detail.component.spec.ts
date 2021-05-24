import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInformationDetailComponent } from './transaction-information-detail.component';

describe('TransactionInformationDetailComponent', () => {
  let component: TransactionInformationDetailComponent;
  let fixture: ComponentFixture<TransactionInformationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionInformationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
