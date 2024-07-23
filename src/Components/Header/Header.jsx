import styles from './Header.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaRegCommentAlt, FaRegBell } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const dropdownRef = useRef(null);

  const handleIconClick = (icon) => {
    setActiveIcon(activeIcon === icon ? null : icon);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveIcon(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.image}>
          <a href="">
            <Image src='/logo.png' alt='dashboard' width='36' height='36' />
          </a>
        </div>
        <span className={styles.titulo}>AgendaService</span>
      </div>
      
      <div className={styles.action}>
        <div className={styles.iconWrapper}>
          <button className={styles.iconButton} onClick={() => handleIconClick('bell')}>
            <FaRegBell />
          </button>
          {activeIcon === 'bell' && (
            <div className={styles.dropdown} ref={dropdownRef}>
              <ul>
                <li>Notificação</li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.iconWrapper}>
          <button className={styles.iconButton} onClick={() => handleIconClick('comment')}>
            <FaRegCommentAlt />
          </button>
        </div>
        <div className={styles.iconWrapper}>
          <button className={styles.iconButton} onClick={() => handleIconClick('user')}>
            <FaUser />
          </button>
          {activeIcon === 'user' && (
            <div className={styles.dropdown} ref={dropdownRef}>
              <ul>
                <li>Editar</li>
                <li>sair</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
