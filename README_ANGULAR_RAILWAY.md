# 🚂 Guide de déploiement Angular + Backend sur Railway

## 📁 Structure du projet (mis à jour)
```
exemple/
├── backend/                  # Service 1: API Backend
│   ├── package.json         # Node.js + Express + CORS
│   ├── server.js            # API REST pure (sans static)
│   └── .env                 # Variables d'environnement
├── frontend/                # Service 2: Frontend Angular
│   ├── package.json         # Angular 17 + Dependencies
│   ├── angular.json         # Configuration Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.* # Composant principal
│   │   │   └── services/
│   │   │       └── api.service.ts # Service pour appels API
│   │   └── environments/
│   │       ├── environment.ts      # Config développement
│   │       └── environment.prod.ts # Config production
│   └── dist/                # Build de production (après ng build)
└── README_ANGULAR_RAILWAY.md
```

## 🔧 Technologies utilisées

### Backend (API Pure)
- **Node.js** + **Express.js**
- **CORS** configuré pour cross-origin
- **Variables d'environnement** (.env)
- Routes API: `/api/health`, `/api/users` (GET/POST)

### Frontend (Angular)
- **Angular 17** (compatible Node.js 18+)
- **HttpClient** pour les appels API
- **Services Angular** typés (TypeScript)
- **Environments** séparés (dev/prod)
- **Formulaires réactifs** avec validation

## 🚀 Déploiement sur Railway

### Étape 1: Préparer le backend
1. **Code prêt** : API pure, CORS activé
2. **Variables Railway** :
   ```
   NODE_ENV=production
   PORT (automatique Railway)
   ```

### Étape 2: Préparer le frontend
1. **Build de production** :
   ```bash
   cd frontend
   ng build --configuration=production
   ```
2. **Variables d'environnement** :
   - Modifier `environment.prod.ts` avec l'URL Railway du backend
3. **Serveur de production** (optionnel Express ou serveur statique)

### Étape 3: Créer les services Railway
1. **Service Backend** :
   - Root directory: `backend/`
   - Build command: `npm install`
   - Start command: `npm start`

2. **Service Frontend** :
   - Root directory: `frontend/`
   - Build command: `npm install && ng build --configuration=production`
   - Start command: Servir le dossier `dist/`

### Étape 4: Configuration finale
1. **URL Backend** dans `environment.prod.ts` :
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://votre-backend.railway.app/api'
   };
   ```

2. **Test de déploiement** :
   - Frontend: `https://votre-frontend.railway.app`
   - API Backend: `https://votre-backend.railway.app/api/health`

## ✅ Avantages de cette architecture

### Séparation claire
- **Backend** : API REST pure, réutilisable
- **Frontend** : Interface utilisateur moderne
- **Scalabilité** : Services indépendants

### Développement
- **Hot reload** : Angular dev server
- **TypeScript** : Typage fort, auto-complétion
- **Services** : Code organisé et maintenable

### Production
- **Build optimisé** : Angular CLI avec minification
- **Variables d'env** : Configuration flexible
- **CORS** : Sécurité cross-origin

## 🔄 Correspondance avec votre projet Apibay

| Exemple | Votre Apibay | Action |
|---------|--------------|--------|
| Express simple | Express + Prisma | ✅ Garder Prisma |
| CORS manuel | À ajouter | ➕ Ajouter CORS |
| Arrays en mémoire | MySQL Railway | 🔄 Adapter BDD |
| Angular 17 | Angular 20 SSR | 🔄 Adapter services |

## 📝 Prochaines étapes pour Apibay

1. **Adapter le backend** : Ajouter CORS, retirer static
2. **Créer services Angular** : Pour remplacer les appels directs
3. **Configurer environments** : URLs de dev/prod
4. **Tester en local** : Comme cet exemple
5. **Déployer sur Railway** : 2 services séparés

Cette architecture est **exactement** ce dont vous avez besoin ! 🎯
