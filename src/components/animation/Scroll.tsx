import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
      y: 150,
      opacity: 0,
  },
  onscreen: {
      y: 0,
      opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};


function Scroll({children}) {

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Scroll;