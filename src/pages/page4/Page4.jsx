import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate
import styles from './Page4.module.less';
import Navigator from '../../components/navigator/Navigator.jsx';
import Logo from './Logo.jsx';
import Title from '../../components/Title/Title.jsx';

import src from '../../images/four/left.png';

function Page4() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // 使用 useNavigate 钩子

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
      navigate('/index'); // 使用 navigate 来跳转
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

  return (
    <div className={styles.shell}>
      <Title />

      <div className={styles.left}>
        <img
          src={src}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.row}>
              <div className={styles.logo}>
                <Logo />
              </div>
            </div>
            <h1>登录</h1>
            <input
              type="text"
              placeholder="Address"
              value={username}
              style={{
                height: '5vh',
                marginTop: '1vh',
                marginBottom: '1vh',
                position: 'relative',
                top: '3vh',
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              style={{
                height: '5vh',
                marginTop: '1vh',
                marginBottom: '1vh',
                position: 'relative',
                top: '3.5vh',
              }}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown} // 监听键盘按下事件
            />
            <button className={styles.loginButton} onClick={handleLogin}>
              登录
            </button>

            {/* 只在出错时显示错误信息 */}
            {error && <div className={styles.error}>{error}</div>}
          </div>
        </div>

        {/*<div className={styles.wave}></div>*/}
      </div>
    </div>
  );
}

export default Page4;
