import ChevronDown from "../components/icons/chevronDown";

function Hero () {
    return <div className="w-full h-screen text-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-around">
    <div className="max-w-7xl w-full mx-auto mt-50 px-80 flex flex-col items-start justify-center gap-4">
        <div className="flex flex-col gap-2">
            <span className="text-lg font-light text-neon tracking-widest mb-4">HI, I'M</span>
            <h1 className="text-7xl font-extrabold">JOHN EDWIN</h1>
            <h1 className="text-7xl font-extrabold text-neon">M. BAÑEL</h1>
            <span className="text-lg font-light tracking-widest mt-4">FRONTEND / FULLSTACK DEVELOPER</span>
        </div>
        <div className="flex flex-col gap-2 mt-7">
            <span className="text-lg font-regular w-[500px] text-[#A3A3A3] tracking-wide">I’m a BSIT graduate and aspiring web developer with internship experience using Laravel, Vue.js, PHP, and Tailwind CSS. I enjoy combining development with an interest in UI and design while continuing to build and improve through personal projects.</span>
        </div>
    </div>

    <div className="flex flex-col items-center gap-4 mt-7">
            <span className="text-xs text-gray-300 hover:text-neon font-light tracking-widest">SCROLL DOWN</span>
            <ChevronDown className="size-6" />
    </div>
</div>
}

export default Hero;