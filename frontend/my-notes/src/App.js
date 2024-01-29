


import React from 'react';
import Initial from './compnents/Initial';
import Newpage from './compnents/Newpage';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Abc from './compnents/Abc';
import Entire from './compnents/Entire';
import Welcomepage from './compnents/Welcomepage';
import Home from './compnents/Home';
import About from './compnents/About'
function App() {
  return (
    <div >
      
    <div className='xyz'>
    <Router>
    <Initial>
      <Routes>
  
        <Route exact path='/' element={<Abc/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/AddNotes' element={<Newpage/>}/>
        <Route path='/MyNotes'  element={<Entire/>}/>
        <Route path='/About'  element={<About/>}/>
      </Routes>
      </Initial>
      
    </Router>
    </div>
   
  </div>


  );
}


export default App;
