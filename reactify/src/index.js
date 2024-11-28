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
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";

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
          return Promise.all([
            fetch("http://localhost:3000/journalEntries").then((response) => response.json()),
            fetch("http://localhost:3000/ingredients").then((response) => response.json()),
            fetch("http://localhost:3000/reactions").then((response) => response.json())
          ])
            .then(([journalEntries, ingredients, reactions]) => {
              // Modify journal entries to include ingredient names and reaction descriptions
              return journalEntries.map(entry => {
                const ingredientsNames = entry.ingredients.map(id => {
                  const ingredient = ingredients.find(i => String(i.id) === String(id));
                  return ingredient ? ingredient.name : "Unknown";
                });

                const reactionDescription = reactions.find(r => String(r.id) === String(entry.reaction))?.description || "Unknown";

                return { ...entry, ingredientsNames, reactionDescription };
              });
            });
        },
        
        
      },
      
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
