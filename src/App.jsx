
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddPerson from './components/AddPerson'
import Create from './components/Create'
import Update from './components/Update'
// import Persons from './components/Persons'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Update />}></Route>
        {/* <Route path='/persons' element={<Persons />}></Route> */}
        <Route path='/AddPerson' element={<AddPerson />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
