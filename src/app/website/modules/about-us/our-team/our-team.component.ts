import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '@app/website/interfaces/member.interface';
import { TeamMemberService } from '@app/website/services/team-member.service';
import { TeamMembersSectionComponent } from '@app/website/shared/team-members-section/team-members-section.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [AsyncPipe, TeamMembersSectionComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {
  member$: Observable<Member>;
  slugIntegrante: string;

  constructor(
    private teamMemberService: TeamMemberService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (this.slugIntegrante !== params['integrante']) {
        this.slugIntegrante = params['integrante'];
        this.teamMemberService.fetchMember(this.slugIntegrante);
      }
      this.member$ = this.teamMemberService.getMember();
    });
  }
}
