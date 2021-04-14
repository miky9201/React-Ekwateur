import React from 'react';

const YearFilter = ({filterValue, setFilterValue}
: {filterValue: string, setFilterValue: React.Dispatch<React.SetStateAction<string>>}) => {
      
      const handleChange = (e: any) => {
            // console.log(typeof e);
            // console.log(typeof e.target);
            // console.log(typeof e.target.value);
            setFilterValue(e.target.value);
      }

      return(
            <div>
                  <label htmlFor="year-select">Filtrer par année</label>

                  <select value={filterValue} onChange={handleChange}>
                        <option value="0">Toute la consommation</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                  </select>
            </div>
      )
}

export default YearFilter;