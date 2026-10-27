@echo off
cd /d "c:\Users\Ander\OneDrive\Desktop\PAGINAWEB - SOFTAVISION"
echo === Verificando TypeScript (typecheck) ===
node_modules\.bin\tsc --noEmit
echo.
if %errorlevel% equ 0 (
  echo [OK] No hay errores de TypeScript.
) else (
  echo [ERROR] Se encontraron errores arriba. Copiame el texto para revisarlo.
)
echo.
pause
