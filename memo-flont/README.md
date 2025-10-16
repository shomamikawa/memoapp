📝 シンプルメモアプリ (React + Flask)このプロジェクトは、フロントエンドに React、バックエンドに軽量なPythonフレームワークの Flask を使用して開発されたフルスタックのメモアプリケーションです。✨ 主な機能CRUD操作: メモの作成 (Create)、一覧表示 (Read)、更新 (Update)、削除 (Delete) が可能です。背景色の変更: 個々のメモの背景色をユーザーが自由に設定・永続化できます。日本時間表示: メモの作成日時が日本時間 (JST) で表示されます。モーダル編集: 既存のメモはモーダルウィンドウ内で編集できます。ルーティング: ルートパス (/) にはシンプルなホーム画面を、/memo にメモアプリ本体を割り当てています。🛠️ 技術スタック分野技術詳細フロントエンドReact (with Vite)UI構築のためのメインライブラリReact Routerルーティング管理 (/ と /memo のパス設定)AxiosバックエンドAPIとの通信 (HTTPリクエスト)バックエンドFlask (Python)APIサーバー構築のための軽量フレームワークFlask-SQLAlchemyデータベース (DB) 操作を簡単にするORMSQLite開発環境用のシンプルなデータベースFlask-CORSフロントエンドからのリクエストを許可するための設定pytzタイムゾーン (日本時間) 処理▶️ アプリケーションの起動手順本アプリはフロントエンドとバックエンドの2つのサーバーを起動する必要があります。1. バックエンドサーバー (Flask) の起動重要: 仮想環境内で実行してください。ターミナルを開き、バックエンドディレクトリへ移動:Bashcd memo-app/memo-app-backend
仮想環境を有効化:Bash# Windows (PowerShell)
.\venv\Scripts\Activate
# macOS/Linux
source venv/bin/activate
必要なライブラリをインストール:Bashpip install Flask Flask-SQLAlchemy Flask-CORS pytz
サーバーを起動:Bashpython app.py
http://127.0.0.1:5000 でサーバーが起動します。このターミナルは閉じずにそのままにしておきます。2. フロントエンド (React) の起動新しいターミナルタブまたはウィンドウで実行します。フロントエンドディレクトリへ移動:Bashcd ../memo-app-frontend
必要なライブラリをインストール:Bashnpm install
開発サーバーを起動:Bashnpm run dev
http://localhost:5173/ (または別のポート) でサーバーが起動します。3. ブラウザでのアクセス以下のURLにアクセスして、アプリケーションを確認してください。パス動作http://localhost:5173/<h1>Home</h1> が表示されます。http://localhost:5173/memoメモアプリ本体が表示されます。🔗 Gitでの管理方法 (日常的な更新)ローカルでコードを編集した後、GitHubにその変更を記録するための手順です。変更のステージング（追跡対象に追加）Bashgit add .
変更のコミット（ローカルに履歴を記録）Bashgit commit -m "feat: 新しいモーダルコンポーネントを追加"
GitHubへのプッシュ（リモートに履歴を反映）Bashgit push origin main
```<ctrl63>