import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
const users = [{
    identificationNumber: "123456789",
    password: "123456789"
}];

const transactions = [
    {
        transactionId: 1,
        ammount: 6266.33,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'Payment Virt AS',
        currency: 'USD',
        balance: 6266.33, 
    },
    {
        transactionId: 2,
        ammount: -23.86,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'Payment Virt AS',
        currency: 'USD',
        balance: 6266.33, 
    },
    {
        transactionId: 3,
        ammount: 6266.33,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'INT IVA',
        currency: 'USD',
        balance: 6266.33, 
    },
    {
        transactionId: 4,
        ammount: 6266.33,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'Payment Virt AS',
        currency: 'USD',
        balance: 6266.33, 
    },
    {
        transactionId: 5,
        ammount: -23.86,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'INT IVA',
        currency: 'USD',
        balance: 6266.33, 
    },
    {
        transactionId: 6,
        ammount: 6266.33,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'Payment Virt AS',
        currency: 'USD',
        balance: 6266.33, 
    },
    {
        transactionId: 7,
        ammount: 6266.33,
        transactionStatus: 'Accepted',
        date: '2021-05-16T23:13:43Z',
        description: 'Payment Virt AS',
        currency: 'USD',
        balance: 6266.33, 
    },
    
]

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute), materialize(), dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('1/accounts') && method === 'GET':
                    return getAccounts();
                case url.match('1/transactions') && method === 'GET':
                    return getTransactionsById();
                case url.match('2/transactions') && method === 'GET':
                    return getTransactionsById();
                case url.match('3/transactions') && method === 'GET':
                    return getTransactionsById();
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
            const user = users.find((x: any) => x.identificationNumber === identificationNumber && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: "1",
                firstName: "Victor",
                lastName: "Warren",
                lastLogin: "2021-05-16T23:13:43Z",
                balance: 17288.29,
                profilePicture: "https://mir-s3-cdn-cf.behance.net/user/115/64898d653829.572934d8cd6e4.jpg",
            })
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
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
                    id: '1',
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
                    id: '2',
                    number: '5719371****',
                    accountName: 'Maengue',
                    type: 'Savings',
                    status: 'Active',
                    currency: 'USD',
                    balance: 10998.10,
                    cardNumber: '00113',
                    name: 'Michael Scott',
                    expirationDate: '11/22',
                    spent: 6299.55,
                    limit: 12677.88,
                },
                {
                    id: '3',
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
            ])
        }
        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
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
    multi: true
};

