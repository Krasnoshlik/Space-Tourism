import { Home } from "./components/Home";
import { Destination } from './components/Destination';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Crew } from "./components/Crew";
import { Technology } from "./components/Technology";
import { useEffect, useState } from "react";

function App() {
  const [background, setBackground] = useState('-home');
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === '/') {
      setBackground('-home');
    } else if(location.pathname === '/destination' || location.pathname === '/crew') {
      setBackground('-crew');
    } else if(location.pathname === '/technology') {
      setBackground('-tech')
    }
  },[location])

  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <div className={"backgroundimage"+ background}>
      <div className="app-wrapper">
        <MouseParallaxChild factorX={0.3} factorY={0.5}>
          <nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
            {/* Start nav */}
            <div className="nav-wrapper">
              <span></span>
              <div className="nav-links">
                <button onClick={() => navigate('/', { replace: false })}>00 HOME</button>
                <button onClick={() => navigate('/destination', { replace: false })}>01 DESTINATION</button>
                <button onClick={() => navigate('/crew', { replace: false })}>02 CREW</button>
                <button onClick={() => navigate('/technology', { replace: false })}>03 TECHNOLOGY</button>
              </div>
            </div>
          </nav>
          {/* End nav  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew/>} />
        <Route path="/technology" element={<Technology/>} />
      </Routes>
        </MouseParallaxChild>
      </div>
      </div>
    </MouseParallaxContainer>
  );
}

export default App;
