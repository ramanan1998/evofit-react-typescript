
import { ASSET } from "@/assets/assets"
import HeaderText from "@/components/reusable_components/HeaderText"
import PrimaryButton from "@/components/reusable_components/PrimaryButton"
import { TestimonialsType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  enter: {
    x: -100,
    // opacity: 0,
  },
  center: {
    x: 0,
    // zIndex: 1,
    // opacity: 1,
  },
  exit: {
    // zIndex: 0,
    x: 100,
    // opacity: 0.3
  }
};

function HappyMembers() {

  const [ page, setPage ] = useState<number>(0);

  const testimonials: TestimonialsType[] = [
    {
      image: <motion.img
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                // x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }} 
              src={ASSET.BENEFITS_PAGE_GRAPHIC} 
              alt="img" 
            />,
      text: "Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio."
    },
    {
      image: <motion.img
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  // x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }} 
                src={ASSET.CAROUSEL_IMAGE_4} 
                alt="img" 
              />,
      text: "Many of Puretec Ltd's products are manufactured in warehouses in China. Here everything is made, boxed up and shipped to us here in the UK. In an effort to reduce our carbon footprint, we have started manufacturing products here in the UK. Starting off with our eco-friendly Marcy weight plates are the first step towards this and it's success has meant that we hope to begin manufacturing closer to home. Can you help us reach more customers? Let us know and become a member of the Puretec Ltd family."
    },
    {
      image: <motion.img
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  // x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }} 
                src={ASSET.CAROUSEL_IMAGE_1} 
                alt="img" 
              />,
      text: "Our history began in America in 1946, and we have spent the last 25 years working hard to make sure everyone in the US, UK and beyond has access to high-quality, long-lasting fitness equipment that they can use in the comfort of their own homes. From strength to cardio, and everything in between; we provide a variety of products that suit any fitness goal and any budget."
    },
  ]

  useEffect(() => {
      const timeout = setTimeout(() => {
          if(page < testimonials.length - 1){
              setPage(prev => prev + 1)
          }else{
              setPage(0)
          }
      }, 5000)

      return () => clearTimeout(timeout)
  }, [ page, testimonials.length ]);

  return (
    <div className="mt-10 md:mt-[150px] px-2 md:px-24 flex-between items-center flex-col md:flex-row">
        
        <div className="w-[full] md:w-[40%] overflow-hidden">
          <AnimatePresence 
            initial={false} 
          >
            {testimonials[page].image}
          </AnimatePresence>
        </div>
        <div className="relative w-full md:w-[50%] space-y-5 before:content-abstractwaves before:absolute before:bottom-[100%] before:right-[100%] after:content-sparkles after:absolute after:top-[90%] after:right-[30%]">
            <HeaderText>
                MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
            </HeaderText>
            <AnimatePresence
              initial={false}
            >
              <motion.p
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  // x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }} 
              >
                {testimonials[page].text}
              </motion.p>
            </AnimatePresence>
            <PrimaryButton>
              Join now
            </PrimaryButton>
        </div>
    </div>
  )
}

export default HappyMembers