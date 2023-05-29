import React from 'react';
import cx from 'classnames';

import styles from './ListWrapper.module.scss';

import RightEdge from './right-edge.svg';
import LeftEdge from './left-edge.svg';
import Bar from './bar.png';

const ListWrapper = ({ title, children, className }) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.barContainer}>
        <img src={LeftEdge} className={styles.left} />
        <div
          className={styles.bar}
          style={{
            backgroundImage: `url(${Bar})`,
          }}
        >
          {title}
        </div>
        <img src={RightEdge} className={styles.right} />
      </div>
      <div className={styles.recordContainer}>{children}</div>
    </div>
  );
};

export default ListWrapper;
