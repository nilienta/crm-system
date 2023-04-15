/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import classNames from 'classnames';

import { TButton } from '../../services/types/types';

import styles from './button.module.scss';

export const Button: React.FC<TButton> = ({
  children,
  color = 'black',
  onClick,
  htmlType,
  ...rest
}) => {
  // TODO изменить стили, получается грязная тень
  const className = classNames(styles.button, styles[`button--color-${color}`]);

  return (
    <button type={htmlType} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};
