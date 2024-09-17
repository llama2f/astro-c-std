@echo off

for %%F in (*.png) do ffmpeg -i "%%F" "%%~nF.webp"

pause