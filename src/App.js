import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chào mừng đến với React App 🚀</h1>
        <p>
          Đây là một giao diện ReactJS đơn giản.
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tìm hiểu thêm về React
        </a>
      </header>

      {/* Nội dung chính */}
      <main className="App-main">
        <section className="card">
          <h2>Thống kê</h2>
          <ul>
            <li>Người dùng: 1200</li>
            <li>Dự án: 25</li>
            <li>Doanh thu: $8,760</li>
          </ul>
        </section>

        <section className="card">
          <h2>Thêm nhanh</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Đã gửi!'); }}>
            <input type="text" placeholder="Nhập tiêu đề" />
            <textarea placeholder="Mô tả..." />
            <button type="submit">Thêm</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Simple React UI</p>
      </footer>
    </div>
  );
}

export default App;
