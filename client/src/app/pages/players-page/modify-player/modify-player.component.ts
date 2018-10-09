import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Player } from '@interfaces/player.interface';
import { Team } from '@interfaces/team.interface';

@Component({
  selector: 'modify-player',
  templateUrl: './modify-player.component.html',
  styleUrls: ['./modify-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModifyPlayerComponent implements OnInit {
  private _playerId: number = -1;

  @Input()
  public teams: Array<Team> = [];

  @Input()
  public set player(player: Player | null) {
    if (player !== null) {
      this._playerId = player.id;
      this.playerForm.setValue({
        name: player.name,
        age: player.age,
        shirtNumber: player.shirtNumber,
        idTeam: player.idTeam,
      });
      this.modalActivated = true;
    } else {
      this.modalActivated = false;
    }
  }

  @Output()
  public modifyPlayer: EventEmitter<Player> = new EventEmitter<Player>();

  public _teams: Array<Team> = [];
  public modalActivated: boolean = false;
  public playerForm: FormGroup;

  constructor() {}

  public ngOnInit(): void {
    this.playerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      shirtNumber: new FormControl('', [Validators.required]),
      idTeam: new FormControl('')
    });
  }

  public onSubmit(): void {
    this.modifyPlayer.emit({
      ...this.playerForm.value,
      id: this._playerId
    });
    this.modalActivated = false;
    this.playerForm.reset();
  }

  public onClose(event): void {
    event.preventDefault();
    this.modalActivated = false;
    this.playerForm.reset();
  }

}
