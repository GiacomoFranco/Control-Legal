import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TeamMembersSkeletonComponent } from './team-members-skeleton/team-members-skeleton.component';
import { TeamMembersSwiperComponent } from './team-members-swiper/team-members-swiper.component';
import { Member } from '@app/website/interfaces/member.interface';
import { TeamMembersService } from '@app/website/services/team-members.service';

@Component({
  selector: 'app-team-members-section',
  standalone: true,
  imports: [AsyncPipe, TeamMembersSkeletonComponent, TeamMembersSwiperComponent],
  templateUrl: './team-members-section.component.html',
  styleUrl: './team-members-section.component.scss',
})
export class TeamMembersSectionComponent {
  constructor(private teamMembersService: TeamMembersService) {}
  members$: Observable<Member[]> = this.teamMembersService.getMembers();
}
