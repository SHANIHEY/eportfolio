import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt,
  FaDatabase,
  FaPython,
  FaCode
} from 'react-icons/fa';
import SkillBadge from '../components/SkillBadge';
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

const Home = () => {
  // Sample skills data - can be moved to a data file later
  const frontendSkills = [
    { skill: 'React', icon: <FaReact /> },
    { skill: 'JavaScript', icon: <FaJs /> },
    { skill: 'HTML5', icon: <FaHtml5 /> },
    { skill: 'CSS3', icon: <FaCss3Alt /> },
  ];

  const backendSkills = [
    { skill: 'Node.js', icon: <FaNodeJs /> },
    { skill: 'Python', icon: <FaPython /> },
    { skill: 'Database Design', icon: <FaDatabase /> },
  ];

  const toolsSkills = [
    { skill: 'Figma', icon: <FaCode /> },
    { skill: 'Graphic Design', icon: <FaGitAlt /> },
    { skill: 'Team Collaboration', icon: <FaCode /> },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'CinemaDB',
      description: 'Cinema scheduling database system designed for organized showtime management and quick lookup.',
      technologies: ['Database', 'UI/UX', 'Frontend'],
      image: '/Images/cinemadb.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Petopia',
      description: 'Web platform for pet owners to share guides and track health and lifestyle needs.',
      technologies: ['React', 'UI/UX', 'Content'],
      image: '/Images/petopia.jpg',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Shane Khirzten Agor</span>
            </h1>
            <p className="hero-subtitle">
              UI/UX Designer & Front-End Developer
            </p>
            <p className="hero-description">
              Detail-oriented and creative with a foundation in UI/UX design, graphic design, database management,
              and front-end development. I focus on user-centered interfaces and translating design concepts into
              functional front-end experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A collection of technologies and tools I work with to bring ideas to life
          </p>
          
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="skills-category-title">Frontend</h3>
              <div className="skills-grid">
                {frontendSkills.map((item, index) => (
                  <SkillBadge 
                    key={index} 
                    skill={item.skill} 
                    icon={item.icon}
                    category="Frontend"
                  />
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Backend</h3>
              <div className="skills-grid">
                {backendSkills.map((item, index) => (
                  <SkillBadge 
                    key={index} 
                    skill={item.skill} 
                    icon={item.icon}
                    category="Backend"
                  />
                ))}
              </div>
            </div>

            <div className="skills-category">
              <h3 className="skills-category-title">Tools</h3>
              <div className="skills-grid">
                {toolsSkills.map((item, index) => (
                  <SkillBadge 
                    key={index} 
                    skill={item.skill} 
                    icon={item.icon}
                    category="Tools"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and projects
          </p>
          
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="projects-cta">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

