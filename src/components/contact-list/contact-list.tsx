import React, { useState } from 'react';

import { Button } from '../button/button';
import { Plus } from '../icons';
import { Table } from '../table/table';
import { Modal } from '../modal/modal';

import styles from './contact-list.module.scss';

export const ContactList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className={styles['contact-list']}>
      <div className={styles['contact-list__head']}>
        <h1 className={styles['contact-list__caption']}>Total Contacts</h1>
        <Button
          htmlType="submit"
          color="yellow"
          text="Add"
          onClick={handleClick}
          icon={<Plus />}
          iconLocation="right"
        />
      </div>
      <Table />
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p className={styles['contact-list__caption']}>
            Пока здесь ничего нет, но должна быть форма для добавления нового
            контакта
          </p>
        </Modal>
      )}
    </main>
  );
};
