import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../interfaces/customer.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  customers$: Observable<Customer> | any;

  constructor(private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.customers$) {
        this.fetchCustomers();
      }
    }
  }

  fetchCustomers() {
    this.customers$ = this.http.get<any>(`${this.API_URL}clients`);
  }

  getCustomers() {
    return this.customers$.pipe(
      map((customers: Customer[]) => {
        return Array.from({ length: 7 }, () => customers);
      })
    );
  }
}
