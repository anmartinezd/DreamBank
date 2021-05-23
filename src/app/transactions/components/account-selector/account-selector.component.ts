import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { accountTypes } from 'src/app/core/constants/accunt-type.enum';
import { AccountModel } from 'src/app/core/models/account.model';

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSelectorComponent implements OnInit, OnChanges {
  @Input() accounts: AccountModel[];
  @Output() accountSelectionChange:  EventEmitter<string> =  new EventEmitter();
  constructor() {}
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.accounts){
    console.log(this.accounts);
    }
  }

  onSelectChange(accountId: string): void {
    this.accountSelectionChange.emit(accountId);
  }
}
