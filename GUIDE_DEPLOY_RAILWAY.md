# 🚂 GUIDE COMPLET : Déployer sur Railway (Étape par étape)

## 📋 **Ce que vous devez faire maintenant**

### 🌐 **Étape 1 : Créer un repo GitHub**

1. **Allez sur GitHub** : [github.com](https://github.com)
2. **Créez un nouveau repository** : 
   - Nom : `exemple-angular-railway` (ou autre)
   - Public ou privé (peu importe)
   - Ne pas initialiser avec README (on a déjà le code)

3. **Ajoutez l'origine et poussez** :
   ```bash
   cd /home/faf/exemple
   git remote add origin https://github.com/VOTRE_USERNAME/exemple-angular-railway.git
   git branch -M main
   git push -u origin main
   ```

### 🚂 **Étape 2 : Créer un compte Railway**

1. **Allez sur** : [railway.app](https://railway.app)
2. **Connectez-vous avec GitHub**
3. **Autorisez Railway** à accéder à vos repos

### 🏗️ **Étape 3 : Déployer le Backend**

1. **Railway Dashboard** → "New Project"
2. **Sélectionnez** "Deploy from GitHub repo"
3. **Choisissez** votre repo `exemple-angular-railway`
4. **Root Directory** : `backend`
5. **Railway va automatiquement** :
   - Détecter Node.js
   - Installer les dépendances (`npm install`)
   - Démarrer avec `npm start`

6. **Variables d'environnement** (optionnel) :
   - `NODE_ENV=production`
   - Railway définit automatiquement `PORT`

7. **Notez l'URL** du backend : `https://backend-xxxx.railway.app`

### 🎨 **Étape 4 : Préparer le Frontend pour Railway**

**Modifiez** `frontend/src/environments/environment.prod.ts` :
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://VOTRE_URL_BACKEND_RAILWAY.railway.app/api'
};
```

**Commitez cette modification** :
```bash
git add .
git commit -m "Update production API URL for Railway"
git push
```

### 🎨 **Étape 5 : Déployer le Frontend**

1. **Railway Dashboard** → Votre projet → "New Service"
2. **Deploy from GitHub** → même repo
3. **Root Directory** : `frontend`
4. **Variables d'environnement** :
   - `NODE_ENV=production`

5. **Railway va automatiquement** :
   - Installer dependencies Angular
   - Build avec `ng build`
   - Servir l'application

6. **Notez l'URL** du frontend : `https://frontend-xxxx.railway.app`

## ✅ **Étape 6 : Tester le déploiement**

1. **Ouvrez l'URL du frontend** dans votre navigateur
2. **Testez les boutons** :
   - "Tester la connexion" → doit être vert ✅
   - "Charger les utilisateurs" → doit afficher la liste
   - "Créer un utilisateur" → doit créer et afficher

3. **Vérifiez l'API directement** :
   - `https://votre-backend.railway.app/api/health`

## 🐛 **En cas de problème**

### **Backend ne démarre pas** :
- Vérifiez les logs Railway
- Assurez-vous que `package.json` a le bon `start` script
- Variables d'environnement correctes

### **Frontend ne se connecte pas au backend** :
- Vérifiez l'URL dans `environment.prod.ts`
- Problème CORS ? Vérifiez que CORS est activé dans le backend
- Utilisez l'onglet Network des DevTools

### **Build Angular échoue** :
- Vérifiez les erreurs TypeScript
- Dependencies manquantes dans `package.json`

## 🎯 **URLs finales attendues**

- **Backend API** : `https://backend-xxxx.railway.app/api/health`
- **Frontend App** : `https://frontend-xxxx.railway.app`
- **Test complet** : Interface utilisateur fonctionnelle

## 📝 **Après avoir testé...**

Une fois que cet exemple fonctionne sur Railway, vous saurez **exactement** comment déployer votre projet Apibay avec la même architecture !

**Questions ? Problèmes ?** Montrez-moi les logs ou erreurs ! 🔧
