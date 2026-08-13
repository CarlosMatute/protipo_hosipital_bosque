@echo off
title Subiendo a GitHub - Hospital del Bosque
cd /d "%~dp0"
echo =======================================================
echo   Subiendo proyecto a GitHub...
echo   Repositorio: CarlosMatute/protipo_hosipital_bosque
echo =======================================================
echo.
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo =======================================================
    echo   [EXITO] Proyecto subido correctamente a GitHub!
    echo =======================================================
) else (
    echo =======================================================
    echo   Por favor autoriza con tu cuenta CarlosMatute
    echo =======================================================
)
echo.
pause
