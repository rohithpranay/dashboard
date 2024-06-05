import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Area,
  Line,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <ECommerce /> },
      { path: "orders", element: <Orders /> },
      { path: "employees", element: <Employees /> },
      { path: "customers", element: <Customers /> },
      { path: "editor", element: <Editor /> },
      { path: "calendar", element: <Calendar /> },
      { path: "line", element: <Line /> },
      { path: "area", element: <Area /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
