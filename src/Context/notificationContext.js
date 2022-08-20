import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  notificationText: null,
  success: () => {},
  error: () => {},
});

const STATES = {
  SUCCESS: "success",
  ERROR: "error",
};

const NotificationProvider = (props) => {
  const [notification, setNotification] = useState(null);
  const [notificationText, setNotificationText] = useState(null);
  const success = (text) => {
    window.scroll(0, 0);
    setNotificationText(text);
    setNotification(STATES.SUCCESS);

    // Clear Notification after 5 seconds
    let timeout = setTimeout(() => {
      clear();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  };
  const error = (text) => {
    window.scroll(0, 0);
    setNotificationText(text);
    setNotification(STATES.ERROR);
  };
  const clear = () => {
    setNotificationText(null);
    setNotification(null);
  };
  return (
    <NotificationContext.Provider
      value={{
        success,
        error,
        clear,
        notification,
        notificationText,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider };
export default NotificationContext;
