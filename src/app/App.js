import About from '../containers/about/About';
import Contact from '../containers/contact/Contact';
import Home from '../containers/home/Home';
import Nanvbar from '../containers/navbar/Nanvbar';
import Project from '../containers/project/Project';
import Resume from '../containers/resume/Resume';
import './App.css';

function App() {
  return (
    <>
      <Nanvbar />
      <Home />
      <About />
      <Resume />
      <Project />
      <Contact />
    </>
  );
}

export default App;
