import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  public getUserRepos(user: string): Observable<any> {
    return this.http.get('https://api.github.com/users/Reekani/repos');
  }

  constructor(private http: HttpClient) { }
}
