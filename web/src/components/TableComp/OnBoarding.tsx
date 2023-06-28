// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// import { Fragment, useState, useEffect, SetStateAction } from 'react'

// import {
//   getAssetdetails,
//   getFinanceTransactionsByStatus,
// } from 'src/context/dbQueryFirebase'
// import { useAuth } from 'src/context/firebase-auth-context'

// import OnBoardAssertBody from '../onBordingAssert/onBoardAssertBody'
// import OnBoardingAsset from '../onBordingAssert/OnBoardingAsset'
// import OnBoardingAssign from '../onBordingAssert/OnBoardingAssign'
// import OnBoardingAssignBody from '../onBordingAssert/OnBoardingAssignBody'
// import { navigate, useLocation } from '@redwoodjs/router'
// import LaptopDetailPage from 'src/pages/LaptopDetailPage/LaptopDetailPage'

// const OnBoarding = ({ leadsTyper }) => {
//   const { user } = useAuth()
//   const { orgId } = user
//   const [isImportLeadsOpen, setisImportLeadsOpen] = useState(false)

//   // kanban board
//   const [ready, setReady] = useState(false)

//   const [addLeadsTypes, setAddLeadsTypes] = useState('')
//   const [selUserProfile, setSelUserProfile] = useState({})
//   const [leadsFetchedData, setLeadsFetchedData] = useState([])
//   const [serialLeadsData, setSerialLeadsData] = useState([])
//   const [projectList, setprojectList] = useState([])
//   const [productData, setproductData] = useState({})
//   const [assetData, setassetData] = useState({})
//   const [viewable] = useState('On Boarding')
//   const [transactionData, setTransactionData] = useState({})
//   const [isAssetOpen, handleAssetOnClose] = useState(false)
//   const [isAssignOpen, handleAssignOnClose] = useState(false)
//   const [laptopCount, setLaptopCount] = useState(0);
//   // const [PhoneiphoneCount, setPhoneiphoneCount] = useState(0);
//   const [PhoneandroidCount, setPhoneandroidCount ] = useState(0);
//   const [SimCount, setSimCount] = useState(0);

//   const handleOnClose = () => setIsOpen(false)

//   const [value, setValue] = useState('latest')
//   // const [assetData, setAssetData] = useState()
//   const tabHeadFieldsA = [
//     { lab: 'All Transactions', val: 'all' },
//     { lab: 'Latest', val: 'latest' },
//     { lab: 'Reviewing', val: 'reviewing' },
//     { lab: 'Cleared', val: 'cleared' },
//     { lab: 'Rejected', val: 'rejected' },
//   ]
//   useEffect(() => {
//     getLeadsDataFun()
//   }, [])

//   const rowsCounter = (parent, searchKey) => {
//     return parent.filter((item) => {
//       if (searchKey === 'all') {
//         return item
//       } else if (item.status.toLowerCase() === searchKey.toLowerCase()) {
//         console.log('All1', item)
//         return item
//       }
//     })
//   }

//   const getLeadsDataFun = async () => {
//     console.log('login role detials', user)
//     const { access, uid } = user

//     if (access?.includes('manage_leads')) {
//       const unsubscribe = getFinanceTransactionsByStatus(
//         orgId,
//         async (querySnapshot) => {
//           const usersListA = querySnapshot.docs.map((docSnapshot) => {
//             const x = docSnapshot.data()
//             x.id = docSnapshot.id
//             return x
//           })
//           // setBoardData
//           console.log('my Array data is ', usersListA, leadsFetchedData)
//           // await serealizeData(usersListA)
//           await setLeadsFetchedData(usersListA)
//           await console.log('my Array data is set it', leadsFetchedData)
//         },
//         {
//           status: [
//             'latest',
//             'reviewing',
//             'review',
//             'cleared',
//             'rejected',
//             '',
//             // 'booked',
//           ],
//         },
//         () => setLeadsFetchedData([])
//       )
//       return unsubscribe
//     } else {
//       const unsubscribe = getFinanceTransactionsByStatus(
//         orgId,
//         async (querySnapshot) => {
//           const usersListA = querySnapshot.docs.map((docSnapshot) => {
//             const x = docSnapshot.data()
//             x.id = docSnapshot.id
//             return x
//           })
//           // setBoardData
//           console.log('my Array data is ', usersListA)
//           await serealizeData(usersListA)
//           await setLeadsFetchedData(usersListA)
//         },
//         {
//           uid: uid,
//           status: [
//             'new',
//             'reviewing',
//             'review',
//             'cleared',
//             'rejected',
//             '',
//           ],
//         },
//         () => setLeadsFetchedData([])
//       )
//       return unsubscribe
//     }
//   }
//   const serealizeData = (array) => {
//     const x = [
//       'new',
//       'review',
//       'cleared',
//       'rejected',
//       '',
//       // 'booked',
//     ].map((status) => {
//       const items = array.filter((data) => data.Status.toLowerCase() == status)

//       return { name: status, items }
//     })
//     setSerialLeadsData(x)
//   }

