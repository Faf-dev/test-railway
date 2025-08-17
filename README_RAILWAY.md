# 🚂 Guide de déploiement Railway

## 📁 Structure du projet
```
exemple/
├── backend/          # Service 1: API Backend
│   ├── package.json
│   ├── server.js
│   └── .env
└── frontend/         # Service 2: Frontend Web
    ├── package.json
    ├── server.js
    ├── public/index.html
    └── .env
```

## 🚀 Déploiement sur Railway

### 1. Préparer le projet
- Pusher ce code sur GitHub
- Connecter Railway à votre repo GitHub

### 2. Créer le service Backend
1. New Project > Deploy from GitHub
2. Sélectionner le dossier `backend/`
3. Railway détectera automatiquement Node.js
4. Variables d'environnement à définir:
   - `NODE_ENV=production`
   - `PORT` (automatique Railway)

### 3. Créer le service Frontend  
1. Nouveau service dans le même projet
2. Sélectionner le dossier `frontend/`
3. Variables d'environnement:
   - `NODE_ENV=production`
   - `BACKEND_URL=https://votre-backend.railway.app`
   - `PORT` (automatique Railway)

### 4. Modifier le frontend en production
Dans `public/index.html`, ligne 46:
```javascript
// const API_URL = 'http://localhost:3000'; // En local
const API_URL = 'https://votre-backend.railway.app'; // En production
```

## 🔗 URLs finales
- Backend: `https://votre-backend.railway.app/api/health`
- Frontend: `https://votre-frontend.railway.app`

## ✅ Test du déploiement
1. Ouvrir l'URL du frontend
2. Cliquer "Tester la connexion" → doit être vert
3. Tester la création d'utilisateurs
