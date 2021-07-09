import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      data: [12, 19, 4],
      backgroundColor: [
        'rgba(44, 229, 14, 0.8)',
        'rgba(229, 208, 14, 1)',
        'rgba(196, 202, 195, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;