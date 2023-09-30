import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../Pages/Home/Home/Home";
import Allcourse from "../Pages/AllCourse/Allcourse";
import CategoryCourse from "../Pages/Home/Home/CategoryCourse";
import Details from "../Pages/Details/Details";



  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'allCourse',
          element:<Allcourse></Allcourse>
        },
        {
          path:'categoryCourse',
          element:<CategoryCourse></CategoryCourse>
        }

      ]
    },
    // {
    //   path: 'categoryCourse',
    //     element:<Details></Details> ,
    //     children: [
    //         {
    //             path:':id',
    //             element:<CategoryCourse></CategoryCourse>,
    //              loader:({params}) => fetch(`course.json${params.id}`)

    //         }
            
            
    //     ]
    // }
  ]);