import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/abhishekkhairnar')
    //     .then(res=> res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <>
        <div className='text-center text-white bg-gray-700 text-3xl p-4 m-4'>
            <h1>GitHub followers :{data.followers}</h1>
            <img className='m-auto' src={data.avatar_url} alt="Git Profile image" width={300} />
        </div>
    </>

  )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/abhishekkhairnar');
    return response.json()
}