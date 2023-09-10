import { BenifitsType } from "@/types"
import HeaderText from "../reusable_components/HeaderText"
import BenefitCard from "./fragments/BenefitCard"
import { Icons } from "@/assets/icons"
import HappyMembers from "./fragments/HappyMembers"

function Benefits() {

  const BenefitsList: BenifitsType[] = [
    {
      key: 1,
      title: "State of the Art Facilities",
      para: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
      icon: <Icons.stateOfArtFacility className="mr-2 h-4 w-4"/>
    },
    {
      key: 2,
      title: "100's of Diverse Classes",
      para: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
      icon: <Icons.diverseClasses className="mr-2 h-4 w-4"/>
    },
    {
      key: 3,
      title: "Expert and Pro Trainers",
      para: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
      icon: <Icons.expertProTrainers className="mr-2 h-4 w-4"/>
    },
  ]

  return (
    <section className="px-2 md:px-32 py-10 bg-white">
        <div className="space-y-3">
          <HeaderText>
            MORE THAN JUST A GYM
          </HeaderText>
          <p>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. <br /> We provide true care into each and every member.</p>
        </div>
        <div className="flex-between flex-col gap-10 mt-5 md:flex-row h-full md:h-[60vh]">
            {BenefitsList.map(benefitObj => (
              <BenefitCard {...benefitObj} />
            ))}
        </div>
        <HappyMembers/>
    </section>
  )
}

export default Benefits