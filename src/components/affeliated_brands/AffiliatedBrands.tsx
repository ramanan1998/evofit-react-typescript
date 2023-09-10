import { ASSET } from "@/assets/assets";
import { motion } from "framer-motion";

type Initial = {
  y: number
}

type Animate = {
  y: number,
  transition: {
    delay: number,
    duration: number,
    type: string
  }
}

const AffiliatedBrands = () => {

  const initial: Initial = {
    y: 100
  }

  const animate: Animate = {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 2,
      type: "tween"
    }
  }

  return (
    <div 
      className="h-40 w-full bg-gray-50 mt-2"
    >
      <motion.div
        className="flex-between justify-evenly flex-row h-full"
        initial={initial}
        whileInView={animate}
      >
        <img src={ASSET.RED_BULL} alt="brand" />
        <img src={ASSET.FORBES} alt="brand" />
        <img src={ASSET.FORTUNE} alt="brand" />
      </motion.div>
    </div>
  )
}

export default AffiliatedBrands