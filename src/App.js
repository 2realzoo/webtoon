import Footer from '../src/components/footer.js';
import Home from "./page/home.js";
import { Route, Routes } from "react-router-dom";
import Login from "./page/login.js";
import MyPage from "./page/myPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path='/webtoon' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
      </Routes>
      <Footer />
    </>
  
  )
}

export default App;
