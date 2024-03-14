// Header.js
import styles from './Header.module.scss';
import React from 'react';
import { FaUser,FaRegCommentAlt,FaRegBell } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.Image}>
          <Image src='/logo.png' alt='dashboard' width='36' height='36'/>
        </div>
        <span className={styles.titulo}>AgendaService</span>
      </div>
      
      <div className={styles.action}>
      <FaRegBell />
      <FaRegCommentAlt />
        <FaUser />
      </div>
     
    </header>
  );
};

export default Header;
