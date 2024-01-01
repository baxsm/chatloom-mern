import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Messages from "./scenes/Messages";
import PageNotFound from "./scenes/PageNotFound";
import Login from "./scenes/auth/Login";
import Register from "./scenes/auth/Register";
import Onboarding from "./scenes/auth/Onboarding";
import AuthSlider from "./components/auth/AuthSlider";
import { PropsWithChildren } from "react";
import { useUser } from "./hooks/auth/useUser";

const AuthWrapper = () => {
  return (
    <main className={`grid grid-flow-row xl:grid-cols-2 h-screen`}>
      <section className={`hidden xl:block`}>
        <AuthSlider />
      </section>
      <article className="w-full p-12 xl:p-4">
        <Outlet />
      </article>
    </main>
  );
};

const ProtectedRoutes = ({ children }: PropsWithChildren) => {
  const { user } = useUser();
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  } else if (!user.onboarding) {
    return <Navigate to="/auth/onboarding" replace />;
  }
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Messages />
      </ProtectedRoutes>
    ),
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
    path: "/auth/onboarding",
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
