import { Component, Input, OnInit } from '@angular/core';
import { accountTypes } from 'src/app/core/constants/accunt-type.enum';
@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent implements OnInit {
  @Input() number: number | string;
  @Input() name: string;
  @Input() expirationDate: string;
  @Input() type;
  @Input() remaining;
  bgclass: string | string[] = 'bg-secondary';
  progress = {
    info: '100%',
    danger: "0%"
  };

  constructor() { }

  ngOnInit(): void {
    this.setType()
    this.setProgress();
  }

  setProgress() {
    
    this.progress.danger = `${100 - this.remaining}%`;
    this.progress.info = `${this.remaining}%`;
  }

  setType() {
    switch (this.type) {
      case accountTypes.checking:
        this.bgclass = ['bg-primary', 'text-white'];
        break;
      case accountTypes.savings:
        this.bgclass = ['bg-secondary', 'text-black', 'border-0'];
        break;
      default:
        this.bgclass = ['bg-primary', 'text-white'];
        break;
    }
  }

}
