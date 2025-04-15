import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const WorldMap = ({style={},showTooltipName=true}) => {
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    const chartDom = document.getElementById('worldMap');
    const myChart = echarts.init(chartDom);

    fetch('/world.json')
      .then(response => response.json())
      .then(worldJson => {
        echarts.registerMap('world', worldJson);

        const option = {
          tooltip: {
            trigger: 'item',
            formatter: '{b}',
            backgroundColor: 'rgba(0,0,0,0.7)',
            textStyle: {
              color: '#fff',
              fontSize: 10,
            },
          },
          series: [
            {
              type: 'map',
              map: 'world',
              roam: true, // ✅ 允许缩放和拖拽
              aspectScale: 1,
              center: [0, 20], // ✅ 居中位置（经度, 纬度）
              zoom: 1.2,       // ✅ 初始缩放比例
              label: {
                show: false,
              },
              itemStyle: {
                areaColor: '#1D6FA3',
                borderColor: '#ffffff',
                borderWidth: 0.5,
              },
              emphasis: {
                disabled: true,
              },
              data: [
                { name: 'China', value: 1393 },
                { name: 'India', value: 1366 },
                { name: 'United States', value: 327 },
              ],
            },
          ],
        };

        myChart.setOption(option);

        // 鼠标移动事件监听
        myChart.on('mousemove', params => {
          if (params && params.name) {
            setCountryName(params.name);
          }
        });

        // 鼠标移出清除名称
        myChart.on('globalout', () => {
          setCountryName('');
        });
      })
      .catch(error => {
        console.error('加载 world.json 失败：', error);
      });

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div style={{ ...style,position: 'relative',  overflow: 'hidden' }}>
      <div id="worldMap" style={{ width: '100%', height: '100%' }} />
      {showTooltipName && countryName && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.75)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease-in-out',
            pointerEvents: 'none',
          }}
        >
          {countryName}
        </div>
      )}
    </div>
  );
};

export default WorldMap;
