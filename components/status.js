import React, {useEffect} from "react";
import useSWR from "swr";
import {useRouter} from 'next/router'

function Status({locationId}) {
  useEffect(async() => {
    // const router = useRouter()
    // console.log(router.pathname, '🎸')
    
    // const locationStatusEndpoint = `/api/status/${locationId}`
    // const res = await fetch(locationStatusEndpoint)
    // const data = await res.json()
  });
  return (
    <div>
      {locationId ? (
        <img
          src="/images/Warning.png"
        />
        ) :
        <img
          src="/images/ThumbUp.png"
        />
      }
    </div>
  )
}

export default Status