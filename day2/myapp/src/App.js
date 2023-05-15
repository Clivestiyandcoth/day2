import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics';
import StateBasics from './components/StateBasics';
import Eg2 from './components/Eg2';
import TableArray from './components/TableArray';
import Navigation from './components/Navigation';
import { Routes,Route } from 'react-router-dom';
import ViewData from './components/ViewData';

function App() {
  return (
    <div className="App">
      {/* <Basics/> */}
        <StateBasics/> 
      {/*<Eg2/>*/}
    {/* <TableArray/>*/}
   {/* <ViewData/>*/}
      {/* <Navigation/> 
     <Routes>
      <Route path='/' element={<StateBasics/>} />
      <Route path='/table' element={<TableArray/>} />
      <Route path='/axios' element={<ViewData/>} />
  </Routes>*/}
    </div>
  );
}

export default App;
