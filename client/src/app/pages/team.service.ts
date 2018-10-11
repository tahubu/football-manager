import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Team } from "@interfaces/team.interface";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get<Team[]>('/api/teams');
  }

  removeTeam(id: number) {
    return this.http.delete('/api/teams/' + id);
  }
}
