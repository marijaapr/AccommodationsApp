FROM maven:3.9.6-eclipse-temurin-21
WORKDIR /application
COPY . /application
RUN mvn clean package -DskipTests && mv target/*.jar application.jar
EXPOSE 9090
CMD ["java", "-jar", "application.jar"]
