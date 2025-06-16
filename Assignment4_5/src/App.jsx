import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Study from'./Components/Study'
import Settings from './Components/Settings'
import Navi from './Components/Nav'

function App() {

  return (
    <>
      <Navi />
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/Subjects/" element = {<Study />} />
            <Route path = "/Settings" element = {<Settings />} />
        </Routes>
    </>
  )
}

export default App
