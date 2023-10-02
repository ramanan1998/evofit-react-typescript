import { BenifitsType } from "@/types"
import HeaderText from "../reusable_components/HeaderText"
import BenefitCard from "./fragments/BenefitCard"
import { Icons } from "@/assets/icons"
import { ASSET } from "@/assets/assets"

function Benefits() {

  const BenefitsList: BenifitsType[] = [
    {
      key: 1,
      title: "Our facilities",
      para: "Our current distribution centre sits in the heart of East Yorkshire. There we have a 60,000sqft office and warehouse space, which houses our customer service, operations and marketing team, as well as all of our products which the warehouse team pick and pack on a daily basis. If you like the look of our facilities, why not get in touch to become a partner?",
      icon: <Icons.stateOfArtFacility className="mr-2 h-4 w-4"/>,
      image: ASSET.FACILITIES_IMG
    },
    {
      key: 2,
      title: "Manufacturing",
      para: "Many of Puretec Ltd's products are manufactured in warehouses in China. Here everything is made, boxed up and shipped to us here in the UK. In an effort to reduce our carbon footprint, we have started manufacturing products here in the UK. Starting off with our eco-friendly Marcy weight plates are the first step towards this and it's success has meant that we hope to begin manufacturing closer to home. Can you help us reach more customers? Let us know and become a member of the Puretec Ltd family.",
      icon: <Icons.diverseClasses className="mr-2 h-4 w-4"/>,
      image: ASSET.MANUFACTURING_IMG
    },
    {
      key: 3,
      title: "Our history",
      para: "Our history began in America in 1946, and we have spent the last 25 years working hard to make sure everyone in the US, UK and beyond has access to high-quality, long-lasting fitness equipment that they can use in the comfort of their own homes. From strength to cardio, and everything in between; we provide a variety of products that suit any fitness goal and any budget.",
      icon: <Icons.expertProTrainers className="mr-2 h-4 w-4"/>,
      image: ASSET.HISTORY_IMG
    },
  ]

  return (
    <section id="why-us" className="px-2 md:px-32 pt-32 bg-white">
        <div className="space-y-3">
          <HeaderText>
            MORE THAN JUST A GYM
          </HeaderText>
          <p>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. <br /> We provide true care into each and every member.</p>
        </div>
        <div className="flex-between flex-col gap-10 mt-5 md:flex-row h-full md:h-[70vh]">
            {BenefitsList.map(benefitObj => (
              <BenefitCard {...benefitObj} />
            ))}
        </div>
    </section>
  )
}

export default Benefits