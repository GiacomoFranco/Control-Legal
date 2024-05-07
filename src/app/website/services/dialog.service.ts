import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogOpenSubject = new BehaviorSubject<boolean>(false);
  dialogOpen$ = this.dialogOpenSubject.asObservable();

  openDialog() {
    this.dialogOpenSubject.next(true);
  }

  closeDialog() {
    this.dialogOpenSubject.next(false);
  }
  constructor() {}
}
