import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  headers = [
    { label: 'Type', key: 'type' }, 
    { label: "Account Name", key: "accountName" }, 
    { label: 'Status', key: 'status' },
    { label: 'Currency', key: 'currency' }, 
    { label: 'Balance', key: 'balance' }
  ];
  dataSource = [
    {
      icon: 'fa fa-piggy-bank',
      type: 'saving',
      accountName: '1234567**** - WOLFE',
      status: 'Active',
      currency: 'USD',
      balance: '$10,000.33'
    },
    {
      icon: 'fas fa-money-check',
      type: 'checking',
      accountName: '1234567**** - WOLFE',
      status: 'Deactive',
      currency: 'USD',
      balance: '$10,000.33'
    },
    {
      icon: 'fa fa-piggy-bank',
      type: 'saving',
      accountName: '1234567**** - WOLFE',
      status: 'Active',
      currency: 'USD',
      balance: '$10,000.33'
    },
    {
      icon: 'fa fa-piggy-bank',
      type: 'saving',
      accountName: '1234567**** - WOLFE',
      status: 'Active',
      currency: 'USD',
      balance: '$10,000.33'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
