import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { transactionStatus } from '../constants/transaction-status.enum';
import { TransactionInterface } from '../interfaces/api-responses/transaction.interface';

// array in local storage for registered users
const users = [
  {
    identificationNumber: '123456789',
    password: '123456789',
  },
];

const transactions: TransactionInterface[] = [
  {
    id: 19266836572662,
    ammount: 6266.33,
    status: transactionStatus.accepted,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572663,
    ammount: -23.86,
    status: transactionStatus.accepted,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572664,
    ammount: 6266.33,
    status: transactionStatus.declined,
    date: '2021-05-16T23:13:43Z',
    description: 'INT IVA',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572665,
    ammount: 6266.33,
    status: transactionStatus.accepted,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572666,
    ammount: -23.86,
    status: transactionStatus.declined,
    date: '2021-05-16T23:13:43Z',
    description: 'INT IVA',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572667,
    ammount: 6266.33,
    status: transactionStatus.accepted,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
  },
  {
    id: 19266836572668,
    ammount: 6266.33,
    status: transactionStatus.waiting,
    date: '2021-05-16T23:13:43Z',
    description: 'Payment Virt AS',
    currency: 'USD',
    balance: 6266.33,
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
      delay(100),
      mergeMap(handleRoute),
      materialize(),
      dematerialize()
    );

    function handleRoute() {
      switch (true) {
        case url.endsWith('authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('accounts') && method === 'GET':
          return getAccounts();
        case url.endsWith('transactions') && method === 'GET':
          return getTransactionsById();
        case url.match('transactions/[0-9]*') && method === 'GET':
          return getTransaction();
        case url.endsWith('/logout') && method === 'POST':
          return logout();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions
    function authenticate() {
      const { identificationNumber, password } = body;
      const user = users.find(
        (x: any) =>
          x.identificationNumber === identificationNumber &&
          x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: '1',
        firstName: 'Victor',
        lastName: 'Warren',
        lastLogin: '2021-05-16T23:13:43Z',
        balance: 17288.29,
        profilePicture:
          'https://mir-s3-cdn-cf.behance.net/user/115/64898d653829.572934d8cd6e4.jpg',
      });
    }

    function getTransaction() {
      const transaction = {
        id: 19266836572668,
        ammount: 6266.33,
        status: transactionStatus.waiting,
        date: '2021-05-16T23:13:43Z',
        description: 'Payment Virt AS',
        currency: 'USD',
        balance: 6266.33,
      };
      return ok(transaction);
    }

    function getTransactionsById() {
      return ok(transactions);
    }

    function logout() {
      return ok({});
    }

    function getAccounts() {
      return ok([
        {
          id: 1234543234,
          number: '1267451****',
          accountName: 'Wolfe',
          type: 'Checking',
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
          type: 'Savings',
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
          number: '7125781****',
          accountName: 'Kaiser',
          type: 'Savings',
          status: 'Deactived',
          currency: 'USD',
          balance: 23.86,
          cardNumber: '00113',
          name: 'Jhonathan Davis',
          expirationDate: '11/22',
          spent: 6299.55,
          limit: 10677.88,
        },
      ]);
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
