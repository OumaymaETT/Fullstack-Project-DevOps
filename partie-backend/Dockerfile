# Utiliser une image de base adaptée pour Spring Boot avec Maven préinstallé
FROM eclipse-temurin:17-jdk-alpine

# Installer Maven
RUN apk add --no-cache maven

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour éviter de tout recompiler à chaque changement
COPY pom.xml ./

# Télécharger les dépendances en cache pour accélérer la construction
RUN mvn dependency:go-offline -B

# Copier tout le code du projet dans le conteneur
COPY . .

# Construire l'application Spring Boot
RUN mvn clean package -DskipTests

# Exposer le port 8080 pour l’application
EXPOSE 8080

# Lancer l'application en utilisant le JAR généré dans target/
CMD ["java", "-jar", "/app/target/partie-backend-0.0.1-SNAPSHOT.jar"]
