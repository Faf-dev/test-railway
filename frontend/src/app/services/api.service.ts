import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
}

export interface ApiResponse {
  users?: User[];
  user?: User;
  message?: string;
  status?: string;
  timestamp?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Test de santé de l'API
  getHealth(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/health`);
  }

  // Récupérer tous les utilisateurs
  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/users`);
  }

  // Créer un nouvel utilisateur
  createUser(userData: CreateUserRequest): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ApiResponse>(`${this.apiUrl}/users`, userData, { headers });
  }
}
