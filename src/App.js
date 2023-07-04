// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import SimpleBottomNavigation from "./components/Navbar/BottomNav.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages";
// import About from "./components/pages"
// import Blogs from "./components/pages";
// import SignUp from "./components/pages";
// import Contact from "./components/pages";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} /> */}

      </Routes>
      <SimpleBottomNavigation />

    </Router>
  );
}

export default App;


// https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/