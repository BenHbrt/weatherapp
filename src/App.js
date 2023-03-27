import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Credits from './Components/Credits';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
