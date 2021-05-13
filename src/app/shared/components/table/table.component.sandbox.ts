import { sandboxOf } from 'angular-playground';
import { TableComponent } from './table.component';

export default sandboxOf(TableComponent)
  .add('TableComponent', {
    template: `
    <div class="py-5 px-5">
    <app-table [headers]="headers" [dataSource]="dataSource" [handlerHeaderLink]="handlerHeaderLink"></app-table>
    </div>
    `,
    context:
    {
      headers: [
        { label: 'Type', key: 'type' }, 
        { label: "Account Name", key: "accountName" }, 
        { label: 'Status', key: 'status' },
        { label: 'Currency', key: 'currency' }, 
        { label: 'Balance', key: 'balance' }
      ],
      dataSource: [
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
      ],
      handlerHeaderLink: {
        linkText: 'ALL ACCOUNTS',
        handleClick: (event) => { return console.log(event)}
      }
    }
  });
