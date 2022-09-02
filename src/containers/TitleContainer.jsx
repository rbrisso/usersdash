
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ResultsContext from '../store/results'
import { useContext } from 'react'
import Spinner from "../components/Spinner";
import TitleGraph from "../components/TitleGraph";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TitleContainer = () => {

  const { title, loading } = useContext(ResultsContext)

  const data = {
    labels: Object.keys(title),
    datasets: [
      {
        label: 'Title',
        data: Object.values(title),
        backgroundColor: [
          '#23728F',
          '#2EA890',
          '#6CB8A9',
          '#AAD4B6',
          '#B9EFC8',
          '#E9F4BD',
          '#F9FFE1'
        ]
      }
    ]
  }

  return (
    <>
      <TitleGraph>Title of users</TitleGraph>
      <div className=' bg-white dark:bg-[#C8CDCA] p-2 rounded-xl'>
        {!loading && <Bar data={data} />}
        {loading && <Spinner />}
      </div>
    </>
  )
}

export default TitleContainer