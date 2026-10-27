@echo off
cd /d "c:\Users\Ander\OneDrive\Desktop\PAGINAWEB - SOFTAVISION"
echo === DESPLIEGUE A PRODUCCION (VERCEL) ===
echo.
echo Si te pregunta:
echo   - Set up and deploy?            -> y
echo   - Which scope?                  -> tu usuario (Enter)
echo   - Link to existing project?     -> N
echo   - In which directory is code?   -> . (Enter)
echo   - Want to modify settings?      -> N
echo.
call node_modules\.bin\vercel.cmd --prod
echo.
echo === Cuando termine, copia la URL "Production:" y avisa. ===
pause
