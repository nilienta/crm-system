import React, { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.scss';

type TModal = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: FC<TModal> = ({ onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleESCclose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.addEventListener('keyup', handleESCclose);
    return () => document.body.removeEventListener('keyup', handleESCclose);
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        className={styles['module-overlay']}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`${styles.modal} ${styles['modal-open']}`}>
        {children}
      </div>
    </>,
    modalRoot as Element
  );
};
