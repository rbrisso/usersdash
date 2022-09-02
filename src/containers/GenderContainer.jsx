import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ResultsContext from '../store/results'
import { useContext } from 'react'
import Spinner from "../components/Spinner";
import TitleGraph from "../components/TitleGraph";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderContainer = () => {
    
  const { gender , loading} = useContext(ResultsContext)
  const data = {
    labels: Object.keys(gender),
    datasets: [
        {
            label: 'Gender',
        data: Object.values(gender),
        backgroundColor: [
            '#6CB8A9',
            '#2D93B8',
        ]
        }
    ]
  }
  return (
    <>
      <TitleGraph>Gender</TitleGraph>
      <div className=" bg-white dark:bg-[#C8CDCA] p-8 rounded-xl">
        {!loading && <Pie data={data} />}
        {loading && <Spinner />}
      </div>
    </>
        
  )
}

export default GenderContainer