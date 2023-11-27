import React from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const ShowEye = ({ eyeState, updateEye }) => {
  return eyeState ? (
    <IoMdEye
    className="close-eye position-absolute fs-4"
    onClick={()=>{
        updateEye(false)
    }}
    />
  ) : (
    <IoMdEyeOff
    className="close-eye position-absolute fs-4"
    onClick={()=>{
        updateEye(true)
    }}
    />

  )
}

export default ShowEye