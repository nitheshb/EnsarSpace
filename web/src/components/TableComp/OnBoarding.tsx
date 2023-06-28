/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Fragment, useState, useEffect, SetStateAction } from 'react'

import {
  getAssetdetails,
  getFinanceTransactionsByStatus,
} from 'src/context/dbQueryFirebase'

// import {

//   getAssetdetails,

//   getFinanceTransactionsByStatus,

// } from 'src/context/dbQueryFirebase'

import { useAuth } from 'src/context/firebase-auth-context'

import OnBoardAssertBody from '../onBordingAssert/onBoardAssertBody'

import OnBoardingAsset from '../onBordingAssert/OnBoardingAsset'

import OnBoardingAssign from '../onBordingAssert/OnBoardingAssign'

import OnBoardingAssignBody from '../onBordingAssert/OnBoardingAssignBody'

import { navigate, useLocation } from '@redwoodjs/router'

import LaptopDetailPage from 'src/pages/LaptopDetailPage/LaptopDetailPage'

const OnBoarding = ({ leadsTyper }) => {
  const { user } = useAuth()

  const { orgId } = user

  const [isImportLeadsOpen, setisImportLeadsOpen] = useState(false)

  const [ready, setReady] = useState(false)

  const [addLeadsTypes, setAddLeadsTypes] = useState('')

  const [selUserProfile, setSelUserProfile] = useState({})

  const [leadsFetchedData, setLeadsFetchedData] = useState([])

  const [serialLeadsData, setSerialLeadsData] = useState([])

  const [projectList, setprojectList] = useState([])

  const [productData, setproductData] = useState({})

  const [assetData, setassetData] = useState({})

  const [viewable] = useState('On Boarding')

  const [transactionData, setTransactionData] = useState({})

  const [isAssetOpen, handleAssetOnClose] = useState(false)

  const [isAssignOpen, handleAssignOnClose] = useState(false)

  const [laptopCount, setLaptopCount] = useState(0)

  const [PhoneiphoneCount, setPhoneiphoneCount] = useState(0)

  const [PhoneandroidCount, setPhoneandroidCount] = useState(0)

  const [SimCount, setSimCount] = useState(0)

  const handleOnClose = () => setIsOpen(false)

  const [value, setValue] = useState('latest')

  // const [assetData, setAssetData] = useState()

  const tabHeadFieldsA = [
    { lab: 'All Transactions', val: 'all' },

    { lab: 'Latest', val: 'latest' },

    { lab: 'Reviewing', val: 'reviewing' },

    { lab: 'Cleared', val: 'cleared' },

    { lab: 'Rejected', val: 'rejected' },
  ]

  useEffect(() => {
    getLeadsDataFun()
  }, [])

  const rowsCounter = (parent, searchKey) => {
    return parent.filter((item) => {
      if (searchKey === 'all') {
        return item
      } else if (item.status.toLowerCase() === searchKey.toLowerCase()) {
        console.log('All1', item)

        return item
      }
    })
  }

  const getLeadsDataFun = async () => {
    console.log('login role detials', user)

    const { access, uid } = user

    if (access?.includes('manage_leads')) {
      const unsubscribe = getFinanceTransactionsByStatus(
        orgId,

        async (querySnapshot) => {
          const usersListA = querySnapshot.docs.map((docSnapshot) => {
            const x = docSnapshot.data()

            x.id = docSnapshot.id

            return x
          })

          console.log('my Array data is ', usersListA, leadsFetchedData)

          await setLeadsFetchedData(usersListA)

          await console.log('my Array data is set it', leadsFetchedData)
        },

        {
          status: [
            'latest',

            'reviewing',

            'review',

            'cleared',

            'rejected',

            '',

            // 'booked',
          ],
        },

        () => setLeadsFetchedData([])
      )

      return unsubscribe
    } else {
      const unsubscribe = getFinanceTransactionsByStatus(
        orgId,

        async (querySnapshot) => {
          const usersListA = querySnapshot.docs.map((docSnapshot) => {
            const x = docSnapshot.data()

            x.id = docSnapshot.id

            return x
          })

          console.log('my Array data is ', usersListA)

          await serealizeData(usersListA)

          await setLeadsFetchedData(usersListA)
        },

        {
          uid: uid,

          status: ['new', 'reviewing', 'review', 'cleared', 'rejected', ''],
        },

        () => setLeadsFetchedData([])
      )

      return unsubscribe
    }
  }

  const serealizeData = (array) => {
    const x = ['new', 'review', 'cleared', 'rejected', ''].map((status) => {
      const items = array.filter((data) => data.Status.toLowerCase() == status)

      return { name: status, items }
    })

    setSerialLeadsData(x)
  }

  const selUserProfileF = (title, data) => {
    setAddLeadsTypes(title)

    setisImportLeadsOpen(true)

    setSelUserProfile(data)
  }

  const viewTransaction = (docData) => {
    setTransactionData(docData)

    setisImportLeadsOpen(!isImportLeadsOpen)
  }

  const OnBoardAssertBody = (productData) => {
    setproductData(productData)

    handleAssetOnClose(true)
  }

  const OnBoardingAssignBody = (assetData: SetStateAction<{}>) => {
    setassetData(assetData)

    handleAssignOnClose(true)
  }

  const location = useLocation()

  const redirectToPage = () => {
    navigate('/laptop-details')
  }

  console.log('add productData is', OnBoardAssertBody)

  // useEffect(() => {

  //   const getAssetData = async () => {

  //     try {

  //       const requests = await getAssetdetails(user.orgId);

  //       // Calculate the count of laptops

  //       const laptopCount = requests.filter(request => request.Product === 'Laptop').length;

  //       setLaptopCount(laptopCount);

  //       const PhoneiphoneCount = requests.filter(request => request.Product === 'Phone iphone').length;

  //       setPhoneiphoneCount(PhoneiphoneCount);

  //       const PhoneandroidCount = requests.filter(request => request.Product === 'Phone android').length;

  //       setPhoneandroidCount(PhoneandroidCount);

  //       const SimCount = requests.filter(request => request.Product === 'Sim').length;

  //       setSimCount(SimCount);

  //       return requests;

  //     } catch (error) {

  //       console.error('Error retrieving Asset data:', error);

  //       return [];

  //     }

  //   };

  //   getAssetData()

  //     .then((requests) => {

  //       console.log('REQUEST DETAILS DATA');

  //       console.log(requests);

  //     })

  //     .catch((error) => {

  //       console.error('Error setting asset details:', error);

  //     });

  // }, []);

  useEffect(() => {
    const getAssetData = async () => {
      try {
        const requests = await getAssetdetails(user.orgId)

        // Calculate the count of laptops

        const laptopCount = requests.filter(
          (request) => request.Product === 'Laptop'
        ).length

        setLaptopCount(laptopCount)

        return requests
      } catch (error) {
        console.error('Error retrieving Asset data:', error)

        return []
      }
    }

    getAssetData()
      .then((requests) => {
        console.log('REQUEST DETAILS DATA')

        console.log(requests)
      })

      .catch((error) => {
        console.error('Error setting asset details:', error)
      })
  }, [])

  return (
    <>
      {/* <div>
        <OnBoardingAsset
          open={isAssetOpen}
          setOpen={handleAssetOnClose}
          title="User"
          productData={productData}
        />

        <OnBoardingAssign
          open={isAssignOpen}
          setOpen={handleAssignOnClose}
          title="User"
          assetData={assetData}
        />
      </div> */}

      {/* </div> */}

      {/* </section> */}

      {/* <div></div> */}

      <LaptopDetailPage onBoardAssertBody={undefined} />

      {/* </div> */}

      {/* </div> */}

      {/* </div> */}
    </>
  )
}

export default OnBoarding

function getassetRepo(orgId: any) {
  throw new Error('Function not implemented.')
}
