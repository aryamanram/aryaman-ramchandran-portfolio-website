import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // Placeholder routes — pages will be built next
      { path: "about", element: <About /> },
      { path: "projects", element: <PlaceholderPage title="Projects" /> },
      { path: "experience", element: <Experience /> },
      { path: "resume", element: <Resume /> },
    ],
  },
]);

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-12">
      <h1 className="text-4xl font-semibold tracking-tight text-primary">
        {title}
      </h1>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
