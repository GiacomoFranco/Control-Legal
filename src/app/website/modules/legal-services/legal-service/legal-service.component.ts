import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegalServiceService } from '@app/website/services/legal-service.service';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { BreadcrumbComponent } from '@app/website/shared/breadcrumb/breadcrumb.component';
import { LegalServicesSectionComponent } from '@app/website/shared/legal-services-section/legal-services-section.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [BreadcrumbComponent, AsyncPipe, AskAQuestionComponent, LegalServicesSectionComponent],
  templateUrl: './legal-service.component.html',
  styleUrl: './legal-service.component.scss',
})
export class LegalServiceComponent {
  service$: Observable<any>;
  slugService: string;

  constructor(
    private legalServiceService: LegalServiceService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      if (this.slugService !== params['slug']) {
        this.slugService = params['slug'];
        this.legalServiceService.fetchService(this.slugService);
      }
      this.service$ = this.legalServiceService.getService();
    });
  }
}
