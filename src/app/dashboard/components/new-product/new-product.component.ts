import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/core/services/session/session.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { NewProductInterface } from 'src/app/core/interfaces/new-product.interface';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';
import { Router } from '@angular/router';
import { RequestSucessComponent } from '../request-sucess/request-sucess.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  products: {id:string, name:string}[] = [
    {
      id: 'agile_credit',
      name: 'Agile Credit'
    },
    {
      id: 'credit_card',
      name: 'Credit Card'
    },
    {
      id: 'savings_account',
      name: 'Savings Account'
    },
    {
      id: 'house_leasing',
      name: 'House Leasing'
    },
  ]

  constructor(
    public activeModal: NgbActiveModal, 
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private sessionService: SessionService, 
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      product: ['', Validators.required],
      cellphone: ['', Validators.required],
      monthlyIncome: ['', Validators.required]
    })
    this.productForm.valueChanges.subscribe(console.log);
  }

  onSubmit(): void {
    const userId = this.sessionService.getUserId();
    const formValues = this.productForm.value;
    const productForm: NewProductInterface = {
      userId: userId,
      productType: formValues.product,
      cellPhone: formValues.cellphone,
      monthlyIncome: formValues.monthlyIncome,
    }
    this.productService.requestNewProduct(productForm).subscribe({
      next: response => {
        this.modalService.open(RequestSucessComponent, {size: 'xl'});
        this.activeModal.close();
      }
    });
  }

}
