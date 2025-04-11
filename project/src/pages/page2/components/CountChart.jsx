import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CountChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // 处理数据 - 计算每个国家的总奖牌数
    const medalData = [
      { country: '美国', total: 126 },
      { country: '中国', total: 91 },
      { country: '日本', total: 45 },
      { country: '澳大利亚', total: 53 },
      { country: '法国', total: 64 }
    ];

    const option = {
      title: {
        text: '夏季奥运会奖牌总数前5国家',
        subtext: '1896-2024年数据',
        left: 'center',
        
        textStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          color: '#00FFCC',
           top:'2%' 
        },
        subtextStyle: {
            top:0,
          fontSize: 8,
          color: '#fff',
          
        },
       
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: '{b}: {c}枚',
        textStyle: {
            color: 'black',
            fontSize: 8
          },
      },
      grid: {
        left: 0,
        top:'20%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff',
          fontSize:7,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: medalData.map(item => item.country),
        axisLabel: {
          color: '#fff',
          fontSize:7
        },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [
        {
          name: '奖牌总数',
          type: 'bar',
          data: medalData.map(item => item.total),
          itemStyle: {
            color: function(params) {
              // 为不同国家设置不同颜色
              const colorList = ['pink', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'];
              return colorList[params.dataIndex];
            },
            borderRadius: [0, 5, 5, 0]
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}枚',
            color: '#fff'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    chart.setOption(option);

    const resizeHandler = () => chart.resize();
    window.addEventListener('resize', resizeHandler);
    
    return () => {
      window.removeEventListener('resize', resizeHandler);
      chart.dispose();
    };
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default CountChart;