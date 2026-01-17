import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CinemaDB',
      description: 'Database system for cinema scheduling to keep showtimes organized and easily discoverable.',
      technologies: ['Database Design', 'UI/UX', 'Frontend'],
      image: '/Images/cinemadb.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Petopia',
      description: 'Website-based system for pet owners to post and reference health and lifestyle guides for their pets.',
      technologies: ['React', 'Content Strategy', 'UI/UX'],
      image: '/Images/petopia.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'EduEase',
      description: 'Offline/online quiz-making app to help students study and review efficiently.',
      technologies: ['Frontend', 'UX Writing', 'Accessibility'],
      image: '/Images/eduease.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Posture Assistant',
      description: 'Arduino-based posture correction system with sensors that notify users about posture issues.',
      technologies: ['Arduino', 'Sensors', 'UI Feedback'],
      image: '/Images/Posture.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'XCHANGO',
      description: 'Barter-based mobile app concept enabling users to trade items item-for-item.',
      technologies: ['Mobile UX', 'Prototyping', 'Product Design'],
      image: '/Images/xchango.png',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Barangay Voice',
      description: 'Web-based grievance and community engagement system to strengthen communication between residents and barangay officials.',
      technologies: ['UI/UX Design'],
      image: '/Images/barangay voice.jpg',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <div className="projects-page">
      <section className="section projects-section">
        <div className="container">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

