import PrimaryButton from "@/components/reusable_components/PrimaryButton";
import "../styles/style.css";
import { BenifitsType } from "@/types";

function BenefitCard(props: BenifitsType) {
  return (
    <div className="card">
      <img className="absolute brightness-50" src={props.image} alt="img" />
      <div className="content">
        <p className="heading">{props.title}</p>
        <p className="para">
          {props.para}
        </p>
        <PrimaryButton>
          Learn more
        </PrimaryButton>
      </div>
    </div>
  )
}

export default BenefitCard