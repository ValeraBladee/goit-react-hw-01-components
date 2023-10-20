import css from './App.module.css';
import userData from '../data/user-data.json';
import statisticsData from '../data/statistics-data.json';
import friendsData from '../data/friends-data.json';
import transactionsData from '../data/transactions-data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export function App() {
  const {
    avatar: userAvatar,
    username: userName,
    tag: userTag,
    location: userLocation,
    stats: userStats,
  } = userData;

  return (
    <div className={css.app}>
      <Profile
        username={userName}
        avatar={userAvatar}
        tag={userTag}
        stats={userStats}
        location={userLocation}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
}
