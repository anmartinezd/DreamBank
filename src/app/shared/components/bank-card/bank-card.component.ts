import { Component, Input, OnInit } from '@angular/core';
import { bgType } from './models/background-type';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent implements OnInit {
  @Input() productNumber: number | string;
  @Input() ownerName: string;
  @Input() expirationDate: string;
  @Input() bgType;
  @Input() remainingAmount;
  bgclass: string | string[] = 'bg-secondary';
  progress = {
    info: '100%',
    danger: "0%"
  };

  constructor() { }

  ngOnInit(): void {
    this.setType()
    this.setProgress();
    this.getDottedNumber()
  }


  getDottedNumber() {
    const numberToDotted = [...(this.productNumber.toString())];
    const firstTelveNumbers = numberToDotted.slice(0,12).map(n => '*');
    const lastnumbers = numberToDotted.slice(12,17);
    this.productNumber = [...firstTelveNumbers,...lastnumbers].reduce((p, c, i) => p += (i && !(i % 4)) ? " " + c : c, "");
  }

  setProgress() {
    
    this.progress.danger = `${100 - this.remainingAmount}%`;
    this.progress.info = `${this.remainingAmount}%`;
  }

  setType() {
    switch (this.bgType) {
      case bgType.primary:
        this.bgclass = ['bg-primary', 'text-white'];
        break;
      case bgType.secondary:
        this.bgclass = ['bg-secondary', 'text-black', 'border-0'];
        break;
      default:
        this.bgclass = ['bg-primary', 'text-white'];
        break;
    }
  }

}
