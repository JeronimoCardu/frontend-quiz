import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Question from "./Questions";
import Scored from "./Scored";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/:quiz", element: <Question /> },
      { path: "/:quiz/scored", element: <Scored /> },
    ],
  },
]);

export default router;
