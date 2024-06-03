import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class LegalServiceService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  service$: Observable<any> | any;

  constructor(private http: HttpClient) {}

  fetchService(slug: string) {
    this.service$ = this.http.get<any>(
      `${this.API_URL}services/service?slug=${slug}`,
    );
  }

  getService() {
    return this.service$;
  }
}
