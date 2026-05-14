# Sabauddin's Professional Portfolio

A modern, responsive, animated, and professional personal portfolio website built with React, Vite, Tailwind CSS (v4), and Framer Motion.

## Technologies Used
- React + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React (Icons)
- React Scroll

## Features
- **Dark/Light Mode:** Full theme toggle support with premium neon and bluish/cyan accents.
- **Animations:** Smooth scrolling, page load animations, and scroll-triggered reveals using Framer Motion.
- **Glassmorphism:** Modern translucent UI components.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewports.
- **SEO Ready:** Semantic HTML used throughout the structure.

## Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Deployment Steps

### Deploy to Vercel
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. The Build Settings will automatically detect Vite:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Deploy to Netlify
1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://netlify.com) and click **Add new site** > **Import an existing project**.
3. Connect your GitHub account and select your repository.
4. Set the Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

## Suggestions for Future Improvements
- **CMS Integration:** Use Sanity.io or Contentful to manage projects, skills, and experience without modifying code.
- **Blog Section:** Add a technical blog to share knowledge and improve SEO.
- **3D Elements:** Integrate `react-three-fiber` or `spline` for interactive 3D elements in the hero section.
- **Form Backend:** Connect the contact form to a service like EmailJS or Formspree to receive messages directly in your inbox.
- **Performance Optimization:** Lazy load components and images to further enhance load times.
