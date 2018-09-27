import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PlayersController } from './controllers/players.controller';
import { PlayerService } from './services/player.service';

@Module({
  controllers: [
    AppController,
    PlayersController,
  ],
  providers: [
    PlayerService,
    AppService,
  ],
})
export class AppModule {}
