import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="VS" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M 23.363281 24.847656  C 23.363281, 24.847656 20.0, 18.75 15.269531, 13.421875  C 10.539062, 8.09375 7.171875, 5.0 7.171875, 5.0  L 7.171875, 25.140625  C 7.171875, 25.410156, 7.40625, 25.632812, 7.671875, 25.632812  C 9.945312, 25.632812, 12.21875, 24.847656, 12.21875, 24.28125  C 12.21875, 23.714844, 11.792969, 23.28125, 11.140625, 23.28125  L 9.945312, 23.28125  C 9.28125, 23.28125, 8.75, 23.714844, 8.75, 24.28125  C 8.75, 24.847656, 9.085938, 25.363281, 9.5625, 25.632812  L 22.972656, 25.632812  C 23.15625, 25.632812, 23.320312, 25.527344, 23.402344, 25.363281  C 23.484375, 25.199219, 23.472656, 25.0, 23.363281, 24.847656 Z "
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
