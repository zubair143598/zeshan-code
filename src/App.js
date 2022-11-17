import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages';
import Home from './pages/Home';
import Index_signup from './pages/Index_signup';


function App() {
  return (
    <div className="App">
     
      {/* <Index /> */}
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Index_signup/>}/>

        <Route index path='/signup' element={<Index_signup/>}/>
        <Route index path='/home' element={<Home/>}/>
        <Route index path='/login' element={<Index/>}/>


      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
