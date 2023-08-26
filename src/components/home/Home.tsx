import { ASSET } from '@/assets/assets'

// type Props = {}

function Home() {
  return (
    <section id='home' className='w-full px-2 md:px-[10%] h-auto flex-between flex-col md:flex-row gap-10 mx-auto pt-[100px] md:pt-[150px] relative'>
        <div className='hidden md:block absolute top-[150px] left-10'>
            <img src={ASSET.EVOLVE} alt="img" />
        </div>
        <div className='w-auto relative space-y-5'>
            <div>
                <h1 className='text-7xl font-bold'>EVOFIT</h1>
                <h2 className='text-4xl'>Your Only Limit is You</h2>
            </div>
            <div>
                <p className='font-bold'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel itaque, libero optio corporis, perferendis enim, earum dolorum obcaecati accusantium placeat perspiciatis labore at? Porro eum, exercitationem veritatis vel provident quos.
                </p>
            </div>
            <div className='space-x-10 flex items-center'>
                <button className='primary-btn'>
                    Join now
                </button>
                <p>Learn more</p>
            </div>
        </div>
        <div className='w-full'>
            <img src={ASSET.HOME_PAGE_GRAPHIC} alt="img" />
        </div>
    </section>
  )
}

export default Home