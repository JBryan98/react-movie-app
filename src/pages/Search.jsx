import React from 'react';
import Searched from '../components/Searched/Searched';
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
        <Searched/>
    </motion.div>
  )
}

export default Search