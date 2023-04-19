import React from 'react';

import styles from './input.module.scss';

interface TInputInterface
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  value?: string;
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder?: string;
  disabled?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<TInputInterface> = ({
  value,
  type,
  name,
  placeholder,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor="title">
        {placeholder}
      </label>

      <input
        className={styles.input__textfield}
        type={type}
        defaultValue={value}
        disabled={disabled}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
