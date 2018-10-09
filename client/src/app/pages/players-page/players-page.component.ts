import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Player } from '@interfaces/player.interface';
import { PlayerService } from '@services/player.service';
import { Team } from '@interfaces/team.interface';
import { TeamService } from '@services/team.service';
import { isEqual } from '@utils/is-equal';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersPageComponent implements OnInit {
  public players$: BehaviorSubject<Array<Player>> = new BehaviorSubject<Array<Player>>([]);
  public teams$: BehaviorSubject<Array<Team>> = new BehaviorSubject<Array<Team>>([]);
  public selectedPlayer$: BehaviorSubject<Player | null> = new BehaviorSubject<Player | null>(null);
  public playersWithTeams$: Observable<Array<Player>> = this.players$.pipe(
    switchMap(players => this.mappedTeams$.pipe(
        map(mappedTeams => this.addTeamToPlayer(mappedTeams, players)),
      )
    )
  );
  public mappedTeams$ = new BehaviorSubject<{[key: string]: string}>({});

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  public ngOnInit(): void {
    this.playerService
      .getPlayers()
      .subscribe(
        (players) => { this.players$.next(players); },
        console.error
      );

    this.teamService
      .getTeams()
      .subscribe(
        (teams) => {
          this.mappedTeams$.next(this.mapTeams(teams));
          this.teams$.next(teams);
        },
        console.error
      );
  }

  public mapTeams(teams): {[key: string]: string} {
    return teams.reduce((acc, t) => {
      acc[String(t.id)] = t.name;
      return acc;
    }, {});
  }

  public addTeamToPlayer(mappedTeams, players): any {
    return players.map(p => ({...p, team: mappedTeams[String(p.idTeam)]}));
  }

  public onAddPlayer(player): void {
    this.playerService
      .addPlayer(player)
      .subscribe(
        (result) => {
          player.id = result.id;
          this.players$.next([].concat(this.players$.getValue(), player));
        },
        console.error
      );
  }

  public onRemovePlayer(playerId: number): void {
    this.playerService
      .removePlayer(playerId)
      .subscribe(
        (result) => {
          this.players$.next(this.players$.getValue().filter(p => p.id !== playerId));
        },
        console.error
      );
  }

  public onModifyPlayer(player: Player): void {
    const oldPlayer = this.players$.getValue().find(p => String(p.id) === String(player.id));
    if (oldPlayer === undefined) return ;

    if (!isEqual(oldPlayer, player)) {
      this.playerService
        .modifyPlayer(player.id, player)
        .subscribe(
          (result) => {
            const players = this.players$.getValue();
            const playerIndex = players.findIndex(p => p.id === player.id);
            if (playerIndex !== -1) {
              const modifiedPlayer = {
                ...players[playerIndex],
                ...player
              };
              players[playerIndex] = modifiedPlayer;
              this.players$.next([].concat(players));
            }
          },
          console.error
        );
    }
  }

  public onSelectPlayer(playerId: number): void {
    const player = this.players$.getValue().find(p => p.id === playerId);
    this.selectedPlayer$.next(player === undefined ? null : {...player});
  }
}
