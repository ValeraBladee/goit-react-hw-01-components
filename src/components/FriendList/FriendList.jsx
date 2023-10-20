import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendsList.module.css';
export const FriendList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(item => (
      <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        id={item.id}
        key={item.id}
      />
    ))}
  </ul>
);
