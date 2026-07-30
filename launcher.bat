@echo off
cd /d "%~dp0"
echo 🦋 往生堂 · 算法阁 — STL 学习指南
echo.
echo 正在启动服务器...
start "" /b node server.js
timeout /t 2 /nobreak >nul
echo 正在打开浏览器...
start "" http://localhost:3000
echo.
echo 服务器已在后台运行，浏览器即将打开。
echo 看到页面后，点击浏览器地址栏右边的 📥 安装按钮即可添加到桌面。
echo 关闭此窗口不会停止服务器，可直接关闭。
echo.
pause
