import Card from './Card'
import styles from './Cards.module.scss'
import { FaUser, FaCalendar, FaTools } from 'react-icons/fa';

const Cards = () => {
  return (
      <div className={styles.cards}>
        <Card title='Fila' subtitle='Hoje' value='20' icon={<FaUser />}/>        
        <Card title='Agendamentos' subtitle='Esse mês' value='28' icon={<FaCalendar />}/>        
        <Card title='Mecânicos' subtitle='Esse Ano' value='1' icon={<FaTools />}/>      
      </div>
  )
}
export default Cards