import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import Projects from './components/projects';
import { Tagged } from './components/pages/Tagged';
import ProjectDetails from './components/pages/ProjectDetails';
import Game from './components/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Outlet />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/tagged/:tag" element={<Tagged />} />
        <Route path="projects/:projectName" element={<ProjectDetails />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
