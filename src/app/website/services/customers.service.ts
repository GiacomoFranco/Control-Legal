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

  readonly customers$ = isPlatformBrowser(this.platformId)
    ? this.http.get<Customer[]>(`${this.API_URL}clients`)
    : undefined;

  constructor(private http: HttpClient) {}

  customersSwiper$ = this.customers$?.pipe(
    map((customers: Customer[]) => {
      return Array.from({ length: 7 }, () => customers);
    })
  )
}
