
import { EyeIcon, PencilIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { deleteUser, steamAssetsList, steamUsersList } from 'src/context/dbQueryFirebase'
import { TrashIcon } from '@heroicons/react/outline'
import StyledButton from 'src/components/RoundedButton'
import { useAuth } from 'src/context/firebase-auth-context'
import OnBoardAssertBody from 'src/components/onBordingAssert/onBoardAssertBody'
import SiderForm from 'src/components/SiderForm/SiderForm'

const LaptopDetailPage = ({onBoardAssertBody}) => {
  const { user } = useAuth()

  const { orgId } = user
  const [x, setXvALUE] = useState('10')
  const [assetFetchData, setAssetFetchedData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [selDept, setSelDept] = useState('')
  const [selRole, setSelRole] = useState([]);

  const [sliderInfo, setSliderInfo] = useState({
    open: false,
    title: 'LaptopDetailPage',
    sliderData: {},
    widthClass: 'max-w-xl',
    assetPayload: {}
  })

  const showOnlyRole = (role) => {
    setSelRole(role);
  };
  useEffect(() => {
    getLeadsDataFun()
    setSelDept('all')
  }, [])
  useEffect(() => {
    if (selDept === 'all') {
      setFilterData(assetFetchData)
    } else if (selDept === 'Phone') {
      console.log(
        ' what am i ',
        selDept,
        assetFetchData.filter((userD) => userD.department === selDept)
      )
      setFilterData(
        assetFetchData.filter(
          (userD) =>
            userD.Product === "Phone android" || userD?.department?.includes(selDept)
        )
      )
    }

    else{
      console.log(
        ' what am i ',
        selDept,
        assetFetchData.filter((userD) => userD.department === selDept)
      )
      setFilterData(
        assetFetchData.filter(
          (userD) =>
            userD.Product === selDept || userD?.department?.includes(selDept)
        )
      )
    }

  }, [selDept, assetFetchData])
  const handleSliderClose = () => {
    setSliderInfo({
      open: false,
      title: '',
      sliderData: {},
      widthClass: 'max-w-xl',
      assetPayload:{}
    })
  }

  const getLeadsDataFun = async () => {
    const unsubscribe = steamAssetsList(
      orgId,
      (querySnapshot) => {
        const usersListA = querySnapshot.docs.map((docSnapshot) =>
          docSnapshot.data()
        )
        setAssetFetchedData(usersListA)
      },
      () => setAssetFetchedData([])
    )
    return unsubscribe
  }

  const showOnlyDept = async (category) => {
    setSelDept(category)
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">


          <section className="flex ml-auto mt-[18px]  bg-white  border-gray-100 py-4 md:py-7 px-4 md:px-8 xl:px-10">
            {[
              { label: 'All', val: 'all' },
              { label: 'Laptop', val: 'Laptop' },
              { label: 'Phone', val: 'Phone' },
              { label: 'Sim', val: 'Sim' },

            ].map((dat, index) => (
              <a
                key={index}
                className={`rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800 mr-4`}
                onClick={() => showOnlyDept(dat.val)}
              >
                <div
                  className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100  ${
                    selDept.includes(dat.val)
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600'
                  }`}
                >
                  {dat.label}
                </div>
              </a>
            ))}
          </section>

          <div className="shadow overflow-hidden border-b border-gray-200  bg-white pb-4 md:py-7 px-4 md:px-8 xl:px-10">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    serialNumber
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    productName
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assign To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AllocationStatus
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    WorkingStatus
                  </th>


                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filterData.map((asset) => (
                  <motion.tr key={asset.email}
                  onClick={() => {
                    console.log('i am searching ')
                    setSliderInfo({
                      open: true,
                      title: 'LaptopDetailPage',
                      sliderData: {},
                      widthClass: 'max-w-xl',
                      assetPayload: asset
                    })
                  }}

  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {/* <img
                            className="h-10 w-10 rounded-full"
                            src={
                              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
                            }
                            alt=""
                          /> */}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {asset.SerialNumber}
                          </div>
                          <div className="text-sm text-gray-500">
                            {asset.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {asset.Processor}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {asset.Product}
                      </div>
                      <div className="text-sm text-gray-500">
                        {asset.department}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {asset.Name || 'NA'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {asset.Email}
                      </div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {asset.AllocationStatus}
                      </div>
                      <div className="text-sm text-gray-500">
                        {asset.Yes}
                      </div>
                     </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {asset.roles}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <rightIcon
                        className="w-5 h-5 ml-[6px] mb-[4px] inline cursor-pointer"
                        // onClick={() => OnBoardAssertBody()}
                      />
                      <wrongIcon
                        className="w-5 h-5 ml-[18px] mb-[4px] inline cursor-pointer"
                        onClick={() =>
                          deleteUser(
                            orgId,
                            person?.uid,
                            'nithe.nithesh@gmail.com',
                            person?.email,
                            person?.roles
                          )
                        }
                      />
                    </td> */}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SiderForm
        open={sliderInfo.open}
        setOpen={handleSliderClose}
        title={sliderInfo.title}
        data={sliderInfo.sliderData}
        widthClass={sliderInfo.widthClass}
        assetPayload={sliderInfo.assetPayload}
      />
    </div>

  )
}

export default LaptopDetailPage
function setSliderInfo(arg0: { open: boolean; title: string; sliderData: {}; widthClass: string }) {
  throw new Error('Function not implemented.')
}

