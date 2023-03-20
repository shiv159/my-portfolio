import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/projects' element={<Projects />} ></Route>
          <Route path='/projects/project/:id' element={<ProjectDetail />} ></Route>
          <Route path='/experience' element={<Experience />} ></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
