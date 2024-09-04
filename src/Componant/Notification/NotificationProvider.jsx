import { createContext, useContext, useState } from "react";
import Notification from "./Notification";

const NotificationContext = createContext();
const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000); // Auto-dismiss after 5 seconds
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {notification && <Notification {...notification} />}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
