import { useState } from "react";
import userList from "../repository/userList.js";
import useInput from "../util/useInput.js";
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css';
import { Link } from "react-router-dom";

function Login() {
    const [id, idBind] = useInput('')
    const [password, passwordBind] = useInput('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = e => {
        if (e.key !== "Enter" && e._reactName !== "onClick") {
            return;
        }
        e.preventDefault();
        const user = userList.filter(el => el.userId === id && el.password === password)[0];
        if (user === undefined) {
            setIsLogin(false);
        }
        else {
            setIsLogin(true);
            localStorage.setItem('user' ,JSON.stringify(user));
            navigate('/mypage');
        }
    };

    return (
        <div className={styles.login_wrap}>
            {/* <h2>로그인 페이지</h2> */}
            <div className={styles.input_wrap}>
                <h1 className={styles.home}><Link to="/">WEBTOON</Link></h1>
                <input className={styles.login} placeholder="아이디" {...idBind} onKeyUp={handleSubmit}></input>
                <input className={styles.login} type='password' placeholder="비밀번호" {...passwordBind} onKeyUp={handleSubmit}></input>
                <input className={styles.button} type="submit" value="로그인" onClick={handleSubmit}></input>
                {isLogin? null: <p className={styles.fail}>로그인에 실패하셨습니다.</p>}
            </div>
        </div>
    )
}

export default Login;