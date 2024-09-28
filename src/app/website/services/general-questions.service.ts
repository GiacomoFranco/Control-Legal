import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralQuestionsService {
  readonly API_URL: string = import.meta.env['NG_APP_API_URL'];
  readonly platformId = inject(PLATFORM_ID);

  questions$: Observable<any> | any;

  constructor(private http: HttpClient) {}

  fetchQuestions() {
    this.questions$ = this.http.get<any>(`${this.API_URL}general-questions`);
  }

  getQuestions() {
    if (!this.questions$) {
      this.fetchQuestions();
    }

    return this.questions$;
  }
}
