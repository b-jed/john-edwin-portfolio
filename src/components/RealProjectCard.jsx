export default function RealProjectCard() {
  return (
    <div className="real-project-card">
      <div>
        {/* Project Thumbnail Image */}
        <div className="bg-zinc-900 h-48 w-full mb-4 overflow-hidden flex items-center justify-center text-gray-500 font-medium">
          {/* Replace this div with an actual <img src="..." alt="..." /> if you have a screenshot */}
          Project Image
        </div>

        {/* Project Title and Subtitle / Tech Stack */}
        <div className="space-y-2 mb-3">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Laravel + Vue.js Inventory Management System
          </h3>
          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-mist-800 text-neon">
            PHP &bull; Vue.js &bull; Tailwind CSS
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          A full-stack inventory management system built with Laravel, Vue.js, and MySQL. It provides user authentication and a dashboard for managing assets, employees, and other inventory-related records through a modern web interface.
        </p>
      </div>

      {/* Action Button / Link */}
      <div>
        <a 
          role="button"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-neon/10 hover:bg-neon/20 text-neon border border-neon/30 text-sm font-medium h-9 px-4 transition-colors"
        >
          In Progress
        </a>
      </div>
    </div>
  );
}