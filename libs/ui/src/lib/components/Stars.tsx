import React from 'react'
import {AiFillStar,AiOutlineStar } from 'react-icons/ai'

const Stars:React.FC<{rating:number , filled?:boolean}> =({rating , filled})=> {
  return (
    <div className='flex'>
        { !filled ?
            [...Array(5)].map((item,index)=>{
                if(index<rating){
                    return <AiFillStar key={`star-${index}`} color='#FFD700'/>
                }else return <AiOutlineStar key={`star-${index}`}/>
            }) : [...Array(rating)].map((item,index)=><AiFillStar key={`star-${index}`} color='#FFD700'/>)
        }
    </div>
  )
}

export default React.memo(Stars)