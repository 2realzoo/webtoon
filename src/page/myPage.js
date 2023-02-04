import { useNavigate } from "react-router-dom";

function MyPage() {
    const {userId, img, info} = (JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className='mypage-wrapper'>
            <h1><a href="/">icon</a></h1>
            <div className="userId">{userId}</div>
            <img src={img} />
            <div className="info">{info}</div>
            <button className="logout-btn" onClick={handleLogout}>logout</button>
        </div>
    )
}

export default MyPage;