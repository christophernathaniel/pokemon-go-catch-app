import { useContext } from "react";
import NotificationContext from "../../Context/notificationContext";
import "./index.scss";

const NotificationBar = () => {
  const notificationCtx = useContext(NotificationContext);
  return (
    notificationCtx.notification !== null && (
      <div className={`notification ` + notificationCtx.notification}>
        <p>{notificationCtx.notificationText} </p>
      </div>
    )
  );
};
export default NotificationBar;
