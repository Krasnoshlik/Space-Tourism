import { Home } from "./components/Home";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

function App() {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
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
                <button>00 HOME</button>
                <button>01 DESTINATION</button>
                <button>02 CREW</button>
                <button>03 TECHNOLOGY</button>
              </div>
            </div>
          </nav>
          {/* End nav  */}

          <Home />
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
}

export default App;
