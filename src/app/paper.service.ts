import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paper } from './paper';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPapers(): Observable<Paper[]>{
    return this.http.get<Paper []>(`${this.apiServerUrl}/paper/all`);

  }
}
