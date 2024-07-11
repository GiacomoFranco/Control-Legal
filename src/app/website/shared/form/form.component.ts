import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '@app/website/services/dialog.service';
import { Subscription } from 'rxjs';
import { MailSenderService } from '@app/website/services/mail-sender.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, DialogComponent, RecaptchaV3Module],
  template: `
    <form [formGroup]="form" (ngSubmit)="sendMail()">
      <ng-content></ng-content>
    </form>
    @if (dialogState) {
      <app-dialog [errorCode]="errorReponse" />
    }
  `,
  styleUrl: './form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  constructor(
    private mailService: MailSenderService,
    private dialogService: DialogService,
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
    this.listenDialogState = this.dialogService.dialogOpen$.subscribe(
      (state) => {
        this.dialogState = state;
      },
    );
  }

  @Input('formGroup') form: FormGroup = new FormGroup({});

  dialogState = false;
  listenDialogState: Subscription;
  errorReponse: string | number;

  sendMail() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.recaptchaV3Service.execute('importantAction').subscribe((token) => {
        if (token) {
          this.mailService.sendQuestion(this.form.value).subscribe(
            () => {
              this.dialogService.openDialog();
            },
            (err: HttpErrorResponse) => {
              this.errorReponse = err.status;
              this.dialogService.openDialog();
            },
          );
        } else {
          this.errorReponse = 'ReCaptcha';
          this.dialogService.openDialog();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.listenDialogState) {
      this.listenDialogState.unsubscribe();
    }
  }
}
