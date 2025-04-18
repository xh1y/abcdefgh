import React, { useState } from 'react';
import styles from './Page3.module.less';
import WorldMap from '../page2/components/WorldMap'; // 注意修正拼写错误
import Navigator from '../../components/navigator/Navigator.jsx';

function Page3() {


  const medalData = [
    { NOC: 'USA', Country: 'United States', Gold: 46, Silver: 45, Bronze: 41, Total: 132 },
    { NOC: 'CHN', Country: 'China', Gold: 40, Silver: 29, Bronze: 24, Total: 93 },
    { NOC: 'GBR', Country: 'Great Britain', Gold: 23, Silver: 19, Bronze: 19, Total: 61 },
    { NOC: 'FRA', Country: 'France', Gold: 16, Silver: 20, Bronze: 16, Total: 52 },
    { NOC: 'JPN', Country: 'Japan', Gold: 19, Silver: 15, Bronze: 16, Total: 50 },
    { NOC: 'AUS', Country: 'Australia', Gold: 14, Silver: 13, Bronze: 17, Total: 44 },
    { NOC: 'GER', Country: 'Germany', Gold: 14, Silver: 12, Bronze: 17, Total: 43 },
    { NOC: 'ITA', Country: 'Italy', Gold: 11, Silver: 7, Bronze: 15, Total: 33 },
    { NOC: 'NED', Country: 'Netherlands', Gold: 12, Silver: 8, Bronze: 12, Total: 32 },
    { NOC: 'CAN', Country: 'Canada', Gold: 7, Silver: 9, Bronze: 12, Total: 28 },
    { NOC: 'KOR', Country: 'South Korea', Gold: 10, Silver: 8, Bronze: 9, Total: 27 },
    { NOC: 'BRA', Country: 'Brazil', Gold: 6, Silver: 7, Bronze: 10, Total: 23 },
    { NOC: 'ESP', Country: 'Spain', Gold: 5, Silver: 7, Bronze: 8, Total: 20 },
    { NOC: 'NZL', Country: 'New Zealand', Gold: 7, Silver: 5, Bronze: 6, Total: 18 },
    { NOC: 'HUN', Country: 'Hungary', Gold: 6, Silver: 5, Bronze: 6, Total: 17 },
    { NOC: 'POL', Country: 'Poland', Gold: 3, Silver: 6, Bronze: 6, Total: 15 },
    { NOC: 'UKR', Country: 'Ukraine', Gold: 3, Silver: 4, Bronze: 7, Total: 14 },
    { NOC: 'SWE', Country: 'Sweden', Gold: 4, Silver: 5, Bronze: 4, Total: 13 },
    { NOC: 'SUI', Country: 'Switzerland', Gold: 2, Silver: 4, Bronze: 5, Total: 11 },
    { NOC: 'DEN', Country: 'Denmark', Gold: 3, Silver: 3, Bronze: 4, Total: 10 },
    { NOC: 'KEN', Country: 'Kenya', Gold: 5, Silver: 3, Bronze: 2, Total: 10 },
    { NOC: 'CUB', Country: 'Cuba', Gold: 3, Silver: 2, Bronze: 5, Total: 10 },
    { NOC: 'JAM', Country: 'Jamaica', Gold: 3, Silver: 3, Bronze: 3, Total: 9 },
    { NOC: 'ISR', Country: 'Israel', Gold: 2, Silver: 4, Bronze: 3, Total: 9 },
    { NOC: 'TPE', Country: 'Chinese Taipei', Gold: 2, Silver: 2, Bronze: 4, Total: 8 },
    { NOC: 'TUR', Country: 'Turkey', Gold: 1, Silver: 2, Bronze: 4, Total: 7 },
    { NOC: 'SRB', Country: 'Serbia', Gold: 3, Silver: 1, Bronze: 3, Total: 7 },
    { NOC: 'CZE', Country: 'Czech Republic', Gold: 2, Silver: 2, Bronze: 3, Total: 7 },
    { NOC: 'INA', Country: 'Indonesia', Gold: 3, Silver: 2, Bronze: 2, Total: 7 },
    { NOC: 'KAZ', Country: 'Kazakhstan', Gold: 1, Silver: 3, Bronze: 3, Total: 7 },
    { NOC: 'UZB', Country: 'Uzbekistan', Gold: 2, Silver: 2, Bronze: 3, Total: 7 },
    { NOC: 'IRI', Country: 'Iran', Gold: 2, Silver: 3, Bronze: 2, Total: 7 },
    { NOC: 'CRO', Country: 'Croatia', Gold: 1, Silver: 2, Bronze: 3, Total: 6 },
    { NOC: 'GEO', Country: 'Georgia', Gold: 2, Silver: 2, Bronze: 2, Total: 6 },
    { NOC: 'ROU', Country: 'Romania', Gold: 2, Silver: 2, Bronze: 2, Total: 6 },
    { NOC: 'MEX', Country: 'Mexico', Gold: 1, Silver: 2, Bronze: 2, Total: 5 },
    { NOC: 'ARG', Country: 'Argentina', Gold: 1, Silver: 1, Bronze: 3, Total: 5 },
    { NOC: 'LTU', Country: 'Lithuania', Gold: 1, Silver: 2, Bronze: 2, Total: 5 },
    { NOC: 'ETH', Country: 'Ethiopia', Gold: 2, Silver: 2, Bronze: 1, Total: 5 },
    { NOC: 'BEL', Country: 'Belgium', Gold: 1, Silver: 1, Bronze: 3, Total: 5 },
    { NOC: 'BUL', Country: 'Bulgaria', Gold: 2, Silver: 1, Bronze: 2, Total: 5 },
    { NOC: 'NOR', Country: 'Norway', Gold: 2, Silver: 1, Bronze: 2, Total: 5 },
    { NOC: 'SLO', Country: 'Slovenia', Gold: 2, Silver: 1, Bronze: 2, Total: 5 },
    { NOC: 'AZE', Country: 'Azerbaijan', Gold: 1, Silver: 2, Bronze: 2, Total: 5 },
    { NOC: 'POR', Country: 'Portugal', Gold: 1, Silver: 2, Bronze: 1, Total: 4 },
    { NOC: 'IND', Country: 'India', Gold: 1, Silver: 0, Bronze: 3, Total: 4 },
    { NOC: 'COL', Country: 'Colombia', Gold: 0, Silver: 2, Bronze: 2, Total: 4 },
    { NOC: 'EGY', Country: 'Egypt', Gold: 1, Silver: 1, Bronze: 2, Total: 4 },
    { NOC: 'THA', Country: 'Thailand', Gold: 1, Silver: 2, Bronze: 1, Total: 4 },
    { NOC: 'RSA', Country: 'South Africa', Gold: 1, Silver: 1, Bronze: 2, Total: 4 },
    { NOC: 'ECU', Country: 'Ecuador', Gold: 1, Silver: 1, Bronze: 1, Total: 3 },
    { NOC: 'GRE', Country: 'Greece', Gold: 0, Silver: 1, Bronze: 2, Total: 3 },
    { NOC: 'TUN', Country: 'Tunisia', Gold: 1, Silver: 1, Bronze: 1, Total: 3 },
    { NOC: 'MGL', Country: 'Mongolia', Gold: 0, Silver: 1, Bronze: 2, Total: 3 },
    { NOC: 'FIJ', Country: 'Fiji', Gold: 1, Silver: 1, Bronze: 1, Total: 3 },
    { NOC: 'UGA', Country: 'Uganda', Gold: 1, Silver: 1, Bronze: 1, Total: 3 },
    { NOC: 'DOM', Country: 'Dominican Republic', Gold: 1, Silver: 1, Bronze: 1, Total: 3 },
    { NOC: 'AUT', Country: 'Austria', Gold: 1, Silver: 0, Bronze: 2, Total: 3 },
    { NOC: 'PRK', Country: 'North Korea', Gold: 0, Silver: 1, Bronze: 2, Total: 3 },
    { NOC: 'MAS', Country: 'Malaysia', Gold: 0, Silver: 1, Bronze: 1, Total: 2 },
    { NOC: 'KOS', Country: 'Kosovo', Gold: 1, Silver: 1, Bronze: 0, Total: 2 },
    { NOC: 'KGZ', Country: 'Kyrgyzstan', Gold: 0, Silver: 1, Bronze: 1, Total: 2 },
    { NOC: 'SVK', Country: 'Slovakia', Gold: 0, Silver: 1, Bronze: 1, Total: 2 },
    { NOC: 'ALG', Country: 'Algeria', Gold: 1, Silver: 0, Bronze: 1, Total: 2 },
    { NOC: 'ARM', Country: 'Armenia', Gold: 0, Silver: 1, Bronze: 1, Total: 2 },
    { NOC: 'PHI', Country: 'Philippines', Gold: 1, Silver: 0, Bronze: 1, Total: 2 },
    { NOC: 'HKG', Country: 'Hong Kong, China', Gold: 1, Silver: 0, Bronze: 1, Total: 2 },
    { NOC: 'BRN', Country: 'Bahrain', Gold: 1, Silver: 0, Bronze: 1, Total: 2 },
    { NOC: 'PAN', Country: 'Panama', Gold: 0, Silver: 1, Bronze: 0, Total: 1 },
    { NOC: 'SGP', Country: 'Singapore', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'EOR', Country: 'Refugee Olympic Team', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'QAT', Country: 'Qatar', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'PER', Country: 'Peru', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'PUR', Country: 'Puerto Rico', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'TJK', Country: 'Tajikistan', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'CHI', Country: 'Chile', Gold: 0, Silver: 1, Bronze: 0, Total: 1 },
    { NOC: 'CYP', Country: 'Cyprus', Gold: 0, Silver: 1, Bronze: 0, Total: 1 },
    { NOC: 'MDA', Country: 'Moldova', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'GUA', Country: 'Guatemala', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'MAR', Country: 'Morocco', Gold: 0, Silver: 0, Bronze: 1, Total: 1 },
    { NOC: 'BOT', Country: 'Botswana', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'JOR', Country: 'Jordan', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'PAK', Country: 'Pakistan', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'ALB', Country: 'Albania', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'GRN', Country: 'Grenada', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'CPV', Country: 'Cape Verde', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'CIV', Country: 'Ivory Coast', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'LCA', Country: 'Saint Lucia', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'DMA', Country: 'Dominica', Gold: 0, Silver: 0, Bronze: 0, Total: 0 },
    { NOC: 'ZAM', Country: 'Zambia', Gold: 0, Silver: 0, Bronze: 0, Total: 0 }
];

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'Total', direction: 'desc' });

  // 创建一个索引用于快速查找国家数据
  const countryIndex = medalData.reduce((acc, item) => {
    acc[item.Country.toLowerCase()] = item;
    acc[item.NOC.toLowerCase()] = item;
    return acc;
  }, {});

