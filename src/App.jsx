import { ToastContainer } from "react-toastify";
import AllRoutes from "./Componant/AllRoutes";
import Navbar from "./Componant/Navbar/Navbar";
import NotificationProvider from "./Componant/Notification/NotificationProvider";

function App() {
  return (
    <>
      <NotificationProvider>
        <Navbar />
        <AllRoutes />
        <ToastContainer />
      </NotificationProvider>
    </>
  );
}

export default App;
