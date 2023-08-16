import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from "./pages/Details"

function App() {

  return (
    <BrowserRouter basename='/'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path={`/details`} element={<Details />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
