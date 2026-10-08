function TechStack() {

  const techStack = [
    { name: "PHP (OOP)", desc: "Backend programming & logic" },
    { name: "Laravel", desc: "PHP framework & API development" },
    { name: "Vue.js / Vue 3", desc: "Interactive frontend components" },
    { name: "Blade", desc: "Laravel templating engine" },
    { name: "MySQL", desc: "Database design & management" },
    { name: "Tailwind CSS", desc: "Styling & responsive UI" },
  ];

  const toolsWorkflow = [
    { name: "Git & GitHub", desc: "Version control & collaboration" },
    { name: "Figma", desc: "UI/UX prototyping & design" },
    { name: "Node.js / npm", desc: "Frontend tooling & packages" },
    { name: "Vite", desc: "Fast build tooling & development" },
    { name: "Agile Workflow", desc: "Tasks, PR reviews, & management" },
  ];

  return (
    <section className="w-full text-white py-24 px-12 lg:px-24 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-light tracking-[0.3em] text-neon uppercase block mb-2">
          WHAT I WORK WITH
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
          TECH STACK
        </h2>
      </div>

      <span className="text-lg font-light text-neon tracking-widest">
        MAIN DEVELOPMENT STACK
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
        {techStack.map((tech, index) => (
          <div key={index} className="ts-card">
            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>

      <span className="text-lg font-light text-neon tracking-widest mb-4">
          TOOLS & WORKFLOW
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
        {toolsWorkflow.map((tool, index) => (
          <div key={index} className="ts-card">
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );

}

export default TechStack;