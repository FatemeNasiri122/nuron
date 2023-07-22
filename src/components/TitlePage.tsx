import React from 'react'

const TitlePage = ({title}) => {
  return (
    <div className="py-11 flex flex-col sm:flex-row items-center sm:justify-between border-b dark:border-b-gray-border border-b-color-border-white">
              <span className="inline-block sm:text-xl font-bold dark:text-white">{title}</span>
              <span className="mt-2 sm:mt-0">
                  <span className="dark:text-color-body text-color-light-body">Home</span>
                  <span className="dark:text-color-body text-color-light-body mx-3">{" > "}</span>
                  <span className="dark:text-white">{title}</span>  
              </span>
    </div>
  )
}

export default TitlePage