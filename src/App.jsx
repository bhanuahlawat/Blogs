import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import AllPosts from "./pages/AllPosts";
import Footer from "./components/Footer";
import SocialMedia from "./pages/Socialmedia";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="pt-[88px] pr-20 min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/AllPosts" element={<AllPosts />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;