import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Review from "./components/Review/Review";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import MyLineChart from "./components/MyLineChart/MyLineChart";
import Blog from "./components/Blog/Blog";

export default function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review />} />
        <Route path="/mylinechart" element={<MyLineChart />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <span>All Right Reserved, Md. Nahidul Islam | 2022</span>
      </footer>
    </div>
  );
}
