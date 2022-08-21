import { useContext } from "react";
import NotificationContext from "../../Context/notificationContext";
import "./index.scss";

const NotificationBar = () => {
  const notificationCtx = useContext(NotificationContext);
  console.log(notificationCtx.notificationHistory);

  function HistoryList() {
    return notificationCtx.notificationHistory.map((item, index) => {
      return (
        <div className={`history-notification ` + item.state} key={index}>
          <p>{item.text} </p>
        </div>
      );
    });
  }

  return (
    <div className="history-notification-list ui-scrollable">
      <HistoryList />
    </div>
  );
};
export default NotificationBar;
