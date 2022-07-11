//import SearchParams from "./SearchPrrams";
import { StrictMode, useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
//import Details from "./Details";
import ThemeContext from "./ThemeContext";

// import "./style.css";
// import Header from "./Header";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchPrrams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={<h2>loading, be patient</h2>}>
        <ThemeContext.Provider value={theme}>
          <div
            className="p-0 m-0"
            style={{
              background:
                "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
            }}
          >
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

//render(<App />, document.getElementById("root"));

export default App;
