import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
          width="100px"
        />
        <h2 className={css.name}>{username}</h2>
        <p className={css.locationTag}>@{tag}</p>
        <p className={css.locationTag}>{location}</p>
      </div>

      <ul className={css.stat}>
        <li className={css.statItem}>
          <span className={css.statTitle}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statTitle}>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.statTitle}>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
