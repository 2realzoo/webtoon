import { useEffect, useState } from "react";
import { webtoons } from "../repository/webtoons";
import { filterByDay, filterByGenre } from "./filters";
import './filterBar.css';
import {FaFilter} from 'react-icons/fa'

function FilterBar({ filteredData, setFilteredData }) {
    const genres = ["드라마", "일상", "개그", "로맨스", "무협", "스포츠", "액션", "스릴러", "판타지"].sort((a, b) => a - b)
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const currentDay = new Date().getDay() - 1 >= 0 ? days[new Date().getDay() - 1] : days[6];
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const [useFilter, setUseFilter] = useState(false);

    const handleClickDay = e => {
        setSelectedDay(e.target.textContent);
    };
    useEffect(() => {
        setFilteredData(filterByDay(webtoons, selectedDay));
    }, [selectedDay])

    const handleClickFilter = () => {
        useFilter? setUseFilter(false) :setUseFilter(true);
    };
    const handleClickGenre = e => {
        const selectedGenre = e.target.textContent;
        const DayContent = filterByDay(webtoons, selectedDay);
        setFilteredData(filterByGenre(DayContent, selectedGenre));
    }

    return (
        <div className="filter-bar-wrapper">
            <div className="day-filter">
                <ul>
                    {days.map((day, idx) => 
                        <li key = {idx} onClick={handleClickDay}>{day}</li>
                    )}
                </ul>
            </div>
            <div className="genre-filter">
                <FaFilter onClick={handleClickFilter} />
                <div className={`dropdown-content ${useFilter?``:`hidden`}`}>
                    {genres.map((genre, idx) =>
                        <p key={idx} onClick={handleClickGenre}>{genre}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default FilterBar;
