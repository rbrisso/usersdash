import "/node_modules/flag-icons/css/flag-icons.min.css";
import ResultsContext from '../store/results'
import { useContext } from 'react'
import { Countries } from "../utils/constants";
import Spinner from "../components/Spinner";
import TitleGraph from '../components/TitleGraph'

const NationalityContainer = ({size}) => {

  const { nat, loading } = useContext(ResultsContext)
  const list = Object.entries(nat).sort((a,b)=>b[1] - a[1])

  return (
    <>
      <TitleGraph >{`Top ${size} Nationalities`}</TitleGraph>
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-12">
          {list.slice(0,size).map( (country, i) => (
            <div className='w-full bg-white dark:bg-[#C8CDCA] rounded-xl shadow-md p-4 mb-2' key={i}>
              <div className="flex flex-wrap border-b border-[#23728F] ">
                <div className={`rounded-xl grid items-center w-24 h-24 py-4 justify-center fis fi-${country[0].toLowerCase()} bg-cover mb-4 -mt-10 border-[#23728F] border`} />
                <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right">
                  <h5 className="text-[#23728F] font-light mb-1">{Countries[country[0]]}</h5>
                  <span className="text-3xl text-[#23728F]">{country[1]}</span>
                </div>
              </div>
              <div className="text-sm text-[#23728F] pt-4 flex items-center justify-center">
                <span className="font-light">{`${(100 * country[1] / 5000).toFixed(2)} % of total users`}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {loading && <Spinner />}
    </>
  )
}

export default NationalityContainer