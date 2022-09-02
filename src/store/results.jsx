import { useEffect, useRef, useState } from "react"
import React from 'react'

const ResultsContext = React.createContext({
  loading: true,
  results: [],
  baseResults: [],
  gender: {},
  nat: {},
  title: {},
  month: {},
  register: {},
  timezone: {},
  setResults: () => {}
})

export const ResultsContextProvider = (props) => {

  const isInitialMount = useRef(true);

  const [results, setResults] = useState([])
  const [baseResults, setBaseResults] = useState([])

  const [dataLoading, setDataLoading] = useState(true)
  const [gender, setGender] = useState({})
  const [title, setTitle] = useState({})
  const [nat, setNat] = useState({})
  const [month, setMonth] = useState({})
  const [timezone, setTimezone] = useState({})
  const [register, setRegister] = useState({})

  const countsGender = {}
  const countsNat = {}
  const countsTitle = {}
  const countsMonth = {}
  const countsTimezone = {}
  const countsRegister = {before2010 : 0, after2010: 0}


  useEffect (() => {
    fetch('https://randomuser.me/api/?results=5000')
      .then(response => {
        if(response.ok){
          return response.json()
        }
        throw response
      })
      .then(data => {
        setResults(data.results)
        setBaseResults(data.results)
      })
      .catch ( error => {
        console.log(error)
      })
  },[])

  useEffect (() => {
    if( isInitialMount.current){
      isInitialMount.current = false
    } else {        
    setDataLoading(true)
    for (const type of results) {
      countsGender[type.gender] = countsGender[type.gender] ? countsGender[type.gender] + 1 : 1
      countsNat[type.nat] = countsNat[type.nat] ? countsNat[type.nat] + 1 : 1
      countsTitle[type.name.title] = countsTitle[type.name.title] ? countsTitle[type.name.title] + 1 : 1
      const date = new Date(type.dob.date)
      const month = date.getMonth()
      const dateRegister = new Date(type.registered.date)
      const yearRegister = dateRegister.getFullYear()
      countsMonth[month + 1] = countsMonth[month + 1] ? countsMonth[month + 1] + 1 : 1
      countsTimezone[type.location.timezone.offset] = countsTimezone[type.location.timezone.offset] ? countsTimezone[type.location.timezone.offset] + 1 : 1
      if (yearRegister < 2010) {countsRegister.before2010 = countsRegister.before2010 + 1} else { countsRegister.after2010 = countsRegister.after2010 + 1 }
    }
    setNat(countsNat)
    setTitle(countsTitle)
    setMonth(countsMonth)
    setGender(countsGender)
    setTimezone(countsTimezone)
    setRegister(countsRegister)
    setTimezone(countsTimezone)
    setDataLoading(false)
    }
  },[results])

  const contextValue = {
    loading: dataLoading,
    results: results,
    baseResults: baseResults,
    gender: gender,
    nat: nat,
    title: title,
    month: month,
    register: register,
    timezone: timezone,
    setResults: setResults
  }

  return (
    <ResultsContext.Provider value={contextValue}>
      {props.children}
    </ResultsContext.Provider>
  );
}

export default ResultsContext;