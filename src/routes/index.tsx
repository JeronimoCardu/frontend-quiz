import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Question from "./Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/:quiz", element: <Question /> }],
  },
]);

export default router;
