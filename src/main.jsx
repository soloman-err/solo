import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Engine from './Engine.jsx';
import './index.scss';
import router from './routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}>
      <Engine />
    </RouterProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
