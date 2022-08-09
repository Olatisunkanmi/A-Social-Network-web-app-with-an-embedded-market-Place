import './App.css';
import { Routes, Route } from "react-router-dom";
import { Welcome,   Header,} from './Components/index'
import {Products,  Timeline, ProfileMain } from './Pages/index'


function App() {
  return (
   
      <div className= ''>
         <Header />
          <Routes>
            <Route exact path='/timeline' element={ <Timeline />} />
            <Route exact path='/friends' element={ <Welcome />} />
            <Route exact path='/products' element={ <Products />} />
          </Routes>
      </div>
   
  );
}

export default App