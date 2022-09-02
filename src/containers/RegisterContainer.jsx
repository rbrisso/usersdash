import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ResultsContext from '../store/results'
import { useContext } from 'react'
import Spinner from '../components/Spinner';
import TitleGraph from '../components/TitleGraph';

ChartJS.register(ArcElement, Tooltip, Legend);

const RegisterContainer = () => {

  const { register, loading } = useContext(ResultsContext)

  const data = {
    labels: ['Before 2010', 'After 2010'],
    datasets: [
      {
        label: 'Date of registration',
        data: Object.values(register),
        backgroundColor: [
          '#E9F4BD',
          '#70C2B0'
        ]
      }
    ]
  }
  return (
    <>
      <TitleGraph>Year of registration</TitleGraph>
      <div className=" bg-white dark:bg-[#C8CDCA] p-8 rounded-xl">
        {!loading && <Doughnut data={data} />}
        {loading && <Spinner />}
      </div>
    </>
  )
}

export default RegisterContainer