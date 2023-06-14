import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import axios from 'axios'
import { Form, Formik } from 'formik'
import {
  DEPARTMENT_LIST,
  ROLES_LIST,
  QUALIFICATION_LIST,
  EXPERIENCE_LIST,
} from 'src/constants/userRoles'
import {
  addUserLog,
  checkIfUserAlreadyExists,
  createUserToWorkReport,
  updateUserRole,
} from 'src/context/dbQueryFirebase'
import { useAuth } from 'src/context/firebase-auth-context'
import { TextField } from 'src/util/formFields/TextField'
import { PhoneNoField } from 'src/util/formFields/phNoField'
import { CustomSelect } from 'src/util/formFields/selectBoxField'
import Loader from '../Loader/Loader'
import { FieldError, InputField, Label, SelectField, TextAreaField } from '@redwoodjs/forms'

const SUserSignupBody = ({ title, dialogOpen, empData }) => {
  const { register, user } = useAuth()
  const { orgId, orgName } = user

  const formMethods = useForm()
  const [formMessage, setFormMessage] = useState({
    color: 'green',
    message: '',
  })
  const [roles, setroles] = useState([])
  const [editMode, seteditMode] = useState(false)
  const [deptIs, setdeptIs] = useState('')
  const [isdeptEmpty, setisdeptEmpty] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    empId,
    offPh,
    perPh,
    name,
    email,
    department,
    uid,
    roles: rolees,
  } = empData
  console.log('empData is ', empData)

  useEffect(() => {
    if (name) {
      seteditMode(true)
    }
  }, [])
  useEffect(() => {
    const { department, roles } = empData
    const x = {}

    if (department) {
      x['value'] = department[0]
      changed(x)
    }
  }, [empData])


  const changed = async (data) => {
    console.log('i was changed', data, data)
    setdeptIs(data.value)
    if (data.value != '') {
      setisdeptEmpty(false)
    }
    const filRoles = ROLES_LIST.filter((item) => item.dept === data.value)
    setroles(filRoles)
  }
  const onSubmit = async (data) => {
    console.log('check fo this ', data)
    setLoading(true)
    const { empId, email, myRole, deptVal, accessVal, name, offPh, perPh } =
      data

    if (editMode) {
      updateUserRole(
        empId,
        orgName,
        orgId,
        uid,
        deptVal,
        myRole,
        accessVal,
        email,
        offPh,
        perPh,
        'nitheshreddy.email@gmail.com'
      )

      setLoading(false)
      addUserLog(orgId, {
        s: 's',
        type: 'updateRole',
        subtype: 'updateRole',
        txt: `${email} as ${myRole}`,
        by: 'nitheshreddy.email@gmail.com',
      })

      setFormMessage({
        color: 'green',
        message: `Role is updated Successfully`,
      })
    } else {
      const data = {
        empId: empId,
        email: email,
        name: name,
        password: 'Ensar@123',
        dept: deptVal,
        role: myRole,
        access: accessVal,
        orgName: orgName,
        orgId: orgId,
        userStatus: 'active',
        orgStatus: 'active',
        offPh: offPh,
        perPh: perPh,
      }

      const config = {
        method: 'post',

        url: 'https://ensarspace-usersignup.azurewebsites.net/api/usersignup',

        headers: {
          'Content-Type': 'text/plain',
        },
        data,
      }
      axios(config)
        .then(async function (response) {
          if (response.data) {
            setLoading(false)
            const { success, msg, payload, uId } = await response['data']
            // eslint-disable-next-line @typescript-eslint/no-unused-vars

            // const { id } = payload
            console.log('user payload is ', response)

            if (success) {
              const docDetailsIs = await checkIfUserAlreadyExists(
                'users',
                email
              )

              // console.log('docDetailsIs', docDetailsIs, docDetailsIs[0]['uid'])
              updateUserRole(
                empId,
                orgName,
                orgId,
                uId,
                deptVal,
                myRole,
                email,
                offPh,
                perPh,
                'nitheshreddy.email@gmail.com'
              )
              const x = {
                name,
                empId,
                email,
                uid: uId,
                userStatus: 'active',
                orgStatus: 'active',
              }
              createUserToWorkReport(`${orgId}_W_Reports`, x)
              createUserToWorkReport(`${orgId}_W_AReports`, x)
              addUserLog(orgId, {
                s: 's',
                type: 'addUser',
                subtype: 'addUser',
                txt: `${email} as ${myRole}`,
                by: 'nitheshreddy.email@gmail.com',
              })
            }
            await formMethods.reset()
            setFormMessage({
              color: success ? 'green' : 'red',
              message: success
                ? `Email ${email} is added with password Ensar@123`
                : `${email} already in Use`,
            })
          }
        })
        .catch(function (error) {
          console.log('error is ', error)
          setLoading(false)
          setFormMessage({
            color: 'red',
            message: error?.msg || 'Error in creation',
          })
        })
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validate = Yup.object({

    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),

    email: Yup.string().email('Email is invalid').required('Email is required'),

    deptVal: Yup.string()

      .required('Req Dept'),
    myRole: Yup.string()

      .required('Required Role'),
  })
  return (
    <div>
      <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
        <div className="px-4 sm:px-6">
          <Dialog.Title className=" font-semibold text-lg mr-auto ml-3">
            {editMode ? 'Edit Employee Details' : 'Create Roles'}
          </Dialog.Title>
        </div>
        {formMessage.message && (
          <div className=" w-full bg-[#E9F6ED] ml-9 mr-9 ">
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
              name: name,
              email: email,
              deptVal: department != undefined ? department[0] : '',
              myRole: rolees != undefined ? rolees[0] : '',
              accessVal: access != undefined ? access[0] : '',
              empId: empId,
              perPh: perPh,
              offPh: offPh,
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log('ami submitted', values)
              onSubmit(values)
            }}
          >
            {(formik) => (
              <div className="mt-16">
                <Form>
                  <TextField
                    label="Employee Id*"
                    name="empId"
                    type="text"
                    disabled={editMode}
                  />
                  <TextField
                    label="User Name*"
                    name="name"
                    type="text"
                    disabled={editMode}
                  />
                  <TextField
                    label="Email Id*"
                    name="email"
                    type="email"
                    disabled={editMode}
                  />

                  <PhoneNoField
                    name="offPh"
                    label="Official Phone Number*"
                    className="input"
                    value={formik.values.offPh}
                    onChange={(value) => {
                      formik.setFieldValue('offPh', value.value)
                    }}
                  />
                  <PhoneNoField
                    name="perPh"
                    label="Personal Phone Number*"
                    className="input"
                    value={formik.values.perPh}
                    onChange={(value) => {
                      formik.setFieldValue('perPh', value.value)
                    }}
                  />
                  <CustomSelect
                    name="deptName"
                    label="Department"
                    className="input mt-3"
                    onChange={(value) => {
                      formik.setFieldValue('deptVal', value.value)
                    }}
                    value={formik.values.deptVal}
                    options={DEPARTMENT_LIST}
                  />
                  {formik.errors.deptVal ? (
                    <div className="error-message text-red-700 text-xs p-2">
                      {formik.errors.deptVal}
                    </div>
                  ) : null}
                  <CustomSelect
                    name="roleName"
                    label="Role"
                    className="input mt-3"
                    onChange={(value) =>
                      formik.setFieldValue('myRole', value.value)
                    }
                    value={formik.values.myRole || ''}
                    options={roles}
                  />
                  {formik.errors.myRole ? (
                    <div className="error-message text-red-700 text-xs p-2">
                      {formik.errors.myRole}
                      {formik.values.myRole}
                    </div>
                  ) : null}

                <CustomSelect
                    name="qualName"
                    label="Qualification"
                    className="input mt-3"
                    onChange={(value) => {
                      formik.setFieldValue('qualVal', value.value)
                    }}
                    value={formik.values.accessVal}
                    options={ACCESS_LIST}
                  />{' '}
                  {formik.errors.accessVal ? (
                    <div className="error-message text-red-700 text-xs p-2">
                      {formik.errors.qualVal}
                    </div>
                  ) : null}

                  <CustomSelect
                    name="expName"
                    label="Experience"
                    className="input mt-3"
                    onChange={(value) => {
                      formik.setFieldValue('expVal', value.value)
                    }}

                    onChange={(value) => {
                      //  changed(value)
                      formik.setFieldValue('expVal', value.value)
                      //  formik.setFieldValue('myRole', '')
                    }}
                    value={formik.values.expVal}
                    options={EXPERIENCE_LIST}
                  />
                  {formik.errors.expVal ? (
                    <div className="error-message text-red-700 text-xs p-2">
                      {formik.errors.expVal}
                    </div>
                  ) : null}
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs mt-5">
                    <div className="w-full flex flex-col mb-3">
                      <TextField
                        label="Aadhar No"
                        name="aadharNo"
                        type="text"
                        disabled={editMode}
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <TextField
                        label="Date of Birth"
                        name="dob"
                        type="text"
                        disabled={editMode}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-red-500 text-right my-3">
                    Required fields are marked with an asterisk{' '}
                    <abbr title="Required field">*</abbr>
                  </p>
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
                      {loading && <Loader />}
                      {editMode ? 'Edit Employee' : 'Add Roles'}
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>


        <div className="mb-3 space-y-2 w-full text-xs">
          <Label
            name="Email Id*"
            className="label font-regular text-sm"
            errorClassName="label font-regular text-sm"
          />
          <InputField
            name="email"
            placeholder="Email Id"
            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            validation={{ required: true }}
          />
          <FieldError
            name="email"
            className="error-message text-red-700 text-xs px-2"
          />
        </div>
      </div>

      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
        <div className="w-full flex flex-col mb-3">
          <Label
            name="Aadhar No*"
            className="font-semibold text-gray-600 py-2"
            errorClassName="label font-regular text-sm"
          />
          <InputField
            name="aadharNo"
            required
            placeholder="16 digit aadhar No"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <FieldError
            name="aadharNo"
            className="error-message text-red-700 text-xs"
          />
        </div>
        <div className="w-full flex flex-col mb-3">
          <Label
            name="Location*"
            className="font-semibold text-gray-600 py-2"
            errorClassName="label font-regular text-sm"
          />
          <InputField
            name="location"
            required
            placeholder="Location"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <FieldError
            name="location"
            className="error-message text-red-700 text-xs"
          />
        </div>
      </div>
      <div className="w-full flex flex-col mb-3">
        <label className="font-semibold text-gray-600 py-2">
          State {isdeptEmpty}
          <abbr title="required">*</abbr>
        </label>
        <Select
          //  className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
          name="dept"
          placeholder="Select Department"
          onChange={changed}
          options={dept}
        />
        <FieldError
          name="dept"
          className="error-message text-red-700 text-xs px-2"
        />
        <p
          className={`text-sm text-red-500  mt-3 ${!isdeptEmpty ? 'hidden' : ''
            }`}
          id="error"
        >
          Please fill out this field. {isdeptEmpty.toString()}
        </p>
      </div>
      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
        <div className="w-full flex flex-col mb-3">
          <label className="font-semibold text-gray-600 py-2">
            Dept<abbr title="required">*</abbr>
          </label>
          <SelectField
            className=" "
            name="dept"
            validation={{ required: true }}
            placeholder="Select Dept"
            onChange={changed}
          >
            {dept.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </SelectField>
          <FieldError
            name="dept"
            className="error-message text-red-700 text-xs px-2"
          />
        </div>
        <div className="w-full flex flex-col mb-3">
          <label className="font-semibold text-gray-600 py-2">
            Role<abbr title="required">*</abbr>
          </label>
          <SelectField
            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-2 md:w-full "
            name="roles"
            validation={{ required: true }}
            placeholder="Select Role"
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </SelectField>
          <FieldError
            name="roles"
            className="error-message text-red-700 text-xs px-2"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
        <div className="w-full flex flex-col mb-3">
          <label className="font-semibold text-gray-600 py-2">
            Reporting<abbr title="required">*</abbr>
          </label>
          <SelectField
            //  className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
            name="reporting"
            placeholder="Reporting To"
          />

          <p className="text-sm text-red-500 hidden mt-3" id="error">
            Please fill out this field.
          </p>
        </div>
      </div>

      <div className="">
        <div className="bg-white rounded mt-2 ">
          <div className="">
            <div className="flex items-center py-5">
              <input
                className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                type="radio"
              />
              <label className="text-sm font-medium ml-4">
                Pay Roll
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4  pb-8 ">
              <div className="col-span-2">
                <label
                  className="text-xs font-semibold"
                  htmlFor="cardNumber"
                >
                  Card number
                </label>
                <input
                  className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="">
                <label
                  className="text-xs font-semibold"
                  htmlFor="cardNumber"
                >
                  Expiry Date
                </label>
                <input
                  className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div className="">
                <label
                  className="text-xs font-semibold"
                  htmlFor="cardNumber"
                >
                  CVC/CVV
                </label>
                <input
                  className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                  type="password"
                  placeholder="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-auto w-full mb-1 text-xs space-y-2">
        <Label
          name="Description"
          className="font-semibold text-gray-600 py-2"
          errorClassName="label font-regular text-sm"
        />
        <TextAreaField
          name="desc"
          placeholder="Message"
          className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
          // className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          errorClassName="input error"
        />
        <FieldError
          name="pincode"
          className="error-message text-red-700 text-xs"
        />


        <div className="mb-3 space-y-2 w-full text-xs">
          <Label
            name="Email Id*"
            className="label font-regular text-sm"
            errorClassName="label font-regular text-sm"
          />
          <InputField
            name="email"
            placeholder="Email Id"
            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            validation={{ required: true }}
          />
          <FieldError
            name="email"
            className="error-message text-red-700 text-xs px-2"
          />
        </div>
      </div>

      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
        <div className="w-full flex flex-col mb-3">
          <Label
            name="Aadhar No*"
            className="font-semibold text-gray-600 py-2"
            errorClassName="label font-regular text-sm"
          />
          <InputField
            name="aadharNo"
            required
            placeholder="16 digit aadhar No"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <FieldError
            name="aadharNo"
            className="error-message text-red-700 text-xs"
          />
        </div>
        <div className="w-full flex flex-col mb-3">
          <Label
            name="Location*"
            className="font-semibold text-gray-600 py-2"
            errorClassName="label font-regular text-sm"
          />
          <InputField
            name="location"
            required
            placeholder="Location"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <FieldError
            name="location"
            className="error-message text-red-700 text-xs"
          />
        </div>
      </div>
      <div className="w-full flex flex-col mb-3">
        <label className="font-semibold text-gray-600 py-2">
          State {isdeptEmpty}
          <abbr title="required">*</abbr>
        </label>
        <Select
          //  className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
          name="dept"
          placeholder="Select Department"
          onChange={changed}
          options={dept}
        />
        <FieldError
          name="dept"
          className="error-message text-red-700 text-xs px-2"
        />
        <p
          className={`text-sm text-red-500  mt-3 ${!isdeptEmpty ? 'hidden' : ''
            }`}
          id="error"
        >
          Please fill out this field. {isdeptEmpty.toString()}
        </p>
      </div>
      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
        <div className="w-full flex flex-col mb-3">
          <label className="font-semibold text-gray-600 py-2">
            Dept<abbr title="required">*</abbr>
          </label>
          <SelectField
            className=" "
            name="dept"
            validation={{ required: true }}
            placeholder="Select Dept"
            onChange={changed}
          >
            {dept.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </SelectField>
          <FieldError
            name="dept"
            className="error-message text-red-700 text-xs px-2"
          />
        </div>
        <div className="w-full flex flex-col mb-3">
          <label className="font-semibold text-gray-600 py-2">
            Role<abbr title="required">*</abbr>
          </label>
          <SelectField
            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-2 md:w-full "
            name="roles"
            validation={{ required: true }}
            placeholder="Select Role"
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </SelectField>
          <FieldError
            name="roles"
            className="error-message text-red-700 text-xs px-2"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
        <div className="w-full flex flex-col mb-3">
          <label className="font-semibold text-gray-600 py-2">
            Reporting<abbr title="required">*</abbr>
          </label>
          <SelectField
            //  className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
            name="reporting"
            placeholder="Reporting To"
          />

          <p className="text-sm text-red-500 hidden mt-3" id="error">
            Please fill out this field.
          </p>
        </div>
      </div>

      <div className="">
        <div className="bg-white rounded mt-2 ">
          <div className="">
            <div className="flex items-center py-5">
              <input
                className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                type="radio"
              />
              <label className="text-sm font-medium ml-4">
                Pay Roll
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4  pb-8 ">
              <div className="col-span-2">
                <label
                  className="text-xs font-semibold"
                  htmlFor="cardNumber"
                >
                  Card number
                </label>
                <input
                  className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="">
                <label
                  className="text-xs font-semibold"
                  htmlFor="cardNumber"
                >
                  Expiry Date
                </label>
                <input
                  className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div className="">
                <label
                  className="text-xs font-semibold"
                  htmlFor="cardNumber"
                >
                  CVC/CVV
                </label>
                <input
                  className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                  type="password"
                  placeholder="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-auto w-full mb-1 text-xs space-y-2">
        <Label
          name="Description"
          className="font-semibold text-gray-600 py-2"
          errorClassName="label font-regular text-sm"
        />
        <TextAreaField
          name="desc"
          placeholder="Message"
          className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
          // className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          errorClassName="input error"
        />
        <FieldError
          name="pincode"
          className="error-message text-red-700 text-xs"
        />

        <p className="text-xs text-gray-400 text-left my-3">
          You inserted 0 characters
        </p>
      </div>
      <p className="text-xs text-red-500 text-right my-3">
        Required fields are marked with an asterisk{' '}
        <abbr title="Required field">*</abbr>
      </p>
      <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
        <span
          onClick={() => dialogOpen(false)}
          className="mb-4 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
        >
          {' '}
          Cancel{' '}
        </span>
        <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
          Save
        </button>
      </div>
    </div >

  )
}

export default SUserSignupBody
