import { AppRouter } from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  const routes = AppRouter();
  return (
    <BrowserRouter>
      <div className="wrapper">{routes}</div>
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
}
