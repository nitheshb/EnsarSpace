import React, { useState } from 'react'

import { Dialog } from '@headlessui/react'
import axios from 'axios'
import { Form, Formik } from 'formik'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { storeCourseDetails } from 'src/context/dbQueryFirebase'
import { useAuth } from 'src/context/firebase-auth-context'
import { CustomSelect } from 'src/util/formFields/selectBoxField'
import { TextField } from 'src/util/formFields/TextField'

import Loader from '../../Loader/Loader'
import StarRating from '../StarRatings'

import {
  CategoryOptions,
  LangOptions,
  Course_Names,
  Content,
  CreatorOptions,
} from './dropdown'

const AddCourseDialog = ({ isOpen, onClose }) => {
  const formMethods = useForm()

  const [loading, setLoading] = useState(false)

  const [formMessage, setFormMessage] = useState({ message: '' })

  const [isReset, setIsReset] = useState(false)

  const [rating, setRating] = useState(0) // State for rating field

  const { user } = useAuth()

  const handleReset = () => {
    formMethods.reset()

    setIsReset(true)

    setRating(0)

    setFormMessage({ message: 'Form has been reset successfully.' })
  }

  const onSubmit = async (data, { resetForm }) => {
    setLoading(true)

    try {
      await storeCourseDetails(user.orgId, user.uid, {
        ...data,
        rating,
        updated_date: data.updated_date,
        status: 'Course Added Successfully',
        actual_price: data.actual_price, // Add actual price field to the data
        discounted_price: data.discounted_price, // Add discounted price field to the data
      })

      setLoading(false)
      setFormMessage({ message: 'Course added successfully' })
      resetForm()
      setRating(0)
      setIsReset(!isReset)
    } catch (error) {
      setLoading(false)
      setFormMessage({
        message: 'An error occurred while adding the course',
      })
    }
  }

  const validate = Yup.object({
    course_name: Yup.string().required('Course Name is required'),

    id: Yup.string().required('ID is required'),

    category: Yup.string().required('Category is required'),

    lang: Yup.string().required('Language is required'),

    content: Yup.string().required('Content is required'),

    author: Yup.string().required('Author is required'),

    rating: Yup.number().required('Rating is required'),

    updated_date: Yup.string().required('Updated Date is required'),
    actual_price: Yup.number().required('Actual Price is required'), // Add actual price validation
    discounted_price: Yup.number().required('Discounted Price is required'), // Add discounted price validation
  })

  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3">
          Add Course
        </Dialog.Title>
      </div>

      {formMessage.message && (
        <div className="w-full bg-[#E9F6ED] ml-9 mr-9">
          <p className={`text-lg text-left px-6 my-3`}>
            Status: {formMessage.message}
          </p>
        </div>
      )}

      <div className="grid gap-8 grid-cols-1 mx-10 flex flex-col">
        <Formik
          initialValues={{
            id: '',

            category: '',

            image: '',

            course_name: '',

            description: '',

            lang: '',

            what_you_will_learn: '',

            content: '',

            author: '',

            rating: 0,

            updated_date: '',
            actual_price: '', // Add actual price field
            discounted_price: '', // Add discounted price field
          }}
          validationSchema={validate}
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

                <TextField
                  label="Description*"
                  name="description"
                  type="text"
                />

                <CustomSelect
                  name="author"
                  label="Author*"
                  className="input mt-3"
                  options={CreatorOptions}
                  onChange={(selectedOption) =>
                    formik.setFieldValue('author', selectedOption.value)
                  }
                  value={formik.values.author}
                />

                <TextField
                  label="Updated Date*"
                  name="updated_date"
                  type="date"
                />

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

                <label htmlFor="rating">Rating*</label>

                <StarRating
                  rating_star={rating}
                  count={5}
                  value={rating}
                  onChange={setRating}
                  size={24}
                  activeColor="#ffd700"
                  className="mt-3"
                />

                {/* =================================== */}

                <TextField
                  label="What_You_Will_Learn*"
                  name="what_you_will_learn"
                  type="text"
                />

                <TextField
                  label="Actual Price*"
                  name="actual_price"
                  type="number"
                />
                <TextField
                  label="Discounted Price*"
                  name="discounted_price"
                  type="number"
                />

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
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-sm hover:shadow-lg hover:bg-green-500"
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
