import Card from './Card'
import styles from './Cards.module.scss'
import { FaPeopleGroup, FaClockRotateLeft, FaUserGear } from 'react-icons/fa6';

const Cards = () => {
  return (
      <div className={styles.cards}>
        <Card title='Fila' subtitle='Hoje' value='20' icon={<FaPeopleGroup style={{ color: '#333333', fontSize: '3rem' }} />}/>        
        <Card title='Agendamentos' subtitle='Esse mês' value='28' icon={<FaClockRotateLeft style={{ color: '#333333', fontSize: '3rem' }}  />}/>        
        <Card title='Mecânicos' subtitle='Esse Ano' value='1' icon={<FaUserGear style={{ color: '#333333', fontSize: '3rem' }}   />}/>      
      </div>
  )
}
export default Cards