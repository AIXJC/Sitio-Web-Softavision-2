@echo off
cd /d "c:\Users\Ander\OneDrive\Desktop\PAGINAWEB - SOFTAVISION"
echo === LOGIN DE VERCEL (v64) ===
echo Elige: Continue with Email  -  te llega un codigo a tu correo
echo.
call node_modules\.bin\vercel.cmd login
echo.
echo Si dice "Congratulations! You are now logged in", avisa para desplegar.
pause
