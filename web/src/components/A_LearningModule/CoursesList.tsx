import { useState } from 'react'
// import marketing_2 from '/learning_images/marketing_2.jpg'
// import AddCourseForm from 'src/pages/CoursedetailsPage/CourseForm'
import SUserSignup from './addLearning/SUserSignup'
import { courses } from 'src/constants/courses'


import CoursesCard from './CoursesCard'
const CourseList = () => {

  const [activeTab, setActiveTab] = useState('python')
   const [isOpen, setIsOpen] = useState(false)
   const handleOnClose = () => setIsOpen(false)
   const [empData, setEmpData] = useState({})

   const tabHandler = (sel) => {
    setActiveTab(sel)
    setEmpData(sel)
    setIsOpen(true)
   }
  return (
    <div className="container ml-[50px]  mt-8">

      <div className="courses-list-top">
        <div>
        <button
            onClick={() => tabHandler('ADD_COURSE')}
            className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
            >
            <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
            </svg>
            <span className="mr-1 leading-none">Add Course</span>
            </button>
        </div>

        <h2 className="text-[20px] font-bold">A Broad Selection Of Courses</h2>

        <p>
          6+ learning paths with hand picked courses,Code Challenges, Tips,
          e.t.c
        </p>


        <div className="tabs mt-[16px]">
          <ul className="flex flex-wrap">
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn py-[10px] px-[13px] mr-[6px]`}
                style={{ border: '1px solid rgba(0,0,0,0.7)' }}
                onClick={() => setActiveTab('python')}
              >
                Python
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                // onClick={() => tabHandler('WEB_DEVELOPMENT')}
                onClick={() => setActiveTab('web development')}
              >

                Web Development
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('data science')}
              >
                Data Science
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('aws')}
              >
                AWS Certification
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('design')}
              >
                Design
              </button>
            </li>
            <li className="tabs-head-item">
              <button
                type="button"
                className={`tab-btn `}
                onClick={() => setActiveTab('marketing')}
              >
                Marketing
              </button>
            </li>



            </ul>
{/*
            <div>
            <button
            onClick={() => tabHandler('ADD_COURSE')}
            className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
            >
            <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
            </svg>
            <span className="mr-1 leading-none">Add Course</span>
            </button>


            </div> */}
          {/* </div> */}

          {/* <div className='tabs-body'>
          {
            courses.filter(course => course.category === activeTab).map((course) => (
              <Course key = {course.id} {...course} />
            ))
          }
        </div> */}
        </div>

        <div className="tabs-body">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <CoursesCard key={course.id} {...course} />
            ))}
        </div>
      </div>
      <SUserSignup

       open={isOpen}
       setOpen={handleOnClose}
       title="User"
       empData={empData}

      />

      {/* <Tabs courses = {courses} /> */}
    </div>
  )
}

export default CourseList

// export const courses = [
//   {
//     id: 'xMHCZl',
//     category: 'python',
//     image:
//       'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACHAPADASIAAhEBAxEB/8QAHQAAAgIDAQEBAAAAAAAAAAAABgcEBQADCAIBCf/EAFAQAAIBAgQCBwMJAwgHBgcAAAECAwQFAAYRIRIxBxMiQVFhcRQjMggVQlKBkaGx0SRywTNTVGKCkrLhFjZDY3N08CUmNDVE1IOTorPCw/H/xAAcAQACAwEBAQEAAAAAAAAAAAAFBgMEBwIIAQD/xAA3EQABAwIEAggFAwQDAQAAAAABAAIDBBEFEiExUWEGEyIyQXGx0RSBkaHBByTwFSNi4UJSkkP/2gAMAwEAAhEDEQA/AOX+k7N/VK9mo37bD9qde4fU+3v+7C2pqeSrqEhiXikc6AY8ySNNI0kjF3YlmZjqSTzJweZXyrU2+n9ompJvaJRyMZ7C+HLme/BJrY8PgDRv6lehSZMSnLjt6BTLNbI7VSrCm55u/wBZvHBllKwfOFR7XOutNEdlPJ2/QYgWLLNdea9YEpp1QdqR+qPZX7ufhhoU1nmpKdIYaOZI0HCqiM/phRr6zKC0HtFONDSjQkaBDtWwWeZidAGJJwMXiqNWCeSA9kfxxcX3r2q5oEhk4Q54jwHn4YpKukn6k+4k5/UOOKdoADirE7ibtCrAN8fdNT3k43exzj/YSf3DgzyDlCWomW51cDiKM+4RlPab63oO7z9MWp52QML3FU4onSuyhXmRssCyUoqahf22cbg/7Nfq+vjgnnmEKE9/IDGSfs6GSQFEXcsw0AxVTXGGZyxnj07hxjYYTnl1TIXu1TMwNiaGBC+amLXNSTqTGN/tOBatqeOQRr8IO58Tghze8ktWppkabijA4o1LAbnvGBlLfVca/s03P+bP6YZaYARglBagkvIC2TzLTxl25Du8cAWbpWmngduZDfZywZ1tsudVLtbqwINgPZ3+/lgVzVaauGalE9LPCCGPvI2XXly1GDVIWNeNdUErczoyLaIepotdXPLuwy4f5JPQflhf9TIBoI25fVOD6GaMRprImvCPpDwxPWHNZQ4eMua/JT6AaSt+7iYx7sRbUjVc7rApnYLqViHEQNfLFl82Vn9DqP8A5TfpgFI4NNiUwMuW6IeqWCyyEkAAnUnAlmOsNVA5G0akBR9vPF1mCqZauam0KFHIkBGh18MUz26ou3DS0sbSzOw0VFJIA5nbwwZp2hgD3IJUuL7xtVbYrSbpU9sH2dN3I7/LBfIqq2gHCoAAA5DEygy5VW+lSGKhqeFeZ6ltSe8nbFFmWeaklak6uSOUgFwykEAjl9uPhl+Iks06LlkXwsV3DVQau4+13CKND7lH2/rHxxJnnEEfEdzyA8cU9IjLVREqwAbwxLm6yZ+Ixtp3DQ7YtuYAQBsqjZDYk7lF2TGLW2Yk6kzH8hjbcLl1twp6aM9hZU4yO88Q2xS2q7pa7RJCZFiqJJCQHOhC6Aa7410VbTitp/fxfyi83H1hgc6El7nkIk2cCJjAfNOuaURKzN3YHbo7SujNzOuJFXeaWeU6VUPADt7xf1x8o4ILvVRqKiIwJvIwkH3epwtxt6vtOCY3uD9AVNytZ+tkStmXsK3u1PefHCOqkaWvnRRqzSuAP7Rx0nFU08QRVliVV0AAcaAYQsFtkjqJ5WiYs8jEaKdhxHBLDJiXSOdyt90MxKG4jaOf4QZlize0yCrmXWJD7tT9JvH0GOjKKGWqaCGJWklk4VVR3nTCejhEMSoicCKNAANgMdQ5Cy2KCjjr6ldKmWMcCn6Ckfmfyx+x2rytbIedh9FBhEIha5o5K4sFjSxW5IQeKZu1LIPpN+g7sRszXv5sp+pib9plG2h+AeP6Ysrxc4rVRtPIRtsq67s3cMLarrXrKh55XDO51J1/DCHTxOqHmWTZMrQquYkyvuSSxxlTH1dIfrEjXG+NV613JHM6b49vSvXslPDwtJIwA1Ow8z5YYc1rLgjQrzlqxSX2vCHiFNHo0rjw8B5nDIaJIdI41CRoAqqOQGnLHizW+ls1BHTRSIdN3fiGrt3nA1nvMfsSNRUr61Eo7bofgT9T+WAsj31swYzb+aqVhEQJKH875i+cpmo6d9aWFu0wO0jD+AwO2y2yXOrWCMaDmzafCPHHkRPIQiKSzbAAczg2strjtNIE4lMzbyMDzPh6DB/M2khDGb/zVUgDM/M5ap6aOjEcMS8MaIABjZRqeujY/WGn342VadZUAjcaDlj7CNJo9vpD88D812q+NEVSSCNWZidB54T3TRK01VamYn4JdBry3XDRq6jrnIHwDl54VnTEjNPauFWbsSchr3rjrChaqaTz9Cq+IG9O75eoS4xobhUEnliT1Un82/8AdOKyqm42KA7A740FgzHRJjzlGqY/QXL1mZ7keQ9j2H/xFw7dT4n78I7oH3zJcdP6H/8AsXDwwiY1pVnyHom3CtaYE8SuZ8775xvf/OSfni56KV4c5Ux5Hqpf8OKrOSa5xvRP9Lk0+/Fv0Wf6503d7qX/AA4apj+xI/x/CX4h+8B/y/Kd6gseZ+/CJ6U/9eLh+7F/gXD6BVRoCPvxzn003EQZ1uEUbe8ZYtSDyHVjADAml1UQOB9QjOMuDKYOPH8FCi1/X3imhQ+7WQakfSOC+3UD3KqSFNgd2b6o8cAFjQy3ijRBxO0gAUcycPCzWpbXShNjM28jDvPh6DDbiEggAA3slrDWGoLi7a6VvSnTR0t9pIoxwolIoA/tNiis1AAVqJF5nsA/ngu6SqA1maaYsD1S0y8R059ptsVCIdVHCefLTFqnk/bMF9bKpPF+6e4jS6npF1jhQAScGWUoViiqFA21X+OB+lpHhXUo3Geex28sSKjMseVLRV1DDiqJCEgib6TaHc+Q5n/PAuYOmHVs1JReEtg/uSaALT0nZw+a6R7VRvpVzJ751O8aHu9T+XrgkolJpacDfWNNAP3RhDVlVLWzzVE8hlmlJd3bmScdD2in4aOCRviMa6eQ4Rjutp20sMbRvrf7KGgqXVk0jztpbkNVR3Ks6mMxodHYbnwGOmY5kp7eksriONIgzOx2AC7k45SkZpCzNqWPM4cGf83CqijtFJIDBGq+0Op2dgB2PQd/n6YWMTpXVDoo287n6IzSS2zuPJU2bczyZmujSAlaOLVYIz4d7HzP6DFdQUftUurbRr8R8fLEWliM8oRSNT58sEcEUdPGI1I0HfrzxO4NgYI2KyxpkdmKp6kAVEgGw4jiEs/XVQUHsAH7ce7rUBaiWNTuWOp1/DEe2xtPWxxxjidtQBidrbMLiq7nXflCubZb2uNSI11CDd28Bi/qI0gkKIvCigAAemJduoY7dTLGpBbm7fWONU6Bqpj3DT8sCHSZ3abIk2PK3mo5j0hdjz02xpp4GqZVjQbn8MS5hrEwG505Yn0FGKWLfTrG+I/wxyX5G81Jl1srK2xLT03Ag2Bxulk3Cj7caYHEcJ33J2xgPaG+p1wOIu4kq0DYWUxI2kcKo1ZjoMWUeV7nfaqnobPbqq6VfCzNHSQtI3dudBsPM7Y2W+iMK8bgh27vAYZlYKiCwU9lt9FUXRafLqX1rFRzvTtdqqWYL71k7bRxRniKrqeGNtNCScXcMpP6hUOaXZWMBcTa+g4BJXSrpC7o/TRPhj6ySV4Y0E5Rc+JPgBZA0XQ7mWBwa6K3W0g68Ffd6SFv7rSajHPtd8lbpKaeZ6OzUF24nZglsvlDUOQSSNFWbU+mmHd0l5fp8vGxTrbfmSruVvFXVWhnaT2R+sdBoXAfgdVDqH7QDcyNDhdVToxOqKfUDGu4X0cp2wieCUkPAOo/C82Yr+qWMsq3UtVTRgxkggEnXx1uQUI9EmXLvlLP16tV9tdZZrlBRjrKOvgaGVAZF0JVgDoe48j3YcEjcI88TMk5nlzLljMFpvBNcbLbGuVrq5u3NSKksYlgVzv1Tq+vBroGRSNNTrXsDxHUHnjOeklG+kry1/iBZeg+gvSCLpDhIqGNyua4hw4HQ6HhqufM3D/vVd/+ak/PBRkizfN0qzSr+0SKdQfoDTl+uNE1m67Nt1rJ192lXJ1an6R15/Zi+oZUhqOsdgEVSScWZ5rwiNvAeiY6eC0pkdx0Vlc69LfTFzu52RfE45v6RZWmzhXyO3E7cBJP7gw6LjXPcKkyNso2RfAYVmYLR7fnOsmlH7PH1ex+meAbemL2DtEEjnO4eyG40XVEbWs4/gr50dWbqbvQ1ky6SNIOrU/RHj6nDillEMZZuQ7sL2wsovFGdQAJBgwqanr32PYHIY5r3GaUOPBS4c1sMJa3iqK+yGWtDNuSv8cB95vvVXSioIG7Zni65h3DjHZ/XFznm9rZ1UqQ1RImka/mT5DC3tbtJeaJ3YszVMZLHmTxjBeigzRZ3bAaIPX1OWTqm7k6rq19nb1OFH057y2b92b81w2pCS7bd5wqumqnapqrKg2HDKSfAarhZwo2q2X5+hTHiwzUjwOXqEsrfR9eS7j3a+PecdDUv/hof+Gv5DCQWNYYuBRoANAMPGkH7NCf92v5DBbF35sp8/wheDsDM48vyl50B9F8+fL5853HrfmGgcGQMx0qZeYjHkObeWg78dANSxGQgQx68RAAjHjgsy3l2hynY6O022HqKOlTgRe895YnvJOpJ8TittVDrIaiQd54Afzwj12Kur53SnRo0aOXufFHsMoxRxZTq47qRabRDSRktDH1rDtdgbeWKzO+Y6XKtqMixQvWzarBGUHPvY+Q/QYubjdKezUE9ZVPwQRLxMe8+AHmeWEFmO/1GZLrLW1B0LdmOMco0HJR/wBc9cQUFK6rlzyd0b8+StVEnViw3VxTH2imjll0eR1DM7AakncnDk6Osjx2ig+cK2BPbahRwIyD3SHu9T3/AHYFuiTJ3ztHTXSsj1o4AOqRhtK47/Qfn6YcU8qwwu7kKi7sx7sV8Wre0aaI+fsqUj72aFW3GWkt1K0rQRE8lXgHaPhgHnInmeR1TiY6nRRifdbi1yqS+4jXZF8B+uPlqt5rpyXHuUOreflilC3qWZnHVE4YhCzM7deEtSLaqmpeNQeD3Y4Rt54puAa8h92DW9AC01IHcnLAco09cSwPMgJKlicX3JVla419nPZU9rwxMhtFZf6tLXaqN6y4VAKxwwqOI7E/YANyTsBudMQaOYRUjH6XEdB92Cqnqmy30XVlbExjrr/XNb+tB0YUkKK8qg9wd5IwfEJpywVwrD34nXMpmm1z9hqUs9KseZ0awibEnNzFtgBxcTYDy8TyQyeipKIdXcekDL1FVL8cEUtTVcB7wXiiZCfQkeeGCz5DqaaxNcc1KtztVvgoFrLbcKmAN1QOjqDQsyntfWOE3VVPcDipqqnnvje6To5TUTs8Mjg61r3HsvE+NdP8U6RRthxBjHMacwGUix23Drp01dn6JbjX9fcc21krSyAz1ElznllI1GratQasdPE7+OENfZKWG51sdFK01Ek8iwSuNGeMMQjHzK6H7caamo574qqmfXvwwU9OYL3kc7ztp9AElTztqLZY2st/1vr53JTC6HLPPmu45sstLKkNTccvVFJFJKTwo0k9OoJ030BO+mGnXfIhzrGk/UZnsE06lgsbTVCAnw4jHoMB/wAkuzVdxz/X1EUTNClNDSmTTbrZauAovrwxSv8Auxse7He1TUiSWRl+FnJH2nGD/qNjD8LrIjGGuJGt7+FuBHFbh0FxOtw7D3MpnWDnE7A+AHivzOzJk68ZEu81lzBRtRXWmAEsbkMG1GoZWGzKRuGGxwHX6rEqGOPZFO5HecdhfLjsYkyplrMcKAVFPVvap5RzMUiNLFr6NHIB+/jiy5TJT0UksriONBxMzHYAYH4ZO2vgjq2bO8OB2I+RuF6Vw3E/6jQtlcLO1DvMe4sfmqS+XmKx296mU8R5JHru7dwxKyNUPc8t09VU8Mk0ryMzFQfpnb0wqMy357/cDLutOmqwoe4eJ8zhqdGacWUKLwDSf4zhtq6f4elDj3iR+dFUpKr4mrLW90A2+o1RTR00YmRurTnt2Ri4gpPaZVjjRSzf1RtivgHvkA8cGdpt/skXG498438h4YVKiXIL+KbIWX0XPnT9SR0WbaCKMAAUCknTTU8b74qOj3KvzhULc6pP2aFvcqfpuO/0H5+mDbpiy9JmPpHoYRqlOlAjTSD6K9Y+w8z3YtKanipII4YUEcUahUReQA7sNMdWWUEUbT2iNUq/BdbXyTPHZB05leqiuFJBJPPMY4o1LO7MdAMLGpzJNma5VM7lhAmiwxsfhXff1PM4+9IWavnGoNtpX1pYm966naRx3eg/P0xo6Osv1OZ7saCmGjOVZ5CNo0GurH/rc6YtU9M2ngNRLofQKtU1bqmobTxaj1KOOjXJJzRcxUVSf9mUzAya8pW5hB5d58vXF1UyGOWXt8Cqzd+gABOGnZbRTWK3U9DSJwQQjQa8ye9j5k745w6Ssz8M89qpX3Ln2h17hr8H6/dgFSyvxOpcB3Ra3IcUaqGsw2mDnb+p4LsjMN2W103CmhqZBog+qPrYr1kYICWIGm5JwO1tZJX1Mk8p1du7uA8BgX6U86eywGyUUmk8ij2p1PwKR8Hqe/y9cJdPROlc2Ju53TEXtpoy9yGekfPMmZLj7LSTMLbTN2Cp/lX5F/TuH39+I/Rtkiu6Qsxx0McskVHHpJV1AJ93HryH9Y8h9/dgetdpqr5cqW30MJqKupcRxxr3k/kBzJ7gMdh9HmRaTIGW4rdBpLUN7yqqAN5ZNNz6DkB4epwwYlWR4TTCGHvnb8k/zdKz5HTPLnFXtvtlLa6GCjpYVhp4EEccajko2Awrc958FxzCtlt0mlJT8XtEqf7SQD4QfBfxPpi86V8+/wCjVv8Am6ik0udUvxKd4YzsW9TyH2nuwl8sI0t4iRFLsysAo3JJ7sKuG0Jc11XN8vdXaZt3BxR5aKOsvVfHSwSPxMdWYk6KveTht0NqpqCkigjjDKg04nGrMe8k+OK7KWXFsFB2wDWS6NK3h4KPIfni0rakU0W38o3IfxwKrKjr35GbD7qWeUzPyt2VZf2iFJLCkafD2jwj7sCns8f82v3Yv68k0kxO5IxSqNN+/E0HZZZFaVuRhC9RU8QQ+7Xn4Ys+kRxF0fZI6sBYg9yVtOXH10ZP/wBJXFRU1q0VMztux2VfE4kwrLm3owutvh4p7pZa03iOFd3kpZIxHUlR38BSJyB9HiPccPXRCUQYtG95sDcfMhZX+qlFLW9GZuqF8jmuPkDY/S90uKupABJOg564fXRR8mVcw0EdfmBGkkdVkaleZoYaYModFkKDrJJSjKxjQoEDLxPxHhCBs5jrL/aoZAJIZqyCN15hlaRQR9oJx+keXVC2SA/SklqZXPizVMpJ/L7hjROnWP1GA0LX0vecbX4LyZ0XwuCuke+cXDbWHnfX7JTN8k/Jj/FQW0/2a/8A95jU/wAkjIo3NttxPpX/APvMOqSUKDpiNLNjzlJ+oWOt2n9fdam3BaE//Fv/AJHsh7JuQbH0f0MdNaaSGBY+IoIIOpjjLDR2VeJmLsNjI7s2nZBUEg3ck2Nck2Iks/PfbGbYtjdVikxnq35nI/T0rIWhkYsEp/lZPC/QhWiUBibvbhGDvqxkf/8AHix+bXSvfo6iikt9IFEMbr1zqPjbX4fQfn6Y7B+X10ppa6TK+RqGcG4yO18r1U7wJwNDSg+DNxTOB4BT3jHCt8jeagMaKzu0iqqqNSxJ2Ax6L6E0MkGG0z5xY6m3mSR9iE+YTI6PDpGN/wCbiflYD7kKksFjqcxXSGhph25D2nPJF72PkMPa32uGxUUNDS8SwwqANTux5knzJ1OIWQsoLlW1+9Aa4TgNO4+j4IPIficW1c/BK2nPbDLX1nxUmRndH35pxw6h+Fi6x/eP2HD3UqySlr5QprqOtGuuGRHGZHVFGrHYDCxy9/55Q/8AFGHJbaPqU6xx22Hf3DCjiLgxw8kz0pu0oCz1QxU92gXhUt1C8TabndsKbpJzZHY6L2CjKi4VC7so3hQ9/qe77ThldNmY4MsSLVy6PIYAkMWu8j6toPTvPljluvrp7nWzVVTIZJ5m4nc+P6YacCpDPGyaTuj7lK+M1vUXijPaP2C109PJVTxQQRtLNIwRI0GrMx2AA8cdU9F2QIsiWHq5Qr3Op0eqlHce5AfBfxOpwFdBXRx7HCmZblFpPIv7DE43RDzkPme7y378NTMeYqPKllqrnXPwwQLrwj4nY/Cq+ZO3/wDMRY3iDqqT4ODUX1t4nh8vVd4LQNpmfGT6G2l/Acfn6eaHOlbpBjyLY9IGVrvVArTId+DxkI8B3eJ+3HLEkjSyPJIxd3JZmY6lieZOLXNWZqzN18qbnXNrLKdFQHsxoPhRfID+J78VcacW/dhnwugbh8Fj3jv7fJLWJ17q+a47o2H5+a7Iq6kU0eo+M8hhR1Maz1M0ko45HcszsdSSTzOGPPM08hdu/kPDADFDxzMxHZDH7cJVCOrDiU+1fbyhM/5OttgjzPcJzCvXLR9hiN01cA6eGox0EWPjhFfJ/wD9ZLp/yY/+4MPPXXCLjji6tcTwHohjmgGwXOecwKnNt4eX3j+1OvEx1OgOgH2AYMuifKUcFbHdqiICQq3s6kchp8f29334r48tG+53u8syn2KCskL/ANc8Wy/rhl2fRKtNAFUKR4ADTBGtq8tOIGHwF/psijgOq+SuqmpSlgaVz2V/HyxRCoerJlfmx5DuHhjTdria2bhQ+5Q9nz88SLTTGqCqNlG7HwGFxrOrbmduuGRiKPO/dS6K3rVIzTLxRaaBT9LG2W026GNnenRUUaknXFmECR8KjRQNABgYvly9ok6iM+6Q9oj6R/QYiaXSOsDYKCIyTvs02CQ/TZmi4WzN0UNuqpKGlNKriGMjTUswJ379hgNs/SDmm3V8NbRX6uoqqncSRVFPIEkRhyKsBt/0O/F704RGXOlMo/oSfZ2nwGqgjj4VGwGNaoI4xSRHKL24KjVOcZHRkkt2tyTCj+UDnFaqOoelyhV1aOsntdVlSkaZnB1DMyhQW1AOoAx+ivQ5ea299D2SblcplnuFdaYquplVAgeWRndiFGwGpO3dj8qIl34iPTH6CfJO6ZrJnLo7sOUHrIaTNVlpvYhb5nCPWQqxMckOvxkKdGUdoFddNDrhf6Yx1NZhZEQLy0g23Ntb2WbYxg9HQxtmpIQzXtEC3gbX+fqn77QqSozDjRWBK+I13GID09XVVMnU3etAYs4jWgoiEXnpqYuQHeftxlVI0DlJFMTDmrjhP3HA/m7KdJ0jZUuuWK2Wpipbkkau9GvG/YkWQKV1HEjFdGXUag4wTCsTfBVNp3ODWuPaJY1xH/oG38ulz4dklnONhx4DxNhvbfmqrpjvd9yP0Y5sv1tvMyXS0W562FKy10TxMQVADARAkHi12I9ccYVfyxOl4xOi36yU7HUCWHLtOHXzHFqNfUHD1+VBnywdFHQo3RhbKz2+/VlDHaFpuJTJR0vWiWWacKSItgUjjJ13G2ik44gkk6xy3LU8sb5glC19MX1UbXHMcpLGtOXS1wAOfnum3AsLpp45HzR5m37JNxccRyP+kO5hutxvuYrndLtcaq7XWtnMtVXVsnHNM/LVj5AAADQAAAAAYNcm5IaDL7ZhrUIdmX2ONhyGuhkPryH3+GIeQ8jNm7MVRNUofmull1mPLrG7ox68z5euHDnILFl2UABEVkAA2CgH8BhjxCvyOZTR7m1/b5rQMPoGtYZCLNbsP5wS3u16js1vmrKmUpDENTpzJ7gPM4qssXebMFnjr6gASSu/ZHJQGIA+waYW2fM2nMVw6mnY/N9OSE/3jd7/AKeXrhgdGUBqMq0QGyhpCT/bOLslH8NSiR/eJHyGqghrDVVZiYeyAfmbhHeTKMSZht8jDsiYaDxOHMVRV1IGg3wq8sqEv1uUDQCUaDDJqp+M8Cnsjnp34Q8Tu+ZvkmyBlhYLmH5UNQ8uerenEerW3qVTXYayPqfwGFple3LcL1RCZQ9P7RGrqeTasOzhl/KSp2qekG3xp325NT4DrH3wIWCFYLpbo0Giipi/xjGm4e/JhkbW75VnlZFnxGQnYOXXzUlPGCOrVEXbwAAxzn8ou8m4VVohhYrRJ1pVAdnYcI4iPHc6eXrh05vvejPQQNvr75h/h/XCB6btpbP+7L+aYUsBhIqmSP52+hTbjb/2b2t5eoSwxICjhG2I+LW30olIdx2F5eZxpjyGi5WaxtLjYLo253IW+nLnQudkXxOB4bKMRrhXvcKlpG2UbKvgMHHR9lL57qxWVSfsMB5EbSv9X0HM/djN3ltLFnf/ADktOJMz7BG3Q3YJ7NHPcpiY56qIKkZHwx66gnzP5YY1Xd3o4WldxoOQ0G58MVltYI8hJAULqScVF0uBr59RqIl2UfxwgTZqyoMj/wCclZFMHSWtoFe0cEb06y8AVpSZX4dtWbcn78a6txECseoJ2Y693hj1TzdVb6f6xQafdiLMTwHXck4rgEuJK6Y3ta7LXGrSuqLuxOgGCm3IaOlVFOp7zpzOK220fUJ1jjSRh9wxbQDiQAYgndcWVWpkD+yNgsqpXakl7RA4dNtsUK0MZIAUknYDXF/WjSkl08MaLdS6DrXG5+EH88RMfkaSoIpOrYSFzt080S0WcqVAO0aGMt68b4WU84i4V5sx00w1PlGyCLO1MzchQR/b23wmusaaoVm58QxrWEgvooieCESuLnkndXWgHkBguiyf81UFFVV0YNRUhnWJx/JKNNPRt9fLbE3o0yf87VYudWmtHA3ukYbSuP4D8T6YKekZxG1EzHRQrkn7RinUVl5xTxnz9kTo6S8Zmk8dvdR6Hpn6Qcp0IitefsxUkCjSOnkrPaY18gJ1fQemD+451znmSjWK7Z8zLW08iDjp4672WNtRuCIFTUY5+qp2qXZjy00A8Bh/5et3tkcMjj3KIv8AaOg2wPxJ5p2tfex1/C+wYbhwc6UwMuP8R7Jd9JuW6WyZQoDT0yUyy1nEUQaFuw3aY8yT4nfC0orca6oWGMdo8z3AeOHb08KWy7bFUEk1mgA7zwNgBs1sFtpu0AZ33c+HlifDqg/Bhx3JPqp8nXSXtomFlmz0tssVHDTxCNODjOnNmO5Y+ZOFz8oO/ClydV2+kYq7SRCd1PJS3w/b34O6+/LZMu0nAQaqSICJT3bbsfIfnhIdKjtJlKqd2LM00ZLHmTxc8c4XAZaxs0m2b66qziLwykexmnZPoksql2CqNWPIYfvRjTrDkuhUc+KTU+J4zhI0dP1S8TDtn8BhxZWvcVh6PqWok7TlpFjj1+NuM7enjh6xe8kTWM4j8pKwW0cznu/6n1CLqO/R0OcLHb4yGqKipXj/AKib7+p7sNrhVV1PrjmLIVXLXdI9lqJ3LzSViszHx0OOk6qfi92OQ54QcXpxBJGwb21+qd8OnNQ17/C+n0SA6fnD50pXUaa0KDXv043wJZPtEt0usUupSCnkV2ceIOoA88GfTRQTXTPVvpoBq70a7nko431J8hiZabdFaqWGmhHYQ7k82PeThngqBFQRsG5CX30xlrZHO7oKJH1d2diSzEkk95wnemSuWsrLasehjjWQBvHddThlX259Wppoz22+MjuHhhT9JKl5raqjViJAB9q4+4THadrzz9FLjEl6ZzBy9Qgynp2qJAo2HMnwGCaOJURVUaKBoBivpqcU0XDzJ3Y+Jxb08XHoT8I/HDPO+/klOnjy77ph2G31N9uCU0QCr8UkmmyL3n9MO+33B7ZRQ0tNHHHDEoVV4f8APngay1YI8v24RDRp37Usg7z4egxIvVz9gpwkZ9+47P8AVHjjMayQVcgY0aDb3WlU8XUszO3Vs+b6ieqmpIzGVVdXYLzOvLnjBdpz9T+7gTy7qaqbX6n8cEaroPPFOSCOM5QFYY4kXV/Df6rqYx7vQKAOz/niZbbxPUViK6xldC2nD3jFDD/JJ6YsbONK5f3TgbJGwNJspC1ttkVi6Tk/R+7FlTV83Ur8Ovpinij0Gp5nGytucVotpnl302RPrN3DAlzA8hoCoSRtIsAvmYc1Pblip0Eck8x+EjZV8TiuOdriASeoAH+7/wA8Bxq5a65CeZuKR31J/gPLGi93DXWmjP8AxD/DBeOhjFmEXPip2wRNZ2hdK7pyzVU3zN8Mr8HClKiLwrpqOJt/xwM5Ls9Vmq9RU40jpkYNPKB8K693meQ/yxY9IlDPc83UdJTIZZ5YEVFHjxN+GGdlHLkGWLdBSRaO5YPNLpvI/efTuGHt08dFQsZGO0Rpy5oBHSmeqffRgP8AAjykjSgpoqenjWKGJQiIo2AGATpNqjPLQJr2QH5d51GDWqm4QUU9o8/LAJnqnkqqy2wwo0k0nEqIvNiSNBhSoh/fDjz9EyVFhEQFQ5dy9PmS6R0cOqqe1LJptGnef088dJ0lLHSUsUMYIRFCgfZgOyfliPLFrEWz1UmjTyjvbwHkO77TjOk3PYyjaFp6Vx861SkRD+aXkZD/AA8/TFStlfiVQ2GLUeH5KFub1bQShTpazlBU3SC00ipM9C5kmlbcLIRpwj0BOvmdO7AbQ11fcauOngWNpHOnw7DxJ8hgdpC0k7Eku7bknckk/icNLKmXxZ6TrZlHtco7f9Qdy/rhgfHHh8IjbqR68V3TtfKbDZCt4klNwljkk6zqT1SkjTsrsNu7Cw6U8zRRUyWiILJOzLLKTyjA3Uep5+nrgx6SMzxZYaum2eqkmdYIj9JvE+Q5n/PCBqamSrnlnnkMksjF3djuSeZwz4RR9YBO/YbcygGM13VA07NzvyH+1NtwrrtX09FRw+0VVQ4jiiRd2Y8hhiZjy7Llqris1RUmoajhTVl2UO4434fLU8/IYPegXox/0foFzDc4dLnVJ+zRuN4Ij3+TMPuHqcVPSJb5Ln0jVsEXMrEWY8lHAupx9lxJk9YYIu4wG54nT0UFPh74aUTSd55Fhy/2oPRfYzU5ut1VqyxU84PF9ZtDtjoQ00aKWZiqgaksdhhZZQpI6C6W2CFeGNJQB4nnufPF3n7Muga10z7/APqGH+D9fuwq4gX1lU0N4fa6a6NjaSA33/KHMx1lNdr7LWU6aBUWBJDzZQSdfIEk/hgWzPmSLLdJE2z1UzhIYz3nUasfIfoMTay4wWm3z1dS/VwxDiY958APM4St1vs+Yr+lZP2dZFWOPXaNNdlH/XPDHh9F1x17rf5ZAMQrfhxZved9uaZslbK7szEMxJJJHPAVna6NLVUvAFPVhwG08dNcENyq+qBiQ9tuZ8BgQv1PLWVVFBBG0s0hKJGo1LEkaAYK0cYDw8oZXSuLCwFesq2yuzVeYaGDhVSeKWUrtGne38B54s5GMEjxr8KMVGvgDphqZFyjFlG0pCQr1sxD1Eo72+qPIcvvOFzR2411xnLj3KSNxee52xw2sbPI/L3W7c138E+niZm77t+W2i6degSNSTI33DC5q6ySpqZJJN2JP+WMxmEKh1zEp5n8FZZZkJq5th8H8cETzcCknkBqcZjMfZx/dsuIj2VRy50qIJXjWniKoSoJJ1xZZczlUzXJeKnhACt3nwxmMxZkp4urJy+CgEjy+xKK2zbOqljBEABqdzgNu+eqm8ThuqQQpqI11PLx9TjMZilSU0Vy7LqpJTkIspWVWqL7XsuiQxRDV5F3YE8tAcEByRTEk+1Tk8+S4zGYH1kr4pi1hsFLH2mglVceSbfDeZbgrySVBiECu4HZUEk6epP4YlVVDDQKkhdyS6qo0G51xmMx0JZJHAON1ZDGsHZCsWolZiS7Ek4hQPTwXczrEJp6ZTGryclLc9PPbTX1xmMxFH2rgrp4FgFcwXueeVYxFH2jz1OFJmCikv8AeKqtrKmSSaRzyA0UDYKB3ADGYzF+htFI4s0NgqUsbXWuFIybZKWO+vqXleGLrBxgaA6gA4P20RCxJ0G+MxmPtY4ul1PgFLTgNZoFyP0oVs11z1eGmkJWGpeKNByVQeX8Tgk6C+jiHNmYBcK9RJbaF9epO/WygaqCPqjmfHYeOMxmNAxCZ9NhV4jY5QPqs+oYWVOJkS66k/RdSSIkSO7sQqgsTpyA3OOf6nPcN/utddqGlCwVMnCjSk8bInZUkd2umunnjMZhNwSJsjJJHbiw+tz+E3YjK9kscbdiCfpb3WRZ4qrdVU8scMQm4uwdzodOeIz3yZ2LMqsxOpYkkk4zGYZepjFiBuhPXyEkE7IM6VKusSpt9FMwSFoBUmNOXESQNT36AficUGTMtzZov0VLE4jSMGeWQ/RRdzoO88h9uMxmDbJDFh3WM0NrpdkYJcT6t+ouExnytDKxdqiUljqdQMEuTMj0dPV/OLs8s6KVhLadgHmR5nTT78ZjMK1VUSiIgOTdTU8RkBLUQ5jrqXLNkq7nUtI0VMnFwoN2PJQPUkDXC0ppFWFeFAgbtka67nc/njMZiShYOoMniTb6Ae64rHn4jq/AAH6k+y//2Q==',
//     course_name: 'Learn Python: The Complete Python Programming Course',
//     description:
//       'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
//     rating_count: 3059,
//     rating_star: 4.4,
//     students: 18430,
//     creator: 'Avinash Jain, The Codex',
//     updated_date: '9/2015',
//     lang: 'english',
//     actual_price: 84.99,
//     discounted_price: 9.99,
//     what_you_will_learn: [
//       'Create their own Python Programs',
//       'Become an experienced Python Programmer',
//       'Parse the Web and Create their own Games',
//     ],
//     content: [
//       'Up and Running With Python',
//       'The Basics(Data Types)',
//       'Conditions and Loops',
//       'Functions!',
//       'Classes! (Object Oriented Programming)',
//       'File Input/Output',
//       'Using Python Modules',
//     ],
//   },
//   {
//     id: 'dtfo9e',
//     category: 'python',
//     // image:'learning_images/python_4.jpg',
//     image:
//       'data:image/jpg;base64,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',
//     course_name: 'Learning Python for Data Analysis and Visualization',
//     description:
//       'Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!',
//     rating_count: 3059,
//     rating_star: 4.3,
//     students: 184053,
//     creator: 'Jose Portilla',
//     updated_date: '9/2019',
//     lang: 'english',
//     actual_price: 84.99,
//     discounted_price: 9.99,
//     what_you_will_learn: [
//       'Have an intermediate skill level of Python programming.',
//       'Use the numpy library to create and manipulate arrays.',
//       'Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.',
//       'Have a portfolio of various data analysis projects.',
//     ],
//     content: [
//       'Intro to Course and Python',
//       'Learning Numpy',
//       'Data Visualization',
//       'Example Projects',
//       'Machine Learning',
//       'SQL and Python',
//       'Web Scraping with Python',
//     ],
//   },
//   {
//     id: 'fLroW6',
//     category: 'python',
//     // image: 'learning_images/python_3.jpg',
//     image:
//       'data:image/jpg;base64,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',
//     course_name: 'Python for Beginners - Learn Programming from scratch',
//     description:
//       'Python For Beginners : This course is meant for absolute beginners in programming or in python!',
//     rating_count: 1844,
//     rating_star: 4.3,
//     students: 7330,
//     creator: 'Edwin Diaz, Coding Faculty Solutionss',
//     updated_date: '5/2022',
//     lang: 'english',
//     actual_price: 84.99,
//     discounted_price: 9.99,
//     what_you_will_learn: [
//       'To learn the python language',
//       'To learn the CORE skills to understand any programming language',
//     ],
//     content: [
//       'Programming fundamentals',
//       'Getting Started with Python',
//       'Python Basics',
//       'Conditional structures',
//       'Functions',
//       'Working with files',
//     ],
//   },
//   {
//     id: 'VwkN_o',
//     category: 'python',
//     // image: 'learning_images/python_2.jpg',
//     image:
//       'data:image/jpg;base64,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',
//     course_name:
//       'Python For Beginners : This course is meant for absolute beginners in programming or in python.',
//     description:
//       'Python introduction for beginners. Learn complete Python from scratch!',
//     rating_count: 2780,
//     rating_star: 4.3,
//     students: 29082,
//     creator: 'Abrar Hussain',
//     updated_date: '9/2019',
//     lang: 'english',
//     actual_price: 29.99,
//     discounted_price: 9.99,
//     what_you_will_learn: [
//       'Create fully functional Python programs',
//       'Learn about loop structures and conditionals',
//       'Work with Python file handling',
//       'Manipulate strings and data',
//     ],
//     content: [
//       'Getting Started',
//       'The Basics',
//       'User Input',
//       'Functions and Files',
//       'Classes and Objects',
//       'Graphics and Animations',
//     ],
//   },
//   {
//     id: 'xJB-WU',
//     category: 'python',
//     // image: 'learning_images/python_1.jpg',
//     image:
//       'data:image/jpg;base64,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',
//     course_name: 'Python Beyond the Basics - Object-Oriented Programming',
//     description:
//       'From Classes To Inheritance - OOP In-Depth For Python Programmers',
//     rating_count: 2941,
//     rating_star: 4.2,
//     students: 10450,
//     creator: 'Infinite Skills',
//     updated_date: '9/2019',
//     lang: 'english',
//     actual_price: 49.99,
//     discounted_price: 10.99,
//     what_you_will_learn: [
//       'Design Reusable Object-Oriented Python Classes',
//       'How to handle Errors',
//       'Work with Python file handling',
//       'Apply OOP Concepts to handle complexity',
//     ],
//     content: [
//       'Introduction to Object Oriented Python',
//       'Classes',
//       'Inhertiance and Polymorphism',
//       'Advanced Features',
//       'Object Serialization',
//       'Efficiency and testing',
//       'Conclusion',
//     ],
//   },
//   {
//     id: 'qjdYG4',
//     category: 'web development',
//     image: 'learning_images/web_dev_1.jpg',
//     course_name: 'Become a Certified HTML, CSS, JavaScript Web Developer',
//     description:
//       'Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications',
//     rating_count: 2760,
//     rating_star: 4.1,
//     students: 33455,
//     creator: 'Tech Learning Network, Mark Lassoff',
//     updated_date: '11/2020',
//     lang: 'english',
//     actual_price: 84.99,
//     discounted_price: 9.99,
//     what_you_will_learn: [
//       'Prepare for Industry Certification Exam',
//       'Hours and Hours of Video Instruction',
//       'Over 25 Engaging Lab Exercises',
//       'Instructor Available by Email or on the Forums',
//       'Comprehensive Coverage of HTML and CSS',
//     ],
//     content: [
//       'Your Develpment Toolbox',
//       'Certified HTML5 Specialist 2019',
//       'Certified CSS Specialist 2019',
//       'JavaScript Specialist 2019',
//       'jQuery for Application Development',
//       'Everything you wanted to know about formatting text',
//       'Hyperlinks - Connecting Pages and Content',
//       'Digital Media',
//       'Displaying Data in Tables and iFrames',
//       'Styling with CSS',
//     ],
//   },
//   {
//     id: '3pm9Ab',
//     category: 'web development',
//     image: 'learning_images/web_dev_2.jpg',
//     course_name: 'The Complete 2020 Fullstack Web Developer Course',
//     description:
//       'Learn HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP & MySQL from scratch!',
//     rating_count: 6200,
//     rating_star: 4.3,
//     students: 90360,
//     creator: 'Kalob Taulien',
//     updated_date: '9/2019',
//     lang: 'english',
//     actual_price: 72.99,
//     discounted_price: 14.99,
//     what_you_will_learn: [
//       'Learn Python from beginner to advanced',
//       'Lots of projects, big and small!',
//       'Learn PHP for server code execution',
//       'Build a Login/Registration/Members-only website, just like Facebook',
//       'Learn the LAMP Stack: Linux, Apache, PHP and MySQL',
//       'Learn HTML5, CSS3, Vanilla JS (ES6+), Python, Wagtail CMS, PHP and MySQL all from scratch',
//     ],
//     content: [
//       'The Ultimate HTML Developer: Introduction',
//       'Getting Started',
//       'Advanced HTML',
//       'Text Formatting',
//       'Fonts and Font styling',
//       "Links and their 'states'",
//       'Better selectors',
//       'Positions',
//       'Advanced Selectors',
//       'CSS3 Introduction',
//       'CSS3 Backgrounds Images',
//       'CSS3 Gradients',
//       'CSS3 Text Formatting',
//       'CSS3 Transitions',
//       'CSS3 Animations',
//       'CSS3 Flexbox',
//       'Responsive Web Design',
//     ],
//   },
//   {
//     id: 'RuUs0x',
//     category: 'web development',
//     image: 'learning_images/web_dev_3.jpg',
//     course_name: 'Introduction to Web Development',
//     description:
//       'Are you Interested in Learning Web Development? Enroll in this Free course for a Dynamic Introduction to the Profession!',
//     rating_count: 1740,
//     rating_star: 4,
//     students: 22309,
//     creator: 'Tech Learning Network, Mark Lassoff',
//     updated_date: '10/2020',
//     lang: 'english',
//     actual_price: 19.99,
//     discounted_price: 8.99,
//     what_you_will_learn: [
//       'Understand the technologies used in web development',
//       'Apply HTML document structure',
//       'Add images to a web page',
//       'Understand the HTML/CSS color model',
//       'Alter CSS text properties',
//       'Know the role of Javascript programming in web development',
//       'Create a basic Javascript program to collect data',
//       'Understand the next steps to learning professional web development skills',
//     ],
//     content: ['Tools and HTML', 'CSS', 'Javascript', 'Bonus Lecture'],
//   },
//   {
//     id: 'e_0hBc',
//     category: 'web development',
//     image: 'learning_images/web_dev_4.jpg',
//     course_name: 'Running a Web Development Business: The Complete Guide',
//     description:
//       'Learn how to start and grow a successful web development business. Get up & running and making sales in under a week.',
//     rating_count: 1577,
//     rating_star: 4.8,
//     students: 33100,
//     creator: 'Evan Kimbrell',
//     updated_date: '8/2022',
//     lang: 'english',
//     actual_price: 70.99,
//     discounted_price: 14.99,
//     what_you_will_learn: [
//       'Understand how development stacks work and pick which stack is ideal for you',
//       'Decide between hiring in-house employees or contractors for your business',
//       'Choose a winning combination of traits that you want your business to convey',
//       'Find cheap and professional ways of creating an online presence',
//       'Master the biggest platforms for contracting: Freelancer and Upwork',
//       'Create and organize a professional and effective portfolio',
//       'Utilize 15 different strategies to attract potential clients',
//       'Use tools like Proposify and Nusii to create and streamline proposals',
//     ],
//     content: [
//       'Introduction',
//       'The Essentials',
//       'Planning your strategy',
//       'Setting up your presence',
//       'Finding subcontractors',
//       'Building a portfolio',
//       'Getting clients',
//       'Building proposals',
//       'Managing clients',
//       'Best practices',
//     ],
//   },
//   {
//     id: 'z9dxdw',
//     category: 'web development',
//     image: 'learning_images/web_dev_5.jpg',
//     course_name: 'Ultimate Web Designer & Web Developer Course',
//     description:
//       'Become a Full-Stack Web Designer in 2022 - Learn Everything from Web Design Fundamentals to Front-End Web Development',
//     rating_count: 2941,
//     rating_star: 4.6,
//     students: 10450,
//     creator: 'Brad Hussey',
//     updated_date: '3/2022',
//     lang: 'english',
//     actual_price: 50.99,
//     discounted_price: 11.99,
//     what_you_will_learn: [
//       'Build 23+ custom web design & development projects by hand',
//       'Plan, design and code your very own self-directed website project from scratch to launch!',
//       'Code websites & applications with HTML5 & CSS3',
//       'Comfortably use Adobe Photoshop for photo manipulation, graphics creation & design',
//       'Design a professional and modern business card in Adobe Photoshop',
//       'Learn visual design fundamentals for beginners',
//       'Learn how to choose the correct font combinations for your projects',
//       'Design, build and manage custom database-driven websites with MySQL',
//     ],
//     content: [
//       'Hey! Welcome to the course!',
//       'Introduction to Visual Design for Web Designers & Web Developers',
//       'Designing Websites, Graphics & Interfaces with Figma',
//       'Introduction to Adobe Photoshop',
//       'Introduction to Web Design (and more Photoshop)',
//       'Advanced Web Design Challenge',
//       'Introduction to HTML',
//       'Intermediate HTML',
//       'Advanced HTML & HTML5',
//       'Expert HTML & HTML5',
//     ],
//   },
//   {
//     id: 'X8Pg1X',
//     category: 'data science',
//     image: 'learning_images/data_science_1.jpg',
//     course_name: 'Data Science A-Z™: Real-Life Data Science Exercises Included',
//     description:
//       'Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!',
//     rating_count: 32103,
//     rating_star: 4.5,
//     students: 204985,
//     creator: 'Kirill Eremenko, Ligency Team',
//     updated_date: '9/2022',
//     lang: 'english',
//     actual_price: 77.99,
//     discounted_price: 16.99,
//     what_you_will_learn: [
//       'Successfully perform all steps in a complex Data Science project',
//       'Perform Data Mining in Tableau',
//       'Apply Ordinary Least Squares method to Create Linear Regressions',
//       'Assess the Adjusted R-Squared for all types of models',
//       'Create a Multiple Linear Regression (MLR)',
//       'Interpret coefficients of an MLR',
//       'Use Backward Elimination, Forward Selection, and Bidirectional Elimination methods to create statistical models',
//       'Read a Confusion Matrix',
//     ],
//     content: [
//       'What is Data Science?',
//       'Part 1: Visualisation',
//       'Introduction to Tableau',
//       'Advanced Data Mining with Tableau',
//       'Stats Refresher',
//       'Simple Linear Regression',
//       'Model maintenance',
//       'SQL Programming for Data Science',
//     ],
//   },
//   {
//     id: '9Ui0L1',
//     category: 'data science',
//     image: 'learning_images/data_science_2.jpg',
//     course_name: 'Machine Learning, Data Science and Deep Learning with Python',
//     description:
//       'Complete hands-on machine learning tutorial with data science, Tensorflow, artificial intelligence, and neural networks',
//     rating_count: 27687,
//     rating_star: 4.5,
//     students: 166929,
//     creator: 'Sundog Education by Frank Kane',
//     updated_date: '2/2022',
//     lang: ['english', 'french'],
//     actual_price: 87.99,
//     discounted_price: 14.99,
//     what_you_will_learn: [
//       'Build artificial neural networks with Tensorflow and Keras',
//       'Classify images, data, and sentiments using deep learning',
//       'Data Visualization with MatPlotLib and Seaborn',
//       'Classify data using K-Means clustering, Support Vector Machines (SVM), KNN, Decision Trees, Naive Bayes, and PCA',
//       'Build a movie recommender system using item-based and user-based collaborative filtering',
//       'Interpret coefficients of an MLR',
//     ],
//     content: [
//       'Statistics and Probability Refresher, and Python Practice',
//       'Predictive Models',
//       'Machine Learning with Python',
//       'Recommender Systems',
//       'More Data Mining and Machine Learning Techniques',
//       'Dealing with Real-World Data',
//       'Apache Spark: Machine Learning on Big Data',
//       'Deep Learning and Neural Networks',
//     ],
//   },
//   {
//     id: 'TKGumi',
//     category: 'data science',
//     image: 'learning_images/data_science_3.jpg',
//     course_name: 'Data Science: Deep Learning and Neural Networks in Python',
//     description:
//       'The MOST in-depth look at neural network theory for machine learning, with both pure Python and Tensorflow code',
//     rating_count: 8513,
//     rating_star: 4.8,
//     students: 50184,
//     creator: 'Lazy Programmer Inc.',
//     updated_date: '8/2022',
//     lang: ['english', 'Portuguese'],
//     actual_price: 90.99,
//     discounted_price: 19.99,
//     what_you_will_learn: [
//       'Learn how Deep Learning REALLY works (not just some diagrams and magical black box code)',
//       'Code a neural network from scratch in Python and numpy',
//       'Describe different types of neural networks and the different types of problems they are used for',
//       'Create a neural network with an output that has K > 2 classes using softmax',
//       'Install TensorFlow',
//     ],
//     content: [
//       'Preliminaries: From Neurons to Neural Networks',
//       'Training a neural network',
//       'Practical Machine Learning',
//       'TensorFlow, exercises, practice, and what to learn next',
//       'Project: Facial Expression Recognition',
//       'Backpropagation Supplementary Lectures',
//       'Higher-level Discussion',
//     ],
//   },
//   {
//     id: 'oETsMx',
//     category: 'data science',
//     image: 'learning_images/data_science_4.jpg',
//     course_name: 'R Programming A-Z™: R For Data Science With Real Exercises!',
//     description:
//       'Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2',
//     rating_count: 47264,
//     rating_star: 4.8,
//     students: 237914,
//     creator: 'Kirill Eremenko, Ligency Team',
//     updated_date: '11/2021',
//     lang: 'english',
//     actual_price: 45.99,
//     discounted_price: 6.99,
//     what_you_will_learn: [
//       'Learn to program in R at a good level',
//       'Learn the core principles of programming',
//       'Learn how to create variables',
//       'Learn how to create a while() loop and a for() loop in R',
//       'Learn the matrix() function, learn rbind() and cbind()',
//       'Learn how to customize R studio to suit your preferences',
//     ],
//     content: [
//       'Hit The Ground Running',
//       'Core Programming Principles',
//       'Fundamentals of R',
//       'Matrices',
//       'Data Frames',
//       'Advanced Visualization with GGPlot2',
//       'Homework Solutions',
//     ],
//   },
//   {
//     id: '-aWjaj',
//     category: 'data science',
//     image: 'learning_images/data_science_5.jpg',
//     course_name: 'Data Science and Machine Learning Bootcamp with R',
//     description:
//       'Learn how to use the R programming language for data science and machine learning and data visualization!',
//     rating_count: 32103,
//     rating_star: 5,
//     students: 204985,
//     creator: 'Jose Portilla',
//     updated_date: '12/2020',
//     lang: ['english', 'arabic'],
//     actual_price: 77.99,
//     discounted_price: 16.99,
//     what_you_will_learn: [
//       'Program in R',
//       'Create Data Visualizations',
//       'Use R to manipulate data easily',
//       'Use R for Data Science',
//       'Use R for Data Analysis',
//       'Use R to handle csv,excel,SQL files or web scraping',
//       'Use R for Machine Learning Algorithms',
//     ],
//     content: [
//       'Course Best Practices',
//       'Windows Installation Set-Up',
//       'Mac OS Installation Set-Up',
//       'Linux Installation',
//       'Development Environment Overview',
//       'Introduction to R Basics',
//       'R Data Frames',
//     ],
//   },
//   {
//     id: 'xxxbMD',
//     category: 'aws',
//     image: 'learning_images/aws_1.jpg',
//     course_name: 'Amazon Web Services (AWS) Certified 2022 - 4 Certifications!',
//     description:
//       'Videos, labs & practice exams - AWS Certified (Solutions Architect, Developer, SysOps Administrator, Cloud Practitioner)',
//     rating_count: 21046,
//     rating_star: 4.2,
//     students: 134932,
//     creator: 'BackSpace Academy, Paul Coady',
//     updated_date: '12/2021',
//     lang: ['english', 'arabic'],
//     actual_price: 69.99,
//     discounted_price: 11.99,
//     what_you_will_learn: [
//       'You will be fully prepared for the',
//       'AWS Certified Solutions Architect',
//       'Associate, AWS Certified Developer',
//       'Associate and AWS Certified SysOps ...',
//     ],
//     content: [
//       'AWS Cerified Cloud Practitioner',
//       'AWS Certified Associate Core Knowledge',
//       'AWS Certified Developer Associate - Final Preparation',
//       'AWS Certified Solutions Architect Associate - Final Preparation',
//       'AWS Certified SysOps Administrator Associate - Final Preparation',
//     ],
//   },
//   {
//     id: 'cIdBd2',
//     category: 'aws',
//     image: 'learning_images/aws_2.jpg',
//     course_name: 'AWS Certified Security Specialty 2022',
//     description:
//       'All you need to master AWS Certified Security Specialty certification.',
//     rating_count: 5387,
//     rating_star: 4.5,
//     students: 33385,
//     creator: 'Zeal Vora',
//     updated_date: '12/2022',
//     lang: ['english', 'french'],
//     actual_price: 34.99,
//     discounted_price: 10.99,
//     what_you_will_learn: [
//       'Will be prepared to give AWS Certified Security Specialty Exam',
//       'Gain deep insights about Enterprise grade Security implementation.',
//       'You will be able to Master the Security aspect of AWS',
//       'Will be able to detect attacks and protect the AWS infrastructure from Hackers.',
//     ],
//     content: [
//       'Getting started with the course',
//       'Domain 1 - Incident Response',
//       'Domain 2 - Logging & Monitoring',
//       'Domain 3 - Infrastructure Security',
//       'Domain 4 - Identity & Access Management',
//       'Domain 5 - Data Protection',
//     ],
//   },
//   {
//     id: 'NkZeqm',
//     category: 'aws',
//     image: 'learning_images/aws_3.jpg',
//     course_name: 'Part 1: AWS Certified Solutions Architect SAA C03 [Updated]',
//     description:
//       'AWS Associate Exam - Master Foundations. Join Live Study Group Q&A!',
//     rating_count: 1603,
//     rating_star: 4.5,
//     students: 10933,
//     creator: 'Chandra Lingam',
//     updated_date: '8/2022',
//     lang: 'english',
//     actual_price: 71.99,
//     discounted_price: 15.99,
//     what_you_will_learn: [
//       'Breadth of understanding of various AWS services',
//       'How to Integrate Services into a Complete Solution',
//       'Hands-on Scenario Based Learning',
//       'Weekly Study Group Discussion Sessions',
//       'Concise and Precise Preparation for AWS Solutions Architect Certification',
//     ],
//     content: [
//       'Housekeeping',
//       'Infrastructure, Pricing, Support - Review',
//       'Networking Primer',
//       'Virtual Private Cloud (VPC) - Networking Infrastructure',
//       'Elastic Compute Cloud (EC2) - Compute Service',
//       'Monitoring Resource in Cloud',
//     ],
//   },
//   {
//     id: 'NkZeqq',
//     category: 'design',
//     image: 'learning_images/design_2.jpg',
//     course_name: 'Photoshop Master Course: From Beginner to Photoshop Pro',
//     description:
//       'This Adobe Photoshop Beginner Course will teach a Beginner Photoshop user all essentials of Adobe Photoshop CC',
//     rating_count: 5066,
//     rating_star: 4.9,
//     students: 143812,
//     creator: 'Manfred Werner',
//     updated_date: '7/2020',
//     lang: ['english', 'spanish'],
//     actual_price: 13.99,
//     discounted_price: 5.99,
//     what_you_will_learn: [
//       'What Photoshop is & how to get into it!',
//       'Customize the programs layout & feel comfortable',
//       "Understand layers & it's panels",
//       'Understand adjustment layers how to use them',
//       'Understand setting color profiles, save PSD files & web files',
//       'Understand cutting objects out, fixing skin & manipulation',
//     ],
//     content: [
//       'Photoshop Interface & Workspace - For Beginners',
//       'Important Photoshop Tools - For Beginners',
//       'Retouching Class - Photoshop Portrait Retouching Course',
//       'Retouching Class 2 - Photoshop Portrait Retouching Course',
//       'Retouching Class 3 - The Instagramer',
//       'Bonus Lectures',
//     ],
//   },
//   {
//     id: 'bLZepe',
//     category: 'design',
//     image: 'learning_images/design_1.jpg',
//     course_name: 'User Experience (UX): The Ultimate Guide to Usability and UX',
//     description:
//       'Get a job in UX and build your user research and UX design skills with this hands-on user experience training course.',
//     rating_count: 6250,
//     rating_star: 4.4,
//     students: 22090,
//     creator: 'David Travis',
//     updated_date: '4/2020',
//     lang: ['english', 'italian'],
//     actual_price: 79.99,
//     discounted_price: 16.99,
//     what_you_will_learn: [
//       'Bake UX into your workflow by following a proven, user centred design framework.',
//       'Moderate a usability test and prioritise the observations.',
//       'Uncover and describe users’ mental models.',
//       'Design and conduct online and offline card sorting sessions.',
//       'Develop cheap, throwaway prototypes to get quick and frequent feedback from your users.',
//     ],
//     content: [
//       'Going where the action is: Understading users in context',
//       'How to get niche quick',
//       'UX Design Activities - Build your UX Portfolio',
//       'What can a London bus teach us about usability?',
//       "Beyong 'easy to use': Measuring the user experience",
//       'Site structure and navigation: Finding is the new doing',
//       'Interaction design: Simple rules for designing simple screens',
//     ],
//   },
//   {
//     id: 'RkZecd',
//     category: 'marketing',
//     image: 'learning_images/marketing_1.jpg',
//     course_name: 'Copywriting - Become a Freelance Copywriter, your own boss',
//     description:
//       'Build a successful freelance copywriting business - turn basic writing skills into a paycheck.',
//     rating_count: 2779,
//     rating_star: 4.8,
//     students: 32657,
//     creator: 'Len Smith, Sean Kaye',
//     updated_date: '4/2018',
//     lang: 'english',
//     actual_price: 88.99,
//     discounted_price: 16.99,
//     what_you_will_learn: [
//       'Part one – everything you need for a fast-track start, including your first article',
//       'Part three – the essential skills that mark out a real pro',
//       'Part two – the copywriter’s ‘how to’: sales copy, expert copy, and more!',
//       'Part four – how to boost your income and turn your new website into a money magnet',
//     ],
//     content: [
//       'Choose projects whre you feel comfortable',
//       'Back to basics II',
//       'How to boost your copywriting income',
//       'More on pricing your work',
//       'This and that',
//       'Conclusion',
//     ],
//   },
//   {
//     id: 'NrZ_qd',
//     category: 'marketing',
//     image: 'learning_images/marketing_2.jpg',
//     course_name: 'How to Market Yourself as a Coach or Consultant',
//     description:
//       'Learn a Proven, Step-by-Step Process You Can Use to Package, Brand, Market, & Sell Your Coaching or Consulting Services',
//     rating_count: 963,
//     rating_star: 3.8,
//     students: 11848,
//     creator: 'Debbie LaChusa',
//     updated_date: '4/2022',
//     lang: 'english',
//     actual_price: 40.99,
//     discounted_price: 10.99,
//     what_you_will_learn: [
//       'Identify who your Ideal Clients are so you know exactly who to market and sell to',
//       'Learn how to create a Signature Program so you can stop selling your time or creating spec proposals',
//       'Learn how to write Compelling Marketing Copy you can use to attract your ideal clients',
//       'Learn how to create a Financially Viable Business and understand exactly what it will take to reach your financial goals',
//       'Learn how to easily create your own Wordpress Coaching or Consulting Website',
//     ],
//     content: [
//       'Building Your Business & Marketing Foundation',
//       'Packaging Your Services',
//       'Branding Yourself & Your Business',
//       'Marketing Message Development',
//       'Getting clients: Objectives & strategies',
//       'Markting Yourself Online: Website Development',
//       'Marketing Implementation: Create a 90-Day Marketing Plan',
//     ],
//   },
// ]
