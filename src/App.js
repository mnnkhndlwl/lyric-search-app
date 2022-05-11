import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from "./components/layout/Index";
// import Lyrics from "./components/tracks/Lyric";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
    <Router>
      <>
        <Navbar />
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Index />} />
              {/* <Route exact path="/lyrics" element={<Lyrics/>} /> */}
            </Routes>
          </div>
      </>
    </Router>
   </Provider>
  );
}

export default App;
