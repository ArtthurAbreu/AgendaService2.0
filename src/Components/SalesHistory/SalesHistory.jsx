'use client';
import dynamic from 'next/dynamic';
import styles from './SalesHistory.module.scss';
import { useState, useEffect } from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SalesHistory = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    // Verificando se as opções do gráfico são definidas
    if (!chartOptions) {
      setChartOptions({
        series: [{
          name: "Serviços",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: '',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
          }
        }
      });
    }
  }, [chartOptions]);

  // Verificando se as opções e séries do gráfico são definidas
  if (!chartOptions || !chartOptions.series || !chartOptions.options) {
    return <div>Erro na configuração do gráfico</div>;
  }

  return (
    <div className={styles['sales-history']}>
      <h2>Gráfico</h2>
      <div className={styles.SalesHistory}>
        <div id="chart">
          <ReactApexChart 
            options={chartOptions.options} 
            series={chartOptions.series} 
            type="line" 
            height={350} 
          />
        </div>
      </div>
    </div>
  );
};

export default SalesHistory;
