import React from 'react';
import ShowGrid from '../components/ShowGrid/ShowGrid';
import { motion } from 'framer-motion';

const Peliculas = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ShowGrid title="Películas populares" type="movie"/>
      </motion.div>
  )
}

export default Peliculas