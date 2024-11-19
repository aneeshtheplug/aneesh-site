import { X } from "lucide-react";

type Project = {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full m-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        
        <div className="mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Technologies</h3>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
        
        {project.demoLink && (
          <div className="flex gap-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Live Demo
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;