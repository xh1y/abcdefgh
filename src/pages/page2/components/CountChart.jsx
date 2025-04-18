import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { medalData } from '../settings.js';

const CountChart = () => {
  // 处理数据 - 计算每个国家的总奖牌数

  /** @type {Array<{country: string, total: number}>} */
  let medalData_ = medalData.map((i) => ({
    country: Object.keys(i)[0],
    total: Object.values(i)[0],
  }));

  medalData_.sort((a, b) => b.total - a.total);
  medalData_ = medalData_.slice(0, 5);

  const getOption = () => {
    return {
      title: {
        text: '夏季奥运会奖牌总数前5国家',
        subtext: '1896-2024年数据',
        left: 'center',
        textStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          color: '#00FFCC',
          top: '2%',
        },
        subtextStyle: {
          top: 2,
          fontSize: 12,
          color: '#fff',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        formatter: '{b}: {c}枚',
        textStyle: {
          color: 'black',
          fontSize: 12,
        },
      },
      grid: {
        left: 0,
        top: '20%',
        bottom: '8%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff',
          fontSize: 12,
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#fff',
          },
        },
      },
      yAxis: {
        type: 'category',
        data: medalData_.map((item) => item.country),
        axisLabel: {
          color: '#fff',
          fontSize: 12,
        },
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
      },
      series: [
        {
          name: '奖牌总数',
          type: 'bar',
          data: medalData_.map((item) => item.total),
          itemStyle: {
            color: function (params) {
              // 为不同国家设置不同颜色
              const colorList = [
                'pink',
                '#2f4554',
                '#61a0a8',
                '#d48265',
                '#91c7ae',
              ];
              return colorList[params.dataIndex];
            },
            borderRadius: [0, 5, 5, 0],
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}枚',
            color: '#fff',
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactEcharts
        option={getOption()}
        style={{ width: '100%', height: '100%' }}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};

export default CountChart;
