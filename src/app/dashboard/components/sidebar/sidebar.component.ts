import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuOptions: {label:string, submenu: {label:string, link:string}[]}[] = [
    {
      label: "Accounts",
      submenu: [
        {
          label: "Account Summary",
          link: "accounts/account-summary",
        },
        {
          label: "Accounts",
          link: "accounts/accounts",
        }
      ]
    },
    {
      label: "Transactions",
      submenu: [
        {
          label: "Inquire Transactions",
          link: "transactions/inquire-transactions",
        },
        {
          label: "Fund Transfer",
          link: "transactions/fund-transfer",
        },
        {
          label: "Bill Payments",
          link: "transactions/bill-payments",
        }
      ]
    },
    {
      label: "Services",
      submenu: [
        {
          label: "Account Statements",
          link: "services/account-statements",
        },
        {
          label: "Enroll New Account",
          link: "services/enroll-new-account",
        },
        {
          label: "Enroll a Credt Card",
          link: "services/enroll-a-credit-card",
        },
        {
          label: "Card Replacement",
          link: "services/card-replacement",
        },
        {
          label: "New Checkbook",
          link: "services/new-checkbook",
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
