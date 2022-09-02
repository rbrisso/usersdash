import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ResultsContext from '../store/results'
import { useContext } from 'react'
import Spinner from '../components/Spinner';
import TitleGraph from '../components/TitleGraph';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const MonthContainer = () => {

  const { month, loading } = useContext(ResultsContext)

  const data = {
    labels: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    datasets: [
      {
        label: 'Birthday month',
        data: Object.values(month),
        borderColor: '#6CB8A9',
        backgroundColor: '#E25179'
      }
    ]
  }

  return (
    <>
      <TitleGraph>Month of birth</TitleGraph>
      <div className=" bg-white dark:bg-[#C8CDCA] p-8 rounded-xl">
        {!loading && <Line data={data} />}
        {loading && <Spinner />}
      </div>
    </>
  )
}

export default MonthContainer