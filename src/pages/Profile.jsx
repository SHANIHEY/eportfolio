import React, { useState } from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaUser } from 'react-icons/fa';
import '../styles/Profile.css';

const Profile = () => {
  const [imageError, setImageError] = useState(false);
  const education = [
    {
      id: 1,
      degree: 'BS Computer Science (in progress)',
      institution: 'Taguig City University, Taguig City',
      period: 'Aug 2022 - Present',
      description: 'Coursework focused on UI/UX design, front-end development, and database systems.',
    },
    {
      id: 2,
      degree: 'Junior High - Senior High',
      institution: 'OMNHS, Mamburao, Occidental Mindoro',
      period: '2016 - 2022',
      description: 'Graduated with honors through both junior and senior high school.',
    },
  ];

  const experience = [
    {
      id: 1,
      position: 'Student UI/UX & Front-End Projects',
      company: 'Taguig City University',
      period: 'Aug 2022 - Present',
      description: 'Built academic and personal projects such as CinemaDB, Petopia, EduEase, Posture Assistant, and XCHANGO with a focus on user-centered interfaces and front-end implementation.',
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'Academic Excellence Awardee',
      issuer: '1st Year College - Present',
      date: '2022 - Present',
    },
    {
      id: 2,
      name: 'With High Honors',
      issuer: 'Senior High (Grades 11-12)',
      date: '2020 - 2022',
    },
    {
      id: 3,
      name: 'With Honors',
      issuer: 'Junior High (Grades 7-10)',
      date: '2016 - 2020',
    },
  ];

  return (
    <div className="profile-page">
      {/* About Me Section */}
      <section className="section about-section">
        <div className="container">
          <div className="profile-header">
            <div className="profile-avatar">
              {!imageError && (
                <img 
                  src="/248cd0cc-d1af-43d4-a87e-e21376fefc19.jpg" 
                  alt="Profile" 
                  className="profile-image"
                  onError={() => setImageError(true)}
                />
              )}
              {imageError && <FaUser className="profile-avatar-icon" />}
            </div>
            <h1 className="profile-name">Shane Khirzten M. Agor</h1>
            <p className="profile-title">UI/UX Designer & Front-End Developer</p>
            <p className="profile-bio">
              Detail-oriented and creative with a strong foundation in UI/UX design, graphic design, database management,
              and front-end development. Experienced in creating user-centered interfaces and translating design concepts
              into functional front-end code. Highly motivated to learn, adapt, and contribute to meaningful digital solutions.
            </p>
            <a href="/resume.pdf" className="btn btn-primary" download>
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">
            <FaGraduationCap /> Education
          </h2>
          <div className="timeline">
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <p className="timeline-organization">{edu.institution}</p>
                  <p className="timeline-period">{edu.period}</p>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="container">
          <h2 className="section-title">
            <FaBriefcase /> Experience
          </h2>
          <div className="timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{exp.position}</h3>
                  <p className="timeline-organization">{exp.company}</p>
                  <p className="timeline-period">{exp.period}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section certifications-section">
        <div className="container">
          <h2 className="section-title">
            <FaAward /> Certifications
          </h2>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="certification-icon">
                  <FaAward />
                </div>
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;

