import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Formik } from 'formik';
import { TextField } from 'src/util/formFields/TextField';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import { Course_Names, Lang } from 'src/constants/userRoles';

const AddCourseDialog = ({ isOpen, onClose }) => {
  const formMethods = useForm();
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ color: 'green', message: '' });


  const onSubmit = async (data) => {
    setLoading(true);
    console.log('Hazarath',data);

    // Perform your course creation logic here using the form data

    setLoading(false);
    setFormMessage({ color: 'green', message: 'Course added successfully' });
    formMethods.reset();
  };

  const validate = Yup.object({

    course_name: Yup.string().required('Course Name is required'),
    description: Yup.string().required('Description is required'),
    id: Yup.string().required('ID is required'),
    category: Yup.string().required('Category is required'),
    lang: Yup.string().required('Lang is required'),
    content: Yup.string().required('Content is required'),

  });

  function changed(value: any) {
    throw new Error('Function not implemented.');
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
          <p className={`text-lg text-${formMessage.color}-500 text-left px-6 my-3`}>
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
            content: ''

          }}
          validationSchema={validate}
          // onSubmit={onSubmit}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div className="mt-8">
              <Form>
                <TextField
                  label="ID*"
                  name="id"
                  type="text"
                />

                <TextField
                  label="Category*"
                  name="category"
                  type="text"
                />

              <TextField
                  label="Image*"
                  name="image"
                  type="file"

                  className="custom-input" // Add a custom class name
                  style={{ borderColor: 'red' }} // Add inline styles
                />


                <TextField
                  label="Course Name*"
                  name="course_name"
                  type="text"
                />

                <TextField
                  label="Description*"
                  name="description"
                  type="text"
                />


                <TextField
                  label="Lang*"
                  name="lang"
                  type="text"
                />

                    <label htmlFor="what_you_will_learn">What You Will Learn*</label>
                    <TextField
                  name="what_you_will_learn[0]"
                  type="text" label={undefined}/>

                    <TextField
                  name="what_you_will_learn[1]"
                  type="text" label={undefined} />



                <TextField
                  label="Content*"
                  name="content"
                  type="text"
                />


                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    className="mb-4 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-sm hover:shadow-lg hover:bg-gray-100"
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white  rounded-sm hover:shadow-lg hover:bg-green-500"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && <Loader texColor={undefined} size={undefined} />}
                    Add Course
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCourseDialog;
