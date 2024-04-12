import { Component, Input } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

@Component({
  selector: 'app-team-members-swiper',
  standalone: true,
  imports: [TeamMemberCardComponent],
  templateUrl: './team-members-swiper.component.html',
  styleUrl: './team-members-swiper.component.scss',
})
export class TeamMembersSwiperComponent {
  @Input() members: string[] | undefined = undefined;
}
