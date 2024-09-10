import './App.scss';
import MainLayout from './components/layouts/MainLayout';
import { Routes, BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sudoku from './pages/Sudoku/Sudoku';
import Api from './pages/Api/Api';
import HowToUse from './pages/HowToUse/HowToUse';
import Err404 from './pages/Err404/Err404';
import GoToTop from './components/common/GoToTop';
import { AnimatePresence, motion } from 'framer-motion';

const PageWrapper = ({ children }) => (
  <motion.div
    // initial={{ opacity: 0, y: 10 }}
    animate={
      {
        opacity: 1,
        y: 0
      }
    }
    exit={
      {
        opacity: 0,
        y: -100,
      }
    }
    transition={
      {
        duration: 0.2
      }
    }
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/sudoku" exact element={<PageWrapper><Sudoku /></PageWrapper>} />
        <Route path="/api" exact element={<PageWrapper><Api /></PageWrapper>} />
        <Route path="/how-to-use" exact element={<PageWrapper><HowToUse /></PageWrapper>} />
        <Route path="*" exact element={<PageWrapper><Err404 /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename={'/'}>
      <MainLayout onContextMenu={e => e.preventDefault()} onMouseDown={e => e.preventDefault()}>
        <AnimatedRoutes />
        <GoToTop />
      </MainLayout>
    </Router>
  );
}

export default App;
