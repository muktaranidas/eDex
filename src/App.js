import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="font-mainFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
