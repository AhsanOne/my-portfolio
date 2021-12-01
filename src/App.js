import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import Explore from "./Pages/Explore/Explore/Explore";
import Home from "./Pages/Home/Home/Home";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/explore/:id" element={<Explore/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
