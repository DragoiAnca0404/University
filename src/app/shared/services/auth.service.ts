import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  defaultBeUrl: string = environment.backendUrl;

  isUserAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    return !!token;
  }

  authenticate(params: any): Observable<any> {
    let requestParams = new HttpParams();
    requestParams = requestParams.append('username', params.username);
    
    return this.httpClient.get(`${this.defaultBeUrl}/login`, {params: requestParams});
  }
}
