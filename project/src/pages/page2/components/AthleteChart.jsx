import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const AthleteChart = () => {
  const chartRef = useRef(null);
  const [selectedAthlete, setSelectedAthlete] = useState('Michael Ii');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const athleteData = {
    'Michael Ii': [
      { year: 2000, gold: 5, silver: 0, bronze: 0 },
      { year: 2004, gold: 6, silver: 1, bronze: 0 },
      { year: 2008, gold: 7, silver: 1, bronze: 1 },
      { year: 2012, gold: 5, silver: 1, bronze: 1 }
    ],
    'Larysa (diriy-)': [
      { year: 2004, gold: 3, silver: 2, bronze: 1 },
      { year: 2008, gold: 4, silver: 2, bronze: 2 },
      { year: 2012, gold: 2, silver: 1, bronze: 1 }
    ],
    'Charles Jr.': [
      { year: 2000, gold: 4, silver: 1, bronze: 0 },
      { year: 2004, gold: 3, silver: 2, bronze: 1 },
      { year: 2008, gold: 3, silver: 1, bronze: 1 }
    ],
    'Nikolay Andrianov': [
      { year: 2004, gold: 3, silver: 2, bronze: 1 },
      { year: 2008, gold: 2, silver: 2, bronze: 1 },
      { year: 2012, gold: 2, silver: 1, bronze: 1 }
    ],
    'Borys Shakhlin': [
      { year: 2000, gold: 3, silver: 1, bronze: 0 },
      { year: 2004, gold: 2, silver: 2, bronze: 1 },
      { year: 2008, gold: 2, silver: 1, bronze: 1 }
    ]
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // 销毁旧图表，防止重复初始化错误
    echarts.dispose(chartRef.current);
    const myChart = echarts.init(chartRef.current);

    const athlete = athleteData[selectedAthlete];
    const allYears = Array.from(new Set(athlete.map(d => d.year))).sort((a, b) => a - b);

    const medalTypes = ['gold', 'silver', 'bronze'];
    const medalNames = ['金牌', '银牌', '铜牌'];
    const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32'];

    const series = medalTypes.map((type, index) => {
      const medalData = allYears.map(year => {
        const yearData = athlete.find(d => d.year === year);
        return yearData ? yearData[type] : '-';
      });

      return {
        name: `${selectedAthlete}-${medalNames[index]}`,
        type: 'line',
        data: medalData,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 3,
          type: index === 0 ? 'solid' : index === 1 ? 'dashed' : 'dotted'
        },
        itemStyle: {
          color: medalColors[index]
        },
        emphasis: {
          focus: 'series'
        }
      };
    });

    const option = {
      title: {
        text: `${selectedAthlete} 奖牌数年度变化`,
 
        left: 'center',
        textStyle: {
          fontSize: 10,
          fontWeight: 'bold',
           color: '#00FFCC'
        },
     

        top:0
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let result = `<strong>${params[0].axisValue}年</strong><br/>`;
          params.forEach(param => {
            const [name, medal] = param.seriesName.split('-');
            if (param.data !== '-') {
              result += `${name}: ${medal} ${param.data}枚<br/>`;
            }
          });
          return result;
        },
        textStyle:{
            fontSize:10
        }
      },
      legend: {
        data: medalTypes.map((type, i) => `${selectedAthlete}-${medalNames[i]}`),
        top: 10,
        textStyle: {
          fontSize: 8,
          color:'#fff'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        top: '30%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: allYears,
        axisLabel: {
          interval: 0,
          rotate: 30
        },
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        nameLocation: 'middle',
        nameGap: 30
      },
      yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#fff'
            }
        },
        nameLocation: 'middle',
        nameGap: 30
      },
      series: series,
      color: medalColors
    };

    myChart.setOption(option);

    const handleResize = () => myChart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, [athleteData, selectedAthlete]);

  return (
    <div 
 
    >
      <select
        value={selectedAthlete}
        onChange={(e) => setSelectedAthlete(e.target.value)}
        style={{
          marginBottom: '5px',
          padding: '2px 3px',
          fontSize: '8px',
          borderRadius: '2px',
          border: '1px solid #ccc',
          outline: 'none'
        }}
      >
        {Object.keys(athleteData).map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <div
        ref={chartRef}
        style={{ width: '100%', height: '260px' }}
      />
    </div>
  );
};

export default AthleteChart;
