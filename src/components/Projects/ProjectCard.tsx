import React from 'react';
import './ProjectCard.css';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Now expects a single image URL for the card
  projectUrl: string;
  repoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, imageUrl, projectUrl, repoUrl }) => {
  return (
    <div className="col-md-4 mb-4">
      <Link to={`/project/${id}`} className="card-link">
        <div className="card project-card h-100">
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <Link to={`/project/${id}`} className="btn btn-primary">Ver Projeto</Link>
            {repoUrl !== '#' && (
              <a href={repoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver Código</a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;