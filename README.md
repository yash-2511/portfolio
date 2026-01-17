# Portfolio Website

A modern, animated portfolio website built with Vite + React with a Node.js backend for contact form submissions.

## Features

✨ **Modern Design** - Black and orange color scheme with smooth animations
🌓 **Dark/Light Mode** - Toggle between dark and light themes with persistent storage
💳 **Animated Cards** - Interactive cards with hover effects and animations
📱 **Responsive** - Mobile-friendly design that works on all devices
✉️ **Contact Form** - Backend integration for contact form submissions
🎨 **Smooth Animations** - Floating shapes, transitions, and interactive elements

## Sections

- **Hero** - Eye-catching introduction with profile photo and CTA buttons
- **About** - Academic background and personal information
- **Skills** - Categorized skills with interactive tags
- **Projects** - Portfolio of projects with descriptions and links
- **Experience** - Timeline view of work experience
- **Contact** - Contact form with email integration
- **Footer** - Quick links and social media

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
npm install express cors nodemailer dotenv
```

### Development

Run the frontend development server:
```bash
npm run dev
```

In a new terminal, run the backend server:
```bash
npm run server
```

The frontend will be available at `http://localhost:5173`
The backend will be available at `http://localhost:3001`

### Build

Build for production:
```bash
npm run build
```

## Configuration

### Email Setup (for contact form)

To enable email notifications, create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=3001
```

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Use the generated password in the `.env` file

### Customize Content

Edit the following files to customize your portfolio:
- `src/components/Hero.jsx` - Update your name and description
- `src/components/About.jsx` - Add your academic background
- `src/components/Skills.jsx` - List your skills
- `src/components/Projects.jsx` - Add your projects
- `src/components/Experience.jsx` - Add your work experience
- `src/components/Contact.jsx` - Update contact information

### Update Profile Photo

Replace the profile image URL in `src/components/Hero.jsx`:
```jsx
<img 
  src="https://your-image-url.jpg" 
  alt="Profile" 
  className="profile-image"
/>
```

## Color Customization

The primary color scheme can be modified in `src/styles/index.css`:
```css
:root {
  --primary-color: #ff8c00; /* Orange */
  --secondary-color: #1a1a1a; /* Dark background */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Frontend (Vercel, Netlify, etc.)
```bash
npm run build
```

### Backend (Heroku, Railway, etc.)
Deploy the `server.js` file with proper environment variables.

## Technologies Used

- **Frontend**: React, Vite, CSS3
- **Backend**: Node.js, Express, Nodemailer
- **Styling**: CSS with CSS Variables and Animations
- **Email**: Nodemailer with Gmail SMTP

## License

MIT License - Feel free to use this template for your portfolio!

## Author

Created with ❤️ by Yash