//   const selUserProfileF = (title, data) => {
//     setAddLeadsTypes(title)
//     setisImportLeadsOpen(true)
//     setSelUserProfile(data)
//   }
//   const viewTransaction = (docData) => {
//     setTransactionData(docData)
//     setisImportLeadsOpen(!isImportLeadsOpen)
//   }
//   const OnBoardAssertBody = (productData) => {
//     setproductData(productData)
//     handleAssetOnClose(true)
//   }
//   const OnBoardingAssignBody = (assetData: SetStateAction<{}>) => {
//     setassetData(assetData)
//     handleAssignOnClose(true)
//   }

//   console.log('add productData is', OnBoardAssertBody)

//   useEffect(() => {
//     const getAssetData = async () => {
//       try {
//         const requests = await getAssetdetails(user.orgId);

//         // Calculate the count of laptops
//         const laptopCount = requests.filter(request => request.Product === 'Laptop').length;
//         setLaptopCount(laptopCount);

//         const PhoneandroidCount = requests.filter(request => request.Product === 'Phone android').length;
//         setPhoneandroidCount(PhoneandroidCount);

//         const SimCount = requests.filter(request => request.Product === 'Sim').length;
//         setSimCount(SimCount);

//         return requests;
//       } catch (error) {
//         console.error('Error retrieving Asset data:', error);
//         return [];
//       }
//     };

//     getAssetData()
//       .then((requests) => {
//         console.log('REQUEST DETAILS DATA');
//         console.log(requests);
//       })
//       .catch((error) => {
//         console.error('Error setting asset details:', error);
//       });
//   }, []);

//   return (
//     <>
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-xl font-semibold"></h1>
//         <div className="flex space-x-2">
//           {/* <button
//             className="flex items-center justify-center h-10 px-4 bg-gray-200 text-sm font-medium rounded hover:bg-gray-300"
//             onClick={() => OnBoardAssertBody('Add Asset')}
//           >
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               />
//             </svg>
//             <span className="ml-1 leading-none">Add Asset</span>
//           </button>
//           <button
//             className="flex items-center justify-center h-10 px-4 bg-gray-200 text-sm font-medium rounded hover:bg-gray-300"
//             onClick={() => OnBoardingAssignBody('Assign Asset')}
//           >
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               />
//             </svg>
//             <span className="ml-1 leading-none">Assign Asset</span>
//           </button> */}
//         </div>
//       </div>

