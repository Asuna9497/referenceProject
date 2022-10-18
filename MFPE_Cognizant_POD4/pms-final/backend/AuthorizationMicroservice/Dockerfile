FROM openjdk:8
EXPOSE 8080
ADD target/auth.jar auth.jar
ENTRYPOINT ["java", "-jar", "auth.jar"]