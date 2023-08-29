import { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const SectionWrapper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-full"
      >
        <span className="hash-span" id={idName}></span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
