import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Resume from "../pages/Resume/Resume";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import AboutMe from "../pages/AboutMe/AboutMe/AboutMe";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main />,
          children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/about",
              element: <AboutMe />
            },
            {
              path: "resume",
              element: <Resume />
            },
            {
              path: "portfolio",
              element: <Portfolio />
            },
            {
              path: "blog",
              element: <Blog />
            },
            {
              path: "contact",
              element: <Contact />
            }
          ]
        },
      ]);
   

export default router;