import React from 'react'
import { Offline } from "react-detect-offline";

export default function Status() {
  return (
    <div>
    <Offline><div className=' position-fixed  start-0 bottom-50 alert alert-primary offline'>
      Only shown offline (surprise!)
      </div></Offline>
  </div>
  )
}
