import Notifications from './Notifications/Notifications';
const DUMMY_LIST = [
  {
    id: '1',
    title: 'loi',
    date: '1.pm',
    content: ' test',
  },
  { id: '2', title: 'loi1', date: '1.pm', content: ' test' },
  { id: '3', title: 'loi2', date: '1.pm', content: ' test' },
  { id: '4', title: 'loi3', date: '1.pm', content: ' test' },
];

const ListNotifications = (props) => {
  const NotiList = DUMMY_LIST.map((noti) => (
    <Notifications
      key={noti.id}
      title={noti.title}
      date={noti.date}
      content={noti.content}
    />
  ));

  return (
    <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
      <div className="notification-content__title">Notifications</div>
      {NotiList}
    </div>
  );
};

export default ListNotifications;
