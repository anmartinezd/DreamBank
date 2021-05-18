import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../../../core/models/user.model';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  @Input() user: UserModel;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onNewProduct(){
    const modalRef = this.modalService.open(NewProductComponent,{size:'xl'});
  }

}
