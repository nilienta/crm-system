import React from 'react';

import styles from './input.module.scss';

interface TInputInterface
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  value?: string;
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder?: string;
  // success?: boolean;
  // error?: boolean;
  disabled?: boolean;
  // icon?: keyof TICons;
  // errorText?: string;
  // size?: 'default' | 'small';
  // extraClass?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  // onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
  // onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  // onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
}

export const Input: React.FC<TInputInterface> = ({
  value,
  type,
  name,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor="title">
        {placeholder}
      </label>

      <input
        //   onFocus={handleInputFocus}
        //   onBlur={handleInputBlur}
        //   className={clsx('text', 'input__textfield', {
        //     [`text_type_main-${size}`]: size,
        //     ['input__textfield-disabled']: disabled,
        //   })}
        className={styles.input__textfield}
        type={type}
        //   ref={ref}
        defaultValue={value}
        disabled={disabled}
        name={name}
        onChange={onChange}
        //   {...rest}
      />
      {/* {iconToRender} */}
    </div>
  );
};
