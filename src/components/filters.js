export function filterByDay(webtoons, day) {
    const filteredData = webtoons.filter(webtoon => webtoon.day.includes(day));
    return filteredData;
}

export function filterByGenre(webtoons, genre) {
    const filteredData = webtoons.filter(webtoon => webtoon.genre === genre);
    return filteredData;
}