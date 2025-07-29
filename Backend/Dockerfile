# Stage 1: Build
FROM maven:3.9.4-eclipse-temurin-17 AS build

# Copy Backend folder source code to /app
COPY . .

# Build the project (adjust if your pom.xml is in Backend root)
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:17-jre-alpine


# Copy the built jar from build stage
COPY --from=build /target/*.jar app.jar

# Expose the port your Spring Boot app runs on (default 8080)
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java","-jar","app.jar"]
