import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { LoadingOutlined } from '@ant-design/icons';

const MedalChart = ({ 
  data = [], 
  onCountryClick, 
  mapUrl = 'https://cdn.jsdelivr.net/npm/echarts@5.4.3/map/json/world.json',
  style = { width: '100%', height: '600px' }
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 初始化图表
    const initChart = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        if (!chartRef.current) return;

        // 1. 加载世界地图数据
        const response = await fetch(mapUrl);
        if (!response.ok) throw new Error('Failed to fetch map data');
        const worldJson = await response.json();

        // 2. 初始化图表实例
        if (chartInstance.current) {
          chartInstance.current.dispose();
        }
        chartInstance.current = echarts.init(chartRef.current);
        
        // 3. 注册地图
        echarts.registerMap('world', worldJson);

        // 4. 设置图表选项
        const option = {
          backgroundColor: '#f5f5f5',
          tooltip: {
            trigger: 'item',
            formatter: params => {
              const value = params.value || 'No data';
              return `${params.name}<br/>Value: ${value}`;
            }
          },
          visualMap: {
            min: 0,
            max: data.length > 0 ? Math.max(...data.map(item => item.value)) : 100,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
            },
            textStyle: {
              color: '#333'
            }
          },
          series: [{
            name: 'World Data',
            type: 'map',
            map: 'world',
            roam: true, // 允许缩放和拖动
            emphasis: {
              label: {
                show: true,
                color: '#333'
              },
              itemStyle: {
                areaColor: '#ffcc00' // 高亮颜色
              }
            },
            data: data.length > 0 ? data : [
              { name: 'China', value: 100 },
              { name: 'United States', value: 90 },
              { name: 'Russia', value: 80 },
              { name: 'Japan', value: 70 },
              { name: 'Germany', value: 60 }
            ],
            // 地图区域样式
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 0.5
            }
          }]
        };

        chartInstance.current.setOption(option);

        // 5. 添加点击事件
        if (onCountryClick) {
          chartInstance.current.off('click'); // 移除旧监听器
          chartInstance.current.on('click', (params) => {
            onCountryClick(params.name);
          });
        }

        // 6. 响应式调整
        const handleResize = () => {
          chartInstance.current?.resize();
        };
        window.addEventListener('resize', handleResize);

        // 返回清理函数
        return () => {
          window.removeEventListener('resize', handleResize);
          chartInstance.current?.dispose();
        };

      } catch (err) {
        console.error('WorldMap initialization error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    initChart();
  }, [data, mapUrl, onCountryClick]);

  return (
    <div style={{ position: 'relative', ...style }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10
        }}>
          <LoadingOutlined style={{ fontSize: 32 }} />
          <p>Loading map...</p>
        </div>
      )}
      
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
          zIndex: 10
        }}>
          Error: {error}
        </div>
      )}
      
      <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MedalChart;