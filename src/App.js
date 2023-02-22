import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        {/* <Route path='/contact' element={<Main/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
