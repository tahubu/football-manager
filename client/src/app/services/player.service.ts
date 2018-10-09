import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '@constants/api-url.constant';
import { Player } from '@interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url: string = '';

  constructor(@Inject(API_URL) apiUrl: string, private httpClient: HttpClient) {
    this.url = apiUrl + '/players';
  }

  public getPlayers(): Observable<Array<Player>> {
    return this.httpClient.get<Array<Player>>(this.url);
  }

  public addPlayer(player: Player): Observable<{id: number}> {
    return this.httpClient.post<{id: number}>(this.url, player);
  }

  public removePlayer(playerId: number): Observable<{affectedPlayers: number}> {
    return this.httpClient.delete<{affectedPlayers: number}>(`${this.url}/${playerId}`);
  }

  public modifyPlayer(playerId: number, player: Player): Observable<{updated: boolean}> {
    return this.httpClient.put<{updated: boolean}>(`${this.url}/${playerId}`, player);
  }
}
