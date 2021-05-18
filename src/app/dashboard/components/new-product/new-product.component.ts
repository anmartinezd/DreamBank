import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      product: [''],
      cellphone: [''],
      montlyIncome: ['']
    })

  }

  onSubmit() {

  }

}
