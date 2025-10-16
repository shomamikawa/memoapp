# memoapp
🚀 メモアプリ起動手順ガイド (React + Flask)
このガイドは、フロントエンド (React) とバックエンド (Flask) の両方を起動し、ブラウザでメモアプリを表示するための手順です。

⚙️ 1. バックエンド (Flask) の起動
バックエンドはAPIを提供し、データの保存（データベース操作）を担当します。まずこちらを起動します。

ステップ 1-1: 仮想環境の準備
ターミナルを開き、バックエンドディレクトリへ移動します。

Bash

cd memo-app/memo-app-backend
仮想環境を有効化します。

Windows (PowerShell):

Bash

.\venv\Scripts\Activate
Windows (コマンドプロンプト):

Bash

venv\Scripts\activate.bat
macOS / Linux:

Bash

source venv/bin/activate
必要な Python ライブラリをインストールします。 (既にインストール済みであればスキップ可)

Bash

pip install Flask Flask-SQLAlchemy Flask-CORS pytz
ステップ 1-2: サーバーの実行
Flask 開発サーバーを起動します。

Bash

python app.py
ターミナルに * Running on http://127.0.0.1:5000 と表示され、サーバーがリクエストを待機している状態になれば成功です。

注意: このターミナルは閉じずに、このまま稼働させておきます。

💻 2. フロントエンド (React) の起動
フロントエンドはユーザーインターフェース (UI) を表示し、バックエンドのAPIを呼び出します。

ステップ 2-1: プロジェクトの準備
新しいターミナルウィンドウを開き、フロントエンドディレクトリへ移動します。

Bash

cd memo-app/memo-app-frontend
必要な JavaScript ライブラリをインストールします。 (既にインストール済みであればスキップ可)

Bash

npm install
ステップ 2-2: 開発サーバーの実行
React 開発サーバー (Vite) を起動します。

Bash

npm run dev
ターミナルに Local: http://localhost:5173/ (または別のポート) のようなURLが表示されれば成功です。

🌐 3. ブラウザでの確認
ブラウザを開き、以下の URL にアクセスします。

ホーム画面 (Home) の確認:

http://localhost:5173/
メモアプリ本体の確認:

http://localhost:5173/memo