# 🚀 Full-Stack App with Docker Compose

Ce projet contient une application Full-Stack avec une partie **frontend (Angular)**, une partie **backend (Spring Boot)**, et une base de données **MySQL**.

## 🏗️ Architecture
- `partie-frontend/` → Frontend Angular
- `partie-backend/` → Backend Spring Boot
- `docker-compose.yml` → Configuration Docker

## 📦 Installation & Exécution

### 1️⃣ Prérequis
- [Docker](https://www.docker.com/get-started) 
- [Git](https://git-scm.com/downloads) 

### 2️⃣ Cloner le projet


### 3️⃣ Lancer les conteneurs avec Docker Compose
```bash
docker-compose up -d
```

### 4️⃣ Vérifier les logs (optionnel)
```bash
docker-compose logs -f
```

### 5️⃣ Accéder aux services
- **Frontend** : [http://localhost:4200](http://localhost:4200)
- **Backend API** : [http://localhost:8080](http://localhost:8080)
- **Base de données MySQL** : `localhost:3306`

### 🛑 Arrêter les conteneurs
```bash
docker-compose down
```

## 📂 Structure du projet

```
📁 nom-du-repo
│-- 📁 partie-frontend    # Application Angular
│-- 📁 partie-backend     # API Spring Boot
│-- 📝 docker-compose.yml # Configuration des conteneurs

---
