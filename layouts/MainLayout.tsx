import React, { Children } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Main.module.scss';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
