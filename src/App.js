import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlanWesela from './pages/PlanWesela2';
import WeddingPlan from './pages/WeddingPlan';
import MapaDojazdu from './pages/MapaDojazdu';
import AppearanceConfirmation from './pages/AppearanceConfirmation';
import AdditionalEvents from './pages/AdditionalEvents';
import GuestsTransport from './pages/GuestsTransport';
import More from './pages/More';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/planwesela" element={<WeddingPlan />} />
        <Route path="/mapadojazdu" element={<MapaDojazdu />} />
        <Route path="/potwierdzenie" element={<AppearanceConfirmation />} />
        <Route path="/atrakcje" element={<AdditionalEvents />} />
        <Route path='/transport' element={<GuestsTransport/>}/>
        <Route path='/wiecej' element={<More/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;