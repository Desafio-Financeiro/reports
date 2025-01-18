import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBalance() {
    return this.http.get(`${environment.apiUrl}/balance/1`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
