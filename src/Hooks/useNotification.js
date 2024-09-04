import { createContext, useContext } from "react";
const NotificationContext = createContext();
const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

// export default useNotification;
