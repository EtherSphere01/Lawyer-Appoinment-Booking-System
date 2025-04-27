import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white">
      <div className="relative w-40 h-40 mb-6">
        {/* Nucleus */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Orbit 1 */}
        <motion.div
          className="absolute top-0 left-1/2 w-full h-full"
          style={{ transformOrigin: "center" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-pink-500 rounded-full shadow-md" />
          </div>
        </motion.div>

        {/* Orbit 2 */}
        <motion.div
          className="absolute top-0 left-1/2 w-full h-full"
          style={{ transformOrigin: "center" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-md" />
          </div>
        </motion.div>

        {/* Orbit 3 */}
        <motion.div
          className="absolute top-0 left-1/2 w-full h-full"
          style={{ transformOrigin: "center" }}
          animate={{ rotate: 180 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 -left-1 transform -translate-y-1/2">
            <div className="w-3 h-3 bg-green-400 rounded-full shadow-md" />
          </div>
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        className="text-lg tracking-widest font-semibold text-gray-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
