import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../../../core/models/account.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetComponent implements OnInit {
  @Input() accounts: AccountModel[];
  budgetLimit: number = 0;
  totalSpent: number = 0;
  spentPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.accounts);
    this.getGeneralBudgetStatus();
  }


  getGeneralBudgetStatus() {
    if(this.accounts) {
      for (const account of this.accounts) {
        this.budgetLimit += account.limit;
        this.totalSpent += account.spent;
      }
      this.spentPercentage =  (this.totalSpent *100)/ this.budgetLimit;
    }
  }

}
