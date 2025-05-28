#!/bin/bash

# FTPアップロードスクリプト
# 使用前に FTP_HOST, FTP_USER, FTP_PASS を設定してください

FTP_HOST="your-ftp-server.com"
FTP_USER="your-username"
FTP_PASS="your-password"
FTP_DIR="/public_html"  # アップロード先ディレクトリ

# アップロードするファイル
FILES=(
    "working.html"
    "index.html"
    "simple.html"
    "game.js"
    "style.css"
    "README.md"
)

echo "FTPアップロードを開始します..."

# lftp を使用したアップロード
lftp -c "
set ssl:verify-certificate no
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST
cd $FTP_DIR
$(for file in "${FILES[@]}"; do
    echo "put $file"
done)
bye
"

echo "アップロード完了！"