import { useState } from "react";
import userList from "../repository/userList";
import useInput from "../util/useInput";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { userInformation } from "../reducers/actions";

function Login() {
    const [id, idBind] = useInput('')
    const [password, passwordBind] = useInput('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const user = userList.filter(el => el.userId === id && el.password === password);
        if (user.length === 0) {
            setIsLogin(false);
        }
        else {
            setIsLogin(true);
            dispatch(userInformation(user));
            navigate('/mypage');
        }
    };

    return (
        <div className="login-wrapper">
            <h1><a href='/'>icon</a></h1>
            <h2>로그인 페이지</h2>
            <div className="input-wrapper">
                <input placeholder="아이디" {...idBind}></input>
                <input type='password' placeholder="비밀번호" {...passwordBind}></input>
            </div>
            <input type="submit" value="로그인" onClick={handleSubmit}></input>
            {isLogin? null: <p>로그인에 실패하셨습니다.</p>}
        </div>
    )
}

export default Login;