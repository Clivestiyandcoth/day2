import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import View from './components/View';
import Student from './components/Student';





function App() {
  return (
    <div>
     <Navigation/>
     <Routes>
        <Route path='/table' element={<View/>}></Route>
        <Route path='/' element={<Student/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
