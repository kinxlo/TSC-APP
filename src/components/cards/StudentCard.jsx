/* eslint-disable react/prop-types */
import React from 'react'
import { Image } from 'react-bootstrap'
import SendMessageModal from '../modals/SendMessageModal'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import SuccessMessage from '../modals/SuccessMessage'

const StudentCard = (props) => {
 
  const handleClick = () => 
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(`student-modal-${props.name}`))
    modal.show()
  
    
  }
  return (
    <>
      <SendMessageModal name={props.name} image={props.student.image} field={props.student.field} cohort={props.student.cohort}/>
    
      <div onClick={handleClick} className='d-flex flex-column justify-content-center align-items-center h-100'>
        <Image alt='Bonnie image' src={props.student.image} style={{ maxWidth: '164px' }} className={`mb-3 rounded-circle`} />
        <p className='mb-1 studentCard-imageHover' style={{ fontWeight: '800' }}>
          {props.student.name}
        </p>
        <span className='text-sm text-gray-500 dark:text-gray-400'>{props.student.field}</span>
        <span>{props.student.cohort}</span>
      </div>
    </>
  )
}

export default StudentCard
