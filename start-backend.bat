@echo off
title Quiz Backend - Node.js
echo Starting Quiz Backend (Node.js) on http://localhost:8080 ...
echo.
cd /d "%~dp0quiz-backend-node"
node server.js
pause
