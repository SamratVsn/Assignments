import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Study from'./Components/Study'
import Settings from './Components/Settings'
import Navi from './Components/Nav'
import Login from './Components/Login'

function App() {

  return (
    <>
      <Navi />
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/Subjects" element = {<Study />} />
            <Route path = "/Settings" element = {<Settings />} />
            <Route path = "/Login" element = {<Login />} />
        </Routes>
    </>
  )
}

export default App
