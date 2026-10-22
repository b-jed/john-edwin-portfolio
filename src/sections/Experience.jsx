function Experience() {

    const experiences = [
        {
            id: "tensei-intern",
            company: "Tensei Philippines Inc.",
            position: "Software Developer Intern",
            duration: "March 2025 - July 2025",
            desc: "Developed and maintained web applications using PHP, Laravel, and Vue.js. Collaborated with cross-functional teams to implement new features and optimize existing codebase. Participated in code reviews and contributed to the overall improvement of the development process.",
        },
    ];

    return (
        <section className="w-full text-white py-24 px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="mb-12">
                <span className="text-xs font-light tracking-[0.3em] text-neon uppercase block mb-2">
                    MY PROFESSIONAL JOURNEY
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                    EXPERIENCE
                </h2>
            </div>

            <div className="flex flex-col space-y-8">
                {experiences.map((exp) => (
                    <article
                        key={exp.id}
                        className="experience-card w-full space-y-2 border-l-2 border-neon/30 pl-6"
                        >
                        <h3 className="text-2xl font-bold">{exp.company}</h3>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <h4 className="text-base font-semibold text-gray-200">{exp.position}</h4>
                            <time className="text-sm text-gray-400">{exp.duration}</time>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed pt-1">{exp.desc}</p>

                    </article>
                ))}
            </div>
            
        </section>
    )
};

export default Experience;