import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="mb-2 w-full">
      <label
        htmlFor={field.name}
        className="label font-regular text-sm block mb-1"
      >
        {label}
      </label>

      <input
        className={` ${meta.touched && meta.error && 'is-invalid'} ${
          field.name === 'blockName' ? 'rounded-xs' : ' h-10 rounded-md '
        }
           w-full min-w-full flex bg-grey-lighter text-grey-darker border border-[#cccccc] px-4`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="error-message text-red-700 text-xs p-1"
      />
    </div>
    
  )
}
