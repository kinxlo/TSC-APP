import React from 'react'
import modalImg1 from '../../assets/image/modal1.png'
import modalImg2 from '../../assets/image/modal2.png'
import modalImg3 from '../../assets/image/modal3.png'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import SuccessMessage from './SuccessMessage'

const SendMessageModal = (props) => {
const handleClick = ()=>{
  let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(`exampleModalToggle2-${props.name}`))
  modal.show()
}
  return (
    <div>
  <div className="modal fade" id={`student-modal-${props.name}`}  data-bs-toggle="modal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered"  >
    <div className="modal-content">
      <div className="modal-header border-0 py-3">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='d-flex justify-content-between'>
                <div className='w-50'><img className='w-100' src={modalImg1} alt="" /></div>
                <div className='w-50'><img className='w-100' src={modalImg2} alt="" /></div>
                <div className='w-50'><img className='w-100' src={modalImg3} alt="" /></div>
              </div>

              <div className=' w-100  ' style={{zIndex:'20', position: 'absolute', top: '3.5rem', right: '-0.1rem' }}>
                <div className='w-25  mx-auto '>
                <img className='w-100 border border-5 border-white rounded-circle' src={props.image} alt=""/>
              </div>
           </div>

         
           <div className='text-center my-5 pt-5'>
            <h3 className='mb-0 '> {props.name}</h3>
            <p>{props.field}</p>
            <p>{props.cohort}</p>
           </div>
           
           <div className='d-flex justify-content-center gap-5'>
           <div className='text-center'>
            <h3 className='mb-0'>440</h3>
            Followers
           </div>
           <div className='w-1 border border-1 h-2'>
           </div>
           <div className='text-center'>
            <h3 className='mb-0'>65</h3>
            Projects
           </div>
           </div>
      </div>
      <div className="modal-footer">
        <button onClick={handleClick} className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-dismiss="modal">Hire Me</button>
      </div>
    </div>
  </div>
</div>
{/* second modal */}
<div className="modal fade " id={`exampleModalToggle2-${props.name}`} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header border-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div  className=' w-100  '>
            <img className='d-flex mx-auto border border-5 border-white rounded-circle' src={props.image} alt="" style={{width: '40%'}} />
            <h2 className='text-center'> {props.name} </h2>
        </div>

     <form className='w-100 my-3'>
        <textarea name="" id="" className='w-100 rounded p-5 ' cols="60" rows="50" placeholder='Your Message' ></textarea>

        <select className="form-select mt-5" aria-label="Default select example">
            <option selected>How long are you willing to hire</option>
            <option value="1">Within the next 3 months</option>
            <option value="2">Within the next few weeks</option>
            <option value="3">over 3 months</option>
        </select>
        <select className="form-select mt-5" aria-label="Default select example">
            <option selected>Pay rate dropdown</option>
            <option value="1">150,000 - 250,000</option>
            <option value="2">250,000 - 350,000</option>
            <option value="3">350,000 - 450,000</option>
            <option value="3">450,000 - 650,000</option>
            <option value="3">650,000 - 750,000</option>
        </select>
     </form>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary w-100"  data-bs-toggle="modal" data-bs-dismiss="modal">Send Message</button>
      </div>
    </div>
 
  </div>
</div>

{/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
    </div>
  )
}

export default SendMessageModal