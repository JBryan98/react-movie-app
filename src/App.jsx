import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";
import PeliculasDetails from "./pages/PeliculasDetails";
import Search from "./pages/Search";
import Series from "./pages/Series";
import SeriesDetails from "./pages/SeriesDetails";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <HashRouter>
          <div className="contentWrap">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/peliculas/page/:page" element={<Peliculas />}></Route>
              <Route
                path="peliculas/:showId"
                element={<PeliculasDetails />}
              ></Route>
              <Route path="/series/page/:page" element={<Series />}></Route>
              <Route path="/series/:showId" element={<SeriesDetails />}></Route>
              <Route path="/buscar/:input/page/:page" element={<Search />}></Route>
              <Route path="/*" element={<Error />}></Route>
            </Routes>
            <Footer />
          </div>
        </HashRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