//       <div className="">
//         <div className="">
//           <div className="">
//             <section className="flex flex-row justify-between">
//               <div className=" m-1">
//                 <div className=" border-[#E5EAF2] rounded-xl border w-60 h-40 bg-white px-8 py-5">
//                   <section>
//                     <div className="flex item-center justify-between">
//                       {/* <svg
//                         width="45.46px"
//                         height="40.42px"
//                         viewBox="0 0 43 41"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       > */}
//                         <path
//                           d="M38.5153 9.55307C38.5153 8.23331 37.9568 6.9676 36.9626 6.03439C35.9683 5.10118 34.6199 4.5769 33.2139 4.5769H9.35756C7.95154 4.5769 6.60311 5.10118 5.6089 6.03439C4.61469 6.9676 4.05615 8.23331 4.05615 9.55307V21.9935H38.5153V9.55307Z"
//                           fill="#EEE5FF"
//                         />
//                         <path
//                           d="M4.05615 21.9937V24.4817C4.05615 25.8015 4.61469 27.0672 5.6089 28.0004C6.60311 28.9336 7.95154 29.4579 9.35756 29.4579H33.2139C34.6199 29.4579 35.9683 28.9336 36.9626 28.0004C37.9568 27.0672 38.5153 25.8015 38.5153 24.4817V21.9937H4.05615ZM17.3097 36.9222L18.635 29.4579H23.9497L25.2618 36.9222H17.3097Z"
//                           fill="#D1C3FC"
//                         />
//                         <path
//                           d="M33.214 30.7019H9.35772C7.60019 30.7019 5.91465 30.0466 4.67189 28.8801C3.42913 27.7136 2.73096 26.1314 2.73096 24.4817V9.55322C2.73096 7.90352 3.42913 6.32138 4.67189 5.15487C5.91465 3.98835 7.60019 3.33301 9.35772 3.33301H33.214C34.9716 3.33301 36.6571 3.98835 37.8999 5.15487C39.1426 6.32138 39.8408 7.90352 39.8408 9.55322V24.4817C39.8408 25.2986 39.6694 26.1074 39.3364 26.8621C39.0033 27.6168 38.5152 28.3025 37.8999 28.8801C37.2845 29.4577 36.554 29.9158 35.75 30.2284C34.946 30.541 34.0843 30.7019 33.214 30.7019ZM9.35772 5.82109C8.3032 5.82109 7.29188 6.2143 6.54622 6.91421C5.80057 7.61412 5.38166 8.5634 5.38166 9.55322V24.4817C5.38166 25.4715 5.80057 26.4208 6.54622 27.1207C7.29188 27.8206 8.3032 28.2138 9.35772 28.2138H33.214C34.2686 28.2138 35.2799 27.8206 36.0255 27.1207C36.7712 26.4208 37.1901 25.4715 37.1901 24.4817V9.55322C37.1901 8.5634 36.7712 7.61412 36.0255 6.91421C35.2799 6.2143 34.2686 5.82109 33.214 5.82109H9.35772Z"
//                           fill="#2B3145"
//                         />
//                         <path
//                           d="M33.214 23.2376H4.05631C3.7048 23.2376 3.3677 23.1065 3.11914 22.8732C2.87059 22.6399 2.73096 22.3235 2.73096 21.9936C2.73096 21.6636 2.87059 21.3472 3.11914 21.1139C3.3677 20.8806 3.7048 20.7495 4.05631 20.7495H33.214C33.5656 20.7495 33.9027 20.8806 34.1512 21.1139C34.3998 21.3472 34.5394 21.6636 34.5394 21.9936C34.5394 22.3235 34.3998 22.6399 34.1512 22.8732C33.9027 23.1065 33.5656 23.2376 33.214 23.2376ZM27.9126 38.1661H14.6591C14.3076 38.1661 13.9705 38.035 13.722 37.8017C13.4734 37.5684 13.3338 37.252 13.3338 36.9221C13.3338 36.5921 13.4734 36.2757 13.722 36.0424C13.9705 35.8091 14.3076 35.678 14.6591 35.678H27.9126C28.2641 35.678 28.6013 35.8091 28.8498 36.0424C29.0984 36.2757 29.238 36.5921 29.238 36.9221C29.238 37.252 29.0984 37.5684 28.8498 37.8017C28.6013 38.035 28.2641 38.1661 27.9126 38.1661Z"
//                           fill="#2B3145"
//                         />
//                         <path
//                           d="M17.3096 38.1662H17.0976C16.9225 38.142 16.7544 38.0852 16.6032 37.9992C16.4519 37.9131 16.3205 37.7995 16.2167 37.665C16.113 37.5305 16.039 37.3778 15.999 37.2161C15.9591 37.0543 15.9541 36.8867 15.9843 36.7231L17.3096 29.2588C17.3375 29.0954 17.3993 28.9388 17.4917 28.7979C17.584 28.657 17.705 28.5345 17.8478 28.4374C17.9905 28.3404 18.1522 28.2707 18.3237 28.2323C18.4952 28.194 18.673 28.1877 18.847 28.2138C19.0211 28.24 19.1879 28.298 19.3381 28.3847C19.4882 28.4714 19.6187 28.5849 19.7221 28.7189C19.8255 28.8529 19.8997 29.0047 19.9406 29.1657C19.9815 29.3266 19.9882 29.4935 19.9603 29.6569L18.635 37.1212C18.5842 37.4155 18.4224 37.683 18.1791 37.8748C17.9359 38.0666 17.6273 38.17 17.3096 38.1662ZM25.2617 38.1662C24.9441 38.17 24.6355 38.0666 24.3922 37.8748C24.149 37.683 23.9872 37.4155 23.9364 37.1212L22.611 29.6569C22.5832 29.4935 22.5899 29.3266 22.6308 29.1657C22.6716 29.0047 22.7459 28.8529 22.8493 28.7189C22.9527 28.5849 23.0831 28.4714 23.2333 28.3847C23.3834 28.298 23.5503 28.24 23.7243 28.2138C23.8984 28.1877 24.0762 28.194 24.2477 28.2323C24.4191 28.2707 24.5808 28.3404 24.7236 28.4374C24.8664 28.5345 24.9874 28.657 25.0797 28.7979C25.172 28.9388 25.2339 29.0954 25.2617 29.2588L26.5871 36.7231C26.6173 36.8867 26.6123 37.0543 26.5723 37.2161C26.5324 37.3778 26.4584 37.5305 26.3546 37.665C26.2509 37.7995 26.1195 37.9131 25.9682 37.9992C25.8169 38.0852 25.6488 38.142 25.4738 38.1662H25.2617Z"
//                           fill="#2B3145"
//                         />
//                         <path
//                           d="M21.2858 26.9698C22.0178 26.9698 22.6112 26.4128 22.6112 25.7257C22.6112 25.0387 22.0178 24.4817 21.2858 24.4817C20.5538 24.4817 19.9604 25.0387 19.9604 25.7257C19.9604 26.4128 20.5538 26.9698 21.2858 26.9698Z"
//                           fill="#8B50FF"
//                         />
//                       </svg>

//                       <div className="width-30 height-55 font-medium flex-end text-black-1500">
//                         {/* <p className=" css-6mn6yy">01</p> */}
//                         <p className="css-6mn6yy">{laptopCount.toString().padStart(2, '0')}</p>
//                       </div>
//                     </div>

//                     <div className="px-2 flex flex-row justify-between">
//                       <h3 className=" css-5mn5yy">Laptop</h3>
//                     </div>

//                     <span className="css-1lpgd8m px-3 text-[black] text-[10px]">
//                       Windows
//                     </span>
//                   </section>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//       <LaptopDetailPage onBoardAssertBody={undefined}/>
//     </>
//   )
// }

// export default OnBoarding
// // function getassetRepo(orgId: any) {
// //   throw new Error('Function not implemented.')
// // }

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
