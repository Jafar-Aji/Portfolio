import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-slate-700"
        inherit={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        inherit={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        inherit={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
      />
    </>
  );
}
