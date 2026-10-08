import RealProjectCard from "../components/RealProjectCard";
import StaticCard from "../components/StaticCard";

function Projects() {
    return (
        <section className="w-full text-white py-24 px-12 lg:px-24 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-end text-right">
                <span className="text-xs font-light tracking-[0.3em] text-neon uppercase block mb-2">
                    WHAT I'VE BEEN BUILDING
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                    PROJECTS
                </h2>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. Actual live project */}
                <RealProjectCard />

                {/* 2. Static wireframe placeholders to fill the empty slots */}
                <StaticCard />
                <StaticCard />
            </div>
        </section>
    );
}

export default Projects;