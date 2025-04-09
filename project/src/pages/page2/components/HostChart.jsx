import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const HostChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    
    const option = {
      title: {
        text: '夏季奥运会主办国家次数占比',
        subtext: '1896-2032年数据',
        left: 'center',
        
        textStyle: {
          fontSize: 10,
          fontWeight: 'bold',
           color: '#00FFCC'
        },
        subtextStyle: {
          fontSize: 8,
          color: '#fff',
          
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}次 ({d}%)',
        textStyle: {
          color: 'black',
          fontSize: 8
        },
        
      },
      legend: {
        orient: 'vertical',
        left:0,
        top: 10,
        textStyle: {
          fontSize: 7,
          color:'#fff'
        }
      },
      series: [
        {
          name: '举办次数',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['70%', '55%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 3,
            borderColor: '#fff',
            borderWidth: 3,
         
          },
          label: {
            show: false,
            position: 'center',
           
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 9,
              fontWeight: 'bold',
              color:'#fff'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 5, name: '美国 (5次)' },
            { value: 3, name: '英国 (3次)'},
            { value: 3, name: '法国 (3次)' },
            { value: 3, name: '澳大利亚 (3次)' },
            { value: 2, name: '希腊 (2次)'},
            { value: 2, name: '日本 (2次)' },
            { value: 2, name: '德国 (2次)'},
            { value: 1, name: '其他 (各1次)' }
          ],
       
        }
      ],
      color: [
        '#FFB6C1', '#2f4554', '#61a0a8', '#d48265', 
        '#91c7ae', '#749f83', '#ca8622', '#bda29a'
      ],
      backgroundColor: 'black'
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

export default HostChart;