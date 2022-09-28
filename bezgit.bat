@echo off
SETLOCAL

git push build blakc
git push origin black

echo complete

ENDLOCAL
EXIT /b