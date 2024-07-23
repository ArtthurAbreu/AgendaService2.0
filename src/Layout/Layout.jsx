import Head from 'next/head';
import Sidebar from 'src/Components/Sidebar/Sidebar';
import styles from './Layout.module.scss';
import Header from 'src/Components/Header/Header';
import Footer from 'src/Components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
     
      <Head>
        <title>AgendaService</title>
      </Head>
        <Sidebar />
        <Header />
        <hr />
        
      <main className={styles.main}>
     
        <section className={styles.content}>{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;