// 处理国家点击事件
const handleCountryClick = (countryName) => {
  if (!countryName) return;

  const country = medalData.find(item => 
    item.Country.toLowerCase() === countryName.toLowerCase() ||
    item.NOC.toLowerCase() === countryName.toLowerCase()
  );
  setSelectedCountry(country || null); // 更新选中的国家
};

  

  const requestSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedData = () => {
    const sortableData = [...medalData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const renderCountryCard = () => {
    if (!selectedCountry) {
      return <div className={styles.noSelection}>2028预测情况</div>;
    }

    return (
      <div className={styles.countryCard}>
        <h3>{selectedCountry.Country}</h3>
        <div className={styles.medalInfo}>
          <div className={styles.medalRow}>
            <span className={styles.gold}>🏅 {selectedCountry.Gold}</span>
            <span className={styles.silver}>🥈 {selectedCountry.Silver}</span>
            <span className={styles.bronze}>🥉 {selectedCountry.Bronze}</span>
          </div>
          <div className={styles.total}>总计: {selectedCountry.Total}</div>
        </div>
      </div>
    );
  };



  return (
    <div className={styles.container}>
      <span className={styles.title}>Olympic</span>
      <div className={styles.head}>
        <Navigator />
      </div>

      <div className={styles.worldmapWrapper}>
        <WorldMap
          style={{ width: '100%', height: '100%' }}
          showTooltipName={false}
          onCountryClick={handleCountryClick}  // 使用点击事件代替悬停
        />
      </div>

      <div className={styles.data}>
        <div className={styles.selectedCountry}>
          {renderCountryCard()}
        </div>
    
      </div>
    </div>
  );
}

export default Page3;
