import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '@constants/api-url.constant';
import {Observable} from 'rxjs';
import {Player} from '@interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private httpClient: HttpClient,
  ) {
  }

  public getPlayers(): Observable<Array<Player>> {
    const url = this.apiUrl + '/players';
    return this.httpClient.get<Array<Player>>(url);
  }

  public addPlayer(player: Partial<Player>): Observable<{id: number}> {
    return this.httpClient.post<{id: number}>(this.apiUrl + '/players', player);
  }
}
