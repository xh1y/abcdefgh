import { useEffect, useState } from 'react';
import styles from './Page5.module.less';
import axios from 'axios';
import Navigator from '../../components/navigator/Navigator.jsx';
function Page5() {
  const [click, setClick] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // 错误信息
  function handleClick(e) {
    console.log('点击');
    console.log(e);
    setClick(false);
  }

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  function handleInputChange(event) {
    const input = event.target;
    setQuestion(input.value); // 更新输入框内容
  }
  async function handleSubmit(event) {
    event.preventDefault(); // 阻止默认的表单提交行为
    if (!question.trim()) {
      alert('请输入问题'); // 提醒用户输入问题
      return;
    }
    setLoading(true);
    setError(''); // 清除任何之前的错误信息

    try {
      // 发送 POST 请求到服务器
      const response = await axios.post('http://localhost:8080/api/message', {
        content: question,
      });
      console.log(response.data); // 处理返回的数据
      alert('提交成功！'); // 提示用户提交成功
      setQuestion('');
    } catch (error) {
      setError('提交失败，请稍后再试'); // 设置错误信息
      console.error('提交错误:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Olympic</span>
      <div className={styles.head}>
        <Navigator
          onclick_5={(e) => {
            setClick(true);
            e.stopPropagation();
          }}
        />
      </div>
      {click && (
        <div
          className={styles.content}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p className={styles.ip}>We'd like to hear from you</p>
          <p className={styles.ip}>
            If you have any further questions, please let us know
          </p>

          <form onSubmit={handleSubmit}>
            <textarea
              value={question}
              onChange={handleInputChange}
              className={styles.question}
              placeholder="请输入您的问题"
              rows={4} // 默认显示4行
            />
            <button
              className={styles.btn}
              disabled={loading}
              style={{
                background: question.trim() === '' ? '#888' : '#646cff',
              }}
            >
              {loading ? '提交中...' : '提交'}
            </button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      )}
    </div>
  );
}
export default Page5;
