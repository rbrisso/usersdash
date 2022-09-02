import React from 'react'

const TitlePage = (props) => {
  return (
    <h1 className='grid place-items-center text-3xl text-[#23728F] dark:text-[#d1eaf4] pt-4'>{props.children}</h1>
  )
}

export default TitlePage