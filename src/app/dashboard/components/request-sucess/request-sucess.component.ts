import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-sucess',
  templateUrl: './request-sucess.component.html',
  styleUrls: ['./request-sucess.component.scss']
})
export class RequestSucessComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

}
