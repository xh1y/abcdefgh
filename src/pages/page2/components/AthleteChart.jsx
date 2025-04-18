import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { athleteData } from '../settings.js';

import classes from './athlete.module.less';

const AthleteChart = () => {
  const [selectedAthlete, setSelectedAthlete] = useState('Michael Ii');

  // 初始化图表选项
  const getOption = (selectedAthlete) => {
    const athlete = athleteData[selectedAthlete];
    const allYears = Array.from(new Set(athlete.map((d) => d.year))).sort(
      (a, b) => a - b
    );

    const medalTypes = ['gold', 'silver', 'bronze'];
    const medalNames = ['金牌', '银牌', '铜牌'];
    const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32'];

    const series = medalTypes.map((type, index) => {
      const medalData = allYears.map((year) => {
        const yearData = athlete.find((d) => d.year === year);
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
          type: index === 0 ? 'solid' : index === 1 ? 'dashed' : 'dotted',
        },
        itemStyle: {
          color: medalColors[index],
        },
        emphasis: {
          focus: 'series',
        },
      };
    });

    return {
      title: {
        text: `${selectedAthlete} 奖牌数年度变化`,
        left: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#00FFCC',
        },
        top: 0,
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let result = `<strong>${params[0].axisValue}年</strong><br/>`;
          params.forEach((param) => {
            const [name, medal] = param.seriesName.split('-');
            if (param.data !== '-') {
              result += `${name}: ${medal} ${param.data}枚<br/>`;
            }
          });
          return result;
        },
        textStyle: {
          fontSize: 15,
        },
      },
      legend: {
        data: medalTypes.map(
          (type, i) => `${selectedAthlete}-${medalNames[i]}`
        ),
        top: 35,
        textStyle: {
          fontSize: 12,
          color: '#fff',
        },
      },
      grid: {
        left: '5%',
        right: '5%',
        top: '30%',
        bottom: '2%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: allYears,
        axisLabel: {
          interval: 0,
          rotate: 30,
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
        nameLocation: 'middle',
        nameGap: 30,
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
        nameLocation: 'middle',
        nameGap: 30,
      },
      series: series,
      color: medalColors,
    };
  };

  return (
    <div>
      <select
        value={selectedAthlete}
        onChange={(e) => setSelectedAthlete(e.target.value)}
        style={{
          marginBottom: '5px',
          padding: '5px 5px',
          fontSize: '13px',
          outline: 'none',
        }}
        className={classes.select}
      >
        {Object.keys(athleteData).map((name) => (
          <option key={name} value={name} className={classes.option}>
            {name}
          </option>
        ))}
      </select>
      <ReactEcharts
        option={getOption(selectedAthlete)}
        style={{ width: '100%', height: '45vh' }}
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};

export default AthleteChart;
