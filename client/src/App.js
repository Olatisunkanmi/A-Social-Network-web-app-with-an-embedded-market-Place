import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import {Home} from './Pages/index'
import { Welcome, Timeline, Sidebar } from './Components/index'


function App() {
  const [sidebar, setSideBar] = useState()

  return (
    <div>
    
      <div className='flex flex-row  justify-between'>
        <Sidebar />
          <Routes>
            <Route exact path='/timeline' element={ <Timeline />} />
          </Routes>
      </div>
    </div>
  );
}

export default App