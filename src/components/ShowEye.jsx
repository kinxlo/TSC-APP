import React from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

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