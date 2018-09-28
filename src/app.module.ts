import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PlayersController } from './controllers/players.controller';
import { PlayerService } from './services/player.service';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';

@Module({
  controllers: [
    AppController,
    PlayersController,
    TeamController,
  ],
  providers: [
    AppService,
    PlayerService,
    TeamService,
  ],
})
export class AppModule {}
