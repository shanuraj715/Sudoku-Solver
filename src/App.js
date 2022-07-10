import './App.scss';
import MainLayout from './components/layouts/MainLayout'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sudoku from './pages/Sudoku/Sudoku'
import Api from './pages/Api/Api'
import HowToUse from './pages/HowToUse/HowToUse'

import Err404 from './pages/Err404/Err404'

import GoToTop from './components/common/GoToTop'

function App() {

  return <>
    <BrowserRouter  basename={'/'}>
      <MainLayout onContextMenu={e => e.preventDefault()} onMouseDown={e => e.preventDefault()} >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sudoku" exact element={<Sudoku />} />
          <Route path="/api" exact element={<Api />} />
          <Route path="/how-to-use" exact element={<HowToUse />} />
          <Route path="*" exact element={<Err404 />} />
        </Routes>
        <GoToTop />
      </MainLayout>
    </BrowserRouter>
  </>
}

export default App;
