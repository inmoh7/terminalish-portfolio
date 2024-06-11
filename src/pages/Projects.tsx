import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <div>
      <h1 className="text-center text-xl my-2">My Projects</h1>
      {projects &&
        projects.map((project, index) => {
          return (
            <div key={index} className="py-2 px-8">
              <div className="text-md flex justify-between">
                <div className="font-semibold ">
                  <span>{index + 1} . </span>
                  {project.name}
                </div>
                <div className="flex gap-2">
                  <a
                    className="hover:scale-110 hover:text-red-500"
                    href={project.githublink}
                  >
                    <FaGithub />
                  </a>
                  {project.livesite && (
                    <a
                      className="hover:scale-110 hover:text-red-500"
                      href={project.livesite}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="font-thin pl-6 ">
                <div>{project.description}</div>
              </div>
            </div>
          );
        })}
      <div className="text-center font-thin text-yellow-500">
        For more projects visit my{' '}
        <a
          className="hover:scale-110 hover:text-red-500 underline"
          href="https://github.com/inmoh7"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
