import React from 'react';
import { Table } from 'antd';
import styles from './Page3.module.less';
import { medalData } from './settings';
import Title from '../../components/Title/Title.jsx';

const Page3 = () => {
  const columns = [
    {
      title: 'NOC',
      dataIndex: 'NOC',
      key: 'NOC',
      width: 100,
      fixed: 'left',
      className: styles['noc-column'],
      sorter: (a, b) => a.NOC.localeCompare(b.NOC),
    },
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'Country',
      width: 180,
      fixed: 'left',
      render: (text) => <div className={styles['country-cell']}>{text}</div>,
      sorter: (a, b) => a.Country.localeCompare(b.Country),
    },
    {
      title: '🥇 Gold',
      dataIndex: 'Gold',
      key: 'Gold',
      width: 120,
      sorter: (a, b) => a.Gold - b.Gold,
      render: (text) => (
        <span className={styles['gold-medal']}>{text.toLocaleString()}</span>
      ),
      defaultSortOrder: 'descend',
    },
    {
      title: '🥈 Silver',
      dataIndex: 'Silver',
      key: 'Silver',
      width: 120,
      sorter: (a, b) => a.Silver - b.Silver,
      render: (text) => (
        <span className={styles['silver-medal']}>{text.toLocaleString()}</span>
      ),
    },
    {
      title: '🥉 Bronze',
      dataIndex: 'Bronze',
      key: 'Bronze',
      width: 120,
      sorter: (a, b) => a.Bronze - b.Bronze,
      render: (text) => (
        <span className={styles['bronze-medal']}>{text.toLocaleString()}</span>
      ),
      responsive: ['md'],
    },
    {
      title: '🏅 Total',
      dataIndex: 'Total',
      key: 'Total',
      width: 140,
      sorter: (a, b) => a.Total - b.Total,
      render: (text) => (
        <div className={styles['total-medals']}>
          {text.toLocaleString()}
          <div
            className={styles['medal-stack']}
            style={{ width: `${Math.min(100, text * 2)}px` }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.bigContainer}>
      <Title />
      <div className={styles.middleContainer}>
        <div className={styles.container}>
          <Table
            columns={columns}
            dataSource={medalData}
            rowKey="NOC"
            pagination={{
              pageSize: 8,
              showSizeChanger: false,
              showQuickJumper: true,
            }}
            sticky
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
