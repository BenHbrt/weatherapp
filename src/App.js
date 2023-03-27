import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Credits from './Components/Credits';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
