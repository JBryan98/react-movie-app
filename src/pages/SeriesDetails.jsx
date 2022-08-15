import React from "react";
import ShowDetails from "../components/ShowDetails/ShowDetails";
import { motion } from "framer-motion";

const SeriesDetails = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShowDetails showType="tv" />
    </motion.div>
  );
};

export default SeriesDetails;
