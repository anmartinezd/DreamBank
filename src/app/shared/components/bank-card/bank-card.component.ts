import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent implements OnInit {
  @Input() productNumber: number | string;
  @Input() ownerName: string;
  @Input() expirationDate: string;
 
  constructor() { }

  ngOnInit(): void {
    this.productNumber = [...(this.productNumber.toString())].reduce((p, c, i) => p += (i && !(i % 4)) ? " " + c : c, "");
  }

}
