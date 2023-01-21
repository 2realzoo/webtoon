import { useEffect, useState } from "react";
import { webtoons } from "../repository/webtoons";

export function FilterBar({ filteredData, setFilteredData }) {
    const genres = ["드라마", "일상", "개그", "로맨스", "무협", "스포츠", "액션", "스릴러", "판타지"].sort((a, b) => a - b)
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    const currentDay = new Date().getDay() - 1 >= 0 ? days[new Date().getDay() - 1] : days[6];
    const [selectedDay, setSelectedDay] = useState(currentDay);
    
    const handleClickDay = e => {
        setSelectedDay(e.target.value);
    };

    useEffect(() => {
        setFilteredData(filterByDay(webtoons, selectedDay));
    }, [selectedDay])

    return (
        <div className="filter-bar-wrapper">
            <div className="day-filter">
                <ul>
                    {days.map((day, idx) => 
                        <li key = {idx} onClick={handleClickDay}>{day}</li>
                    )}
                </ul>
                <div className="genre-filter">
                    <select>
                        <option value="선택안함">선택안함</option>
                        {genres.map((genre, idx) => 
                            <option key={idx} value={genre}>{genre}</option>
                            )
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export function filterByDay(webtoons, day) {
    const filteredData = webtoons.filter(webtoon => webtoon.day === day);
    return filteredData;
}

export function filterByGenre(webtoons, genre) {
    const filteredData = webtoons.filter(webtoon => webtoon.genre === genre);
    return filteredData;
}