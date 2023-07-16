// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages";
import Labtabs from "./components/LabTabs.js";

// import About from "./components/pages"
// import Blogs from "./components/pages";
// import SignUp from "./components/pages";
// import Contact from "./components/pages";




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} /> */}

      </Routes>
      <Labtabs />     


    </Router>
  );
}

export default App;


// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/