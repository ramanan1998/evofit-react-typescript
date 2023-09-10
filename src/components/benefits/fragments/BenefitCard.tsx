import "../styles/style.css";
import { BenifitsType } from "@/types";

function BenefitCard(props: BenifitsType) {
  return (
    <div className="card">
        <div className="icon">
          {props.icon}
        </div>
        <p className="title">{props.title}</p>
        <p className="para">{props.para}</p>
        <a className="text">Learn more</a>
    </div>
  )
}

export default BenefitCard