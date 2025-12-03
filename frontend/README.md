# React + TypeScript + Vite

This project uses the **React + Vite + TypeScript** template.  
It provides a minimal setup with Hot Module Replacement (HMR) and ESLint rules for code quality.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
