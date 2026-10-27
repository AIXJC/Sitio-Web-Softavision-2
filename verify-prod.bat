@echo off
cd /d "c:\Users\Ander\OneDrive\Desktop\PAGINAWEB - SOFTAVISION"
echo === Verificando dominio y API de pagos ===
echo.
echo [1] Dominio principal responde?
call node_modules\.bin\vercel.cmd curl https://softavision.vercel.app/ 2>&1 | findstr /C:"doctype" /C:"html" /C:"<title"
echo.
echo [2] API de pagos responde? (debe salir JSON)
call node_modules\.bin\vercel.cmd curl https://softavision.vercel.app/api/create-preference 2>&1
echo.
echo [3] Variables de entorno configuradas:
call node_modules\.bin\vercel.cmd env ls 2>&1
echo.
echo === Fin de la verificacion ===
pause
