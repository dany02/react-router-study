import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import App from "./App";
import About from "./screens/About";
import Authors from "./screens/Authors";
import Book from "./screens/Book";
import Chapters from "./screens/Chapters";
import Characters from "./screens/Characters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"/about",
                element:<About/>
            },{
                path:"/authors/:name",
                element:<Authors/>,
                children :[
                    {
                        path: ":book",
                        element:<Book/>,
                        children : [
                            {
                                path: "chapters",
                                element:<Chapters/>,
                            },
                            {
                                path: "characters",
                                element:<Characters/>,
                            },
                        ]
                    },
                    

                    
                ]
            }
        ]
    }
]);

export default router;