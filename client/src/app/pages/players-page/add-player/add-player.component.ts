import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Team} from '@interfaces/team.interface';
import {Player} from '@interfaces/player.interface';

@Component({
  selector: 'add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  public _teams = [];

  @Input()
  public set teams(teams: Array<Team>) {
    this._teams = teams;
    if (teams.length > 0) {
      this.playerForm.setValue({
        ...this.playerForm.value,
        idTeam: teams[0].id
      });
    }
  }

  @Output()
  public addPlayer = new EventEmitter<Player>();

  public playerForm;

  constructor() { }

  ngOnInit() {
    this.playerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      shirtNumber: new FormControl('', [Validators.required]),
      idTeam: new FormControl(''),
      }
    );
  }

  public onSubmit(): void {
    this.addPlayer.emit(
      this.playerForm.value
    );
  }

}
