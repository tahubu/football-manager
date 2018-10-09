import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '@constants/api-url.constant';
import { Team } from '@interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private url: string = '';

  constructor(@Inject(API_URL) apiUrl: string, private httpClient: HttpClient) {
    this.url = apiUrl + '/teams';
  }

  public getTeams(): Observable<Array<Team>> {
    return this.httpClient.get<Array<Team>>(this.url);
  }
}
