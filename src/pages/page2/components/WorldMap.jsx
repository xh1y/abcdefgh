import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import worldJson from '../../../assets/world.json';

const WorldMap = ({ style = {}, showTooltipName = true, onCountryClick }) => {
  const [countryName, setCountryName] = useState('');
  const [zoom, setZoom] = useState(1.2);  // 默认缩放比例
  const [center, setCenter] = useState([0, 20]);  // 默认中心位置
  
  useEffect(() => {
    const chartDom = document.getElementById('worldMap');
    const myChart = echarts.init(chartDom);

    echarts.registerMap('world', worldJson);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
        backgroundColor: 'rgba(0,0,0,0.7)',
        textStyle: { color: '#fff', fontSize: 10 },
      },
      series: [
        {
          type: 'map',
          map: 'world',
          roam: true,
          aspectScale: 1,
          center: center,
          zoom: zoom,
          label: { show: false },
          itemStyle: { areaColor: '#1D6FA3', borderColor: '#ffffff', borderWidth: 0.5 },
          emphasis: { disabled: true },
          data: [
            { name: 'China', value: 1393 },
            { name: 'India', value: 1366 },
            { name: 'United States', value: 327 },
          ],
        },
      ],
    };

    myChart.setOption(option);

    myChart.on('click', (params) => {
      if (params && params.name) {
        setCountryName(params.name);
        if (onCountryClick) {
          onCountryClick(params.name);  // 触发传递给父组件的回调
        }
        const currentZoom = myChart.getOption().series[0].zoom;
        const currentCenter = myChart.getOption().series[0].center;
        setZoom(currentZoom);  // 保存 zoom
        setCenter(currentCenter);  // 保存 center
      }
    });
    
 
    

    return () => {
      myChart.dispose();
    };
  }, [onCountryClick]);

  return (
    <div style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      <div id="worldMap" style={{ width: '100%', height: '100%' }} />
      {showTooltipName && countryName && (
        <div
          style={{
            position: 'absolute',
            top:0,
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
export default WorldMap

