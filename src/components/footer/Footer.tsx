
function Footer() {
  return (
    <footer className="bg-primary-100 flex-between items-start flex-col md:flex-row p-5 gap-5 md:px-24 md:py-10">
        <div className="md:w-1/2 space-y-5">
            <div className="flex items-center flex-row gap-2">
                <h1 className="text-3xl font-bold">EVOFIT</h1>
                <div className="h-[25px] w-[25px] bg-primary-500 rounded-full"></div>
            </div>
            <div>
                <h1>Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.</h1>
            </div>
            <div>
                <p>© Evogym All Rights Reserved.</p>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="text-3xl font-bold">LINKS</h1>
            <ul className="space-y-2">
                <li>Home</li>
                <li>Benefits</li>
                <li>Our Class</li>
            </ul>
        </div>
        <div className="space-y-5">
            <h1 className="text-3xl font-bold">CONTACT US</h1>
            <p>Tempus metus mattis risus volutpat egestas.</p>
            <p>(333)425-6825</p>
        </div>
    </footer>
  )
}

export default Footer