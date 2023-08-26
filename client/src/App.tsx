import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Messages from "./scenes/Messages";
import Navbar from "./components/navbar";
import Settings from "./scenes/Settings";
import PageNotFound from "./scenes/PageNotFound";
import Login from "./scenes/auth/Login";
import Register from "./scenes/auth/Register";
import Onboarding from "./scenes/auth/Onboarding";
import AuthSlider from "./components/auth/AuthSlider";

const MessagesWrapper = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

const AuthWrapper = () => {
  return (
    <main className="grid grid-flow-row xl:grid-cols-2 h-screen">
      <section className="hidden xl:block">
        <AuthSlider />
      </section>
      <article className="w-full p-12 xl:p-4">
        <Outlet />
      </article>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MessagesWrapper />,
    children: [
      {
        path: "/",
        element: <Messages />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthWrapper />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <div className="w-full min-h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
