import React, { useEffect } from 'react'
import ResultsContext from '../store/results'
import { useContext } from 'react'
import GenderContainer from '../containers/GenderContainer'
import MonthContainer from '../containers/MonthContainer'
import NationalityContainer from '../containers/NationalityContainer'
import TitleContainer from '../containers/TitleContainer'
import RegisterContainer from '../containers/RegisterContainer'
import TimezoneContainer from '../containers/TimezoneContainer'
import TitlePage from '../components/TitlePage'

const WomenContainer = () => {

  const { baseResults, setResults } = useContext(ResultsContext)

  useEffect(()=>{
    setResults(baseResults.filter((person) => person.gender === 'female'))
    return () => {setResults(baseResults)}
  },[])
  

  return (
    <div className='bg-[#EAECEB] dark:bg-[#515A55] px-12'>
      <TitlePage>Filtered by women</TitlePage>
      <div className=' py-4'>
        <NationalityContainer size={8} />
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-5  py-4 mt-12 gap-12'>
        <div className='xl:col-start-1 xl:col-end-4'>
          <TitleContainer />
        </div>
        <div className='xl:col-start-4 xl:col-end-6'>
          <GenderContainer />
        </div>
      </div>
      <div className=' py-4 mt-12'>
        <MonthContainer />
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4  py-4 mt-12 gap-16'>
        <div className='xl:col-start-1 xl:col-end-3 '>
          <RegisterContainer />
        </div>
        <div className='xl:col-start-3 xl:col-end-5 '>
          <TimezoneContainer />
        </div>
      </div>
    </div>
  )
}

export default WomenContainer