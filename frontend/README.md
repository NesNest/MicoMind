# Frontend Micomind

![Deployment](https://img.shields.io/badge/deployed-GitHub%20Pages-purple)

![Version](https://img.shields.io/badge/version-0.0.1-orange)

This project uses the **React + Vite + TypeScript** template.  
It provides a minimal setup with Hot Module Replacement (HMR) and ESLint rules for code quality.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Structure

frontend/
├── public/ # Static assets (favicon, manifest, etc.)
├── src/
│ ├── app/
│ │ ├── App.tsx # Root component
│ │ ├── main.tsx # Entry point (mounts React to DOM)
│ │ ├── routes.tsx # Route definitions
│ ├── assets/ # Images, SVGs, etc.
│ ├── components/ # Reusable UI components
│ ├── layouts/ # Page layouts (e.g., with navbar/footer)
│ ├── pages/ # Route-level views (Home, About, etc.)
│ ├── styles/ # Global and modular styles
│ ├── config.ts # Enviroment constants
├── .env # Environment variables (API URL, etc.)
├── index.html # HTML template used by Vite
├── vite.config.ts # Vite configuration
├── package.json # Project metadata and dependencies
└── `README.md` # Project documentation

## Prerequisites

- Node.js v18+
- npm (comes with Node)
- Backend API running (see [backend/README.md](/backend/README.md))

## Development

Run the dev server:

```bash
npm run dev
```

Default URL: [http://localhost:5173](http://localhost:5173) Make sure your backend is running at [http://localhost:8000](http://localhost:8000).

## Environment Variables

Create a `.env` file in the `fronted/` folder:

```bash
VITE_API_URL=http://localhost:8000
```

This ensures the frontend knows where to send API requests. For production, replace with your deployed backend URL.

## Build for Production

Build the app:

```bash
npm run build
```

This generates optimized static files in the dist/ folder.

Preview the build locally:

```bash
npm run preview
```

## Style & Conventions

- Prettier: automatic formatting on save
- ESLint: linting for code quality
- Bootstrap: layout and components
- Commit messages: follow Conventional Commits
