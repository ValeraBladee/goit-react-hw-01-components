import css from './FriensListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={css.listItem}>
    <span
      className={css.status}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" />
    <p className={css.name}>{name}</p>
  </li>
);
