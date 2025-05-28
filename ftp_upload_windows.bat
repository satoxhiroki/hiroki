@echo off
REM FTPアップロード用バッチファイル（Windows用）
REM 使用前に FTP情報を設定してください

set FTP_HOST=your-ftp-server.com
set FTP_USER=your-username
set FTP_PASS=your-password
set FTP_DIR=/public_html

echo FTPコマンドファイルを作成中...

(
echo open %FTP_HOST%
echo user %FTP_USER% %FTP_PASS%
echo binary
echo cd %FTP_DIR%
echo put working.html
echo put index.html
echo put simple.html
echo put game.js
echo put style.css
echo put README.md
echo bye
) > ftp_commands.txt

echo FTPアップロードを実行中...
ftp -n -s:ftp_commands.txt

echo クリーンアップ中...
del ftp_commands.txt

echo アップロード完了！
pause