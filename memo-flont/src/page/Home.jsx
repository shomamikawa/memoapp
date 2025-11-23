import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('authUser');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ホーム</h1>
      {!user && (
        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => navigate('/login')} style={{ marginRight: '1rem' }}>ログイン</button>
          <button onClick={() => navigate('/signup')}>サインアップ</button>
        </div>
      )}
      {user && (
        <div style={{ marginBottom: '1rem' }}>
          <p>ようこそ {user.username} さん</p>
          <button onClick={() => navigate('/memo')} style={{ marginRight: '1rem' }}>メモページへ</button>
          <button onClick={() => { localStorage.removeItem('authUser'); window.location.reload(); }}>ログアウト</button>
        </div>
      )}
      <p>メモアプリへようこそ。ログインしてメモを管理しましょう。</p>
      <p><Link to="/memo">メモ一覧を見る (ログイン後推奨)</Link></p>
    </div>
  );
}

export default Home;
