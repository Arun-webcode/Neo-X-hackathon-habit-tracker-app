import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="dark:bg-black">
      <RouterProvider router={appRouter} />
    </div>
  );
//   return <div className=''>ActiveNeo</div>;
}

export default App;
