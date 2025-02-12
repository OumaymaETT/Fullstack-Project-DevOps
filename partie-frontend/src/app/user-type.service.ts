import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserTypeService {
  private apiUrl = 'http://localhost:8080/user-types';

  constructor(private http: HttpClient) {}

  getUserTypes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserType(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addUserType(userType: { type: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userType);
  }
  updateUserType(id: number, userType: { id: number; type: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userType);
  }

  deleteUserType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
