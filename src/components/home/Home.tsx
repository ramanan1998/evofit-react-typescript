import { ASSET } from '@/assets/assets';
import { motion } from 'framer-motion';
import PrimaryButton from '../reusable_components/PrimaryButton';

// type Props = {}

type VariantsType = {
    hidden: {
        opacity: number,
        y: number
    },
    visible: {
        opacity: number,
        y: number
    }
}

function Home() {

  const variants: VariantsType = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0
    }
  }

  return (
    <section id='home' className='h-screen flex-between flex-col md:flex-row gap-10 mx-auto relative text-white'>
        <video className='scale-x-[-1] h-full w-full object-cover' loop autoPlay muted >
            <source src={ASSET.HOME_VIDEO} type="video/mp4"/>
        </video>
        <motion.div 
            className='w-full md:w-1/2 absolute top-1/3 md:top-[20%] space-y-5 px-2 md:px-24'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants}
            transition={{duration: 0.8}}
        >
            <div>
                <h1 className='text-7xl md:text-[200px] font-bold tracking-[25px]'>EVOFIT</h1>
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
                transition={{duration: 0.8, delay: 0.1}}
            >
                <PrimaryButton>
                    Join now
                </PrimaryButton>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Home