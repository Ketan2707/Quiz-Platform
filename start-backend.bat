@echo off
title Quiz Backend - Spring Boot
echo Starting Quiz Backend on http://localhost:8080 ...
echo.
cd /d "%~dp0quiz-backend"
"C:\Program Files\JetBrains\IntelliJ IDEA 2025.2\plugins\maven\lib\maven3\bin\mvn.cmd" spring-boot:run
pause
