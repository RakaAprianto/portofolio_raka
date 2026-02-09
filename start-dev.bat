@echo off
echo Starting Next.js Development Server...
echo.

REM Try multiple methods to start the dev server
echo Method 1: Using npm run dev
call npm run dev 2>nul
if %errorlevel% equ 0 goto :success

echo.
echo Method 1 failed. Trying Method 2: Using npx
npx next dev 2>nul
if %errorlevel% equ 0 goto :success

echo.
echo Method 2 failed. Trying Method 3: Using node directly
node node_modules\next\dist\bin\next.js dev 2>nul
if %errorlevel% equ 0 goto :success

echo.
echo All methods failed. Please run: npm install
echo Then try: npm run dev
pause
goto :end

:success
echo Server started successfully!

:end
