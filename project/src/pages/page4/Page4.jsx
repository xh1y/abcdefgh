import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';  // 引入 useNavigate
import styles from './Page4.module.less';

function Page4() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // 使用 useNavigate 钩子

  // 处理登录请求
  const handleLogin = async () => {
    // 清除之前的错误提示
    setError('');

    try {
      // 发送 POST 请求
      const res = await fetch('http://localhost:8080/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // 如果响应不是成功的，抛出错误
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || '登录失败，请检查用户名和密码');
      }

      // 如果登录成功，保存 token，并跳转
      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/index');  // 使用 navigate 来跳转
    } catch (error) {
      // 捕获请求失败或响应失败时的错误并显示
      setError(error.message || '请求失败，请稍后再试。');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };
    
      const handleNavigation = (path) => {
        navigate(path);
      };

  return (
    <div className={styles.shell}>
        <span className={styles.title}>Olympic</span>
             <div className={styles.head}>
              <span className={styles.choose1}  onClick={() => handleNavigation('/page1')}>首页</span>
              <span className={styles.choose2}   onClick={() => handleNavigation('/page2')}>历届奥运数据可视化</span>
              <span className={styles.choose3}  onClick={() => handleNavigation('/page3')}>在线预测</span>
              <span className={styles.choose4}  onClick={() => handleNavigation('/page4')}>登录页面</span>
              
              <span className={styles.choose5}  onClick={() => handleNavigation('/page5')}>联系我们</span>
              </div>
      <div className={styles.card}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}  // 监听键盘按下事件
        />
        <button className={styles.loginButton} onClick={handleLogin}>Login</button>

        {/* 只在出错时显示错误信息 */}
        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.signup}>
          Don’t have an account? <a href="#">Sign up</a>
        </div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
}

export default Page4;
