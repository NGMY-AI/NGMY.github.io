@echo off
cd /d "%~dp0"
echo Setting up the 5.99 advisor browser payment. Please wait...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0create-browser-payment.ps1" -Mode live
echo.
echo ---------------------------------------------
echo Finished. Look above: green OK lines are good, a red line is a problem.
echo Tell Claude: "the link is in"  (or tell Claude what the red line says).
echo ---------------------------------------------
pause
