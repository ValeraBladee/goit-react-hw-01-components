import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/random-hex';
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : null}

    <ul className={css.statList}>
      {stats.map(item => (
        <li
          key={item.id}
          className={css.statItem}
          style={{
            backgroundColor: getRandomHexColor(),
          }}
        >
          <span className={css.statLabel}>{item.label}</span>
          <span className={css.statPercentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
