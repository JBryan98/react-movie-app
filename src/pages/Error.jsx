import React from "react";
import NotFound from "../components/NotFound/NotFound";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NotFound message="Página no encontrada" type="404" />
    </motion.div>
  );
};

export default Error;
