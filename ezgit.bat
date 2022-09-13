@echo off
SETLOCAL

git push build main
git push origin main

echo complete

ENDLOCAL
EXIT /b