import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  customers$: Observable<Customer[]>;

  constructor(private http: HttpClient) {}

  fetchCustomers() {
    this.customers$ = this.http.get<any>(`${this.API_URL}clients`);
  }

  getCustomers() {
    if (!this.customers$) {
      this.fetchCustomers();
    }

    return this.customers$;
  }
}
