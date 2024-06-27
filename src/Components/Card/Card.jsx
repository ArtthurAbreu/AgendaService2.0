import styles from './card.module.scss'
import { FaPeopleGroup, FaClockRotateLeft, FaUserGear } from 'react-icons/fa6';
const Card = ({title, subtitle, value, icon}) =>{
  return(
      <div className={styles.card}>
        {icon}
        <h3>{title}</h3>
        
        <h4>{subtitle}</h4>
        <h5 className='h3'>{value}</h5>
        </div>
  )
}
export default Card