import EmptyImage from "./empty.svg";

import styles from "./Empty.module.scss";

const Empty = () => {
  return (
    <div className={styles.wrapper}>
      <img src={EmptyImage} alt="empty" className={styles.img} />
      <div>目前尚未獲得獎項</div>
    </div>
  );
};

export default Empty;
