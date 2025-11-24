// import UserAnalytics from '../complex-dashboard/@users/page';
// import RevenueMatrics from '../complex-dashboard/@revenue/page';
// import NotificationsPanel from '../complex-dashboard/@notification/page';

export default function ComplexDashboardLayout({
  children,
  users,
  Revenue, 
  notifications
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  Revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
    <div>{children}</div>
    <div style={{display: 'flex'}}>
        <div style={{display: 'flex', flex: 1}}>
            <div>{users}</div>
            <div>{Revenue}</div>
        </div>
        <div style={{display: 'flex', flex: 1}}>
            <div>{notifications}</div>
        </div>
    </div>
    </>
  );
}
