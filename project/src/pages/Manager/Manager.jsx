import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Manager.module.less';
// import * as jwt_decode from 'jwt-decode';

function Manager() {
    const [messages, setMessages] = useState([]);  // 所有消息
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
                // const decoded = jwt_decode(token);
                // const currentTime = Date.now() / 1000;
                // if (decoded.exp < currentTime) {
                //     console.log('Token 已过期');
                //     localStorage.removeItem('token');
                //     navigate('/page4');
                //     return;
                // }

                const response = await fetch('http://localhost:8080/api/admin/messages', {
                    method: 'GET',
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json',
                       
                    }
                });
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
    }, [navigate]);

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
            <div className={styles.content}>
                <h2>用户反馈列表</h2>
                {messages.length === 0 ? (
                    <p>暂无反馈信息</p>
                ) : (
                    <ul className={styles.messageList}>
                        {currentMessages.map((msg,index) => (
                            <li key={index} className={styles.messageItem}>
                                <p><strong>内容:</strong> {msg.content}</p>
                                <p><strong>创建时间:</strong> {new Date(msg.created_at).toLocaleString()}</p>
                                <p><strong>状态:</strong> {msg.is_read ? '已读' : '未读'}
                                <button className={styles.button}
                                
                                // onClick={()=>handleClick(msg.id)}
                                disabled={msg.is_read}
                                >已阅</button>
                                </p>
                               
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
