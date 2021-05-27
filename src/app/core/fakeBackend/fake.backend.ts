import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpParams,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { transactionStatus } from '../constants/transaction-status.enum';
import { TransactionInterface } from '../interfaces/api-responses/transaction.interface';
import { UserInterface } from '../interfaces/api-responses/user.interface';
import { AccountInterface } from '../interfaces/api-responses/account.interface';
import { accountTypes } from '../constants/accunt-type.enum';
import { differenceInMonths } from 'date-fns'
// array in local storage for registered users
const credentialsList = [
  {
    identificationNumber: '123456789',
    password: '123456789',
    userId: 11234567898765,
    token: 'fake-token-11234567898765',
  },
  {
    identificationNumber: '123',
    password: '123',
    userId: 1123456789,
    token: 'fake-token-1123456789',
  },
];

const users: UserInterface[] = [
  {
    id: 11234567898765,
    firstName: 'Victor',
    lastName: 'Warren',
    lastLogin: '2021-05-16T23:13:43Z',
    balance: 17288.29,
    profilePicture:
      'https://mir-s3-cdn-cf.behance.net/user/115/64898d653829.572934d8cd6e4.jpg',
  },
  {
    id: 1123456789,
    firstName: 'Anderson',
    lastName: 'Martínez Duque',
    lastLogin: '2021-05-16T23:13:43Z',
    balance: 17288.29,
    profilePicture:
      'https://static.platzi.com/media/avatars/avatars/anderson_M_D_6ceb03a8-fd7a-4f19-9451-145769e1ca62.jpg',
  },
];

const transactions: TransactionInterface[] = [
  {
    id: 19266836572662,
    accountId: 123456,
    ammount: 3449.22,
    status: transactionStatus.accepted,
    date: '2020-06-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572663,
    accountId: 123456,
    ammount: -23.86,
    status: transactionStatus.accepted,
    date: '2020-11-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572664,
    accountId: 123456,
    ammount: 4449.22,
    status: transactionStatus.declined,
    date: '2020-12-16T23:13:43Z',
    description: 'INT IVA',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572665,
    accountId: 123456,
    ammount: 5999.22,
    status: transactionStatus.accepted,
    date: '2020-10-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572666,
    accountId: 12345678,
    ammount: -233.86,
    status: transactionStatus.declined,
    date: '2021-05-16T23:13:43Z',
    description: 'INT IVA',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572667,
    accountId: 12345678,
    ammount: 6266.33,
    status: transactionStatus.accepted,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 12345678,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2020-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2020-07-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-03-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-04-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    accountId: 123456789,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
];

const accounts: AccountInterface[] = [
  {
    id: 1234543234,
    number: '1267451****',
    accountName: 'Wolfe',
    userId: 11234567898765,
    type: accountTypes.savings,
    status: 'Active',
    currency: 'USD',
    balance: 6266.33,
    cardNumber: '00113',
    name: 'Jhonathan Davis',
    expirationDate: '11/22',
    spent: 6299.55,
    limit: 10677.88,
  },
  {
    id: 234634214362762,
    number: '5719371****',
    accountName: 'Maengue',
    userId: 11234567898765,
    type: accountTypes.checking,
    status: 'Active',
    currency: 'USD',
    balance: 10998.1,
    cardNumber: '00113',
    name: 'Michael Scott',
    expirationDate: '11/22',
    spent: 6299.55,
    limit: 12677.88,
  },
  {
    id: 76875128475192845,
    userId: 11234567898765,
    number: '7125781****',
    accountName: 'Kaiser',
    type: accountTypes.savings,
    status: 'Deactived',
    currency: 'USD',
    balance: 23.86,
    cardNumber: '00113',
    name: 'Jhonathan Davis',
    expirationDate: '11/22',
    spent: 6299.55,
    limit: 10677.88,
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(
      delay(500),
      mergeMap(handleRoute),
      materialize(),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case url.endsWith('authenticate') && method === 'POST':
          return authenticate();
        case url.match(new RegExp('.*/users/[0-9]*')) && method === 'GET':
          const userId = url.split('/').pop();
          return getUser(parseInt(userId));
        case url.endsWith('accounts') && method === 'GET':
          return getAccounts();
        case url.endsWith('transactions') && method === 'GET':
          return getTransactions(request.params);
        case url.match('transactions/[0-9]*') && method === 'GET':
          const transactionId = url.split('/').pop();
          return getTransaction(parseInt(transactionId));
        case url.endsWith('/request') && method === 'POST':
          return requestNewProduct();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions
    /**
     * handle authentication with password and Id
     * @returns {token:string, userId:number}
     */
    function authenticate() {
      const { identificationNumber, password } = body;
      const credentials = credentialsList.find(
        (x: any) =>
          x.identificationNumber === identificationNumber &&
          x.password === password
      );
      if (!credentials) return error('Username or password is incorrect');
      return ok({ token: credentials.token, userId: credentials.userId });
    }

    /** */
    function getUser(userId: number): Observable<HttpResponse<UserInterface>> {
      const user = users.find((user) => (user.id = userId));
      return ok(user);
    }

    function getAccounts() {
      return ok(accounts);
    }

    function getTransaction(transactionId: number) {
      const transaction = transactions.find(transaction => transaction.id === transactionId);
      return ok(transaction);
    }

    function getTransactions(params: HttpParams) {
      const from = params.get('from');
      const to = params.get('to');
      const difference = differenceInMonths(new Date(from),new Date(to));
      console.log(difference);
      return ok(transactions.filter(transaction => 
        differenceInMonths(new Date(from),new Date(transaction.date)) <= difference
      ));
    }

    function requestNewProduct() {
      return ok('request sucess');
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorized' } });
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
