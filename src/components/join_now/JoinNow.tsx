import { ASSET } from "@/assets/assets"
import HeaderText from "../reusable_components/HeaderText"
import PrimaryButton from "../reusable_components/PrimaryButton"

function JoinNow() {
  return (
    <section id="contact-us" className="bg-white px-2 md:px-24 pt-32 pb-10 flex-between flex-col md:flex-row">
        <div className="space-y-5 md:w-1/2">
            <HeaderText>
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HeaderText>
            <div>
                <p>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
            </div>
            <div className="space-y-5">
                <input 
                    className="input" 
                    name="name"
                    type="text" 
                    placeholder="NAME"
                />
                <input 
                    className="input" 
                    name="email"
                    type="email" 
                    placeholder="EMAIL"
                />
                <textarea 
                    className="input" 
                    name="message" 
                    cols={30} 
                    rows={5}
                    placeholder="MESSAGE"
                ></textarea>
                <PrimaryButton>
                    Submit
                </PrimaryButton>
            </div>
        </div>
        <div className="w-full md:w-[40%] aspect-square rounded-lg overflow-hidden hidden md:block">
            <img className="h-full w-full object-cover" src={ASSET.CONTACT_US_PAGE_GRAPHIC} alt="img" />
        </div>
    </section>
  )
}

export default JoinNow