import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { Fade } from "react-awesome-reveal";
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['Todos', ...Array.from(techs).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'Todos') {
      return projects;
    }
    return projects.filter(project =>
      project.technologies.includes(selectedFilter)
    );
  }, [selectedFilter]);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">Meus Projetos</h2>
          <div className="filter-buttons mb-4 text-center">
            {allTechnologies.map(tech => (
              <button
                key={tech}
                className={`btn btn-outline-primary mx-2 mb-2 ${selectedFilter === tech ? 'active' : ''}`}
                onClick={() => setSelectedFilter(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="row justify-content-center">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrls[0]} // Display first image on card
                projectUrl={`/project/${project.id}`}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;