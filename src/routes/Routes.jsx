import { createBrowserRouter } from 'react-router-dom';
import Engine from '../Engine';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Engine />,
    children: [
      { path: '/', element: <Engine /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
