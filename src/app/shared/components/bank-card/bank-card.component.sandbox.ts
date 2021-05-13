import { sandboxOf } from 'angular-playground';
import { BankCardComponent } from './bank-card.component';

export default sandboxOf(BankCardComponent)
  .add('BankCardComponent', {
    template: `
    <div class="wrapper">
      <app-bank-card [ownerName]="product.ownerName" [productNumber]="product.productNumber" [expirationDate]="product.expirationDate"></app-bank-card>
    </div>
    `,
    context: {
      product: {
        ownerName: 'Richard Willis',
        productNumber: 1112345678901010,
        expirationDate: "11/27"
      }
    },
    styles: [
      'wrapper:{ height: 12vh; width: 12vw;} '
    ]
  });
