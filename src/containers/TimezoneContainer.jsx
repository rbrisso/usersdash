import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import ResultsContext from '../store/results'
import { useContext } from 'react'
import Spinner from '../components/Spinner';
import TitleGraph from '../components/TitleGraph';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

const TimezoneContainer = () => {

  const { timezone, loading } = useContext(ResultsContext)

  const data = {
    labels: Object.keys(timezone),
    datasets: [
      {
        label: 'Timezone',
        data: Object.values(timezone),
        borderColor: '#70C2B0',
        backgroundColor: [
            '#E25179',
        ]
      }
    ]
}
  return (
    <>
      <TitleGraph>Timezone</TitleGraph>
      <div className=" bg-white dark:bg-[#C8CDCA] p-8 rounded-xl">
        {!loading && <Radar data={data} />}
        {loading && <Spinner />}
      </div>
    </>
  )
}

export default TimezoneContainer