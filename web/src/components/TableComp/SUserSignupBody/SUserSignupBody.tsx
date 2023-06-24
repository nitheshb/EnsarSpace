import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Formik } from 'formik';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import { TextField } from 'src/util/formFields/TextField';
import { checkIfLeaveExists, submitLeaveRequest } from 'src/context/dbQueryFirebase';
import { format, differenceInDays } from 'date-fns';
import { useAuth } from 'src/context/firebase-auth-context';
import { v4 as uuidv4 } from 'uuid';

const LEAVE_OPTIONS = ['Casual Leave', 'Sick Leave', 'LOP'];

const AddCourseDialog = ({ isOpen, onClose }) => {
  const formMethods = useForm();
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ color: 'green', message: '' });
  const [dateApplied, setDateApplied] = useState('');
  const { user } = useAuth();

  const sendEmailFun = async (email, messageData, recepname, tableData) => {
    try {
      const { data } = await axios.post('https://ensarspace-welcomeemailtrigger.azurewebsites.net/api/httptrigger1', {
        email, messageData, recepname, tableData
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  const onSubmit = async (data) => {
    const leaveStatus = 'Pending';
    try {
      setLoading(true);
      setDateApplied(format(new Date(), 'yyyy-MM-dd'));

      const fromDate = new Date(data.fromDate);
      const toDate = new Date(data.toDate);
      const numberOfDays = differenceInDays(toDate, fromDate) + 1;

      const newData = {
        ...data,
        requestId: uuidv4(),
        isLeaveApproved: leaveStatus,
        noOfDays: numberOfDays,
      };

      console.log('Submitted Data:', newData);

      const leaveAlreadyExists = await checkIfLeaveExists(user.orgId, data.fromDate);
      if (leaveAlreadyExists) {
        setLoading(false);
        setFormMessage({ color: 'red', message: 'Leave for this date already exists' });
        return; // Exit the function
      } else {
        setLoading(false);
        setFormMessage({ color: 'green', message: 'Leave Applied Successfully' });
        formMethods.reset();
        await submitLeaveRequest(user.orgId, user.uid, user.displayName, newData);

        // Call function that triggers email
        await sendEmailFun(user.email, 'Regarding Leave', user.displayName, 'tableData');
      }
    } catch (error) {
      console.error('Error submitting leave request:', error);
    }
  };


  const validate = Yup.object({
    leaveType: Yup.string().required('Leave is required'),
    fromDate: Yup.date().required('From Date is required'),
    toDate: Yup.date()
      .required('To Date is required')
      .min(Yup.ref('fromDate'), 'To Date cannot be less than From Date'),
    leaveReason: Yup.string().required('Leave Reason is required'),
    comment: Yup.string().required('Comment is required'),
  });

  return (
    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <Dialog.Title className="font-semibold text-lg mr-auto ml-3">Apply Leave</Dialog.Title>
      </div>
      {formMessage.message && (
        <div className="w-full bg-[#E9F6ED] ml-9 mr-9">
          <p className={`text-lg text-${formMessage.color}-500 text-left px-6 my-3`}>{formMessage.message}</p>
        </div>
      )}
      <div className="grid gap-8 grid-cols-1 mx-10 flex flex-col">
        <Formik
          initialValues={{
            leaveType: '',
            fromDate: '',
            toDate: '',
            leaveReason: '',
            comment: '',
          }}
          validationSchema={validate}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div className="mt-8">
              <Form>
                <div>
                  <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
                    Leave*
                  </label>
                  <select
                    id="leaveType"
                    name="leaveType"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.leaveType}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
                  >
                    <option value="">Select Leave Type</option>
                    {LEAVE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <TextField label="From Date*" name="fromDate" type="date" />
                <TextField label="To Date*" name="toDate" type="date" min={formik.values.fromDate} />
                <TextField label="Leave Reason*" name="leaveReason" type="text" />
                <TextField label="Comment*" name="comment" type="text" />

                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-sm hover:shadow-lg hover:bg-green-500"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && <Loader texColor={undefined} size={undefined} />}
                    Apply Leave
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
