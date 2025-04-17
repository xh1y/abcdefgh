import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Manager.module.less';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { time } from 'echarts';
import Navigator from '../../components/navigator/Navigator.jsx';
import Title from '../../components/Title/Title.jsx';

function Manager() {
  const [messages, setMessages] = useState([]); // 所有消息
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const [pageSize] = useState(4); // 每页显示数量
  const [loading, setLoading] = useState(true); // 加载状态
  const navigate = useNavigate();

  const [reUpdate, setReUpdate] = useState(0);
  const token = localStorage.getItem('token');

  // 请求数据的函数
  useEffect(() => {
    const checkAuthAndFetch = async () => {
      if (!token) {
        alert('请先登录！');
        navigate('/page4', { replace: true }); // replace: true 防止返回
        return;
      }

      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          console.log('Token 已过期');
          localStorage.removeItem('token');
          navigate('/page4');
          return;
        }

        const response = await fetch(
          'http://localhost:8080/api/admin/messages',
          {
            method: 'GET',
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          console.error('请求失败:', response.statusText);
        }

        const data = await response.json();
        console.log('后端返回的原始文本是：', data);

        console.log('解析后的数据是：', data);

        // 确保返回数据是数组
        setMessages(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error('请求或解析失败：', err);
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetch();
  }, [navigate, reUpdate]);

  function handleClick(id) {
    axios({
      url: `http://localhost:8080/api/admin/messages/${id}/read`,
      method: 'patch',
      headers: {
        Authorization: `${token}`,
      },
    }).then(
      (res) => {
        setReUpdate((re) => re + 1);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // 获取当前页的数据
  const currentMessages = messages.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 分页按钮点击处理
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 渲染分页按钮
  const renderPagination = () => {
    const totalPages = Math.ceil(messages.length / pageSize);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${styles.pageBtn} ${i === currentPage ? styles.activePage : ''}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  if (loading)
    return (
      <div className={styles.container}>
        <p>加载中...</p>
      </div>
    );
  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.content}>
        <h2>用户反馈列表</h2>
        {messages.length === 0 ? (
          <p>暂无反馈信息</p>
        ) : (
          <ul className={styles.messageList}>
            {currentMessages.map((msg, index) => (
              <li
                key={index}
                className={styles.messageItem}
                style={{
                  background: msg.is_read ? '#eeffeecf' : '#ffeeeecf',
                }}
              >
                <div className={styles.liWrapper}>
                  <div className={styles.liContent}>{msg.content}</div>
                  <div className={styles.liCreateTime}>
                    {new Date(msg.created_at).toLocaleString()}
                  </div>
                  <div className={styles.col}>
                    <div
                      className={styles.liStatus}
                      style={{
                        color: msg.is_read ? 'green' : 'indianred',
                      }}
                    >
                      {msg.is_read ? '已读' : '未读'}
                    </div>
                    <button
                      className={styles.liButton}
                      onClick={() => handleClick(msg.id)}
                      disabled={msg.is_read}
                    >
                      已阅
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.pagination}>{renderPagination()}</div>
      </div>
    </div>
  );
}

export default Manager;
