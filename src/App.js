
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/App.css'
import Lending from './features/lendingPage/component/lending';
import HomePage from './features/dashboard/component/homepage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Lending />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
