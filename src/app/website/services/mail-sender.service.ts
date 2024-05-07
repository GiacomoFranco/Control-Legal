import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailSenderService {
  private readonly API_URL: string = import.meta.env['NG_APP_API_URL'];

  constructor(private http: HttpClient) {}

  ans: any;

  sendQuestion(mensaje: any): any {
    return this.http.post<any>(`${this.API_URL}send-email`, mensaje);
  }
}
