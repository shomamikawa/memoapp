import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// ホームページ用のシンプルなコンポーネントを定義
const HomeComponent = () => <h1>Home</h1>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
    
        <Route path="/memo" element={<App />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);