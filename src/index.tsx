import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import App from './App';
import Container from './components/Container';
import PopularItems from './components/PopularItems';
import AppStore from './redux/appStore'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/people",
        element: <Container />,
      },
      {
        path: "/people/:id",
        element: <Container />,
      },
      {
        path: "/films",
        element: <Container />,
      },
      {
        path: "/films/:id",
        element: <Container />,
      },
      {
        path: "/starships",
        element: <Container />,
      },
      {
        path: "/starships/:id",
        element: <Container />,
      },
      {
        path: "/vehicles",
        element: <Container />,
      },
      {
        path: "/vehicles/:id",
        element: <Container />,
      },
      {
        path: "/species",
        element: <Container />,
      },
      {
        path: "/species/:id",
        element: <Container />,
      },
      {
        path: "/planets",
        element: <Container />,
      },
      {
        path: "/planets/:id",
        element: <Container />,
      },
      {
        path: "/popular-items",
        element: <PopularItems />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode> React 18 - Strict Mode is triggering useEffect twice https://github.com/facebook/react/issues/24502#issuecomment-1118867879
      <Provider store={AppStore}>
          <RouterProvider router={router} />
      </Provider>
  // </React.StrictMode>
);

reportWebVitals();
