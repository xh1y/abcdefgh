import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Manager.module.less';

function Manager() {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();  // 使用 useNavigate 来处理返回

    // 获取反馈信息
    useEffect(() => {
        const token = localStorage.getItem('token');  // 从 localStorage 获取 token

        if (!token) {
            // 如果没有 token，直接返回错误提示
            console.error("没有找到 token");
            alert("请先登录！");
            navigate('/page4');  // 导航到登录页面
            return;
        }

        fetch('http://localhost:8080/api/admin/messages', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,  // 在请求头中加入 token
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.text())  // 保持 text 格式
        .then(text => {
            console.log('后端返回内容是：', text);  // 打印返回的内容
            try {
                const data = JSON.parse(text);  // 解析 JSON
                setMessages(Array.isArray(data) ? data : [data]);  // 如果是数组，直接设置；否则包装成数组
            } catch (err) {
                console.error('JSON解析失败：', err);  // 处理解析错误
            }
        })
        .catch(err => {
            console.error('请求失败：', err);  // 处理请求错误
        });
    }, [navigate]); // 仅在组件挂载时执行

    // 返回按钮的点击处理
    const handleBack = () => {
        navigate('/page4');  // 返回上一页
    };

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <button className={styles.btn} onClick={handleBack}>
                    ← 返回
                </button>
            </div>

            <div className={styles.content}>
                <h2>用户反馈列表</h2>
                {messages.length === 0 ? (
                    <p>暂无反馈信息</p>  // 如果没有数据，显示暂无反馈
                ) : (
                    <ul className={styles.messageList}>
                        {messages.map((msg, index) => (
                            <li key={index} className={styles.messageItem}>
                                <p><strong>用户:</strong> {msg.username}</p>
                                <p><strong>内容:</strong> {msg.content}</p>
                                <p><strong>时间:</strong> {msg.createdAt}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Manager;
