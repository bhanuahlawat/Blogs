import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
// import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllPosts from "./pages/AllPosts";
import Footer from "./components/Footer";
import SocialMedia from "./pages/Socialmedia";
import UnderConstruction from "./pages/Working";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
      <Router>
        <Navbar />
        <Sidebar />
        <div className="pt-[88px] pr-12 min-h-screen"> 
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AllPosts" element={<AllPosts />} />
            <Route path="/Working" element={<UnderConstruction/>} />
            {/* <Route path="/Admin" element={<SignIn/>} /> */}
            <Route path="/Admin" element={<AdminDashboard/>} />

          </Routes>
          <Footer /> 
        </div>
      </Router>
  );
}

export default App;