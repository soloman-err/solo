import { createBrowserRouter } from 'react-router-dom';
import Engine from '../Engine';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Headquarter from '../pages/headquarter/Headquarter';
import Projects from '../pages/projects/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Engine />,
    children: [
      { path: '/', element: <Headquarter /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
