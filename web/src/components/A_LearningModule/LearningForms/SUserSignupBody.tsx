import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { Form, Formik } from 'formik'
import { TextField } from 'src/util/formFields/TextField'
import axios from 'axios'
import Loader from '../../Loader/Loader'
import {
  CategoryOptions,
  LangOptions,
  Course_Names,
  WhatYouWillLearnOptions,
  Content,Description,
} from './dropdown'
import { CustomSelect } from 'src/util/formFields/selectBoxField'

const AddCourseDialog = ({ isOpen, onClose }) => {
  const formMethods = useForm();
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ color: 'green', message: '' });
  const [isReset, setIsReset] = useState(false);

  const handleReset = () => {
    formMethods.reset();
    setIsReset(true);
    setFormMessage({ color: 'red', message: 'Form has been reset Sucessfully.' });
  };

  const onSubmit = async (data) => {
    setLoading(true)
    console.log('pavan', data)


    setLoading(false)
    setFormMessage({ color: 'green', message: 'Course added successfully' })
    formMethods.reset()
  }

  const validate = Yup.object({
    course_name: Yup.string().required('Course Name is required'),
    description: Yup.string().required('Description is required'),
    id: Yup.string().required('ID is required'),
    category: Yup.string().required('Category is required'),
    lang: Yup.string().required('Lang is required'),
    content: Yup.string().required('Content is required'),
  })

  function changed(value: any) {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3">
          Add Course
        </Dialog.Title>
      </div>
      {formMessage.message && (
        <div className="w-full bg-[#E9F6ED] ml-9 mr-9">
          <p
            className={`text-lg text-${formMessage.color}-500 text-left px-6 my-3`}
          >
            {formMessage.message}
          </p>
        </div>
      )}
      <div className="grid gap-8 grid-cols-1 mx-10 flex flex-col">
        <Formik
          initialValues={{
            id: '',
            category: '',
            course_name: '',
            description: '',
            lang: '',
            what_you_will_learn: ['', ''],
            content: '',
          }}
          validationSchema={validate}
          // onSubmit={onSubmit}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div className="mt-8">
              <Form>
                <TextField label="ID*" name="id" type="text" />

                <CustomSelect
                  name="category"
                  label="Category*"
                  className="input mt-3"
                  options={CategoryOptions}
                  onChange={(selectedOption) =>
                    formik.setFieldValue('category', selectedOption.value)
                  }
                  value={formik.values.category}
                />
                <br />

                <TextField
                  label="Image*"
                  name="image"
                  type="file"
                  className="custom-input" 
                  style={{ borderColor: 'red' }}
                />

                <CustomSelect
                  label="Course Name*"
                  name="course_name"
                  className="input mt-3"
                  options={Course_Names}
                  onChange={(selectedOption) =>
                    formik.setFieldValue('course_name', selectedOption.value)
                  }
                  value={formik.values.course_name}
                />
                <br />



                <CustomSelect
                  label="Description*"
                  name="description"
                  className="input mt-3"
                  options={Description}
                  onChange={(selectedOption) =>
                    formik.setFieldValue('description', selectedOption.value)
                  }
                  value={formik.values.description}
                />
                <br />

                <CustomSelect
                  name="lang"
                  label="Language*"
                  className="input mt-3"
                  options={LangOptions}
                  onChange={(selectedOption) =>
                    formik.setFieldValue('lang', selectedOption.value)
                  }
                  value={formik.values.lang}
                />
                <br />

                <label htmlFor="what_you_will_learn">
                  What You Will Learn*
                </label>
                <CustomSelect
                  name="what_you_will_learn[0]"
                  label={undefined}
                  options={WhatYouWillLearnOptions}
                  onChange={(selectedOption) =>
                    formik.setFieldValue(
                      'what_you_will_learn[0]',
                      selectedOption.value
                    )
                  }
                  value={formik.values.what_you_will_learn[0]}
                  className={undefined}
                />

                <CustomSelect
                  name="what_you_will_learn[1]"
                  label={undefined}
                  options={WhatYouWillLearnOptions}
                  onChange={(selectedOption) =>
                    formik.setFieldValue(
                      'what_you_will_learn[1]',
                      selectedOption.value
                    )
                  }
                  value={formik.values.what_you_will_learn[1]}
                  className={undefined}
                />
                <br />



                <CustomSelect
                  name="content"
                  label="Content*"
                  className="input mt-3"
                  options={Content}
                  onChange={(selectedOption) =>
                    formik.setFieldValue('content', selectedOption.value)
                  }
                  value={formik.values.content}
                />
                <br />

                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    className="mb-4 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-sm hover:shadow-lg hover:bg-gray-100"
                    type="reset"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                  <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white  rounded-sm hover:shadow-lg hover:bg-green-500"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && (
                      <Loader texColor={undefined} size={undefined} />
                    )}
                    Add Course
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddCourseDialog
