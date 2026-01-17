# E-Portfolio

A professional portfolio website built with React, featuring multiple pages for showcasing projects, skills, profile, and contact information.

## Features

- **Home Page**: Hero section with introduction, overview, and skills display
- **Projects Page**: Grid layout showcasing projects with details and links
- **Profile Page**: Detailed profile including education, experience, and certifications
- **Contact Page**: Contact form with validation and contact information
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI**: Clean, professional design with smooth animations

## Technologies Used

- React 18
- React Router DOM
- React Icons
- CSS3 with custom properties
- Responsive Grid and Flexbox layouts

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

```
eportfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillBadge.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Profile.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Projects.css
│   │   ├── Profile.css
│   │   ├── Contact.css
│   │   ├── ProjectCard.css
│   │   └── SkillBadge.css
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

To customize the portfolio with your own content:

1. Update personal information in `src/pages/Home.jsx` (hero section)
2. Update projects in `src/pages/Projects.jsx` and `src/pages/Home.jsx`
3. Update skills in `src/pages/Home.jsx`
4. Update profile information in `src/pages/Profile.jsx`
5. Update contact information in `src/pages/Contact.jsx` and `src/components/Footer.jsx`
6. Update social media links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
7. Customize colors in `src/index.css` (CSS variables)

## License

Private project - All rights reserved

