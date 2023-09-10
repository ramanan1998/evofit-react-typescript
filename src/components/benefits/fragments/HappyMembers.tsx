
import { ASSET } from "@/assets/assets"
import HeaderText from "@/components/reusable_components/HeaderText"

function HappyMembers() {
  return (
    <div className="mt-10 md:mt-20 flex-between items-start flex-col md:flex-row">
        <div className="w-[full] md:w-[50%]">
            <img src={ASSET.BENEFITS_PAGE_GRAPHIC} alt="img" />
        </div>
        <div className="relative w-full md:w-[50%] space-y-5 before:content-abstractwaves before:absolute before:bottom-[100%] before:right-[100%] after:content-sparkles after:absolute after:top-[90%] after:right-[30%]">
            <HeaderText>
                MILLIONS OF HAPPY MEMBERS GETTING <span className="text-primary-500">FIT</span>
            </HeaderText>
            <p>
               Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio. <br /> <br />Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
            </p>
            <button className="primary-btn">Join Now</button>
        </div>
    </div>
  )
}

export default HappyMembers