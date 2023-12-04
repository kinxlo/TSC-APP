/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { Image, Col, Row, Container } from 'react-bootstrap'
import axios from 'axios'
import './scss/style.scss'
// import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { IoChevronDownSharp } from 'react-icons/io5'
// import { CiMenuBurger } from 'react-icons/ci'
import { MdOutlineNavigateNext } from 'react-icons/md'
// import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import Footer from '../../../components/Footer/Footer'
import NavBar from '../../../components/NavBar/NavBar'

export default function Community() {
  const [members, setMembers] = useState([])
  const [selectedField, setSelectedField] = useState(null)
  const [fieldDisplayName, setFieldDisplayName] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentStage, setCurrentStage] = useState(1) // Assuming you have a state for the current stage

  const fetchData = async () => {
    try {
      const response = await axios.get('/members.json')
      // console.log(response.data.members)
      setMembers(response.data.members)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFieldSelect = (fieldName, field) => {
    setSelectedField(field)
    setFieldDisplayName(fieldName)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredMembers = members.filter((member) => {
    if (selectedField && member.field !== selectedField) {
      return false
    }
    return member.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const itemsPerPage = 28
  const totalStages = Math.ceil(filteredMembers.length / itemsPerPage)

  const handleStageClick = (stage) => {
    setCurrentStage(stage)
  }

  console.log(currentStage)

  const backgroundImageUrl = 'url("https://res.cloudinary.com/techbro/image/upload/v1700431865/communty_wafeg9.jpg")'
  const bgImage = {
    background: backgroundImageUrl,
    backgroundSize: 'cover',
  }

  return (
    <div>
      {/* hero sectioin */}
      <div className='hero-section py-60 d-flex flex-column justify-content-center align-items-center' style={bgImage}>
        <Container className='text-center'>
          <h1 className='text-white' style={{ fontSize: '3rem' }}>
            Explore Community
          </h1>
          <p className='pb-5 hero-p1' style={{ color: '#FF031F', fontSize: '2.5rem' }}>
            Meet the Tech Innovators who fuel our community’s growth.
          </p>
          <p className='text-white hero-p2' style={{ fontSize: '2.188rem' }}>
            Whether you're seeking collaboration, finding talents, or simply looking to expand your network, you've come to the right place.{' '}
          </p>
        </Container>
      </div>
      {/* list of people */}
      <Container className='members-section pt-5 d-flex flex-column gap-5'>
        <div className='py-5 d-flex justify-content-between'>
          {/* drop down */}
          <Dropdown>
            <Dropdown.Toggle variant='white' id='dropdown-basic' className='border-primary text-primary fw-bold px-5'>
              {selectedField ? `${fieldDisplayName}` : 'Select Field'}
              <span>
                <IoChevronDownSharp />
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
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
          <div>
            <input
              className='border border-secondary rounded'
              type='text'
              placeholder='Search for a member'
              id='name'
              name='name'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        {filteredMembers.length > 0 ? (
          <>
            <Row className='d-flex justify-content-center align-items-center gap-5'>
              {filteredMembers.slice((currentStage - 1) * itemsPerPage, currentStage * itemsPerPage).map((member, index) => (
                <Col xs={2} md={4} lg={6} key={index} style={{ width: '295px', height: '264px', marginBottom: '40px' }} className='custom-card'>
                  <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                    <Image alt='Bonnie image' src={member.image} style={{ maxWidth: '164px' }} className='mb-3 rounded-circle' />
                    <p className='mb-1' style={{ fontWeight: '800' }}>
                      {member.name}
                    </p>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>{member.field}</span>
                    <span>{member.cohort}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <div className='text-center fw-bold'>
            <h4>No member found</h4>
          </div>
        )}
        <div className='text-center d-flex justify-content-center align-items-center gap-6' style={{ marginBottom: '40px' }}>
          {[...Array(totalStages)].map((_, stage) => (
            <>
              <span
                className={`border rounded-5 text-center text-primary ${currentStage === stage + 1 ? 'bg-primary text-white' : ''}`}
                style={{ backgroundColor: '#E3E3E3', width: '32px', height: '32px' }}
                key={stage + 1}
                onClick={() => {
                  handleStageClick(stage + 1)
                }}
              >
                {stage + 1}
              </span>
            </>
          ))}
          {totalStages > 1 && (
            <div className='p-0 m-0'>
              <MdOutlineNavigateNext />
              <MdOutlineNavigateNext />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
