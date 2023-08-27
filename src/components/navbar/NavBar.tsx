const NavBar = () => {
  return (
    <nav className="flex-center fixed top-0 z-30 w-screen p-2 bg-primary-500 text-white">
        <div className="flex-between flex-row w-full md:w-5/6  p-1">
            <div className="flex-center flex-row gap-2">
                <h1 className="text-3xl font-bold">EVOFIT</h1>
                <div className="h-[25px] w-[25px] bg-primary-500 rounded-full"></div>
            </div>
            <div className="hidden md:flex-between flex-row gap-x-32">
                <div className="flex-between flex-row gap-10">
                    <a href="/">Home</a>
                    <a href="/">Benefits</a>
                    <a href="/">Our class</a>
                    <a href="/">Contact us</a>
                </div>
                <div>
                    <button className="primary-btn">
                       Become a Member
                    </button>
                </div>
            </div>
            <button className="block md:hidden primary-btn rounded-full p-3 shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </nav>
  )
}

export default NavBar