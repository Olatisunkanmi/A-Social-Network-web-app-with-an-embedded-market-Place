import './App.css';
import { Routes, Route } from "react-router-dom";
import {Home} from './Pages/index'
import { Welcome, Timeline, Sidebar } from './Components/index'


function App() {
  return (
    <div>
    
      <div className='flex flex-row md:p-20 bg-slate-400'>
        <Sidebar />
          <Routes>
            <Route exact path='/timeline' element={ <Timeline />} />
          </Routes>
      </div>
    </div>
  );
}

export default App