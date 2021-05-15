import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  headers = [
    { label: 'Date', key: 'date' }, 
    { label: "Desciption", key: "description" }, 
    { label: 'Currency', key: 'currency' },
    { label: 'Value', key: 'value' }, 
    { label: 'Balance', key: 'balance' }
  ];

  dataSource = [
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
    {
      id: "123456543212345",
      date: '11/02/2021',
      description: 'Payment Virt AS',
      currency: 'USD',
      value: '$6,266.33',
      balance: '$6,266.33'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleRowClicked(transaction){
    console.log(transaction);
  }

}
