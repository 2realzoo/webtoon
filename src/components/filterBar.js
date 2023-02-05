import { useEffect, useState } from "react";
import { webtoons } from "../repository/webtoons";
import { filterByDay, filterByGenre } from "./filters";
import './filterBar.css';
import {FaFilter} from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import { filterData, selectedDay } from "../reducers/actions";

function FilterBar() {
    const genres = ["드라마", "일상", "개그", "로맨스", "무협", "스포츠", "액션", "스릴러", "판타지"].sort((a, b) => a - b)
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const [useFilter, setUseFilter] = useState(false);
    const { searchReducer, dayReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClickDay = e => {
        dispatch(selectedDay(e.target.textContent))
    };

    useEffect(() => {
        if (dayReducer.length !== 0) {
           dispatch(filterData(filterByDay(webtoons, dayReducer))); 
        }
    }, [dayReducer])

    const handleClickFilter = () => {
        useFilter? setUseFilter(false) :setUseFilter(true);
    };

    const handleClickGenre = e => {
        const selectedGenre = e.target.textContent;
        const DayContent = filterByDay(webtoons, dayReducer);
        dispatch(filterData(filterByGenre(DayContent, selectedGenre)));
    }

    return (
        <div className="filter-bar-wrapper">
            <div className="day-filter">
                <ul>
                    {days.map((day, idx) => 
                        <li key={idx} onClick={handleClickDay}>
                            <p className={dayReducer === day && searchReducer === false ? `active` : ``}>{day}</p>
                        </li>
                    )}
                </ul>
            </div>
            <div className="genre-filter">
                <div className="filter-icon">
                    <FaFilter onClick={handleClickFilter} />
                </div>
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
