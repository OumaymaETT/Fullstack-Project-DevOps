# Utiliser une image Node adaptée à Angular
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

#  Mettre à jour npm et node_modules
RUN npm cache clean --force
RUN rm -rf node_modules package-lock.json
RUN npm install --legacy-peer-deps

# Copier tous les fichiers du projet
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Exposer le port 4200
EXPOSE 4200

# Lancer le serveur Angular
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
