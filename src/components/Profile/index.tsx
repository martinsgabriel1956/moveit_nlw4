import styles from '../../styles/components/Profile.module.css';

function Profile()  {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/martinsgabriel1956.png" alt=""/>
      <div>
        <strong>Gabriel Martins</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export { Profile };
