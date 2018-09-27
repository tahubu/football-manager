import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Query } from '@nestjs/common';

import { isNumeric } from '../utils';
import { Player } from '../interfaces/player.interface';
import { PlayerService } from '../services/player.service';

@Controller('/api/players')
export class PlayersController {
  private logger = new Logger('/api/players -> PlayersController');

  constructor(private playerService: PlayerService) {
  }

  @Get()
  getPlayers(
    @Query('skip') pSkip,
    @Query('limit') pLimit,
  ): Array<Player> {
    this.logger.log(`.getPlayers() - Query params: ${JSON.stringify({skip: pSkip, limit: pLimit})}`);

    const skip = isNumeric(pSkip) ? parseInt(pSkip, 10) : 0;
    const limit = isNumeric(pLimit) ? parseInt(pLimit, 10) : PlayerService.limit;

    return this.playerService.getPlayers({skip, limit});
  }

  @Post()
  addPlayer(
    @Body() newPlayer: Partial<Player>,
  ): {id: number} {
    this.logger.log(`.addPlayer() - Body: ${JSON.stringify(newPlayer)}`);

    const playerId = this.playerService.addPlayer(newPlayer);

    return {
      id: playerId,
    };
  }

  @Put(':id')
  modifyPlayer(
    @Param('id') pId,
    @Body() data: Partial<Player>,
  ): {updated: boolean} {
    this.logger.log(`.modifyPlayer() - Query param: ${JSON.stringify({id: pId})} - Body: ${JSON.stringify(data)}`);

    const playerId = isNumeric(pId) ? parseInt(pId, 10) : null;
    const playerUpdated = this.playerService.modifyPlayer(playerId, data);

    return {
      updated: playerUpdated,
    };
  }

  @Delete(':id')
  removePlayer(
    @Param('id') pId,
  ): {affectedPlayers: number} {
    this.logger.log(`.deletePlayer() - Query param: ${JSON.stringify({id: pId})}`);

    const playerId = isNumeric(pId) ? parseInt(pId, 10) : null;
    const numberOfDeletedPlayer = this.playerService.removePlayer(playerId);

    return {
      affectedPlayers: numberOfDeletedPlayer,
    };
  }
}
