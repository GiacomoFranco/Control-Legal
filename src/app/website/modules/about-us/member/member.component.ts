import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '@app/website/interfaces/member.interface';
import { BreadcrumbService } from '@app/website/services/breadcrumb.service';
import { TeamMemberService } from '@app/website/services/team-member.service';
import { AskAQuestionComponent } from '@app/website/shared/ask-a-question/ask-a-question.component';
import { BreadcrumbComponent } from '@app/website/shared/breadcrumb/breadcrumb.component';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [
    AsyncPipe,
    TeamMembersSectionComponent,
    AskAQuestionComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss',
})
export class MemberComponent {
  member$: Observable<Member>;
  slugIntegrante: string;

  constructor(
    private teamMemberService: TeamMemberService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      if (this.slugIntegrante !== params['slug']) {
        this.slugIntegrante = params['slug'];
        this.teamMemberService.fetchMember(this.slugIntegrante);
      }
      this.member$ = this.teamMemberService.getMember();
    });
  }
}
