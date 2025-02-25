import React from 'react'
import { dataUseage } from '../utils/utils'

const DataCard = ({ children, bytes }) => {
  return (
    <div className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="block">
        <span className="h1">{dataUseage(bytes)}</span>
      </div>
      {children}
    </div>
  )
}

export default DataCard