import styles from './TopSales.module.scss'

const TopSales = () => {
  return(
    <div className={styles['top-sales']}>
      <h3>Avisos Recentes</h3>
      <ul className={styles.content}>
        <li>
          <div className={styles.image}></div>
          <h4>Novo serviço de alinhamento agendado para próxima quarta-feira (29/11/2023)</h4>
        </li>
        <li>
          <div className={styles.image}></div>
          <h4>Mecânico notificou falta de peça no estoque.</h4>
        </li>
        <li>
          <div className={styles.image}></div>
          <h4>Alteração temporária no itinerário devido ao feriado.</h4>
        </li>
        <li>
          <div className={styles.image}></div>
          <h4>Interrupção do serviço devido a manutenção predial.</h4>
        </li>
        <li>
          <div className={styles.image}></div>
          <h4>Renovação do equipamento: novo compressor instalado.</h4>
        </li>
      </ul>
    </div>
  )
}
export default TopSales