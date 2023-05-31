import { useState, useContext } from 'react'

import { DocumentTextIcon, TrashIcon } from '@heroicons/react/outline'
import { doc, deleteDoc } from 'firebase/firestore'

const DowRow = ({ id, fileName, date }) => {
  const [showModel, setShoModel] = useState(false)
  const toggle = () => setShoModel(!showModel)

  const deleteDocument = async (id) => {

  }
  return (
    <>
      <div className="flex max-w-3xl mx-auto items-center p-4 rounded-lg hover:bg-gray-300 cursor-pointer text-gray-700 text-sm">

        <DocumentTextIcon className="w-4 h-4 text-blue-500" />

        <p className="flex-grow pl-5 pr-10">{fileName}</p>

        <p className="pr-5 text-xs truncate">{date}</p>

        <button
          color="gray"
          className="border-0 block rounded"
          onClick={() => setShoModel(true)}
        >
          <TrashIcon name="delete" className="w-4 h-4" />
        </button>
      </div>
      
    </>
  )
}

export default DowRow
