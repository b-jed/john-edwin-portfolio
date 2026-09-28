function Navbar () {
    return <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[1333px] px-8 py-3 mona-sans text-xs bg-main/10 backdrop-blur-2xl">
        <div className="text-sm font-bold text-white">
            JOHN EDWIN BAÑEL
        </div>

        <div className="flex gap-10 text-white font-semibold">
            <button>
                ABOUT
            </button>
            <button>
                PROJECTS
            </button>
            <button>
                CONTACT
            </button>       
        </div>
        <button className=" w-28 h-12 px-4 py-2 bg-white text-black font-bold">
            RESUME
        </button>
    </div>

}
export default Navbar;
