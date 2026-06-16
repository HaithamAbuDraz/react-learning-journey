import { useState } from 'react';

function NotificationBadge() {
  const [notifications, setNotifications] = useState(5);

  return (
    <div>
      <h2>Notifications</h2>

      <div>
        <button onClick={() => setNotifications((prev) => prev + 1)}>
          + Add Notification
        </button>

        <button onClick={() => setNotifications(0)}>Clear All</button>

        {notifications > 0 && (
          <p>
            🔔 You have {notifications} new notification
            {notifications > 1 && 's'}
          </p>
        )}

        {notifications === 0 && <p>✅ No new notifications</p>}
      </div>
    </div>
  );
}

export default NotificationBadge;
