import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSucessComponent } from './request-sucess.component';

describe('RequestSucessComponent', () => {
  let component: RequestSucessComponent;
  let fixture: ComponentFixture<RequestSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
