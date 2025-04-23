import React, { useEffect, useRef, useState } from "react";

import styles from './MedalCard.module.less'
function MedalCard(){

    const medalData= [
        { "Country": "United States", "TotalMedals": 2764 },
        { "Country": "Soviet Union", "TotalMedals": 1010 },
        { "Country": "Great Britain", "TotalMedals": 981 },
        { "Country": "France", "TotalMedals": 817 },
        { "Country": "China", "TotalMedals": 727 },
        { "Country": "Germany", "TotalMedals": 704 },
        { "Country": "Italy", "TotalMedals": 663 },
        { "Country": "Australia", "TotalMedals": 600 },
        { "Country": "Hungary", "TotalMedals": 531 },
        { "Country": "Japan", "TotalMedals": 544 },
        { "Country": "Sweden", "TotalMedals": 516 },
        { "Country": "Russia", "TotalMedals": 423 },
        { "Country": "Finland", "TotalMedals": 306 },
        { "Country": "South Korea", "TotalMedals": 320 },
        { "Country": "Romania", "TotalMedals": 317 },
        { "Country": "Netherlands", "TotalMedals": 357 },
        { "Country": "Canada", "TotalMedals": 354 },
        { "Country": "Poland", "TotalMedals": 313 },
        { "Country": "Bulgaria", "TotalMedals": 231 },
        { "Country": "Cuba", "TotalMedals": 244 },
        { "Country": "Czech Republic", "TotalMedals": 72 },
        { "Country": "Czechoslovakia", "TotalMedals": 146 },
        { "Country": "Denmark", "TotalMedals": 216 },
        { "Country": "Spain", "TotalMedals": 187 },
        { "Country": "Brazil", "TotalMedals": 170 },
        { "Country": "Belgium", "TotalMedals": 169 },
        { "Country": "Austria", "TotalMedals": 105 },
        { "Country": "Greece", "TotalMedals": 129 },
        { "Country": "Ukraine", "TotalMedals": 151 },
        { "Country": "Unified Team", "TotalMedals": 112 },
        { "Country": "Serbia and Montenegro", "TotalMedals": 6 },
        { "Country": "FR Yugoslavia", "TotalMedals": 7 },
        { "Country": "Argentina", "TotalMedals": 80 },
        { "Country": "Belarus", "TotalMedals": 85 },
        { "Country": "Azerbaijan", "TotalMedals": 56 },
        { "Country": "Kazakhstan", "TotalMedals": 78 },
        { "Country": "Norway", "TotalMedals": 171 },
        { "Country": "Switzerland", "TotalMedals": 111 },
        { "Country": "Turkey", "TotalMedals": 41 },
        { "Country": "New Zealand", "TotalMedals": 157 },
        { "Country": "Portugal", "TotalMedals": 32 },
        { "Country": "Jamaica", "TotalMedals": 94 },
        { "Country": "Mexico", "TotalMedals": 77 },
        { "Country": "Iran", "TotalMedals": 88 },
        { "Country": "Kenya", "TotalMedals": 124 },
        { "Country": "Ethiopia", "TotalMedals": 62 },
        { "Country": "Algeria", "TotalMedals": 20 },
        { "Country": "Uzbekistan", "TotalMedals": 19 },
        { "Country": "Croatia", "TotalMedals": 48 },
        { "Country": "Estonia", "TotalMedals": 36 },
        { "Country": "Slovakia", "TotalMedals": 33 },
        { "Country": "Slovenia", "TotalMedals": 31 },
        { "Country": "Georgia", "TotalMedals": 47 },
        { "Country": "Lithuania", "TotalMedals": 30 },
        { "Country": "Latvia", "TotalMedals": 21 },
        { "Country": "Colombia", "TotalMedals": 38 },
        { "Country": "Chile", "TotalMedals": 15 },
        { "Country": "Venezuela", "TotalMedals": 5 },
        { "Country": "Peru", "TotalMedals": 5 },
        { "Country": "Puerto Rico", "TotalMedals": 12 },
        { "Country": "Dominican Republic", "TotalMedals": 15 },
        { "Country": "Bahamas", "TotalMedals": 16 },
        { "Country": "Bermuda", "TotalMedals": 2 },
        { "Country": "Barbados", "TotalMedals": 1 },
        { "Country": "Grenada", "TotalMedals": 5 },
        { "Country": "Independent Olympic Athletes", "TotalMedals": 2 },
        { "Country": "Independent Olympic Participants", "TotalMedals": 3 },
        { "Country": "Refugee Olympic Team", "TotalMedals": 1 },
        { "Country": "Mixed team", "TotalMedals": 15 },
        { "Country": "East Germany", "TotalMedals": 409 },
        { "Country": "West Germany", "TotalMedals": 204 },
        { "Country": "United Team of Germany", "TotalMedals": 118 },
        { "Country": "ROC", "TotalMedals": 71 },
        { "Country": "Chinese Taipei", "TotalMedals": 41 },
        { "Country": "Hong Kong", "TotalMedals": 13 },
        { "Country": "India", "TotalMedals": 41 },
        { "Country": "Indonesia", "TotalMedals": 40 },
        { "Country": "Malaysia", "TotalMedals": 10 },
        { "Country": "Philippines", "TotalMedals": 5 },
        { "Country": "Singapore", "TotalMedals": 6 },
        { "Country": "Thailand", "TotalMedals": 19 },
        { "Country": "Vietnam", "TotalMedals": 1 },
        { "Country": "Egypt", "TotalMedals": 41 },
        { "Country": "Morocco", "TotalMedals": 26 },
        { "Country": "Tunisia", "TotalMedals": 19 },
        { "Country": "Albania", "TotalMedals": 2 },
        { "Country": "Armenia", "TotalMedals": 22 },
        { "Country": "Austria", "TotalMedals": 105 },
        { "Country": "Azerbaijan", "TotalMedals": 56 },
        { "Country": "Bahrain", "TotalMedals": 8 },
        { "Country": "Botswana", "TotalMedals": 4 },
        { "Country": "Burkina Faso", "TotalMedals": 1 },
        { "Country": "Burundi", "TotalMedals": 2 },
        { "Country": "Cameroon", "TotalMedals": 6 },
        { "Country": "Cabo Verde", "TotalMedals": 1 },
        { "Country": "Costa Rica", "TotalMedals": 4 },
        { "Country": "Cyprus", "TotalMedals": 2 },
        { "Country": "Djibouti", "TotalMedals": 1 },
        { "Country": "Ecuador", "TotalMedals": 10 },
        { "Country": "Eritrea", "TotalMedals": 1 },
        { "Country": "Fiji", "TotalMedals": 4 },
        { "Country": "Gabon", "TotalMedals": 1 },
        { "Country": "Ghana", "TotalMedals": 5 },
        { "Country": "Guatemala", "TotalMedals": 3 },
        { "Country": "Haiti", "TotalMedals": 2 },
        { "Country": "Iceland", "TotalMedals": 4 },
        { "Country": "Iraq", "TotalMedals": 1 },
        { "Country": "Ireland", "TotalMedals": 42 },
        { "Country": "Israel", "TotalMedals": 20 },
        { "Country": "Ivory Coast", "TotalMedals": 5 },
        { "Country": "Jordan", "TotalMedals": 4 },
        { "Country": "Kosovo", "TotalMedals": 5 },
        { "Country": "Kuwait", "TotalMedals": 3 },
        { "Country": "Kyrgyzstan", "TotalMedals": 13 },
        { "Country": "Lebanon", "TotalMedals": 4 },
        { "Country": "Luxembourg", "TotalMedals": 3 },
        { "Country": "Macedonia", "TotalMedals": 1 },
        { "Country": "Mauritius", "TotalMedals": 1 },
        { "Country": "Moldova", "TotalMedals": 2 },
        { "Country": "Mongolia", "TotalMedals": 10 },
        { "Country": "Montenegro", "TotalMedals": 1 },
        { "Country": "Namibia", "TotalMedals": 5 },
        { "Country": "Niger", "TotalMedals": 1 },
        { "Country": "Nigeria", "TotalMedals": 27 },
        { "Country": "North Korea", "TotalMedals": 60 },
        { "Country": "North Macedonia", "TotalMedals": 2 },
        { "Country": "Pakistan", "TotalMedals": 11 },
        { "Country": "Panama", "TotalMedals": 4 },
        { "Country": "Paraguay", "TotalMedals": 1 },
        { "Country": "Qatar", "TotalMedals": 9 },
        { "Country": "Saudi Arabia", "TotalMedals": 2 },
        { "Country": "Senegal", "TotalMedals": 1 },
        { "Country": "Serbia", "TotalMedals": 18 },
        { "Country": "Sri Lanka", "TotalMedals": 2 },
        { "Country": "Sudan", "TotalMedals": 1 },
        { "Country": "Suriname", "TotalMedals": 2 },
        { "Country": "Syria", "TotalMedals": 1 },
        { "Country": "Tajikistan", "TotalMedals": 1 },
        { "Country": "Tanzania", "TotalMedals": 2 },
        { "Country": "Togo", "TotalMedals": 1 },
        { "Country": "Tonga", "TotalMedals": 1 },
        { "Country": "Trinidad and Tobago", "TotalMedals": 19 },
        { "Country": "Turkmenistan", "TotalMedals": 1 },
        { "Country": "Uganda", "TotalMedals": 8 },
        { "Country": "United Arab Emirates", "TotalMedals": 2 },
        { "Country": "Virgin Islands", "TotalMedals": 1 },
        { "Country": "Zambia", "TotalMedals": 3 },
        { "Country": "Zimbabwe", "TotalMedals": 8 },
        { "Country": "Afghanistan", "TotalMedals": 2 },
        { "Country": "Bohemia", "TotalMedals": 4 },
        { "Country": "British West Indies", "TotalMedals": 2 },
        { "Country": "Ceylon", "TotalMedals": 1 },
        { "Country": "Formosa", "TotalMedals": 1 },
        { "Country": "Russian Empire", "TotalMedals": 8 },
        { "Country": "Saint Lucia", "TotalMedals": 1 },
        { "Country": "Samoa", "TotalMedals": 1 },
        { "Country": "San Marino", "TotalMedals": 3 },
        { "Country": "Taiwan", "TotalMedals": 13 },
        { "Country": "Australasia", "TotalMedals": 12 },
        { "Country": "Netherlands Antilles", "TotalMedals": 1 }
      ];
      
  
      
    
      const [search, setSearch] = useState("");
      const [paused,setPaused]=useState(false)
      const listRef=useRef(null)
      const scrollRef=useRef(0)
      const filteredData = medalData.filter(({ Country }) =>
        Country.toLowerCase().includes(search.toLowerCase())
      );
      useEffect(() => {
        const interval = setInterval(() => {
          if (!paused && listRef.current) {
            scrollRef.current += 1;
            listRef.current.scrollTop = scrollRef.current;
            if (
              scrollRef.current >=
              listRef.current.scrollHeight - listRef.current.clientHeight
            ) {
              scrollRef.current = 0;
            }
          }
        }, 30); // 滚动速度，越小越快
    
        return () => clearInterval(interval);
      }, [paused]);
    return (


        <div >
  <h1 className={styles.head}>历届奥运奖牌总览</h1>
  <div>
  <span className={styles.searchIcon}>🔍</span>
<input

  type="text"
  placeholder="搜索国家..."
  className={styles.input}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
</div>
<div 
 ref={listRef}
 
 className={styles.scrollContainer}
 onMouseEnter={() => setPaused(true)}
 onMouseLeave={() => setPaused(false)}
 >
  {filteredData.map(({ Country, TotalMedals }, index) => (
    <div
      key={index}
      className={styles.display}
    >
      <h2 className="text-xl font-semibold mb-2">{Country}</h2>
      <p className="text-lg text-gray-700">🥇 奖牌总数：{TotalMedals}</p>
    </div>
  ))}
</div>

        </div>
    )
}
export default MedalCard