@echo off
cd /d "c:\Users\Ander\OneDrive\Desktop\PAGINAWEB - SOFTAVISION"
echo === Verificando API de pagos en produccion ===
echo (Sin MERCADOPAGAGO_ACCESS_TOKEN deberia responder: falta token = API OK)
echo.
call node_modules\.bin\vercel.cmd curl https://paginaweb-softavision.vercel.app/api/create-preference
echo.
echo === Fin. Si responde JSON (aunque diga "falta token"), el API quedo desplegado. ===
pause
