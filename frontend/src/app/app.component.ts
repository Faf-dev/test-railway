import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { ApiService, CreateUserRequest, ApiResponse } from './services/api.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  environment = environment;

  // État des chargements
  loading = {
    health: false,
    users: false,
    create: false
  };

  // Résultats des tests - propriétés spécifiques
  healthResult = '';
  usersResult = '';
  createResult = '';

  // Données du formulaire
  newUser: CreateUserRequest = {
    username: '',
    email: ''
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Test automatique de la connexion au démarrage
    // this.testHealth();
  }

  // Test de santé de l'API
  testHealth() {
    this.loading.health = true;
    this.healthResult = '';

    this.apiService.getHealth().subscribe({
      next: (response: ApiResponse) => {
        this.loading.health = false;
        this.healthResult = `✅ Connexion réussie!<br><pre>${JSON.stringify(response, null, 2)}</pre>`;
      },
      error: (error) => {
        this.loading.health = false;
        this.healthResult = `❌ Erreur: ${error.message || 'Impossible de se connecter au backend'}`;
      }
    });
  }

  // Récupérer les utilisateurs
  getUsers() {
    this.loading.users = true;
    this.usersResult = '';

    this.apiService.getUsers().subscribe({
      next: (response: ApiResponse) => {
        this.loading.users = false;
        this.usersResult = `✅ Utilisateurs récupérés:<br><pre>${JSON.stringify(response, null, 2)}</pre>`;
      },
      error: (error) => {
        this.loading.users = false;
        this.usersResult = `❌ Erreur: ${error.message || 'Impossible de récupérer les utilisateurs'}`;
      }
    });
  }

  // Créer un utilisateur
  createUser() {
    if (!this.isFormValid()) {
      this.createResult = '❌ Veuillez remplir tous les champs';
      return;
    }

    this.loading.create = true;
    this.createResult = '';

    this.apiService.createUser(this.newUser).subscribe({
      next: (response: ApiResponse) => {
        this.loading.create = false;
        this.createResult = `✅ Utilisateur créé!<br><pre>${JSON.stringify(response, null, 2)}</pre>`;
        // Reset du formulaire
        this.newUser = { username: '', email: '' };
      },
      error: (error) => {
        this.loading.create = false;
        if (error.error && error.error.error) {
          this.createResult = `❌ Erreur: ${error.error.error}`;
        } else {
          this.createResult = `❌ Erreur: ${error.message || 'Impossible de créer l\'utilisateur'}`;
        }
      }
    });
  }

  // Validation du formulaire
  isFormValid(): boolean {
    return !!(this.newUser.username?.trim() && this.newUser.email?.trim());
  }

  // Déterminer la classe CSS du résultat
  getResultClass(result: string): string {
    if (!result) return '';
    if (result.includes('❌')) {
      return 'error';
    } else if (result.includes('✅')) {
      return 'success';
    }
    return '';
  }
}
