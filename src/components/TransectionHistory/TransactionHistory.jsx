import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ transactions }) => (
  <table className={css.table}>
    <thead className={css.tHead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(item => (
        <tr key={item.id}>
          <td className={css.type}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
