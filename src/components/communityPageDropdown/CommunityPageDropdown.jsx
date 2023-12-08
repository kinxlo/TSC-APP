import Dropdown from 'react-bootstrap/Dropdown'
import { IoChevronDownSharp } from 'react-icons/io5'
import { useState } from 'react'

export default function CommunityPageDropdown(props) {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  const { selectedField, handleFieldSelect, fieldDisplayName } = props
  return (
    <Dropdown
      className='dropdown-width'
      onClick={() => {
        setToggleDropdown(!toggleDropdown)
      }}
    >
      <Dropdown.Toggle variant='white' id='dropdown-basic' className='border-primary text-primary d-flex justify-content-between fw-bold w-100'>
        {selectedField ? `${fieldDisplayName}` : 'Select Field'}
        <span>
          <IoChevronDownSharp
            style={{
              transform: toggleDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s ease-in-out',
              cursor: 'pointer',
            }}
          />
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className='w-100'>
        <Dropdown.Item onClick={() => handleFieldSelect(null)} className='dropdown-item'>
          All Fields
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFieldSelect('Product Design', 'Product Designer')} className='dropdown-item'>
          Product Design
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFieldSelect('Data Analysis', 'Data Analyst')} className='dropdown-item'>
          Data Analysis
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleFieldSelect('Web Development', 'Web Developer')} className='dropdown-item'>
          Web Development
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
