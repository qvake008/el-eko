import Header from "../components/Header";
import { useState , useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from '../pages/Home'
import Erorr404 from '../pages/Erorr404'
import Footer from '../components/Footer'
import BtnScrollUp from '../components/BtnScrollUp'

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('touchmove', (e) => {
      setScroll(window.scrollY)
  },[scroll]);
    window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
    });
  },[scroll]);


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='*' element={<Erorr404/>} />
      </Routes>
      {(scroll>200)?<BtnScrollUp/>:null}
      <Footer/>
    </>
  );
}

export default App;
