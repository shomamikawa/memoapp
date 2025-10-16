📝 シンプルメモアプリ 
✨ 主な機能CRUD操作: メモの作成 (Create)、一覧表示 (Read)、更新 (Update)、削除 (Delete) が可能です。
背景色の変更: 個々のメモの背景色をユーザーが自由に設定・永続化できます。
日本時間表示: メモの作成日時が日本時間 (JST) で表示されます。
モーダル編集: 既存のメモはモーダルウィンドウ内で編集できます。
ルーティング: ルートパス (/) にはシンプルなホーム画面を、/memo にメモアプリ本体を割り当てています。
1. バックエンドサーバー (Flask) の起動重要: 仮想環境内で実行してください。ターミナルを開き、バックエンドディレクトリへ移動:cd memo-app/memo-app-backend
仮想環境を有効化: Windows (PowerShell)
.\venv\Scripts\Activate
# macOS/Linux
source venv/bin/activate
必要なライブラリをインストール:pip install Flask Flask-SQLAlchemy Flask-CORS pytz
サーバーを起動:python app.py
http://127.0.0.1:5000 でサーバーが起動します。このターミナルは閉じずにそのままにしておきます。
2. フロントエンド (React) の起動新しいターミナルタブまたはウィンドウで実行します。フロントエンドディレクトリへ移動:cd ../memo-app-frontend
必要なライブラリをインストール:npm install
開発サーバーを起動:npm run dev
http://localhost:5173/ (または別のポート) でサーバーが起動します。
3. ブラウザでのアクセス以下のURLにアクセスして、アプリケーションを確認してください。sパス動作http://localhost:5173/<h1>Home</h1> が表示されます。http://localhost:5173/memoメモアプリ本体が表示されます。
