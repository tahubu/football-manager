import { Component, OnInit } from '@angular/core';
import {PlayerService} from '@services/player.service';
import {BehaviorSubject} from 'rxjs';
import {Player} from '@interfaces/player.interface';
import {TeamService} from '@pages/team.service';
import {Team} from '@interfaces/team.interface';

@Component({
  selector: 'players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.scss']
})
export class PlayersPageComponent implements OnInit {
  public players$ = new BehaviorSubject<Array<Player>>([]);
  public teams$ = new BehaviorSubject<Array<Team>>([]);

  constructor(private playerService: PlayerService,
              private teamService: TeamService) { }

  ngOnInit() {
    this.playerService
      .getPlayers()
      .subscribe(
        (players) => {
          this.players$.next(players);
        },
        (error) => {
          console.error(error);
        }
      );

    this.teamService
      .getTeams()
      .subscribe(
        (teams) => {
          this.teams$.next(teams);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  public onAddPlayer(player: Partial<Player>): void {
    this.playerService
      .addPlayer(player)
      .subscribe(
        ({id}) => {
          this.players$.next(
            [].concat(this.players$.getValue(), {...player, id})
          );
        }
      );
  }

}
