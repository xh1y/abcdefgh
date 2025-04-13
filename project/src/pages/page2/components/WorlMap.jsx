import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const WorldMap = () => {
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
              roam: false,         // 不允许缩放或拖动
              projection: 'none',  // 彻底禁用投影
              aspectScale: 1,      // 宽高比为1，保持纯平面
              label: {
                show: false,
       
              },
              itemStyle: {
                areaColor: '#1D6FA3',   // 国家颜色
                borderColor: '#ffffff', // 边界颜色
                borderWidth: 0.5,
              },
              emphasis: {
                disabled:true
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
      })
      .catch(error => {
        console.error('加载 world.json 失败：', error);
      });

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="worldMap" style={{ width: '50vw', height: '50vh' }} />;
};

export default WorldMap;
