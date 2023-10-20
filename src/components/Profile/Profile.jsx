import css from './Profile.module.css';
export const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img className={css.img} src={avatar} alt="User avatar" />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li className={css.statsItem} key={stats.follower}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.statsItem} key={stats.views}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.statsItem} key={stats.likes}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
