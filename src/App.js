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
  Kanban,
  Area,
  Line,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "ecommerce", element: <ECommerce /> },
      { path: "orders", element: <Orders /> },
      { path: "employees", element: <Employees /> },
      { path: "customers", element: <Customers /> },
      { path: "kanban", element: <Kanban /> },
      { path: "editor", element: <Editor /> },
      { path: "calendar", element: <Calendar /> },
      { path: "color-picker", element: <ColorPicker /> },
      { path: "line", element: <Line /> },
      { path: "area", element: <Area /> },
      { path: "bar", element: <Bar /> },
      { path: "pie", element: <Pie /> },
      { path: "financial", element: <Financial /> },
      { path: "color-mapping", element: <ColorMapping /> },
      { path: "pyramid", element: <Pyramid /> },
      { path: "stacked", element: <Stacked /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
