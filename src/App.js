import Home from "./page/home";
import { Route, Routes } from "react-router-dom";
import Login from "./page/login";
import MyPage from "./page/myPage";

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/mypage' element={<MyPage />}></Route>
  </Routes>
  )
}

export default App;
