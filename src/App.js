import { HashRouter, Route, Routes } from "react-router-dom";
import AllBlogs from "./components/AllBlog";
import Blog from "./components/Blog";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <HashRouter basename='/'>
          <Routes>
            <Route path="/" element={<AllBlogs />} />
            <Route path="/:id" element={<Blog />} />
          </Routes>
        </HashRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
