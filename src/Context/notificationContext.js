// https://jujuontheweb.medium.com/react-usecontext-hook-to-make-an-alert-notification-system-for-your-entire-application-721b4c6b7d0f

import { createContext, useState, useRef } from "react";

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
  const timerId = useRef(null);

  const success = (text) => {
    window.scroll(0, 0);
    setNotificationText(text);
    setNotification(STATES.SUCCESS);
    clear();
  };
  const error = (text) => {
    window.scroll(0, 0);
    setNotificationText(text);
    setNotification(STATES.ERROR);
    clear();
  };
  const clear = () => {
    clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      clearTimeout(timerId.current);
      setNotificationText(null);
      setNotification(null);
    }, 3000);
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
