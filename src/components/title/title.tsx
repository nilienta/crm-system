import React from 'react';
import styles from './title.module.scss';

function Title({ text }: { text: string }) {
  return <p className={styles.title}>{text}</p>;
}

export default Title;
