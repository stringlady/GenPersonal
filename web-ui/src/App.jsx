import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Full from './components/CreatFic/Full';
import A_Full from './components/Articles/A_Full';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/fiction/:url' element={<Full/>}/>
      <Route path='/articles/:url' element={<A_Full/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App