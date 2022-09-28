@echo off
SETLOCAL

git push build black
git push origin black

echo complete

ENDLOCAL
EXIT /b