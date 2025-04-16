import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Manager.module.less';
import jwt_decode from 'jwt-decode';
function Manager() {
    function generateReadMessages(count = 50) {
        const mockMessages = [];
        const types = ['系统通知', '用户消息', '公告', '提醒'];
        
        for (let i = 1; i <= count; i++) {
          mockMessages.push({
            id: i,
            title: `已读消息 ${i}`,
            content: `这是第 ${i} 条已读消息内容，用于测试已读消息的展示效果。`,
            sender: i % 3 === 0 ? '系统' : `用户${i % 10}`,
            status: '已读',  // 固定为已读状态
            type: types[i % types.length],
            createTime: new Date(Date.now() - i * 3600000).toISOString(),
            isRead: true,    // 明确标记为已读
            readTime: new Date(Date.now() - i * 1800000).toISOString() // 阅读时间
          });
        }
        return mockMessages;
      }
      
      // 使用示例
      const readMessages = generateReadMessages(50);
    const [messages, setMessages] = useState(readMessages);  // 所有消息
    const [currentPage, setCurrentPage] = useState(1);  // 当前页码
    const [pageSize] = useState(4);  // 每页显示数量
    const [loading, setLoading] = useState(true);  // 加载状态
    const navigate = useNavigate();
 
    // 请求数据的函数
    useEffect(() => {
        const checkAuthAndFetch = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                alert("请先登录！");
                navigate('/page4', { replace: true });  // replace: true 防止返回
                return;
            }

            try {
                const decoded=jwt_decode(token);
                const currentTime=Date.now()/1000;
                if(decoded.exp < currentTime){
                    console.log('Token已过期')
                    localStorage.removeItem('token');
                    navigate('/page4')
                }
                const response = await fetch('http://localhost:8080/api/admin/messages', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });

                const text = await response.text();
                console.log('后端返回内容是：', text);

                const data = JSON.parse(text);
                setMessages(Array.isArray(data) ? data : [data]);
            } catch (err) {
                console.error('请求或解析失败：', err);
            } finally {
                setLoading(false);
            }
        };

        checkAuthAndFetch();
    }, [navigate]);

    // 返回上一页
    // const handleBack = () => {
    //     console.log('返回')
    //     navigate('/page4');

    // };

    // 获取当前页的数据
    const currentMessages = messages.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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

    if (loading) return <div className={styles.container}><p>加载中...</p></div>;

    return (
        <div className={styles.container}>
          
                {/* <button className={styles.btn} onClick={handleBack}>返回</button> */}
        

            <div className={styles.content}>
                <h2>用户反馈列表</h2>
                {messages.length === 0 ? (
                    <p>暂无反馈信息</p>
                ) : (
                    <ul className={styles.messageList}>
                        {currentMessages.map((msg, index) => (
                            <li key={index} className={styles.messageItem}>
                               
                                <p><strong>内容:</strong> {msg.content}</p>
                           
                            </li>
                        ))}
                    </ul>
                )}
                
                <div className={styles.pagination}>
                    {renderPagination()}
                </div>
            </div>
        </div>
    );
}

export default Manager;

