import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          <Ghost className="w-20 h-20 text-white mb-4" />
        </motion.div>

        <h1 className="text-6xl font-extrabold text-white tracking-tight mb-4">
          404
        </h1>
        <p className="text-xl text-zinc-300 mb-6">
          Sorry, we couldn’t find that page. But don’t worry, you’re not lost
          forever.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-all duration-300"
        >
          Take me home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
