import Heading from 'src/UI/Heading/Heading';
import Link from 'next/link';
import styles from 'styles/Dashbord.module.scss'
import Cards from 'src/Components/Card/Cards';
import SalesHistory from 'src/Components/SalesHistory/SalesHistory';
import SalesGoal from 'src/Components/SalesGoal/SalesGoal';
import TopSales from 'src/Components/TopSales/TopSales';
import Header from 'src/Components/Header/Header';


export default function Home() {
  return (
  <section className={styles.dashboard}>
  <Heading title='Dashboard'
  subtitle='Home'/>
  
  <section className={styles.columns}>
    <section className={styles.column1}>
      <Cards />
      <SalesHistory />
    </section>
    <section className={styles.column2}>
    <SalesGoal />
    <TopSales />
    </section>
    
  </section>
  </section>
  );
}
