import { Component } from '@angular/core';
import { TeamService } from "@pages/team.service";


@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  public almafa: string = "korte";
  public teams = this.teamService.getTeams();
  constructor(public teamService: TeamService) {
  }

  public remove(id: number) {
    this.teamService.removeTeam(id).subscribe(() => {
      this.teams = this.teamService.getTeams();
    })
  }

}
