import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import { projects } from '../../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <div className="container py-5">Projeto não encontrado!</div>;
  }

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-5 project-detail-section">
      <div className="container">
        <h2 className="section-title text-center mb-4">{project.title}</h2>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p>{project.longDescription}</p>
            <div className="project-images-col mb-4">
              {project.imageUrls.map((url, index) => (
                <img 
                  key={index} 
                  src={url} 
                  alt={`${project.title} - ${index + 1}`} 
                  className="img-fluid rounded mb-3" 
                  onClick={() => handleImageClick(url)} 
                />
              ))}
            </div>
            <h4 className="mt-4">Tecnologias Utilizadas:</h4>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="mt-4 d-flex justify-content-center align-items-center">
              {project.projectUrl !== '#' && (
                <a href={project.projectUrl} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
              )}
              {project.repoUrl !== '#' && (
                <a href={project.repoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Ver Código</a>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-viewer-backdrop" onClick={handleCloseModal}>
          <div className="image-viewer-content">
            <img src={selectedImage} alt="Selected project" className="image-viewer-image" />
            <button className="image-viewer-close-button" onClick={handleCloseModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;