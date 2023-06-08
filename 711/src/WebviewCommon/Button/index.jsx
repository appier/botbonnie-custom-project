import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Lottie from 'react-lottie';

import LoadingAnimation from './Loading.json';
import styles from './index.module.scss';

const Button = ({
  children,
  onClick,
  mode,
  disabled,
  isLoading,
  className,
}) => {
  return (
    <div
      className={cx(styles.buttonWrapper, className)}
      onClick={() => {
        if (!disabled && !isLoading) onClick();
      }}
    >
      {isLoading ? (
        <div className={styles.loading}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: LoadingAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMin slice',
              },
            }}
          />
        </div>
      ) : (
        <>
          {mode === 'primary' && <div className={styles.gradient}></div>}
          <div
            className={cx(styles.button, styles[mode], {
              [styles.disabled]: disabled,
            })}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};
Button.defaultProps = {
  mode: 'primary',
  disabled: false,
  isLoading: false,
  className: '',
};

export default Button;
