import { AnimatePresence } from "framer-motion"
import { useState } from "react";
import { whatWeProvide } from "@/assets/assets";
import { motion } from "framer-motion";

const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0.2
      };
    },
    center: {
    //   zIndex: 1,
      x: 0,
      opacity: 1
    },
    // exit: (direction: number) => {
    //   return {
    //     zIndex: 0,
    //     x: direction < 0 ? 500 : -500,
    //     opacity: 0.8
    //   };
    // }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

function WhatWeProvide() {

    const [[page, direction], setPage] = useState([0, 0]);
  
    const paginate = (newDirection: number) => {
        console.log(page, direction);
    
      if(page < whatWeProvide.length - 1 && newDirection > 0){
        setPage([page + newDirection, newDirection]);
      }else{
        setPage([0, 0]);
      }
    };

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if(page < whatWeProvide.length - 1){
    //             setPage(prev => {
    //                 prev[0] += 1;
    //                 return prev;
    //             })
    //         }else{
    //             setPage(prev => {
    //                 prev[0] = 0;
    //                 return prev;
    //             })
    //         }
    //     }, 5000)
  
    //     return () => clearTimeout(timeout)
    // }, [ page ]);

  return (
    <div className="mt-10 md:mt-[150px] overflow-hidden h-[80vh] flex-between items-center flex-col md:flex-row border border-black">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                className="h-full w-full object-cover"
                key={page}
                src={whatWeProvide[page].imageUrl}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
                />
            </AnimatePresence>
        
        {/* <div
              
            className="relative w-full md:w-[50%] space-y-5 before:content-abstractwaves before:absolute before:bottom-[100%] before:right-[100%] after:content-sparkles after:absolute after:top-[90%] after:right-[30%]"
          >
              <HeaderText>
                  MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
              </HeaderText>
                <AnimatePresence>
                  <motion.p
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                    // x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                    }}
                  >
                    {testimonials[page].text}
                  </motion.p>
                </AnimatePresence>
          </div> */}

    </div>
  )
}

export default WhatWeProvide