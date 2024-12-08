import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/Index";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Post from "./routes/Post";
import EditJournal from "./routes/EditJournal";


const router = createBrowserRouter([
  {
    element: <Root/>, 
    children: [
      {
        path: "/",
        element: <Index/>,
      },
      {
        path: "/home",
        element: <Home/>,
        loader() {
          return fetch(
            `http://localhost:3000/journalEntries/?_expand=reaction&_expand=ingredients&_embed=bookmarks`
          ).then((response) => {
            //console.log(response.json())
            return response.json();
          });
        },
        
        
      },
      {
        path: "/home/:postId",
        loader({ params }) {
          return fetch(
            `http://localhost:3000/journalEntries/${params.postId}`
          ).then((response) => {
            //console.log(response.json())
            return response.json();
          });
        },
        element: <Post />,
      },
      {
        path: "/home/:postId/edit",
        loader({ params }) {
          return fetch(`http://localhost:3000/journalEntries/${params.postId}`).then((response) => {
            return response.json();
          });
        },
        element: <EditJournal />,
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <UpdateDocumentTitle /> */}
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
