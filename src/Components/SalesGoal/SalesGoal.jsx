//'use client'
import dynamic from 'next/dynamic';
import styles from './SalesGoal.module.scss';
import { useState, useEffect } from 'react';

// Dinamicamente importando ReactApexChart para desativar SSR
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesGoal = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    if (!chartOptions) {
      setChartOptions({
        series: [1,2,3,4],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Agendamentos','Executados','Pendentes', 'Cancelados'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      });
    }
  }, [chartOptions]);

  if (!chartOptions || !chartOptions.series || !chartOptions.options) {
    return <div>Erro na configuração do gráfico</div>;
  }

  return (
    <div className={styles['sales-goal']}>
      <h3>Serviços</h3>
      <h4>Hoje</h4>
      <div className={styles.chart}>
        <ReactApexChart 
          options={chartOptions.options} 
          series={chartOptions.series} 
          type="pie" 
          width={390} 
        />
      </div>
    {/* <div id="html-dist"></div>  */}
    </div>
  );
}

export default SalesGoal;
