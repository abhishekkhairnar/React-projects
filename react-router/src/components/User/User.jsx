import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams();
  return (
    <div className='text-center text-white bg-gray-700 text-3xl p-4 m-4'>User:{id}</div>
  )
}

export default User