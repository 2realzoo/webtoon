import { useSelector } from "react-redux";

function MyPage({ }) {
    const userInfo = useSelector(state => state);
    return (
        <div className='mypage-wrapper'>
            <h1><a href="/">icon</a></h1>
            <div className="userName">{userInfo[0]}</div>
        </div>
    )
}

export default MyPage;