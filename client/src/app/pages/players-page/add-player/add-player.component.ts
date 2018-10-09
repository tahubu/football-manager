import { Component, Output, EventEmitter, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Player } from '@interfaces/player.interface';
import { Team } from '@interfaces/team.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPlayerComponent implements OnInit {
  public _teams: Array<Team> = [];

  @Input()
  public set teams(teams: Array<Team>) {
    if (teams !== null) {
      this._teams = teams;
      if (teams.length > 0) this.playerForm.controls['idTeam'].setValue(teams[0].id);
    }
  }

  @Output()
  public addPlayer: EventEmitter<Player> = new EventEmitter<Player>();

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
    this.addPlayer.emit(this.playerForm.value);
    this.playerForm.reset();
    if (this._teams.length > 0) this.playerForm.controls['idTeam'].setValue(this._teams[0].id);
  }
}
