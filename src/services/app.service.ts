import { Injectable } from '@nestjs/common';

import { players } from '../data/init-store';
import { PlayerService } from './player.service';

@Injectable()
export class AppService {
  constructor(private playerService: PlayerService) {
  }

  public initStore(): void {
    // add each player to the Store
    players.forEach(player => this.playerService.addPlayer(player));
  }
}
