import React from 'react'
import RequireAuth from '../components/RequireAuth'
import usePurchasedCourses from '../services/courseServices/usePurchasedCourses'
import { useRecoilValue } from 'recoil'
import { userState } from '../state/atoms/userState'
import { UserCourseCard } from '@seek-sage/ui'

const MyCourses:React.FC=()=> {
  const {coursesLoading}=usePurchasedCourses()
  const user=useRecoilValue(userState)
  return (
    <RequireAuth>
        <main className='w-[80%] mx-auto h-full pb-10'>
            <h1 className='text-center text-3xl text-textColor font-bold pt-10'>
                Purchased courses
            </h1>
            <main className='flex gap-12 mt-10 mx-auto w-full justify-center flex-wrap'>
              {!coursesLoading ? user.purchasedCourses?.map((course)=><UserCourseCard course={course} key={course._id} isMyCourse={true}/>) : <div>No</div> }
            </main>
        </main>
    </RequireAuth>
  )
}

export default MyCourses