import React from "react";
import MainBackdrop from "../components/MainBackdrop/MainBackdrop";
import ShowsRow from "../components/ShowsRow/ShowsRow";
import { motion } from "framer-motion";

const Home = () => {
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = fecha.getMonth() + 1;
  const day = fecha.getDate();

  const currentDate = (año, mes, dia) => {
    let y = String(año);
    let m = String(mes);
    let d = String(dia);
    if (m.length < 2) {
      m = "0" + m;
    }
    if (d.length < 2) {
      d = "0" + d;
    }
    return y + "-" + m + "-" + d;
  };

  const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=es-MX`;
  const neftlixOriginals = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213&language=es-MX`;
  const upcoming = `https://api.themoviedb.org/3/discover/movie?api_key=${
    process.env.REACT_APP_API_KEY
  }&region=US&language=es-MX&sort_by=popularity.desc&release_date.gte=${currentDate(
    year,
    month,
    day
  )}&release_date.lte=${currentDate(year + 1, month, day)}&with_release_type=4`;

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MainBackdrop />
        <ShowsRow title="Tendencias" request={trending} />
        <ShowsRow title="Neftlix Originals" request={neftlixOriginals} />
        <ShowsRow title="Próximamente" request={upcoming} />
      </motion.div>
    </>
  );
};

export default Home;
