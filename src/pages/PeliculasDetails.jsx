import React from 'react';
import ShowDetails from '../components/ShowDetails/ShowDetails';
import {motion} from 'framer-motion';

const PeliculasDetails = () => {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <ShowDetails showType="movie"/>
    </motion.div>
  )
}

export default PeliculasDetails