import { ASSET } from '@/assets/assets';
import { motion } from 'framer-motion';

// type Props = {}

type VariantsType = {
    hidden: {
        opacity: number,
        x: number
    },
    visible: {
        opacity: number,
        x: number
    }
}

function Home() {

  const variants: VariantsType = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0
    }
  }

  return (
    <section id='home' className='w-full md:px-[10%] h-auto md:h-screen flex-between flex-col md:flex-row gap-10 mx-auto pt-[100px] md:pt-[150px] relative'>
        <div className='hidden md:block absolute top-[170px] left-10'>
            <img src={ASSET.EVOLVE} alt="img" />
        </div>
        <motion.div 
            className='w-auto relative space-y-5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            transition={{duration: 0.5}}
        >
            <div>
                <h1 className='text-7xl font-bold'>EVOFIT</h1>
                <h2 className='text-4xl'>Your Only Limit is You</h2>
            </div>
            <div>
                <p className='font-bold'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel itaque, libero optio corporis, perferendis enim, earum dolorum obcaecati accusantium placeat perspiciatis labore at? Porro eum, exercitationem veritatis vel provident quos.
                </p>
            </div>
            <motion.div 
                className='space-x-10 flex items-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={variants}
                transition={{duration: 0.5, delay: 0.1}}
            >
                <button className='primary-btn'>
                    Join now
                </button>
                <p>Learn more</p>
            </motion.div>
        </motion.div>
        <div className='w-full flex-center'>
            <img src={ASSET.HOME_PAGE_GRAPHIC} alt="img" />
        </div>
    </section>
  )
}

export default Home