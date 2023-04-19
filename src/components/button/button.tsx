import React from 'react';
import classNames from 'classnames';

import { TButton } from '../../services/types/types';

import styles from './button.module.scss';

export const Button: React.FC<TButton> = ({
  text,
  color = 'black',
  onClick,
  htmlType,
  extraClass,
  icon,
  iconLocation = 'left',
  ...rest
}) => {
  const className = classNames(
    styles.button,
    styles[`button--color-${color}`],
    extraClass
  );

  return (
    <button type={htmlType} onClick={onClick} className={className} {...rest}>
      {icon && iconLocation === 'left' && (
        <div className={styles.button__icon}>{icon}</div>
      )}
      {text}
      {icon && iconLocation === 'right' && (
        <div className={styles.button__icon}>{icon}</div>
      )}
    </button>
  );
};
