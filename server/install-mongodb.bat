@echo off
echo Installing MongoDB...
winget install MongoDB.Server -e --accept-package-agreements --accept-source-agreements
echo.
echo Starting MongoDB service...
net start MongoDB
echo.
echo MongoDB installed and started!
pause
