import styles from './SalesGoal.module.scss'

const SalesGoal = () => {
  return (
    <div className={styles['sales-goal']}>
      <h3>Serviços</h3>
      <h4>Hoje</h4>
      <div className={styles.chart}></div>
      
    </div>

  )
}
export default SalesGoal